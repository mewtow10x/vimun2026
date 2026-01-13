import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Users, Zap, Globe, Sparkles } from 'lucide-react';

const benefits = [
  {
    icon: Award,
    title: 'Academic Rigor',
    description: 'Engage with meticulously researched agendas designed by experienced academics and MUN professionals.',
  },
  {
    icon: Zap,
    title: 'VIMUN Crisis Experience',
    description: 'Navigate real-time crisis scenarios that test your decision-making and adaptability under pressure.',
  },
  {
    icon: Sparkles,
    title: 'Skill Transformation',
    description: 'Develop public speaking, negotiation, and critical thinking skills that last a lifetime.',
  },
  {
    icon: Globe,
    title: 'Global Networking',
    description: 'Connect with like-minded delegates, advisors, and professionals from across the nation.',
  },
  {
    icon: Users,
    title: 'Inclusive Excellence',
    description: 'Experience a welcoming environment where every voice matters and every delegate can shine.',
  },
];

export function WhyVimun() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-[0.2em] uppercase mb-4 block">
            Why Choose Us
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Why <span className="text-gradient-gold">VIMUN</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            VIMUN stands apart as a transformative experience that goes beyond traditional Model UN conferences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className={`group relative p-8 rounded-xl border border-border/50 bg-card/50 hover:bg-card hover:border-primary/30 transition-all duration-500 ${
                index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <benefit.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-serif font-semibold mb-3 group-hover:text-primary transition-colors">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>

              {/* Hover glow */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Meet the Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <span className="text-primary text-sm font-medium tracking-[0.2em] uppercase mb-4 block">
              MEET OUR TEAM
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Leadership <span className="text-gradient-gold">&</span> Vision
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our dedicated team brings expertise and passion to create an exceptional MUN experience.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Atharva",
                role: "Co-founder",
                image: "/team/co-founder-atharva.jpg",
              },
              {
                name: "Director General",
                role: "Co-founder",
                image: "/team/director-general-co-founder.jpg",
              },
              {
                name: "Gatik",
                role: "Chief Advisor",
                image: "/team/gatik-chief-advisor.jpg",
              },
              {
                name: "Rishabh",
                role: "Co-founder",
                image: "/team/rishabh-cofounder.jpg",
              },
            ].map((member, index) => (
              <div key={member.name} className="text-center group">
                <div className="relative inline-block mb-4">
                  <img 
                    src={member.image} 
                    alt={`${member.name}, ${member.role}`}
                    className="w-40 h-40 rounded-full object-cover border-4 border-primary/20 group-hover:border-primary/50 transition-colors mx-auto"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-xl font-serif font-semibold mb-1">{member.name}</h3>
                <p className="text-primary/80">{member.role}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Separator */}
        <div className="my-16 flex items-center">
          <div className="flex-grow border-t border-border"></div>
          <span className="mx-4 text-muted-foreground text-sm">Our Team & Impact</span>
          <div className="flex-grow border-t border-border"></div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {[
            { value: '500+', label: 'Delegates Expected' },
            { value: '7', label: 'Specialized Committees' },
            { value: '2', label: 'Days of Diplomacy' },
            { value: '50+', label: 'Schools Invited' },
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl md:text-5xl font-serif font-bold text-gradient-gold mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-sm tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
