import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { ThemeProvider } from 'src/config/material-tailwind-theme-provider';
import { RecoilRoot } from 'src/config/recoilProvider';
import Nav from 'src/components/Nav';

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
            <div className='w-2/3 mx-auto flex flex-col items-center py-10 gap-2'>
              <div>{children}</div>
              <Nav />
            </div>
          </body>
        </ThemeProvider>
      </RecoilRoot>
    </html>
  );
}
