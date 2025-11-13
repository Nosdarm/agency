import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { OrganizationSchema, ServiceSchema, BreadcrumbSchema } from './structured-data';
import Script from 'next/script';
import GAEvents from './components/GAEvents';

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://builditfast.ai'),
  title: 'BuildItFast.ai | Launch Your MVP in 21 Days | Web, Mobile, SaaS Development',
  description: 'Launch production-ready MVPs in 21 days. Fixed price, full code ownership. Build SaaS platforms, mobile apps, and web applications that scale. From $15,000.',
  keywords: [
    'mvp development',
    'startup development',
    'saas development',
    'mobile app development',
    'web application development',
    'react development',
    'next.js development',
    'react native development',
    'mvp in 21 days',
    'fixed price development',
    'startup mvp',
    'mvp cost',
    'mvp pricing',
    'production ready mvp',
    'scalable mvp',
    'b2b saas development'
  ],
  authors: [{ name: 'BuildItFast.ai', url: 'https://builditfast.ai' }],
  creator: 'BuildItFast.ai',
  publisher: 'BuildItFast.ai',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://builditfast.ai',
    siteName: 'BuildItFast.ai',
    title: 'BuildItFast.ai | Launch Your MVP in 21 Days',
    description: 'Launch production-ready MVPs in 21 days. Fixed price, full code ownership. Build web, mobile, and SaaS platforms that scale.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'BuildItFast.ai - Launch Your MVP in 21 Days',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BuildItFast.ai | Launch Your MVP in 21 Days',
    description: 'Launch production-ready MVPs in 21 days. Fixed price, full code ownership.',
    images: ['/og-image.jpg'],
    creator: '@builditfast',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://builditfast.ai',
  },
  verification: {
    google: 'YOUR_GOOGLE_VERIFICATION_CODE',
    yandex: 'YOUR_YANDEX_VERIFICATION_CODE',
  },
  category: 'technology',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#7c3aed" />

        {/* Structured Data */}
        <OrganizationSchema />
        <ServiceSchema />
        <BreadcrumbSchema />
      </head>
      <body className={`${inter.className} antialiased`}>
        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
            <GAEvents />
          </>
        )}
        {children}
      </body>
    </html>
  );
}
