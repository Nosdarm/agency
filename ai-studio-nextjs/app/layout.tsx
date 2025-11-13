import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { OrganizationSchema, ServiceSchema, BreadcrumbSchema } from './structured-data';

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://yourstudio.dev'),
  title: 'AI Studio | MVP разработка за 3-5 недель | React, FastAPI, PostgreSQL',
  description: 'Разработка MVP с AI-ускорением от $5,900. Фикс-прайс, прозрачные сроки, еженедельные демо. Next.js, React, FastAPI, PostgreSQL. Работаем с B2B SaaS стартапами из США, Европы и Украины.',
  keywords: [
    'разработка mvp',
    'ai разработка',
    'mvp за 5 недель',
    'стартап разработка',
    'react разработка',
    'fastapi разработка',
    'фикс прайс разработка',
    'аутсорс разработка украина',
    'разработка mvp для стартапа',
    'заказать разработку mvp',
    'mvp разработка стоимость',
    'разработка mvp цена',
    'b2b saas разработка',
    'next.js разработка',
    'postgresql разработка',
    'разработка mvp украина'
  ],
  authors: [{ name: 'AICODE Studio', url: 'https://yourstudio.dev' }],
  creator: 'AICODE Studio',
  publisher: 'AICODE Studio',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: 'https://yourstudio.dev',
    siteName: 'AICODE Studio',
    title: 'AI Studio | MVP разработка за 3-5 недель',
    description: 'Разработка MVP с AI-ускорением от $5,900. Фикс-прайс, прозрачные сроки, еженедельные демо. React, FastAPI, PostgreSQL.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AICODE Studio - Разработка MVP с AI-ускорением',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Studio | MVP разработка за 3-5 недель',
    description: 'Разработка MVP с AI-ускорением от $5,900. Фикс-прайс, прозрачные сроки.',
    images: ['/og-image.jpg'],
    creator: '@yourstudio',
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
    canonical: 'https://yourstudio.dev',
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
  return (
    <html lang="ru" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#7c3aed" />

        {/* Structured Data */}
        <OrganizationSchema />
        <ServiceSchema />
        <BreadcrumbSchema />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
