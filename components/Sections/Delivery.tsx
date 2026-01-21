import React, { useContext } from 'react';
import { ArrowRight, ShoppingBag, Smartphone } from 'lucide-react';
import { Reveal } from '../ui/Reveal';
import { LanguageContext } from '../../App';
import { UI_TEXT } from '../../constants';

const Delivery: React.FC = () => {
  const { lang } = useContext(LanguageContext);
  const isRTL = lang === 'ar';

  return (
    <section id="delivery" className="py-32 bg-brand-dark text-brand-cream relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold/10 rounded-full blur-[160px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">
          
          <div className={isRTL ? 'order-2 text-right' : 'order-2 lg:order-1'}>
            <Reveal variant="slide" direction="up">
              <h2 className="font-sans text-brand-gold text-xs font-bold tracking-[0.4em] uppercase mb-6">
                {UI_TEXT.delivery[lang]}
              </h2>
              <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl text-brand-cream mb-8 leading-tight tracking-tight">
                {isRTL ? (
                    <>مفضلاتك،<br/><span className="italic text-brand-stone">تصلك لباب بيتك.</span></>
                ) : (
                    <>Your favorites,<br/><span className="italic text-brand-stone">delivered to your door.</span></>
                )}
              </h3>
              <p className="font-sans text-brand-stone/60 text-lg md:text-xl leading-relaxed mb-12 max-w-lg">
                {isRTL 
                  ? 'تشتهي شاينا المثلج أو علبة كوكيز دافئة؟ متوفرون على جميع تطبيقات التوصيل الكبرى في جدة.'
                  : 'Craving our signature cold tea or a warm cookie box? We are available on all major delivery platforms across Jeddah.'}
              </p>

              <div className={`flex flex-col sm:flex-row gap-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <a href="#" className="flex items-center justify-between px-10 py-6 bg-brand-cream text-brand-dark rounded-sm min-w-[240px] hover:bg-brand-gold hover:text-white transition-all shadow-2xl">
                  <span className="font-bold uppercase tracking-widest text-[11px]">HungerStation</span>
                  <ArrowRight size={18} className={isRTL ? 'rotate-180' : ''} />
                </a>
                <a href="#" className="flex items-center justify-between px-10 py-6 border border-white/15 text-brand-cream rounded-sm min-w-[240px] hover:border-brand-gold hover:text-brand-gold transition-all">
                  <span className="font-bold uppercase tracking-widest text-[11px]">Jahez</span>
                  <ArrowRight size={18} className={isRTL ? 'rotate-180' : ''} />
                </a>
              </div>
            </Reveal>
          </div>

          <div className={isRTL ? 'order-1' : 'order-1 lg:order-2'}>
             <Reveal variant="scale" delay={0.4} duration={1.8}>
                <div className="relative bg-white/5 border border-white/10 p-8 lg:p-12 rounded-sm backdrop-blur-xl shadow-2xl overflow-hidden group">
                   <div className="aspect-square relative overflow-hidden rounded-sm mb-10 bg-brand-stone/10">
                      <img 
                        src="https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=1000" 
                        alt="Signature Delivery" 
                        className="w-full h-full object-cover transition-transform duration-[4s] group-hover:scale-105" 
                      />
                      <div className="absolute inset-0 bg-brand-dark/20" />
                   </div>
                   <div className={`flex items-center gap-6 text-brand-gold ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <ShoppingBag size={28} />
                      <span className="font-serif italic text-2xl md:text-3xl leading-none">
                        {isRTL ? 'تغليف مثالي لنكهة طازجة.' : 'Perfectly packaged for freshness.'}
                      </span>
                   </div>
                </div>
             </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Delivery;