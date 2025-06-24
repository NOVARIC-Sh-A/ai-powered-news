
import React from 'react';
import { BreakingNewsItemData, NewsAuthenticityRating } from '../types';
import { CalendarDaysIcon, GlobeAltIcon, ExclamationTriangleIcon, XCircleIcon, InformationCircleIcon, ShareIcon } from './icons'; 
import { RatingDisplay } from './RatingDisplay';
import { AuthenticityBar } from './AuthenticityBar';

interface NewsArticlePageProps {
  newsItem: BreakingNewsItemData;
  onBackToMain: () => void;
}

type AlertType = 'error' | 'warning' | 'info';

interface ParsedSegment {
  text: string;
  isHighlight: boolean;
  alertMessage?: string;
  alertType?: AlertType;
}

function parseContentWithHighlights(content: string): ParsedSegment[] {
  const segments: ParsedSegment[] = [];
  const highlightRegex = /\[\[(.*?)\|(.+?)\|(error|warning|info)\]\]/g;
  let lastIndex = 0;
  let match;

  while ((match = highlightRegex.exec(content)) !== null) {
    if (match.index > lastIndex) {
      segments.push({
        text: content.substring(lastIndex, match.index),
        isHighlight: false,
      });
    }
    segments.push({
      text: match[1], 
      isHighlight: true,
      alertMessage: match[2], 
      alertType: match[3] as AlertType,
    });
    lastIndex = highlightRegex.lastIndex;
  }

  if (lastIndex < content.length) {
    segments.push({
      text: content.substring(lastIndex),
      isHighlight: false,
    });
  }
  
  if (segments.length === 0 && content.length > 0) {
      segments.push({ text: content, isHighlight: false });
  }

  return segments;
}

const getHighlightStylesAndIcon = (type?: AlertType): { className: string; icon: React.ReactNode } => {
  const iconClass = "w-4 h-4 inline-block mr-1 flex-shrink-0";
  switch (type) {
    case 'error':
      return { 
        className: 'bg-red-100 dark:bg-red-800/50 text-red-700 dark:text-red-300 px-1 py-0.5 rounded-sm border-b-2 border-red-400 dark:border-red-600', 
        icon: <XCircleIcon className={`${iconClass} text-red-500 dark:text-red-400`} /> 
      };
    case 'warning':
      return { 
        className: 'bg-yellow-100 dark:bg-yellow-700/50 text-yellow-800 dark:text-yellow-300 px-1 py-0.5 rounded-sm border-b-2 border-yellow-400 dark:border-yellow-600', 
        icon: <ExclamationTriangleIcon className={`${iconClass} text-yellow-600 dark:text-yellow-400`} /> 
      };
    case 'info':
      return { 
        className: 'bg-blue-100 dark:bg-blue-700/50 text-blue-700 dark:text-blue-300 px-1 py-0.5 rounded-sm border-b-2 border-blue-400 dark:border-blue-600', 
        icon: <InformationCircleIcon className={`${iconClass} text-blue-500 dark:text-blue-400`} /> 
      };
    default:
      return { className: '', icon: null };
  }
};

const getNewsAuthenticityShareText = (rating: NewsAuthenticityRating): string => {
  switch (rating) {
    case 'VERIFIED_ACCURATE': return 'Plotësisht i Vërtetë';
    case 'MOSTLY_ACCURATE': return 'Kryesisht i Vërtetë';
    case 'PARTIALLY_ACCURATE': return 'Pjesërisht i Vërtetë';
    case 'ACCURACY_UNCLEAR': return 'Paqartësi';
    case 'POTENTIAL_MISINFORMATION': return 'Dezinformim i Mundshëm';
    default: return 'E Panjohur';
  }
};


export const NewsArticlePage: React.FC<NewsArticlePageProps> = ({ newsItem, onBackToMain }) => {
  if (!newsItem) {
    return (
      <main className="flex-grow container mx-auto px-4 py-8 text-center">
        <p className="text-xl text-slate-700 dark:text-slate-300">Lajmi nuk u gjet.</p>
        <button
          onClick={onBackToMain}
          className="mt-6 px-6 py-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-md shadow-md transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          aria-label="Kthehu te faqja kryesore"
        >
          Kthehu te Faqja Kryesore
        </button>
      </main>
    );
  }

  const { title, sourceName, publishedDate, imageUrl, content, sourceType, newsAuthenticity, sourceReliability } = newsItem;
  const parsedContent = parseContentWithHighlights(content);

  const handleShareNews = async () => {
    const shareData = {
      title: `Lajm nga NOVARIC®: ${title.substring(0, 50)}...`,
      text: `Titulli: ${title}\nBurimi: ${sourceName}\nAutenticiteti: ${getNewsAuthenticityShareText(newsAuthenticity)}\n\nLajm i lexuar në NOVARIC® AI-Powered News: ${window.location.origin}`,
      url: window.location.origin,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (error) {
        console.error('Gabim gjatë shpërndarjes së lajmit:', error);
      }
    } else {
      alert('Shpërndarja nuk mbështetet nga ky shfletues. Mund ta kopjoni manualisht tekstin e detajeve të lajmit.');
    }
  };

  return (
    <main className="flex-grow container mx-auto px-4 py-8">
      <article className="max-w-3xl mx-auto bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-lg shadow-xl">
        <header className="mb-6">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-tight">{title}</h1>
          
          <div className="text-sm text-slate-500 dark:text-slate-400 space-y-1 mb-4">
            <div className="flex items-center">
              <GlobeAltIcon className="w-4 h-4 mr-1.5 text-slate-400 dark:text-slate-500" />
              <span>{sourceName} ({sourceType === 'albanian' ? 'Lajm vendor' : 'Lajm ndërkombëtar'})</span>
            </div>
            <div className="flex items-center">
              <CalendarDaysIcon className="w-4 h-4 mr-1.5 text-slate-400 dark:text-slate-500" />
              <span>Publikuar më: {publishedDate}</span>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700 space-y-4">
            <div>
              <RatingDisplay label="Autenticiteti i Lajmit" rating={newsAuthenticity} type="news" layout="labelTop" />
              {/* AuthenticityBar moved from here */}
            </div>
            <div>
              <RatingDisplay label="Besueshmëria e Burimit" rating={sourceReliability} type="source" layout="labelTop" />
              <AuthenticityBar rating={newsAuthenticity} /> {/* AuthenticityBar moved here */}
            </div>
          </div>
        </header>

        {imageUrl && (
          <figure className="mb-6">
            <img 
              src={imageUrl} 
              alt={`Imazh për artikullin: ${title}`} 
              className="w-full h-auto max-h-[400px] object-cover rounded-md shadow-md" 
            />
          </figure>
        )}

        <div className="prose prose-slate dark:prose-invert max-w-none text-slate-700 dark:text-slate-300">
          {parsedContent.map((segment, index) => {
            if (segment.isHighlight && segment.alertMessage && segment.alertType) {
              const { className, icon } = getHighlightStylesAndIcon(segment.alertType);
              return (
                <span key={index} className={`${className} cursor-help`} title={segment.alertMessage}>
                  {icon}
                  {segment.text.split('\n').map((line, lineIndex) => (
                    <React.Fragment key={lineIndex}>
                      {line}
                      {lineIndex < segment.text.split('\n').length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </span>
              );
            }
            return segment.text.split('\n').map((line, lineIndex) => (
              <React.Fragment key={`${index}-${lineIndex}`}>
                {line}
                {lineIndex < segment.text.split('\n').length - 1 && <br />}
              </React.Fragment>
            ));
          })}
        </div>

        <div className="mt-10 pt-6 border-t border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <button
            onClick={onBackToMain}
            className="w-full sm:w-auto px-6 py-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-md shadow-md transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 dark:focus:ring-offset-slate-800"
            aria-label="Kthehu te faqja kryesore"
          >
            Kthehu te Faqja Kryesore
          </button>
          <button
            onClick={handleShareNews}
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 dark:focus:ring-offset-slate-800"
            aria-label="Shpërndaje këtë lajm"
          >
            <ShareIcon className="w-5 h-5 mr-2 -ml-1" />
            Shpërndaje këtë lajm
          </button>
        </div>
      </article>
    </main>
  );
};
