
import React from 'react';
import { FactCheckResult, VerdictLabel, Source } from '../types';
import { SourceItem } from './SourceItem';
import { ShareIcon, CheckCircleIcon, XCircleIcon, ExclamationTriangleIcon, QuestionMarkCircleIcon, XMarkIcon } from './icons'; // Added XMarkIcon

interface ResultsDisplayProps {
  result: FactCheckResult;
  onClose?: () => void; // Added onClose prop
}

const getVerdictStyles = (verdict: VerdictLabel): { icon: React.ReactNode; bgColor: string; textColor: string; borderColor: string } => {
  switch (verdict) {
    case VerdictLabel.TRUE:
    case VerdictLabel.MOSTLY_TRUE:
      return { icon: <CheckCircleIcon className="w-6 h-6 mr-2" />, bgColor: 'bg-green-100 dark:bg-green-900', textColor: 'text-green-700 dark:text-green-200', borderColor: 'border-green-400 dark:border-green-600' };
    case VerdictLabel.FALSE:
    case VerdictLabel.MOSTLY_FALSE:
      return { icon: <XCircleIcon className="w-6 h-6 mr-2" />, bgColor: 'bg-red-100 dark:bg-red-900', textColor: 'text-red-700 dark:text-red-200', borderColor: 'border-red-400 dark:border-red-600' };
    case VerdictLabel.HALF_TRUE:
    case VerdictLabel.MISLEADING:
      return { icon: <ExclamationTriangleIcon className="w-6 h-6 mr-2" />, bgColor: 'bg-yellow-100 dark:bg-yellow-800', textColor: 'text-yellow-700 dark:text-yellow-200', borderColor: 'border-yellow-400 dark:border-yellow-600' };
    case VerdictLabel.UNVERIFIABLE:
    case VerdictLabel.CANNOT_DETERMINE:
    case VerdictLabel.UNKNOWN:
    default:
      return { icon: <QuestionMarkCircleIcon className="w-6 h-6 mr-2" />, bgColor: 'bg-slate-100 dark:bg-slate-700', textColor: 'text-slate-700 dark:text-slate-200', borderColor: 'border-slate-400 dark:border-slate-500' };
  }
};

export const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ result, onClose }) => {
  const { originalClaim, verdict, summary, sources } = result;
  const { icon, bgColor, textColor, borderColor } = getVerdictStyles(verdict);

  const handleShare = async () => {
    const shareData = {
      title: `NOVARIC® Fact-Check: ${originalClaim.substring(0, 60)}...`,
      text: `Pretendimi: "${originalClaim}"\nVerdikti: ${verdict}\n\nPërmbledhja: ${summary.substring(0, 200)}...\n\n🔗 Verifikuar me NOVARIC® AI News Fact Check: ${window.location.origin}`,
      url: window.location.origin, // You can also share the main page URL
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        console.log('Rezultati u shpërnda me sukses');
      } catch (error) {
        console.error('Gabim gjatë shpërndarjes:', error);
      }
    } else {
      // Fallback for browsers that do not support Web Share API
      // You could implement a copy-to-clipboard functionality here or show a message
      console.log('Web Share API nuk mbështetet në këtë shfletues.');
      alert('Shpërndarja nuk mbështetet nga ky shfletues. Mund ta kopjoni manualisht tekstin.');
    }
  };

  return (
    <div className="relative mt-8 p-6 bg-white dark:bg-slate-800 rounded-lg shadow-xl">
      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-3 right-3 p-1.5 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 rounded-full text-slate-600 dark:text-slate-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
          aria-label="Mbyll rezultatet"
        >
          <XMarkIcon className="w-5 h-5" />
        </button>
      )}
      <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-4">Rezultatet e Verifikimit të Fakteve</h2>
      
      <div className="mb-6">
        <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400">Pretendimi Origjinal:</h3>
        <p className="italic text-slate-700 dark:text-slate-300">"{originalClaim}"</p>
      </div>

      <div className={`p-4 rounded-md border ${borderColor} ${bgColor} ${textColor} mb-6`}>
        <div className="flex items-center">
          {icon}
          <h3 className={`text-lg font-semibold`}>Verdikti: {verdict}</h3>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-md font-semibold text-slate-700 dark:text-slate-300 mb-2">Përmbledhja dhe Shpjegimi:</h3>
        <p className="text-slate-600 dark:text-slate-300 whitespace-pre-wrap">{summary || "Asnjë përmbledhje e dhënë nga IA."}</p>
      </div>

      {sources && sources.length > 0 && (
        <div className="mb-6">
          <h3 className="text-md font-semibold text-slate-700 dark:text-slate-300 mb-2">Burimet Mbështetëse:</h3>
          <ul className="space-y-2">
            {sources.map((source, index) => (
              <SourceItem key={index} source={source} />
            ))}
          </ul>
        </div>
      )}
      {sources && sources.length === 0 && (
         <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">Asnjë burim specifik uebor nuk u citua nga IA për këtë pretendim.</p>
      )}

      <div className="mt-6 text-center">
        <button
          onClick={handleShare}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 dark:focus:ring-offset-slate-800"
          aria-label="Shpërndaje rezultatin e verifikimit të faktit"
        >
          <ShareIcon className="w-5 h-5 mr-2 -ml-1" />
          Shpërndaje këtë rezultat
        </button>
      </div>

    </div>
  );
};
