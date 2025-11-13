'use client';

import { useEffect } from 'react';
import Script from 'next/script';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export function GoogleAnalytics({ gaId }: { gaId: string }) {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}

// Track pricing view event
export function trackPricingView() {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'view_pricing', {
      event_category: 'engagement',
      event_label: 'pricing_section'
    });
  }
}

// Track package selection
export function trackPackageSelect(packageName: string, price: number) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'begin_checkout', {
      value: price,
      currency: 'USD',
      items: [{
        item_name: packageName,
        price: price
      }]
    });
  }
}

// Track contact form submission
export function trackContactForm(packageName: string) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'contact_form_submit', {
      event_category: 'lead',
      package_interest: packageName
    });
  }
}

// Track scroll depth
export function trackScrollDepth(percent: number) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'scroll', {
      percent_scrolled: percent
    });
  }
}

// Hook for tracking scroll depth
export function useScrollTracking() {
  useEffect(() => {
    let scrolled90 = false;
    let scrolled75 = false;
    let scrolled50 = false;

    const handleScroll = () => {
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

      if (scrollPercentage >= 90 && !scrolled90) {
        trackScrollDepth(90);
        scrolled90 = true;
      } else if (scrollPercentage >= 75 && !scrolled75) {
        trackScrollDepth(75);
        scrolled75 = true;
      } else if (scrollPercentage >= 50 && !scrolled50) {
        trackScrollDepth(50);
        scrolled50 = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
}
