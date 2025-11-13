'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    gtag?: (command: string, ...args: any[]) => void;
  }
}

export default function GAEvents() {
  useEffect(() => {
    // Track clicks on all links and buttons
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a, button');

      if (link && window.gtag) {
        const text = link.textContent?.trim() || 'Unknown';
        const href = link.getAttribute('href') || '';

        window.gtag('event', 'click', {
          event_category: link.tagName.toLowerCase(),
          event_label: text,
          value: href,
        });
      }
    };

    // Track hash changes (anchor navigation)
    const handleHashChange = () => {
      if (window.gtag) {
        window.gtag('event', 'page_view', {
          page_path: window.location.pathname + window.location.hash,
          page_title: document.title,
        });
      }
    };

    // Track scroll depth
    let maxScroll = 0;
    const handleScroll = () => {
      const scrollPercent = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      );

      if (scrollPercent > maxScroll && [25, 50, 75, 90, 100].includes(scrollPercent)) {
        maxScroll = scrollPercent;
        if (window.gtag) {
          window.gtag('event', 'scroll', {
            event_category: 'engagement',
            event_label: `${scrollPercent}%`,
            value: scrollPercent,
          });
        }
      }
    };

    document.addEventListener('click', handleClick);
    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('click', handleClick);
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return null;
}
