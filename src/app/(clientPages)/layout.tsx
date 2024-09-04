import '../globals.css';
import { Toaster } from 'sonner';

// Import Components
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <main className="text-xs md:text-sm xl:text-base">
        <Header />
        {children}
        <Toaster richColors position="top-center" closeButton />
        <Footer />
      </main>
  )
}
