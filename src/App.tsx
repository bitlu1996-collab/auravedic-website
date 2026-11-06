import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppFloat from '@/components/layout/WhatsAppFloat';
import Hero from '@/components/home/Hero';
import CtaBand from '@/components/home/CtaBand';
import FreeQuestionWidget from '@/components/forms/FreeQuestionWidget';
import ServicesGrid from '@/components/services/ServicesGrid';
import AboutExpert from '@/components/about/AboutExpert';
import Testimonials from '@/components/testimonials/Testimonials';
import FaqSection from '@/components/faq/FaqSection';

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-ink-950 bg-night-glow">
      <Navbar />
      <main>
        <Hero />
        <FreeQuestionWidget />
        <ServicesGrid />
        <AboutExpert />
        <Testimonials />
        <FaqSection />
        <CtaBand />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
