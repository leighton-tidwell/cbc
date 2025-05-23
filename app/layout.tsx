import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata: Metadata = {
  title:
    'Calvary Baptist Church - Just ordinary people serving an extraordinary God!',
  description:
    'Welcome to Calvary Baptist Church. Join us for worship services, events, and community fellowship.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-primary antialiased min-h-screen">
        <Header />
        {children}
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
