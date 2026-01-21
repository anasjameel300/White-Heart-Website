import React, { useState, useContext } from 'react';
import { MENU_ITEMS, UI_TEXT } from '../../constants';
import { Reveal } from '../ui/Reveal';
import { MenuItem } from '../../types';
import { LanguageContext, NavigationContext } from '../../App';
import { ArrowRight } from 'lucide-react';
import IndulgenceModal from '../ui/IndulgenceModal';

interface MenuProps {
  teaser?: boolean;
}

const Menu: React.FC<MenuProps> = ({ teaser = false }) => {
  const { lang } = useContext(LanguageContext);
  const { setView } = useContext(NavigationContext);
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  
  const isRTL = lang === 'ar';

  const CATEGORIES = [
    { id: 'All', name: { en: 'All', ar: 'الكل' } },
    { id: 'Cold Tea', name: { en: 'Cold Tea', ar: 'شاي مثلج' } },
    { id: 'Cookies', name: { en: 'Cookies', ar: 'كوكيز' } },
    { id: 'Ice Cream', name: { en: 'Ice Cream', ar: 'جيلاتو' } }
  ];

  const filteredItems = teaser 
    ? MENU_ITEMS.slice(0, 3) 
    : (activeCategory === 'All' ? MENU_ITEMS : MENU_ITEMS.filter(item => item.category === activeCategory));

  return (
    <section id="menu" className={`py-32 lg:py-48 bg-brand-stone/30 relative overflow-hidden ${teaser ? 'border-t border-brand-dark/5' : ''}`}>
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-brand-cream to-transparent" />
      
      <IndulgenceModal 
        item={selectedItem} 
        onClose={() => setSelectedItem(null)} 
        onSelectItem={(item) => setSelectedItem(item)} 
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-24 lg:mb-32">
          <Reveal variant="slide">
             <h2 className="font-sans text-brand-gold text-xs font-bold tracking-[0.4em] uppercase mb-6">
                {UI_TEXT.discoverFlavors[lang]}
              </h2>
             <h3 className="font-serif text-5xl md:text-6xl text-brand-dark mb-12 tracking-tight">
                {teaser ? (isRTL ? 'مقتطفات من قائمتنا' : 'A Taste of our Menu') : UI_TEXT.curatedPalette[lang]}
             </h3>
          </Reveal>
          
          {!teaser && (
            <div className="flex flex-wrap justify-center gap-6 lg:gap-10 mt-12">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`text-xs font-sans uppercase tracking-[0.3em] px-8 py-4 transition-all relative group ${
                    activeCategory === cat.id 
                      ? 'text-brand-dark font-bold' 
                      : 'text-brand-dark/30 hover:text-brand-dark'
                  }`}
                >
                  {cat.name[lang]}
                  <span className={`absolute bottom-0 left-0 h-[2px] bg-brand-gold transition-all duration-500 ${activeCategory === cat.id ? 'w-full' : 'w-0 group-hover:w-1/2'}`} />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-24">
          {filteredItems.map((item: MenuItem, index: number) => (
            <Reveal key={item.id} delay={index * 0.15} variant="slide" direction="up">
              <div className="group cursor-pointer" onClick={() => setSelectedItem(item)}>
                <div className="relative overflow-hidden mb-8 rounded-sm shadow-[0_40px_80px_-15px_rgba(0,0,0,0.15)] aspect-[4/5] bg-brand-stone/10">
                  <img src={item.image} alt={item.name[lang]} className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-110" />
                  {item.popular && (
                    <div className={`absolute top-6 ${isRTL ? 'left-6' : 'right-6'} bg-brand-gold text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 shadow-2xl`}>
                      {UI_TEXT.bestSeller[lang]}
                    </div>
                  )}
                  <div className="absolute inset-0 bg-brand-dark/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[3px]">
                      <span className="text-white font-serif italic text-2xl border border-white/40 px-10 py-4 bg-brand-dark/20 shadow-xl">
                          {UI_TEXT.viewDetails[lang]}
                      </span>
                  </div>
                </div>
                <div className={`flex flex-col gap-4 ${isRTL ? 'text-right' : 'text-left'}`}>
                  <h4 className="font-serif text-3xl text-brand-dark group-hover:text-brand-gold transition-colors duration-500 tracking-tight">
                    {item.name[lang]}
                  </h4>
                  <p className="font-sans text-brand-dark/50 text-base md:text-lg leading-relaxed max-w-sm">
                    {item.description[lang]}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {teaser && (
          <div className="mt-24 text-center">
            <button 
              onClick={() => setView('menu')}
              className="inline-flex items-center gap-4 group px-12 py-6 border border-brand-dark text-brand-dark font-sans text-xs font-bold uppercase tracking-[0.4em] hover:bg-brand-dark hover:text-brand-cream transition-all duration-500"
            >
              {isRTL ? 'تصفح القائمة الكاملة' : 'View Full Menu'}
              <ArrowRight size={18} className={`transition-transform duration-500 group-hover:translate-x-2 ${isRTL ? 'rotate-180' : ''}`} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Menu;