
import React from 'react';

export const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex justify-center items-center py-10">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-t-2 border-primary-500"></div>
      <p className="ml-4 text-slate-600 dark:text-slate-300 text-lg">Duke analizuar pretendimin...</p>
    </div>
  );
};