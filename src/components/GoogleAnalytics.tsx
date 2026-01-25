'use client';

import { useEffect } from 'react';

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID || '';

export default function GoogleAnalytics() {
  useEffect(() => {
    // Only load Google Analytics in production and if tracking ID exists
    if (process.env.NODE_ENV === 'production' && GA_TRACKING_ID) {
      // Initialize dataLayer and gtag first
      window.dataLayer = window.dataLayer || [];
      function gtag(...args: any[]) {
        window.dataLayer.push(arguments);
      }

      // Make gtag available globally
      (window as any).gtag = gtag;

      // Configure Google Analytics
      gtag('js', new Date());
      gtag('config', GA_TRACKING_ID, {
        page_location: window.location.href,
        page_title: document.title,
        page_path: window.location.pathname,
      });

      // Load gtag.js script with error handling
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;

      script.onerror = () => {
        console.warn('Failed to load Google Analytics script');
      };

      script.onload = () => {
        console.log('Google Analytics loaded successfully');
      };

      document.head.appendChild(script);
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
