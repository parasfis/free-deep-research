import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TEAM: SPARK TITANS - Business Deep Research',
  description: `A web-based efficient deep research tool that leverages edge AI capabilities to provide users with a comprehensive research experience. This tool implements smooth web search functionality, making the business research process more convenient and effective.`,
  openGraph: {
    images: [
      {
        url: '/images/banner.jpg',
        width: 1024,
        height: 200,
        alt: 'TEAM: SPARK TITANS - Business Deep Research',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
