import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronRight } from 'lucide-react';

const committees = [
  {
    abbr: 'AIPPM',
    name: 'All India Political Parties Meet',
    description: 'Simulate the dynamics of Indian parliamentary democracy and multi-party negotiations.',
    type: 'National',
  },
  {
    abbr: 'UNSC',
    name: 'United Nations Security Council',
    description: 'Address global security challenges as a member of the world\'s most powerful council.',
    type: 'International',
  },
  {
    abbr: 'UNCSW',
    name: 'UN Commission on the Status of Women',
    description: 'Champion gender equality and women\'s empowerment on the global stage.',
    type: 'International',
  },
  {
    abbr: 'IPL',
    name: 'IPL Mega Auction 2026',
    description: 'Experience the thrill of strategic bidding and team building in this unique sports simulation.',
    type: 'Special',
    special: true,
  },
  {
    abbr: 'IP',
    name: 'International Press',
    description: 'Cover the conference as a journalist, documenting debates and breaking news.',
    type: 'Press',
  },
  {
    abbr: 'RAM',
    name: 'Ramayana Committee',
    description: 'Explore ancient Indian diplomacy through the lens of the epic Ramayana.',
    type: 'Historical',
  },
  {
    abbr: 'LS',
    name: 'Lok Sabha',
    description: 'Debate key legislation and policies in India\'s lower house of Parliament.',
    type: 'National',
  },
];

export function Committees() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="committees" className="section-padding relative overflow-hidden bg-secondary/20">
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-[0.2em] uppercase mb-4 block">
            Your Platform
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            <span className="text-gradient-gold">Committees</span> & Agendas
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose your arena and make your mark. Each committee offers a unique challenge and perspective.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {committees.map((committee, index) => (
            <motion.div
              key={committee.abbr}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`group relative p-6 md:p-8 rounded-xl border transition-all duration-500 cursor-pointer ${
                committee.special
                  ? 'bg-gradient-to-br from-primary/10 to-primary/5 border-primary/40 hover:border-primary'
                  : 'bg-card/50 border-border/50 hover:border-primary/30 hover:bg-card'
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  {/* Type badge */}
                  <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full mb-4 ${
                    committee.special
                      ? 'bg-primary/20 text-primary'
                      : 'bg-muted text-muted-foreground'
                  }`}>
                    {committee.type}
                  </span>

                  {/* Committee name */}
                  <h3 className="text-2xl md:text-3xl font-serif font-bold mb-2 group-hover:text-primary transition-colors">
                    {committee.abbr}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    {committee.name}
                  </p>
                  <p className="text-muted-foreground/80 text-sm leading-relaxed">
                    {committee.description}
                  </p>
                </div>

                {/* Arrow */}
                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                  hoveredIndex === index 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-muted/50 text-muted-foreground'
                }`}>
                  <ChevronRight className={`w-5 h-5 transition-transform duration-300 ${
                    hoveredIndex === index ? 'translate-x-0.5' : ''
                  }`} />
                </div>
              </div>

              {/* Special badge for IPL */}
              {committee.special && (
                <div className="absolute top-4 right-4">
                  <span className="px-2 py-1 text-[10px] font-bold tracking-wider uppercase bg-primary text-primary-foreground rounded">
                    Special
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Agenda note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center text-muted-foreground text-sm mt-12"
        >
          Detailed agendas and portfolio assignments will be released soon. Stay tuned!
        </motion.p>
      </div>
    </section>
  );
}
