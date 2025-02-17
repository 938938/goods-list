import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Link from 'next/link';
import { ThemeProvider } from 'src/config/material-tailwind-theme-provider';
import { RecoilRoot } from 'src/config/recoilProvider';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Goods List',
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <RecoilRoot>
        <ThemeProvider>
          <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
          >
            <div>{children}</div>
            <div className='flex gap-1'>
              <Link href={'/'}>HOME</Link>
              <Link href={'/edit'}>EDIT</Link>
            </div>
          </body>
        </ThemeProvider>
      </RecoilRoot>
    </html>
  );
}
