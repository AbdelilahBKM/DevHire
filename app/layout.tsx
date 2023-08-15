import './globals.css';
import type { Metadata } from 'next';
import { League_Spartan } from 'next/font/google';
import Header from '@/components/ui/header';
import Footer from '@/components/ui/footer';


const league_Spartan = League_Spartan({subsets: ['latin'], weight: ['200','300','500','700']});

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
    <html lang="en" className="bg-cyan-100">
      <body className={league_Spartan.className}>
        <div className="w-full bg-cyan-100">
                <Header />
                {children}
                <Footer />          
        </div>
      </body>
    </html>
  )
}
