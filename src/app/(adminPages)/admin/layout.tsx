import { Toaster } from 'sonner';

//Components
import Sidebar from "@/components/Sidebar";

//Styles
import '../../globals.css';


export default function AdminLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <main className='text-xs md:text-sm xl:text-base'>
      <Sidebar />
      <section className="mainWidth">
        {children}
      </section>
      <Toaster richColors position="top-center" closeButton />
    </main>
  )
}