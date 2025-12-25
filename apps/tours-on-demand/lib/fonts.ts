import localFont from 'next/font/local';

export const abcsolarDisplay = localFont({
  src: [
    {
      path: '../public/fonts/ABCSolarDisplay-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/ABCSolarDisplay-Bold.woff',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/ABCSolarDisplay-Extrabold.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../public/fonts/ABCSolarDisplay-Extrabold.woff',
      weight: '800',
      style: 'normal',
    },
  ],
  variable: '--font-abcsolar-display',
  display: 'swap',
});

