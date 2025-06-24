
import React from 'react';

interface InputAreaProps {
  claim: string;
  setClaim: (claim: string) => void;
  onFactCheck: (claim: string) => void;
  isLoading: boolean;
}

const SparklesIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L1.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L22.75 5.25l-.813 2.846a4.5 4.5 0 0 0-3.09 3.09L16.25 12l2.846.813a4.5 4.5 0 0 0 3.09 3.09L22.75 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L18.25 12Z" />
    </svg>
);

// ShareIcon removed as it's no longer used

export const InputArea: React.FC<InputAreaProps> = ({ claim, setClaim, onFactCheck, isLoading }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onFactCheck(claim);
  };

  // handleShareClaim function removed

  return (
    <div className="bg-white/60 dark:bg-slate-800/70 p-6 rounded-lg shadow-xl">
      <form onSubmit={handleSubmit}>
        <label htmlFor="news-claim" className="block text-lg font-semibold mb-2 text-slate-700 dark:text-slate-200">
          Shkruani Pretendimin e Lajmit ose Përmbledhjen e Artikullit
        </label>
        <textarea
          id="news-claim"
          rows={5} 
          className="w-full p-3 border border-slate-300 dark:border-slate-600 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition duration-150 ease-in-out bg-slate-50 dark:bg-slate-700 text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500"
          placeholder="p.sh., 'Një studim tregon se çokollata kuron të gjitha sëmundjet.' ose ngjisni një përmbledhje të shkurtër artikulli këtu..."
          value={claim}
          onChange={(e) => setClaim(e.target.value)}
          disabled={isLoading}
        />
        <div className="mt-4"> {/* Removed flex layout as there's only one button now */}
            <button
              type="submit"
              disabled={isLoading || !claim.trim()}
              className="w-full flex items-center justify-center px-6 py-3 border-2 border-action-border text-base font-medium rounded-md text-white bg-primary-500 hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:bg-slate-400 dark:disabled:bg-slate-600 disabled:cursor-not-allowed transition duration-150 ease-in-out"
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Duke analizuar...
                </>
              ) : (
                <>
                  <SparklesIcon className="h-5 w-5 mr-2" />
                  Verifiko Faktet me AI
                </>
              )}
            </button>
            {/* Share button JSX removed */}
        </div>
      </form>
    </div>
  );
};
