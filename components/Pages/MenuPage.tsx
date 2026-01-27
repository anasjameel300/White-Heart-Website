import React, { useState, useContext, useMemo } from 'react';
import { MENU_ITEMS, UI_TEXT } from '../../constants';
import { Reveal } from '../ui/Reveal';
import { MenuItem } from '../../types';
import { LanguageContext, NavigationContext } from '../../App';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ChevronLeft, Heart } from 'lucide-react';
import IndulgenceModal from '../ui/IndulgenceModal';

const MenuPage: React.FC = () => {
  const { lang } = useContext(LanguageContext);
  const { setView } = useContext(NavigationContext);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  const isRTL = lang === 'ar';

  const CATEGORIES = [
    { id: 'All', name: { en: 'All', ar: 'الكل' } },
    { id: 'Cold Tea', name: { en: 'Cold Tea', ar: 'شاي مثلج' } },
    { id: 'Cookies', name: { en: 'Cookies', ar: 'كوكيز' } },
    { id: 'Ice Cream', name: { en: 'Ice Cream', ar: 'جيلاتو' } },
    { id: 'Coffee', name: { en: 'Coffee', ar: 'قهوة' } },
    { id: 'Cakes', name: { en: 'Cakes', ar: 'حلى' } }
  ];

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter(item => {
      const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
      const matchesSearch = item.name[lang].toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description[lang].toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery, lang]);

  return (
    <div className="bg-brand-cream pt-32 lg:pt-40 min-h-screen overflow-x-hidden">

      <IndulgenceModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
        onSelectItem={(item) => setSelectedItem(item)}
      />

      {/* Header Section */}
      <section className="px-6 lg:px-12 mb-20 lg:mb-32">
        <div className="max-w-7xl mx-auto">
          <button
            onClick={() => setView('home')}
            className={`flex items-center gap-3 text-brand-dark/40 hover:text-brand-gold transition-colors mb-12 uppercase text-[10px] font-bold tracking-[0.3em] ${isRTL ? 'flex-row-reverse' : ''}`}
          >
            <ChevronLeft size={16} className={isRTL ? 'rotate-180' : ''} />
            {isRTL ? 'العودة للرئيسية' : 'Back to Heritage'}
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-16">
            <Reveal variant="slide">
              <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-brand-dark tracking-tighter leading-[0.9]">
                {isRTL ? 'قائمة' : 'The'} <br />
                <span className="italic text-brand-gold">{isRTL ? 'الاختيارات' : 'Menu'}</span>
              </h1>
            </Reveal>
            <Reveal delay={0.2} variant="fade">
              <p className={`text-brand-dark/50 font-sans text-xl leading-relaxed max-w-md ${isRTL ? 'text-right lg:ml-auto' : ''}`}>
                {isRTL
                  ? 'من مجموعتنا المميزة من الشاي المثلج إلى الجيلاتو المصنوع يدوياً، كل قطعة مُعدّة بشغف لتمنحكم تجربة لا تُنسى.'
                  : 'From our curated cold brews to artisanal gelato, every item is crafted with passion to deliver an unforgettable sensory journey.'}
              </p>
            </Reveal>
          </div>

          {/* Controls Container */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-10 border-t border-brand-dark/10 pt-12">
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 lg:gap-8">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`text-[11px] font-sans uppercase tracking-[0.4em] px-6 py-3 transition-all relative group ${activeCategory === cat.id
                      ? 'text-brand-dark font-bold'
                      : 'text-brand-dark/30 hover:text-brand-dark'
                    }`}
                >
                  {cat.name[lang]}
                  <span className={`absolute bottom-0 left-0 h-[2px] bg-brand-gold transition-all duration-500 ${activeCategory === cat.id ? 'w-full' : 'w-0 group-hover:w-1/2'}`} />
                </button>
              ))}
            </div>

            <div className={`relative w-full lg:w-96 group ${isRTL ? 'text-right' : ''}`}>
              <Search className={`absolute top-1/2 -translate-y-1/2 text-brand-dark/20 group-focus-within:text-brand-gold transition-colors ${isRTL ? 'right-4' : 'left-4'}`} size={18} />
              <input
                type="text"
                placeholder={isRTL ? 'ابحث في القائمة...' : 'Search selection...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full bg-brand-stone/20 border-none rounded-sm py-4 focus:ring-1 focus:ring-brand-gold outline-none text-brand-dark font-sans placeholder:text-brand-dark/20 transition-all ${isRTL ? 'pr-12 text-right' : 'pl-12'}`}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Menu Grid */}
      <section className="px-6 lg:px-12 pb-48">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="popLayout">
            {filteredItems.length > 0 ? (
              <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-24"
              >
                {filteredItems.map((item, index) => (
                  <motion.div
                    layout
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="group"
                    onClick={() => setSelectedItem(item)}
                  >
                    <div className="relative aspect-[4/5] overflow-hidden mb-10 rounded-sm shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] group-hover:shadow-[0_60px_100px_-20px_rgba(0,0,0,0.2)] transition-all duration-700 bg-brand-stone/10 cursor-pointer">
                      <img
                        src={item.image}
                        alt={item.name[lang]}
                        className="w-full h-full object-cover transition-transform duration-[2.5s] group-hover:scale-110"
                      />
                      {item.popular && (
                        <div className={`absolute top-6 ${isRTL ? 'left-6' : 'right-6'} bg-brand-gold text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5`}>
                          {UI_TEXT.bestSeller[lang]}
                        </div>
                      )}
                      <div className="absolute inset-0 bg-brand-dark/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[4px]">
                        <div className="flex flex-col items-center gap-4">
                          <Heart className="text-white w-12 h-12 stroke-[1.5]" />
                          <span className="text-white font-sans text-[10px] font-bold uppercase tracking-[0.4em]">{UI_TEXT.indulgenceGuide[lang]}</span>
                        </div>
                      </div>
                    </div>
                    <div className={`flex flex-col gap-4 ${isRTL ? 'text-right' : 'text-left'}`}>
                      <div className={`flex justify-between items-baseline gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                        <h3 className="font-serif text-4xl text-brand-dark group-hover:text-brand-gold transition-colors duration-500">
                          {item.name[lang]}
                        </h3>
                        <span className="font-sans text-brand-gold font-bold text-sm tracking-widest uppercase">
                          {item.price}
                        </span>
                      </div>
                      <p className="font-sans text-brand-dark/50 text-lg leading-relaxed">
                        {item.description[lang]}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="py-40 text-center"
              >
                <p className="font-serif text-4xl text-brand-dark/20 italic">
                  {isRTL ? 'لم يتم العثور على نتائج' : 'No items matching your search'}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Delivery Banner */}
      <section className="bg-brand-dark py-32 px-6 lg:px-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-mashrabiya opacity-10" />
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-16">
          <div className={isRTL ? 'text-right' : 'text-left'}>
            <h2 className="font-serif text-5xl md:text-7xl text-brand-cream mb-6 tracking-tight">
              {isRTL ? 'تذوقها الآن في منزلك' : 'Enjoy White Heart at Home'}
            </h2>
            <p className="text-brand-stone/50 font-sans text-xl max-w-xl">
              {isRTL ? 'خدمة التوصيل متاحة عبر جميع التطبيقات الكبرى في جدة. شاينا المثلج وحلوياتنا تصلك طازجة.' : 'Available for delivery across Jeddah. Our signature brews and treats delivered fresh to your doorstep.'}
            </p>
          </div>
          <button
            className="px-16 py-8 bg-brand-gold text-white font-sans text-[11px] font-bold uppercase tracking-[0.4em] hover:bg-brand-cream hover:text-brand-dark transition-all duration-500 shadow-[0_20px_50px_rgba(212,175,55,0.3)]"
          >
            {UI_TEXT.orderNow[lang]}
          </button>
        </div>
      </section>
    </div>
  );
};

export default MenuPage;