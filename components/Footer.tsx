
import React from 'react';
import { XIcon, FacebookIcon, InstagramIcon, LinkedInIcon, YouTubeIcon, ChainIcon } from './icons'; // Import from shared icons

interface FooterProps {
  onNavigateToPrivacy: () => void;
  onNavigateToSocialMediaPolicy: () => void;
  onNavigateToCopyrightPolicy: () => void; 
  onNavigateToNewsValuesPolicy: () => void;
  onNavigateToAboutUs: () => void; // New prop for About Us Page
}

export const Footer: React.FC<FooterProps> = ({ 
  onNavigateToPrivacy, 
  onNavigateToSocialMediaPolicy, 
  onNavigateToCopyrightPolicy,
  onNavigateToNewsValuesPolicy,
  onNavigateToAboutUs // Destructure new prop
}) => {
  return (
    <footer className="bg-primary-600 text-white text-center px-6 py-[1.26rem] shadow-inner mt-auto">
      <div className="container mx-auto">
         <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center space-y-2 sm:space-y-0 sm:space-x-4 mb-3">
          <button 
            onClick={onNavigateToPrivacy} 
            className="text-sm text-white hover:underline"
            aria-label="Shiko Politikën e Privatësisë"
          >
            Politika e Privatësisë
          </button>
          <button 
            onClick={onNavigateToSocialMediaPolicy} 
            className="text-sm text-white hover:underline"
            aria-label="Shiko Politikën e Përdorimit të Mediave Sociale"
          >
            Politika e Mediave Sociale
          </button>
          <button 
            onClick={onNavigateToCopyrightPolicy} 
            className="text-sm text-white hover:underline"
            aria-label="Shiko Politikën e të Drejtave të Autorit"
          >
            Çështjet e të Drejtave të Autorit
          </button>
          <button 
            onClick={onNavigateToNewsValuesPolicy} 
            className="text-sm text-white hover:underline"
            aria-label="Shiko Vlerat dhe Parimet e Lajmeve"
          >
            Vlerat dhe Parimet e Lajmeve
          </button>
          <button 
            onClick={onNavigateToAboutUs} 
            className="text-sm text-white hover:underline"
            aria-label="Shiko Misionin Tonë"
          >
            Misioni Ynë
          </button>
        </div>
        <p className="text-sm">&copy; {new Date().getFullYear()} NOVARIC®. Të gjitha të drejtat të rezervuara.</p>
        <p className="text-sm"></p>
        <p className="text-sm mt-1"></p>
        <p className="text-xs mt-3 text-slate-200">
          Mohim përgjegjësie: Verifikimet e fakteve të gjeneruara nga IA mund të mos jenë gjithmonë të sakta. Gjithmonë verifikoni informacionin nga burime të shumta me reputacion.
        </p>
      </div>
    </footer>
  );
};
