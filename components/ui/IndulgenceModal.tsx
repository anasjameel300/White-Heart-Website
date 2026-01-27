import React, { useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Heart } from 'lucide-react';
import { MenuItem } from '../../types';
import { LanguageContext } from '../../App';
import { UI_TEXT, MENU_ITEMS } from '../../constants';

interface IndulgenceModalProps {
  item: MenuItem | null;
  onClose: () => void;
  onSelectItem: (item: MenuItem) => void;
}

const IndulgenceModal: React.FC<IndulgenceModalProps> = ({ item, onClose, onSelectItem }) => {
  const { lang } = useContext(LanguageContext);
  const isRTL = lang === 'ar';

  const getPairingItems = (ids?: string[]) => {
    if (!ids) return [];
    return MENU_ITEMS.filter(m => ids.includes(m.id));
  };

  return (
    <AnimatePresence>
      {item && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 md:px-0">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-brand-dark/95 backdrop-blur-md"
          />
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 40 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-5xl bg-brand-cream overflow-hidden flex flex-col md:flex-row shadow-[0_50px_100px_rgba(0,0,0,0.5)] rounded-sm max-h-[90vh] overflow-y-auto md:overflow-hidden"
          >
            <button
              onClick={onClose}
              className={`absolute top-6 ${isRTL ? 'left-6' : 'right-6'} z-10 p-2 text-brand-dark hover:text-brand-gold transition-colors`}
            >
              <X size={28} />
            </button>

            <div className="w-full md:w-1/2 h-[350px] md:h-auto overflow-hidden bg-brand-stone/10">
              <motion.img
                key={item.image}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                src={item.image}
                alt={item.name[lang]}
                className="w-full h-full object-cover"
              />
            </div>

            <div className={`w-full md:w-1/2 p-10 lg:p-16 flex flex-col justify-between bg-brand-cream ${isRTL ? 'text-right' : 'text-left'}`}>
              <div>
                <h4 className="font-sans text-brand-gold text-xs font-bold tracking-[0.4em] uppercase mb-4">
                  {UI_TEXT.indulgenceGuide[lang]}
                </h4>
                <h3 className="font-serif text-5xl lg:text-6xl text-brand-dark mb-2 tracking-tight">
                  {item.name[lang]}
                </h3>
                <div className="font-sans text-brand-gold font-bold text-lg tracking-[0.2em] uppercase mb-6">
                  {item.price}
                </div>
                <p className="font-sans text-brand-dark/60 text-lg md:text-xl leading-relaxed mb-12">
                  {item.description[lang]}
                </p>

                <div className="pt-8 border-t border-brand-dark/10">
                  <h5 className="font-sans text-[10px] font-bold uppercase tracking-[0.3em] text-brand-dark/40 mb-6 flex items-center gap-4">
                    {isRTL ? <><span className="h-[1px] flex-1 bg-brand-dark/10"></span> {UI_TEXT.perfectMatch[lang]}</> : <>{UI_TEXT.perfectMatch[lang]} <span className="h-[1px] flex-1 bg-brand-dark/10"></span></>}
                  </h5>
                  <div className="grid grid-cols-2 gap-6">
                    {getPairingItems(item.pairings).map(pair => (
                      <div
                        key={pair.id}
                        className="flex flex-col gap-3 group cursor-pointer"
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectItem(pair);
                        }}
                      >
                        <div className="aspect-square overflow-hidden rounded-sm bg-brand-stone/20 relative">
                          <img src={pair.image} alt={pair.name[lang]} className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-700" />
                          <div className="absolute inset-0 bg-brand-gold/0 group-hover:bg-brand-gold/10 transition-colors" />
                        </div>
                        <span className="font-serif text-lg text-brand-dark group-hover:text-brand-gold transition-colors">{pair.name[lang]}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <button className="mt-12 w-full py-5 bg-brand-dark text-brand-cream font-sans text-xs font-bold uppercase tracking-[0.3em] hover:bg-brand-gold transition-all duration-500 shadow-xl rounded-sm">
                {UI_TEXT.orderNow[lang]}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default IndulgenceModal;