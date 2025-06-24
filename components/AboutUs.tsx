
import React from 'react';

interface AboutUsProps {
  onBackToMain: () => void;
}

export const AboutUs: React.FC<AboutUsProps> = ({ onBackToMain }) => {
  return (
    <main className="flex-grow container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-lg shadow-xl text-slate-700 dark:text-slate-200">
        <h1 className="text-3xl font-bold mb-6 text-center text-primary-700 dark:text-primary-500">Misioni i NOVARIC® AI-Powered News Fact Check</h1>

        <p className="mb-4">Në një realitet ku etika dhe morali janë zbehur, ndërsa korrupsioni, paaftësia dhe manipulimi tolerohen, NOVARIC® AI-Powered News Fact Check lind si një nevojë urgjente për ndërgjegjësim qytetar dhe institucional.</p>
        <p className="mb-6">Shumë e njohin të keqen, por ndihen të pafuqishëm për ta përballuar. Kjo ka çuar në normalizimin e sjelljeve të gabuara që dëmtojnë shoqërinë në çdo nivel.</p>

        <section className="mb-6">
            <h2 className="text-xl font-semibold mb-3 text-slate-800 dark:text-slate-100">NOVARIC® AI-Powered Fact Check synon të ndërtojë një platformë të besueshme që:</h2>
            <ul className="list-none space-y-3">
                <li className="flex items-start">
                    <span className="text-3xl mr-3 leading-tight" aria-hidden="true">🦉</span>
                    <span className="flex-1">Identifikon shkeljet dhe devijimet përmes fakteve të verifikuara dhe të dhënave konkrete.</span>
                </li>
                <li className="flex items-start">
                    <span className="text-3xl mr-3 leading-tight" aria-hidden="true">⚠️</span>
                    <span className="flex-1">Shërben si pikë referimi për individë e institucione që ndjekin rrugë të gabuara.</span>
                </li>
                <li className="flex items-start">
                    <span className="text-3xl mr-3 leading-tight" aria-hidden="true">🎯</span>
                    <span className="flex-1">Rikthen përgjegjësinë në qendër të komunikimit publik.</span>
                </li>
                <li className="flex items-start">
                    <span className="text-3xl mr-3 leading-tight" aria-hidden="true">🏋️‍♀️</span>
                    <span className="flex-1">Fuqizon qytetarët me informim të saktë dhe të paanshëm.</span>
                </li>
            </ul>
        </section>

        <section className="mb-6">
            <h2 className="text-xl font-semibold mb-3 text-slate-800 dark:text-slate-100">Çfarë ofron platforma?</h2>
            <ul className="list-none space-y-3">
                <li className="flex items-start">
                    <span className="text-2xl mr-3 leading-tight" aria-hidden="true">✅</span>
                    <span className="flex-1">Artikuj të verifikuar me etiketime të qarta (e vërtetë, gjysmë e vërtetë, etj.)</span>
                </li>
                <li className="flex items-start">
                    <span className="text-2xl mr-3 leading-tight" aria-hidden="true">✅</span>
                    <span className="flex-1">Analiza të keqinformimit dhe shkeljeve etike</span>
                </li>
                <li className="flex items-start">
                    <span className="text-2xl mr-3 leading-tight" aria-hidden="true">📊</span>
                    <span className="flex-1">Infografikë dhe udhëzues edukues</span>
                </li>
                <li className="flex items-start">
                    <span className="text-2xl mr-3 leading-tight" aria-hidden="true">⚖️</span>
                    <span className="flex-1">Komente të balancuara mbi të dhëna zyrtare</span>
                </li>
            </ul>
        </section>
        
        <section className="mb-6 space-y-2">
            <p className="flex items-center text-lg font-medium text-red-500 dark:text-red-400">
                <span className="text-2xl mr-3 leading-tight" aria-hidden="true">🛑</span> Mjaft me normalizimin e gabimeve.
            </p>
            <p className="flex items-center text-lg font-medium text-red-500 dark:text-red-400">
                <span className="text-2xl mr-3 leading-tight" aria-hidden="true">🛑</span> Mjaft me tolerimin e injorancës dhe manipulimit.
            </p>
            <p className="flex items-center text-lg font-medium text-green-600 dark:text-green-400">
                <span className="text-2xl mr-3 leading-tight" aria-hidden="true">🟢</span> Koha për të vënë të vërtetën në qendër.
            </p>
        </section>

        <p className="text-xl font-semibold text-center mt-8 text-slate-800 dark:text-slate-100">'NOVARIC® AI-Powered News Fact Check' ngre standardin – për një Shqipëri më të vetëdijshme, të drejtë dhe të informuar.</p>

        <div className="mt-10 text-center">
          <button
            onClick={onBackToMain}
            className="px-6 py-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-md shadow-md transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            aria-label="Kthehu te faqja kryesore"
          >
            Kthehu te Faqja Kryesore
          </button>
        </div>
      </div>
    </main>
  );
};
