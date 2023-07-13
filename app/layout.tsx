import Header from '@/components/ui/header';
import './globals.css'
import type { Metadata } from 'next'
import { Inter, League_Spartan } from 'next/font/google'
import SearchBox from '@/components/ui/search';

const inter = Inter({ subsets: ['latin'] });
const league_Spartan = League_Spartan({subsets: ['latin'], weight: ['500', '700']});

export const metadata: Metadata = {
  title: 'HireDEV',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={league_Spartan.className}>
        <div className="w-full bg-cyan-100">
        <Header />
        <SearchBox />
        {children}
        </div>
      </body>
    </html>
  )
}
