
import React, { useState, useCallback } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { InputArea } from './components/InputArea';
import { ResultsDisplay } from './components/ResultsDisplay';
import { LoadingSpinner } from './components/LoadingSpinner';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { SocialMediaPolicy } from './components/SocialMediaPolicy';
import { CopyrightPolicy } from './components/CopyrightPolicy';
import { NewsValuesPolicy } from './components/NewsValuesPolicy';
import { AboutUs } from './components/AboutUs';
import { NewsTicker } from './components/NewsTicker';
import { NewsArticlePage } from './components/NewsArticlePage'; // Import NewsArticlePage
// import { PoliticalTvShowsList } from './components/PoliticalTvShowsList'; // Removed import
import { factCheckNews } from './services/geminiService';
import { FactCheckResult, VerdictLabel, BreakingNewsItemData } from './types';

export type Page = 'main' | 'privacy' | 'socialMediaPolicy' | 'copyrightPolicy' | 'newsValuesPolicy' | 'aboutUs' | 'newsArticle';

const App: React.FC = () => {
  const [claim, setClaim] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [result, setResult] = useState<FactCheckResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<Page>('main');
  const [selectedNewsItem, setSelectedNewsItem] = useState<BreakingNewsItemData | null>(null);

  const handleFactCheck = useCallback(async (currentClaim: string) => {
    if (!currentClaim.trim()) {
      setError("Ju lutemi, shkruani një pretendim lajmi për ta verifikuar.");
      setResult(null);
      return;
    }
    setIsLoading(true);
    setError(null);
    setResult(null);

    try {
      const apiResult = await factCheckNews(currentClaim);
      setResult(apiResult);
    } catch (err) {
      console.error("Gabim gjatë verifikimit të faktit:", err);
      if (err instanceof Error) {
        setError(err.message || "Ndodhi një gabim i panjohur gjatë verifikimit të faktit.");
      } else {
        setError("Ndodhi një gabim i panjohur gjatë verifikimit të faktit.");
      }
      setResult(null); 
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleCloseResults = () => {
    setResult(null);
  };

  const navigateToPrivacy = () => setCurrentPage('privacy');
  const navigateToSocialMediaPolicy = () => setCurrentPage('socialMediaPolicy');
  const navigateToCopyrightPolicy = () => setCurrentPage('copyrightPolicy');
  const navigateToNewsValuesPolicy = () => setCurrentPage('newsValuesPolicy');
  const navigateToAboutUs = () => setCurrentPage('aboutUs');
  const navigateToMain = () => {
    setCurrentPage('main');
    setSelectedNewsItem(null); // Clear selected news item when going to main
  };

  const handleNavigateToNewsArticle = (item: BreakingNewsItemData) => {
    setSelectedNewsItem(item);
    setCurrentPage('newsArticle');
  };

  return (
    <div className="min-h-screen flex flex-col text-slate-900 dark:text-slate-100">
      <Header />
      {currentPage === 'main' && <NewsTicker onNavigateToNewsArticle={handleNavigateToNewsArticle} />}

      {currentPage === 'main' ? (
        <main className="flex-grow container mx-auto px-4 py-8">
          <div className="max-w-3xl mx-auto space-y-8">
            {isLoading && <LoadingSpinner />}

            {error && (
              <div className="p-4 bg-red-100 dark:bg-red-900 border border-red-400 dark:border-red-600 text-red-700 dark:text-red-200 rounded-md shadow-md">
                <h3 className="font-bold text-lg mb-2">Gabim</h3>
                <p>{error}</p>
              </div>
            )}

            {result && !isLoading && !error && (
              <ResultsDisplay result={result} onClose={handleCloseResults} />
            )}
            
            {!isLoading && !result && !error && (
              <div className="text-center text-slate-500 dark:text-slate-400 bg-white/70 dark:bg-slate-800/70 p-6 rounded-lg shadow-md backdrop-blur-sm">
                  <p className="text-2xl font-semibold">Shaping Narrative for a Smarter Society.</p>
                  <p className="text-sm mt-2">IA do të analizojë pretendimin, do të japë një verdikt dhe do të listojë burimet mbështetëse nga uebi.</p>
              </div>
            )}
            {/* InputArea removed from here */}
          </div>
        </main>
      ) : currentPage === 'privacy' ? (
        <PrivacyPolicy onBackToMain={navigateToMain} />
      ) : currentPage === 'socialMediaPolicy' ? (
        <SocialMediaPolicy onBackToMain={navigateToMain} />
      ) : currentPage === 'copyrightPolicy' ? (
        <CopyrightPolicy onBackToMain={navigateToMain} />
      ) : currentPage === 'newsValuesPolicy' ? (
        <NewsValuesPolicy onBackToMain={navigateToMain} />
      ) : currentPage === 'aboutUs' ? (
        <AboutUs onBackToMain={navigateToMain} />
      ) : currentPage === 'newsArticle' && selectedNewsItem ? (
        <NewsArticlePage newsItem={selectedNewsItem} onBackToMain={navigateToMain} />
      ) : null}

      {/* InputArea moved here, displayed on all pages for now. Can be conditionally rendered if needed. */}
      {/* If InputArea should only be on 'main' page, add: currentPage === 'main' && (...) */}
      <section className="container mx-auto px-4 py-8">
          <div className="max-w-3xl mx-auto"> 
            <InputArea
                claim={claim}
                setClaim={setClaim}
                onFactCheck={handleFactCheck}
                isLoading={isLoading}
            />
          </div>
      </section>

      <Footer 
        onNavigateToPrivacy={navigateToPrivacy} 
        onNavigateToSocialMediaPolicy={navigateToSocialMediaPolicy} 
        onNavigateToCopyrightPolicy={navigateToCopyrightPolicy}
        onNavigateToNewsValuesPolicy={navigateToNewsValuesPolicy}
        onNavigateToAboutUs={navigateToAboutUs}
      />
    </div>
  );
};

export default App;
