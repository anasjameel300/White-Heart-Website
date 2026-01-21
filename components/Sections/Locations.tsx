import React, { useContext } from 'react';
import { MapPin, ArrowUpRight, Clock } from 'lucide-react';
import { LOCATIONS, UI_TEXT } from '../../constants';
import { Reveal } from '../ui/Reveal';
import { LanguageContext } from '../../App';

const Locations: React.FC = () => {
  const { lang } = useContext(LanguageContext);
  const isRTL = lang === 'ar';

  return (
    <section id="locations" className="py-24 bg-brand-cream relative">
      <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        <div className="text-center mb-20">
          <Reveal variant="blur">
            <h2 className="font-sans text-brand-gold text-xs font-bold tracking-[0.2em] uppercase mb-4">
              {UI_TEXT.findBranch[lang]}
            </h2>
            <h3 className="font-serif text-4xl md:text-5xl text-brand-dark">
              {isRTL ? <>تفضلوا بزيارتنا في <br/><span className="italic text-brand-gold">وايت هارت</span></> : <>Find Your Nearest <br/><span className="italic text-brand-gold">White Heart</span></>}
            </h3>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {LOCATIONS.map((loc, idx) => (
            <Reveal key={loc.id} delay={idx * 0.1} variant="slide">
              <div className="group bg-white p-10 border border-brand-dark/5 hover:border-brand-gold/50 transition-all shadow-sm hover:shadow-2xl relative">
                <ArrowUpRight className={`absolute top-10 ${isRTL ? 'left-10 rotate-[-90deg]' : 'right-10'} opacity-0 group-hover:opacity-100 transition-all text-brand-gold`} size={24} />
                <h4 className={`font-serif text-3xl text-brand-dark mb-4 ${isRTL ? 'text-right' : 'text-left'}`}>{loc.name[lang]}</h4>
                <div className={`flex items-start gap-3 text-brand-dark/50 mb-10 ${isRTL ? 'flex-row-reverse text-right' : 'text-left'}`}>
                    <MapPin size={20} className="shrink-0 mt-1" />
                    <p className="font-sans text-lg">{loc.address[lang]}</p>
                </div>
                <div className="h-[1px] w-full bg-brand-dark/5 mb-8" />
                <div className={`flex flex-col sm:flex-row justify-between items-center gap-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <div className={`flex items-center gap-3 text-brand-dark/40 text-sm ${isRTL ? 'flex-row-reverse' : ''}`}>
                        <Clock size={16} />
                        <span>{isRTL ? 'يومياً: ٤ م - ٢ ص' : 'Daily: 4 PM - 2 AM'}</span>
                    </div>
                    <a href={loc.googleMapsUrl} target="_blank" className="text-brand-dark font-bold text-xs uppercase tracking-widest border-b border-brand-dark hover:text-brand-gold hover:border-brand-gold transition-colors pb-1">
                        {isRTL ? 'الاتجاهات' : 'Get Directions'}
                    </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;