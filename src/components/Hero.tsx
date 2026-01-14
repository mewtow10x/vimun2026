import { motion } from 'framer-motion';
import { Globe3D } from './Globe3D';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

export function Hero() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToCommittees = () => {
    document.getElementById('committees')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 z-0"
        style={{ background: 'var(--gradient-hero)' }}
      />
      
      {/* 3D Globe - positioned behind content */}
      <div className="absolute inset-0 z-0 opacity-60">
        <Globe3D />
      </div>

      {/* Content - centered above globe */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-2 text-xs md:text-sm font-medium tracking-[0.3em] uppercase text-primary border border-primary/30 rounded-full backdrop-blur-sm">
            9–10 May 2026 • Haldwani, Uttarakhand
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 leading-tight drop-shadow-2xl"
        >
          <span className="text-foreground">VIMUN</span>
          <span className="text-gradient-gold"> 2026</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:text-2xl lg:text-3xl font-serif text-muted-foreground mb-4"
        >
          Discover Your Voice
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-base md:text-lg text-muted-foreground/70 max-w-2xl mx-auto mb-12"
        >
          India's premier Model United Nations conference, empowering the next generation of global leaders through diplomacy, debate, and dialogue.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button 
            size="lg" 
            className="min-w-[200px] text-base font-semibold bg-primary text-primary-foreground hover:bg-primary/90 glow-gold"
            onClick={() => window.open('https://forms.gle/128qaNggF11LwTxo7', '_blank')}
          >
            Register Now
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="min-w-[200px] text-base font-semibold border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary"
            onClick={scrollToCommittees}
          >
            Explore Committees
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-muted-foreground hover:text-primary transition-colors cursor-pointer"
        aria-label="Scroll to content"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </motion.button>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-20 right-10 w-48 h-48 rounded-full bg-primary/5 blur-3xl" />
    </section>
  );
}
