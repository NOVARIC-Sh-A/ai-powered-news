import React from 'react';
import { XIcon, FacebookIcon, InstagramIcon, LinkedInIcon, YouTubeIcon, ChainIcon } from './icons'; // Import from shared icons

export const Header: React.FC = () => {
  return (
    <header className="bg-primary-600 dark:bg-primary-700 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left side: Logo and Title */}
        <div className="flex items-center">
          <img 
            src="https://i0.wp.com/novaric.al/wp-content/uploads/2025/06/c0e0554e-3fe8-11f0-90a6-0242ac110002-png-regular_image.png?w=1280&ssl=1" 
            alt="NOVARIC® Logo" 
            className="h-20 w-auto mr-4"
          />
          <h1 className="text-xl sm:text-2xl font-normal tracking-tight text-white">NOVARIC® AI-Powered News</h1>
        </div>

        {/* Right side: Social Media Icons */}
        <div className="flex items-center space-x-3 sm:space-x-4">
          <a href="" target="_blank" rel="noopener noreferrer" className="text-white hover:text-slate-300 inline-block border-2 border-white hover:border-slate-300 rounded-full p-0.5 transition-colors duration-150" aria-label="NOVARIC në X">
            <XIcon className="h-6 w-6 block" />
          </a>
          <a href="https://www.facebook.com/novaric.media" target="_blank" rel="noopener noreferrer" className="text-white hover:text-slate-300 inline-block border-2 border-white hover:border-slate-300 rounded-full p-0.5 transition-colors duration-150" aria-label="NOVARIC në Facebook">
            <FacebookIcon className="h-6 w-6 block" />
          </a>
          <a href="https://www.instagram.com/novaric.media/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-slate-300 inline-block border-2 border-white hover:border-slate-300 rounded-full p-0.5 transition-colors duration-150" aria-label="NOVARIC në Instagram">
            <InstagramIcon className="h-6 w-6 block" />
          </a>
          <a href="https://www.linkedin.com/company/novaric/about/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-slate-300 inline-block border-2 border-white hover:border-slate-300 rounded-full p-0.5 transition-colors duration-150" aria-label="NOVARIC në LinkedIn">
            <LinkedInIcon className="h-6 w-6 block" />
          </a>
          <a href="https://www.youtube.com/@novaric" target="_blank" rel="noopener noreferrer" className="text-white hover:text-slate-300 inline-block border-2 border-white hover:border-slate-300 rounded-full p-0.5 transition-colors duration-150" aria-label="NOVARIC në YouTube">
            <YouTubeIcon className="h-6 w-6 block" />
          </a>
          <a href="https://g.page/r/CXqv1OryP5-hEB0/review" target="_blank" rel="noopener noreferrer" className="text-white hover:text-slate-300 group inline-block border-2 border-white hover:border-slate-300 rounded-full p-0.5 transition-colors duration-150" aria-label="NOVARIC në Google Reviews">
            <ChainIcon className="h-6 w-6 block stroke-white group-hover:stroke-slate-300" />
          </a>
        </div>
      </div>
    </header>
  );
};