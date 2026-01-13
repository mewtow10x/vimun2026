import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Phone, Instagram, MapPin } from 'lucide-react';

export function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer ref={ref} className="relative overflow-hidden border-t border-border/50">
      {/* Main Footer */}
      <div className="section-padding pb-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16"
          >
            {/* Brand */}
            <div className="lg:col-span-2">
              <h3 className="text-3xl font-serif font-bold mb-4">
                VIMUN <span className="text-gradient-gold">2026</span>
              </h3>
              <p className="text-muted-foreground mb-6 max-w-md">
                India's premier Model United Nations conference, empowering the next generation of global leaders through diplomacy, debate, and dialogue.
              </p>
              <p className="text-sm text-muted-foreground">
                An initiative by <span className="text-primary font-medium">Visionary India</span>
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-serif font-semibold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-3">
                {['About', 'Committees', 'Register', 'Guidelines', 'Contact'].map((link) => (
                  <li key={link}>
                    <a 
                      href={`#${link.toLowerCase()}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-serif font-semibold text-lg mb-4">Contact Us</h4>
              <ul className="space-y-4">
                <li>
                  <a href="mailto:contact@vimun.in" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                    <Mail className="w-5 h-5" />
                    contact@vimun.in
                  </a>
                </li>
                <li>
                  <a href="tel:+919876543210" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                    <Phone className="w-5 h-5" />
                    +91 98765 43210
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com/vimun" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                    <Instagram className="w-5 h-5" />
                    @vimun
                  </a>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>Haldwani, Uttarakhand</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Bottom bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4"
          >
            <p className="text-sm text-muted-foreground">
              © 2026 Visionary India. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />
    </footer>
  );
}
