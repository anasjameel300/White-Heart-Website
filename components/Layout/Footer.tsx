import React, { useContext } from 'react';
import { Heart, Instagram, Twitter } from 'lucide-react';
import { NAV_LINKS, UI_TEXT } from '../../constants';
import { LanguageContext } from '../../App';

const Footer: React.FC = () => {
  const { lang } = useContext(LanguageContext);
  const isRTL = lang === 'ar';

  return (
    <footer className="bg-brand-dark text-brand-cream pt-32 pb-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-mashrabiya opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          <div className={`col-span-1 md:col-span-2 ${isRTL ? 'text-right' : 'text-left'}`}>
            <div className={`flex items-center gap-3 mb-8 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <Heart className="w-8 h-8 fill-brand-gold stroke-brand-gold" />
              <span className="font-serif text-3xl font-bold tracking-tighter">
                {isRTL ? 'وايت هارت كافيه' : 'White Heart Café'}
              </span>
            </div>
            <p className="text-brand-stone/50 font-sans text-lg max-w-sm mb-10 leading-relaxed mx-auto lg:mx-0 break-words">
              {isRTL
                ? 'نرتقي بتجربة الكافيه في جدة من خلال خلطاتنا المميزة، والحلويات المصنوعة يدوياً، ومساحة مصممة للتواصل.'
                : 'Elevating the café experience in Jeddah with signature blends, artisanal treats, and a space designed for connection.'}
            </p>
            <div className={`flex gap-5 ${isRTL ? 'justify-end' : ''}`}>
              {[Instagram, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-gold hover:text-white transition-all">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div className={isRTL ? 'text-right' : 'text-left'}>
            <h4 className="font-serif text-brand-gold text-xl mb-8">{isRTL ? 'استكشف' : 'Explore'}</h4>
            <ul className="space-y-4">
              {NAV_LINKS.map(link => (
                <li key={link.id}>
                  <a href={link.href} className="text-brand-stone/50 hover:text-brand-gold transition-colors text-sm uppercase tracking-widest">
                    {link.name[lang]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className={isRTL ? 'text-right' : 'text-left'}>
            <h4 className="font-serif text-brand-gold text-xl mb-8">{isRTL ? 'تواصل معنا' : 'Contact'}</h4>
            <ul className="space-y-4 text-brand-stone/50">
              <li className="text-lg">+966 12 000 0000</li>
              <li className="text-sm tracking-widest uppercase">hello@whiteheart.sa</li>
              <li className="pt-6">
                <span className="block text-brand-gold/40 text-[10px] uppercase tracking-[0.3em] mb-2">{isRTL ? 'المقر الرئيسي' : 'Head Office'}</span>
                {isRTL ? 'طريق الأمير سلطان، جدة، المملكة العربية السعودية' : 'Prince Sultan Rd, Jeddah, KSA'}
              </li>
            </ul>
          </div>
        </div>

        <div className={`pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
          <p className="text-brand-stone/30 text-[10px] uppercase tracking-widest">
            © {new Date().getFullYear()} White Heart Café. {isRTL ? 'جميع الحقوق محفوظة.' : 'All rights reserved.'}
          </p>
          <p className="text-brand-stone/30 text-[10px] uppercase tracking-widest flex items-center gap-1">
            {isRTL ? 'صنع بكل' : 'Designed with'} <Heart size={10} className="fill-brand-accent stroke-brand-accent" /> {isRTL ? 'في جدة' : 'in Jeddah'}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;