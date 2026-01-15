import React from 'react';
import { Heart, Instagram, Twitter } from 'lucide-react';
import { NAV_LINKS } from '../../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-brand-cream pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
          
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
                <Heart className="w-6 h-6 fill-brand-gold stroke-brand-gold" />
                <span className="font-serif text-2xl font-bold">White Heart</span>
            </div>
            <p className="text-brand-stone/60 font-sans max-w-sm mb-8 leading-relaxed">
              Elevating the café experience in Jeddah with signature blends, artisanal treats, and a space designed for connection.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-brand-stone/20 flex items-center justify-center hover:bg-brand-gold hover:border-brand-gold hover:text-brand-dark transition-all duration-300">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-brand-stone/20 flex items-center justify-center hover:bg-brand-gold hover:border-brand-gold hover:text-brand-dark transition-all duration-300">
                <Twitter size={18} />
              </a>
              {/* TikTok Icon placeholder since Lucide might not have it or just use generic */}
              <a href="#" className="w-10 h-10 rounded-full border border-brand-stone/20 flex items-center justify-center hover:bg-brand-gold hover:border-brand-gold hover:text-brand-dark transition-all duration-300">
                <span className="font-bold text-xs">TT</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg mb-6 text-brand-gold">Explore</h4>
            <ul className="space-y-4">
              {NAV_LINKS.map(link => (
                <li key={link.name}>
                  <a href={link.href} className="text-brand-stone/60 hover:text-white transition-colors text-sm uppercase tracking-wider">
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                  <a href="#delivery" className="text-brand-stone/60 hover:text-white transition-colors text-sm uppercase tracking-wider">
                    Order Online
                  </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg mb-6 text-brand-gold">Contact</h4>
            <ul className="space-y-4 font-sans text-brand-stone/60">
              <li>
                <a href="tel:+966120000000" className="hover:text-white transition-colors">
                  +966 12 000 0000
                </a>
              </li>
              <li>
                <a href="mailto:hello@whiteheart.sa" className="hover:text-white transition-colors">
                  hello@whiteheart.sa
                </a>
              </li>
              <li className="pt-4">
                <span className="block text-brand-stone/40 text-xs uppercase tracking-widest mb-1">Head Office</span>
                Prince Sultan Rd, Jeddah, KSA
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-brand-stone/40 text-xs font-sans">
                © {new Date().getFullYear()} White Heart Café. All rights reserved.
            </p>
            <p className="text-brand-stone/40 text-xs font-sans">
                Designed with <Heart size={10} className="inline mx-1 fill-brand-accent stroke-brand-accent" /> in Jeddah
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;