import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { OrganizationSchema, ServiceSchema, BreadcrumbSchema, LocalBusinessSchema } from './structured-data';
import { GoogleAnalytics } from './analytics';

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://builditfast.ai'),
  title: 'MVP Development in 2-4 Weeks from $5,000 | AI-Powered | BuildItFast',
  description: 'Launch your MVP in 2-4 weeks. AI-accelerated development reduces costs by 70%. Web, mobile, SaaS platforms. Fixed price, full code ownership. Get started today.',
  keywords: [
    'mvp development',
    'mvp development services',
    'mvp development company',
    'ai mvp development',
    'fast mvp development',
    'mvp development in 2 weeks',
    '$5000 mvp development',
    'ai powered mvp development',
    'mvp development for startups',
    'cheap mvp development services',
    'build mvp fast',
    'startup mvp',
    'mvp services',
    '2 week mvp'
  ],
  authors: [{ name: 'BuildItFast', url: 'https://builditfast.ai' }],
  creator: 'BuildItFast',
  publisher: 'BuildItFast',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://builditfast.ai',
    siteName: 'BuildItFast',
    title: 'Launch Your MVP in 2-4 Weeks | BuildItFast.ai',
    description: 'AI + Senior Developers = 70% faster MVP development. From $5,000, fixed price.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'BuildItFast - AI-Powered MVP Development',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MVP in 2-4 Weeks from $5k | BuildItFast',
    description: 'AI-powered MVP development. 3x faster, 70% cheaper.',
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
  },
  category: 'technology',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#8b5cf6" />

        {/* Structured Data */}
        <OrganizationSchema />
        <ServiceSchema />
        <BreadcrumbSchema />
        <LocalBusinessSchema />
      </head>
      <body className={`${inter.className} antialiased`}>
        {process.env.NEXT_PUBLIC_GA_ID && <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />}
        {children}
      </body>
    </html>
  );
}
