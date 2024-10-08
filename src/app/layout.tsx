import type { Metadata } from 'next'
import { roboto } from "./fonts";

//Components
import { Toaster } from 'sonner';

// Styles
import './globals.css';


export const metadata: Metadata = {
  title: 'United Traverse Courier Services.',
  description: `Welcome to UnitedTraverse, your premier destination for seamless courier solutions! At UnitedTraverse, we take pride in being more than just a courier service. We're your reliable partner in connecting people and businesses across the globe.`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        {children}
        <Toaster richColors position="top-center" closeButton />
      </body>
    </html>
  )
}
