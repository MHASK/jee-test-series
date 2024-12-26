import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "./components/Layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lumi AI JEE Test Series",
  description: "AI-powered JEE test series with personalized learning and detailed analytics",
  icons: {
    icon: [
      { url: '/logo.png', type: 'image/png' },  // For modern browsers
      { url: '/favicon.ico' }  // Fallback for older browsers
    ],
    apple: '/logo.png',  // For iOS devices
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
