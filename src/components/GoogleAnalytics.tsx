'use client';

import { useEffect } from 'react';

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID || '';

export default function GoogleAnalytics() {
  useEffect(() => {
    // Only load Google Analytics in production and if tracking ID exists
    if (process.env.NODE_ENV === 'production' && GA_TRACKING_ID) {
      // Load gtag.js script
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
      document.head.appendChild(script);

      // Initialize dataLayer and gtag
      window.dataLayer = window.dataLayer || [];
      function gtag(...args: any[]) {
        window.dataLayer.push(arguments);
      }

      // Configure Google Analytics
      gtag('js', new Date());
      gtag('config', GA_TRACKING_ID, {
        page_location: window.location.href,
        page_title: document.title,
        page_path: window.location.pathname,
      });

      // Make gtag available globally
      (window as any).gtag = gtag;
    }
  }, []);

  return null;
}

// Type declarations for Google Analytics
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}
