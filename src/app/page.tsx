import Navbar from '@/components/Section/Navbar';
import Hero from '@/components/Section/Hero';
import Features from '@/components/Section/Features';

export default function Home() {
  return (
    <div className="container mx-auto">
      <Navbar />
      <Hero />
      <Features />
    </div>
  );
}
