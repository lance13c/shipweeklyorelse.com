import { Providers } from '@/app/providers';
import Footer from '@/components/common/Footer';
import Nav from '@/components/layout/Nav';
import type { Metadata } from 'next';
import { Sora } from 'next/font/google';
import './globals.css';

const inter = Sora({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ship Weekly Or Else',
  description: 'The discord community that ships side projects weekly.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`dark ${inter.className}`}>
      <body>
        <Nav />
        <Providers>{children}</Providers>
      </body>
      <Footer />
    </html>
  );
}
