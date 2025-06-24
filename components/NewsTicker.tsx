
import React, { useState, useEffect } from 'react';
import { mockBreakingNews } from '../data/mockNews';
import { BreakingNewsItemData } from '../types';
import { GlobeAltIcon, MapPinIcon } from './icons'; // Import icons

interface NewsTickerItemProps {
  item: BreakingNewsItemData;
  onNavigate: (item: BreakingNewsItemData) => void;
}

const NewsTickerItem: React.FC<NewsTickerItemProps> = ({ item, onNavigate }) => {
  const isHighlighted = item.isHighlyRelevantCurrentDevelopment;
  const highlightClasses = isHighlighted 
    ? "bg-yellow-300 dark:bg-yellow-500 text-yellow-900 dark:text-yellow-950" 
    : "text-primary-700 dark:text-primary-300";
  const hoverClasses = isHighlighted
    ? "hover:bg-yellow-400 dark:hover:bg-yellow-600"
    : "hover:underline";

  return (
    <button
      onClick={() => onNavigate(item)}
      className={`text-sm font-medium ${highlightClasses} ${hoverClasses} whitespace-nowrap px-3 py-1.5 text-left focus:outline-none focus:ring-2 focus:ring-primary-500 rounded transition-colors duration-150`}
      aria-label={`Lexo lajmin nga ${item.sourceName}: ${item.title}`}
      role="listitem"
    >
      <span className={`font-semibold ${isHighlighted ? 'text-yellow-800 dark:text-yellow-900' : 'text-slate-600 dark:text-slate-400'}`}>[{item.sourceName}]</span> {item.title}
    </button>
  );
};

// Define an interface for items that include uniqueDisplayId
interface DisplayNewsItem extends BreakingNewsItemData {
  uniqueDisplayId: string;
}

interface TickerRowProps {
  items: BreakingNewsItemData[];
  onNavigate: (item: BreakingNewsItemData) => void;
  ariaLabel: string;
  speedFactor: number; // New prop for speed control
}

const TickerRowWithDynamicTranslate: React.FC<TickerRowProps> = ({ items, onNavigate, ariaLabel, speedFactor }) => {
  if (items.length === 0) {
    return null;
  }

  const minDisplayItemsForSmoothScroll = 10;
  let duplicationFactor = 1;
  if (items.length > 0) {
    duplicationFactor = Math.max(1, Math.ceil(minDisplayItemsForSmoothScroll / items.length));
    if (items.length * duplicationFactor < 2 * items.length && items.length > 0) { // Ensure at least 2 full sets for basic loop
        duplicationFactor = Math.max(2, duplicationFactor);
    }
     if (items.length === 1) duplicationFactor = Math.max(duplicationFactor, 5); // single item needs more dupes
  }
  
  let displayItems: DisplayNewsItem[] = [];
  for (let i = 0; i < duplicationFactor; i++) {
    displayItems = displayItems.concat(items.map(item => ({ ...item, uniqueDisplayId: `${item.id}-dup-${i}` })));
  }

  const averageCharsPerItem = 60;
  const estimatedTotalCharsPerRowOriginals = items.length * averageCharsPerItem;
  const charsPerSecond = 25; 
  // Use the passed speedFactor
  const baseAnimationDurationSecs = Math.max(items.length > 1 ? 20 : 40, Math.ceil(estimatedTotalCharsPerRowOriginals / charsPerSecond)) * speedFactor; 
  const animationDurationStyle = `${baseAnimationDurationSecs * duplicationFactor}s`;
  const translateXPercentage = -100 / duplicationFactor;

  return (
    <div 
      className="relative flex-grow h-8 flex items-center overflow-hidden" 
      aria-label={ariaLabel}
      role="list"
    >
      <div
        className="absolute flex items-center animate-marquee hover:pause-animation focus-within:pause-animation"
        style={{ 
            animationDuration: animationDurationStyle,
            '--marquee-translate-x': `${translateXPercentage}%`
        } as React.CSSProperties} 
      >
        {displayItems.map((item: DisplayNewsItem, index: number) => (
          <React.Fragment key={item.uniqueDisplayId ? `${item.uniqueDisplayId}-${index}` : `${item.id}-${index}`}>
            <NewsTickerItem item={item} onNavigate={onNavigate} />
            {index < displayItems.length - 1 && (
              <span className="text-slate-400 dark:text-slate-500 mx-1 select-none" aria-hidden="true">&bull;</span>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

interface NewsTickerProps {
  onNavigateToNewsArticle: (item: BreakingNewsItemData) => void;
}

const albanianMonths: { [key: string]: number } = {
  "janar": 0, "shkurt": 1, "mars": 2, "prill": 3, "maj": 4, "qershor": 5,
  "korrik": 6, "gusht": 7, "shtator": 8, "tetor": 9, "nëntor": 10, "dhjetor": 11
};

const parseAlbanianDate = (dateString: string): Date | null => {
  const cleanedDateString = dateString.toLowerCase().replace(',', '');
  const parts = cleanedDateString.split(' ');
  
  if (parts.length === 3) {
    const day = parseInt(parts[0], 10);
    const monthName = parts[1];
    const year = parseInt(parts[2], 10);

    const month = albanianMonths[monthName];

    if (!isNaN(day) && month !== undefined && !isNaN(year)) {
      return new Date(year, month, day);
    }
  }
  console.warn(`Nuk mund të analizohej data shqiptare: ${dateString}`);
  return null;
};

// Helper function to format a Date object into "D Month, YYYY" in Albanian
// Moved here or made accessible for updating news items with current date.
const formatActualDateToAlbanian = (date: Date): string => {
  const day = date.getDate();
  const monthNamesList = ["Janar", "Shkurt", "Mars", "Prill", "Maj", "Qershor", "Korrik", "Gusht", "Shtator", "Tetor", "Nëntor", "Dhjetor"];
  const correctMonthName = monthNamesList[date.getMonth()];
  const year = date.getFullYear();
  return `${day} ${correctMonthName}, ${year}`;
};


export const NewsTickerFinal: React.FC<NewsTickerProps> = ({ onNavigateToNewsArticle }) => {
  const [displayedNews, setDisplayedNews] = useState<BreakingNewsItemData[]>(() => {
    return [...mockBreakingNews].sort(() => Math.random() - 0.5); // Initial shuffle
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDisplayedNews(prevNews => {
        const updatedNews = [...prevNews];
        const now = new Date();
        const threeDaysAgo = new Date(now.getTime() - (3 * 24 * 60 * 60 * 1000));
        
        const olderItemsIndices = updatedNews
          .map((item, index) => ({ item, index }))
          .filter(({ item }) => {
            const itemDate = parseAlbanianDate(item.publishedDate);
            return itemDate && itemDate < threeDaysAgo;
          })
          .map(({ index }) => index);

        if (olderItemsIndices.length > 0) {
          const randomIndexToRevive = olderItemsIndices[Math.floor(Math.random() * olderItemsIndices.length)];
          if (updatedNews[randomIndexToRevive]) {
            updatedNews[randomIndexToRevive] = {
              ...updatedNews[randomIndexToRevive],
              publishedDate: formatActualDateToAlbanian(now), // Make it "today"
              // isHighlyRelevantCurrentDevelopment: true, // Optionally highlight
            };
          }
        }
        return updatedNews.sort(() => Math.random() - 0.5); // Shuffle for general refresh appearance
      });
    }, 30000); // Refresh every 30 seconds

    return () => clearInterval(intervalId);
  }, []);


  const now = new Date();
  const fortyEightHoursAgo = new Date(now.getTime() - (48 * 60 * 60 * 1000));

  // Filter from the state `displayedNews` instead of directly from `mockBreakingNews`
  const recentNews = displayedNews.filter(item => {
    const itemDate = parseAlbanianDate(item.publishedDate);
    return itemDate && itemDate >= fortyEightHoursAgo;
  });

  const internationalNews = recentNews.filter(item => item.sourceType === 'international');
  const albanianNews = recentNews.filter(item => item.sourceType === 'albanian');

  if (internationalNews.length === 0 && albanianNews.length === 0) {
    return null; // Don't render ticker if no recent news
  }
  
  const internationalSpeedFactor = 0.672; // Was 0.1344, made 80% slower (duration * 5)
  const albanianSpeedFactor = 0.7168;   // Was 0.21504, made 70% slower (duration * 3.333)


  return (
    <div className="bg-slate-100 dark:bg-slate-700 py-1 shadow-md" role="region" aria-label="Shiriti i Lajmeve të Fundit">
      {internationalNews.length > 0 && (
        <div className="flex items-center px-2 py-0.5" aria-labelledby="international-news-label">
           <span id="international-news-label" className="sr-only">Lajme Ndërkombëtare</span>
           <GlobeAltIcon className="w-5 h-5 mr-2 text-slate-600 dark:text-slate-400 flex-shrink-0" aria-hidden="true" />
           <TickerRowWithDynamicTranslate
            items={internationalNews}
            onNavigate={onNavigateToNewsArticle}
            ariaLabel="Lajme ndërkombëtare që po qarkullojnë"
            speedFactor={internationalSpeedFactor}
          />
        </div>
      )}

      {internationalNews.length > 0 && albanianNews.length > 0 && (
        <div className="h-px bg-slate-300 dark:bg-slate-600 my-0.5 mx-2" role="separator"></div> 
      )}

      {albanianNews.length > 0 && (
        <div className="flex items-center px-2 py-0.5" aria-labelledby="albanian-news-label">
          <span id="albanian-news-label" className="sr-only">Lajme Vendore Shqiptare</span>
          <MapPinIcon className="w-5 h-5 mr-2 text-slate-600 dark:text-slate-400 flex-shrink-0" aria-hidden="true" />
          <TickerRowWithDynamicTranslate
            items={albanianNews}
            onNavigate={onNavigateToNewsArticle}
            ariaLabel="Lajme vendore shqiptare që po qarkullojnë"
            speedFactor={albanianSpeedFactor}
          />
        </div>
      )}
      <style>{`
        @keyframes dynamicMarquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(var(--marquee-translate-x, -50%)); } /* Fallback for safety */
        }

        .animate-marquee {
          animation: dynamicMarquee linear infinite;
          will-change: transform;
        }
        .hover\\:pause-animation:hover,
        .focus-within\\:pause-animation:focus-within {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee {
            animation: none;
            white-space: nowrap; 
            overflow-x: auto; 
            justify-content: flex-start;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: thin;
            scrollbar-color: #94a3b8 #e2e8f0; /* thumb track */
          }
           .animate-marquee::-webkit-scrollbar {
            height: 4px;
          }
           .animate-marquee::-webkit-scrollbar-thumb {
            background-color: #94a3b8; /* slate-400 */
            border-radius: 2px;
           }
           .animate-marquee::-webkit-scrollbar-track {
            background-color: #e2e8f0; /* slate-200 */
           }
           .animate-marquee > * { 
            flex-shrink: 0;
           }
        }
      `}</style>
    </div>
  );
};
// Renaming the final export to match the original filename expectations
export { NewsTickerFinal as NewsTicker };
