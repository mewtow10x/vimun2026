import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto">
        {/* Visionary India */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-32"
        >
          <div>
            <span className="text-primary text-sm font-medium tracking-[0.2em] uppercase mb-4 block">
              The Organization
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 underline-gold">
              Visionary India
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Visionary India is a premier educational organization dedicated to empowering young minds through experiential learning. We believe in nurturing global citizens who can think critically, debate respectfully, and lead with empathy.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our mission extends beyond traditional education—we create transformative experiences that prepare students for the complexities of international relations, diplomacy, and global governance.
            </p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-lg overflow-hidden border-gradient">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
              <div className="h-full w-full bg-secondary/50 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl md:text-8xl font-serif font-bold text-gradient-gold mb-4">VI</div>
                  <p className="text-muted-foreground text-sm tracking-widest uppercase">Empowering Tomorrow's Leaders</p>
                </div>
              </div>
            </div>
            
            {/* Floating accent */}
            <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-primary/10 blur-2xl animate-float" />
          </motion.div>
        </motion.div>

        {/* About VIMUN 2026 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center max-w-4xl mx-auto"
        >
          <span className="text-primary text-sm font-medium tracking-[0.2em] uppercase mb-4 block">
            The Conference
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">
            About <span className="text-gradient-gold">VIMUN 2026</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
            VIMUN 2026 is Visionary India's flagship Model United Nations conference, bringing together exceptional young minds from across the nation. Over two transformative days, delegates will engage in rigorous debate, crisis management, and diplomatic negotiations across multiple specialized committees.
          </p>

          {/* Feature Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🌍', title: 'Diplomacy', desc: 'Master the art of international relations' },
              { icon: '⚖️', title: 'Debate', desc: 'Sharpen your argumentation skills' },
              { icon: '🎯', title: 'Crisis', desc: 'Navigate high-stakes simulations' },
              { icon: '🤝', title: 'Leadership', desc: 'Build lasting connections' },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="glass rounded-lg p-6 hover:bg-secondary/40 transition-all duration-300 group"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-serif font-semibold text-lg mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
