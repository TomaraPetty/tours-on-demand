import { Righteous, Urbanist, Poppins } from 'next/font/google';
import './global.css';
import { NavMenu } from '@/components/ui/nav-menu';
import { Footer } from '@/components/ui/footer';
import type { Metadata } from "next"

const righteous = Righteous({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-righteous',
});
const urbanist = Urbanist({ subsets: ['latin'], variable: '--font-urbanist' });
const poppins = Poppins({ 
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

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
      <body className={`${poppins.variable} ${righteous.variable} ${urbanist.variable} font-sans`}>
        <NavMenu />
        {children}
        <Footer />
      </body>
    </html>
  );
}
