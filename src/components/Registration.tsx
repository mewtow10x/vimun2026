import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, CreditCard } from 'lucide-react';

export function Registration() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="register" className="section-padding relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0" style={{ background: 'var(--gradient-hero)' }} />
      
      <div ref={ref} className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-primary text-sm font-medium tracking-[0.2em] uppercase mb-4 block">
            Join Us
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
            Secure Your <span className="text-gradient-gold">Seat</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            Limited seats available. Register now to be part of VIMUN 2026 and embark on a transformative journey.
          </p>
        </motion.div>

        {/* Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          <div className="glass rounded-xl p-6 text-center">
            <Calendar className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="font-serif font-semibold text-lg mb-2">Conference Dates</h3>
            <p className="text-2xl font-bold text-gradient-gold">9–10 May 2026</p>
          </div>

          <div className="glass rounded-xl p-6 text-center">
            <CreditCard className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="font-serif font-semibold text-lg mb-2">Delegate Fee</h3>
            <p className="text-2xl font-bold text-gradient-gold">₹2,000</p>
            <p className="text-sm text-muted-foreground mt-1">IPL: ₹7,799/team</p>
          </div>

          <div className="glass rounded-xl p-6 text-center">
            <MapPin className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="font-serif font-semibold text-lg mb-2">Location</h3>
            <p className="text-2xl font-bold text-gradient-gold">Haldwani, Uttarakhand</p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Button 
            size="lg" 
            className="min-w-[250px] h-14 text-lg font-semibold bg-primary text-primary-foreground hover:bg-primary/90 glow-gold animate-pulse-glow"
          >
            Register Now
          </Button>
          <p className="text-muted-foreground text-sm mt-4">
            Registrations open from <span className="text-primary font-medium">15 January 2026</span>
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20"
        >
          <h3 className="text-center text-xl font-serif font-semibold mb-8">Important Dates</h3>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8">
            {[
              { date: 'Jan 15', event: 'Registrations Open' },
              { date: 'May 9–10', event: 'Conference Days' },
            ].map((item, index) => (
              <div key={item.event} className="flex items-center gap-4">
                <div className="text-center">
                  <div className="text-primary font-bold text-lg">{item.date}</div>
                  <div className="text-muted-foreground text-sm">{item.event}</div>
                </div>
                {index < 1 && (
                  <div className="hidden md:block w-12 h-px bg-gradient-to-r from-primary/50 to-primary/10" />
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
