import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "./components/Layout";
import Script from 'next/script';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JEE Main 2025 Test Series | AI-Powered Practice Tests | January Attempt",
  description: "Prepare for JEE Main 2025 January attempt with India's first AI-powered test series. Get personalized insights, detailed analytics, and expert-curated content aligned with latest pattern.",
  keywords: [
    'JEE Main 2025',
    'JEE January attempt 2025',
    'JEE test series 2025',
    'JEE Main preparation',
    'AI powered JEE practice',
    'JEE mock tests 2025',
    'Online JEE preparation',
    'JEE Main January 2025',
    'Best JEE test series',
    'JEE practice tests',
    'AI learning for JEE',
    'Personalized JEE preparation',
    'JEE Main mock test',
    'JEE Main sample papers'
  ],
  openGraph: {
    title: 'JEE Main 2025 Test Series | AI-Powered Practice Tests | January Attempt',
    description: 'Start your JEE Main 2025 preparation with India\'s first AI-powered test series. Get ready for January attempt with personalized insights and detailed analytics.',
    type: 'website',
    url: 'https://jeetestseries.com',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Lumi AI JEE Test Series 2025',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JEE Main 2025 Test Series | January Attempt',
    description: 'AI-powered test series for JEE Main 2025 January attempt. Get personalized insights and analytics.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: [
      { url: '/logo.png', type: 'image/png' },
      { url: '/favicon.ico' }
    ],
    apple: '/logo.png',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-16691701568"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16691701568');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
