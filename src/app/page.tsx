import Navbar from '@/components/Section/Navbar';
import Hero from '@/components/Section/Hero';
import Features from '@/components/Section/Features';
import CTA from '@/components/Section/CTA';
import Footer from '@/components/Section/Footer';

export default function Home() {
  return (
    <div className="container mx-auto">
      <Navbar />
      <Hero />
      <Features />
      <CTA />
      <Footer />
    </div>
  );
}
