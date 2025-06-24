
import React from 'react';

// Icon components moved from Footer.tsx for reusability

export const XIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export const FacebookIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
  </svg>
);

export const InstagramIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.272.058 2.166.248 2.914.554.788.324 1.457.717 2.123 1.383.667.666 1.059 1.335 1.383 2.123.306.748.496 1.642.554 2.914.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.058 1.272-.248 2.166-.554 2.914-.324.788-.717 1.457-1.383 2.123-.666.667-1.335 1.059-2.123 1.383-.748.306-1.642.496-2.914.554-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.272-.058-2.166-.248-2.914-.554-.788-.324-1.457-.717-2.123-1.383-.667-.666-1.059-1.335-1.383-2.123-.306-.748-.496-1.642-.554-2.914-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.058-1.272.248-2.166.554-2.914.324.788.717-1.457 1.383 2.123.666-.667 1.335-1.059 2.123-1.383.748-.306 1.642.496 2.914.554C8.416 2.175 8.796 2.163 12 2.163m0-2.163C8.74 0 8.333.014 7.053.072 5.775.132 4.905.333 4.14.63c-.784.306-1.457.7-2.123 1.368S.748 3.355.44 4.14C.132 4.905 0 5.775 0 7.053.014 8.333 0 8.74 0 12s.014 3.667 0 4.947c0 1.277.132 2.148.44 2.913.306.784.7 1.457 1.368 2.123s1.339 1.062 2.123 1.368c.765.297 1.635.498 2.913.559C8.333 23.986 8.74 24 12 24s3.667-.014 4.947-0 .232-.06 1.277-.132 2.148-.333 2.913-.63c.784-.306 1.457-.7 2.123-1.368s1.062-1.339 1.368-2.123c.297-.765.498-1.635.559-2.913.06-1.277.072-1.684.072-4.947s-.014-3.667-.072-4.947c-.06-1.277-.232-2.148-.559-2.913-.306-.784-.7-1.457-1.368-2.123s-1.339-1.062-2.123-1.368c-.765-.297-1.635-.498-2.913-.559C15.667.014 15.26 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0-2.88 1.44 1.44 0 0 0 0 2.88z" />
  </svg>
);

export const LinkedInIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

export const YouTubeIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M21.582 7.243c-.24-.886-.93-1.576-1.817-1.817C18.263 5 12 5 12 5s-6.263 0-7.765.426c-.887.24-1.577.931-1.817 1.817C2 8.745 2 12 2 12s0 3.255.426 4.757c.24.886.93 1.577 1.817 1.817C5.737 19 12 19 12 19s6.263 0 7.765-.426c.887-.24 1.577.931 1.817-1.817C22 15.255 22 12 22 12s0-3.255-.418-4.757zM9.75 15.5V8.5l6.5 3.5-6.5 3.5z" />
  </svg>
);

export const ChainIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" fill="none" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
  </svg>
);

export const TikTokIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91.02.08 0 .14.02.2.04.1.05.15.12.17.22.02.06.03.13.03.19.02 3.48-.02 6.97-.03 10.45.02 1.68.02 3.37.01 5.04 0 .17-.01.33-.06.49-.09.31-.27.56-.53.73-.25.16-.52.26-.81.29-.32.03-.64.03-.95.03-1.01 0-2.02.01-3.04-.02-1.12-.03-2.23-.08-3.34-.17-.18-.01-.35-.05-.51-.11-.23-.09-.43-.24-.6-.41-.17-.18-.3-.39-.39-.63-.09-.23-.13-.48-.13-.74 0-1.59.01-3.18.01-4.78.02-.38.12-.73.31-1.04.16-.25.39-.46.66-.59.25-.12.52-.18.8-.2.72-.05 1.44-.07 2.16-.07.08 0 .16-.01.24-.02.02-.27.01-.54.01-.81 0-2.12-.01-4.24-.01-6.37 0-.05.01-.1.04-.15.06-.11.16-.18.29-.2.07-.01.14-.01.22-.01.3-.01.59-.01.89-.01.12 0 .23.01.35.04.1.02.18.07.24.14.07.09.1.19.1.31.02 1.76.01 3.53.01 5.29 0 .11.02.21.07.31.08.15.22.25.39.29.11.03.22.04.33.04.12 0 .24-.01.35-.05.1-.03.18-.09.24-.17.07-.09.1-.2.1-.31.02-1.2.01-2.4.01-3.59.01-.13.04-.26.11-.37.09-.15.24-.25.41-.29.1-.02.19-.03.29-.03.16 0 .32.01.48.01z" />
  </svg>
);

export const FoursquareIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.07 15.29L8.71 11H6v6H4V7h6.71l1.79 4.71L14.71 7H18l-4.5 6 4.5 6h-3.46l-2.97-4.46L10.93 17.29z" />
  </svg>
);

export const ShareIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z" />
  </svg>
);

// Icons for ratings and results
export const CheckCircleIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
  </svg>
);

export const XCircleIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75 9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z" clipRule="evenodd" />
  </svg>
);

export const ExclamationTriangleIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.557 13.004c1.155 2-.29 4.5-2.599 4.5H4.442c-2.308 0-3.753-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
  </svg>
);

export const QuestionMarkCircleIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm11.378-3.917c-.882-.472-1.73-.207-2.368.513-.427.48-.609 1.09-.609 1.693V12a.75.75 0 0 0 1.5 0v-.31a.834.834 0 0 1 .608-.752.834.834 0 0 1 .834.131c.277.16.425.463.425.813v.158a.75.75 0 0 0 1.5 0V11.5c0-.923-.288-1.794-1.018-2.39Z M12 15.75a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-1.5 0V16.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
  </svg>
);

export const ShieldCheckIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className ?? "w-6 h-6"}>
    <path fillRule="evenodd" d="M12 1.5A5.25 5.25 0 0 0 6.75 6.75v3.75c0 7.025 4.09 10.153 5.038 10.741a.87.87 0 0 0 .424 0c.947-.588 5.038-3.716 5.038-10.741V6.75A5.25 5.25 0 0 0 12 1.5Zm3.033 7.84-4.5 4.5a.75.75 0 0 1-1.06 0l-2.25-2.25a.75.75 0 1 1 1.06-1.06L9.75 12.44l3.97-3.97a.75.75 0 0 1 1.06 1.06Z" clipRule="evenodd" />
  </svg>
);

export const InformationCircleIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className ?? "w-6 h-6"}>
    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.042.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
  </svg>
);


// General purpose utility icons
export const CalendarDaysIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className ?? "w-6 h-6"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-3.75h.008v.008H12v-.008Z" />
  </svg>
);

export const GlobeAltIcon: React.FC<{ className?: string }> = ({ className }) => (
 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className ?? "w-6 h-6"}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c1.354 0 2.664-.347 3.829-.977M12 21c-1.354 0-2.664-.347-3.829-.977m12.163-6.842A9.028 9.028 0 0 0 12 5.25c-2.023 0-3.882.632-5.334 1.691m10.668 0c.341-1.244.341-2.527 0-3.772M3.829 7.743c.484-.463 1.006-.878 1.564-1.243m-.001 2.486A9.028 9.028 0 0 0 12 16.5c2.023 0 3.882-.632 5.334-1.691m-10.668 0c-.341 1.244-.341 2.527 0 3.772m6.842-12.163C15.336 3.347 13.646 3 12 3c-1.646 0-3.336.347-4.829.977M12 5.25C13.646 5.25 15.336 6.153 16.171 7.743m-8.342 0C6.664 6.153 8.354 5.25 10.001 5.25c.341 0 .674.025.998.072" />
</svg>
);

export const MapPinIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className ?? "w-6 h-6"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
  </svg>
);

export const XMarkIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className ?? "w-6 h-6"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
  </svg>
);
