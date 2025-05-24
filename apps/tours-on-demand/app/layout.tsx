import { Inter, Righteous, Urbanist } from 'next/font/google';
import './global.css';
import { NavMenu } from '@/components/ui/nav-menu';
import { Footer } from '@/components/ui/footer';
import type { Metadata } from "next"
import { GeometricBackground } from '@/components/ui/geometric-background';

const inter = Inter({ subsets: ['latin'] });
const righteous = Righteous({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-righteous',
});
const urbanist = Urbanist({ subsets: ['latin'], variable: '--font-urbanist' });

export const metadata: Metadata = {
  title: 'Tours On Demand',
  description: 'Connect with artists and fans',
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${righteous.variable} ${urbanist.variable}`}>
        <NavMenu />
        <GeometricBackground />
        {children}
        <Footer />
      </body>
    </html>
  );
}
