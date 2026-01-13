import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { WhyVimun } from '@/components/WhyVimun';
import { Committees } from '@/components/Committees';
import { Registration } from '@/components/Registration';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <section id="why">
        <WhyVimun />
      </section>
      <Committees />
      <Registration />
      <Footer />
    </main>
  );
};

export default Index;
