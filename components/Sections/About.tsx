import React, { useContext } from 'react';
import { Reveal } from '../ui/Reveal';
import { Star } from 'lucide-react';
import { LanguageContext } from '../../App';
import { UI_TEXT } from '../../constants';

const About: React.FC = () => {
  const { lang } = useContext(LanguageContext);
  const isRTL = lang === 'ar';

  return (
    <section id="about" className="py-32 lg:py-48 bg-brand-cream relative">
      <div className="absolute inset-0 bg-mashrabiya opacity-5 pointer-events-none" />
      <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">
        <Reveal variant="scale" duration={1.8} className={isRTL ? 'order-2' : ''}>
          <div className="grid grid-cols-2 gap-6 relative">
            <div className="space-y-6 pt-16">
               <img src="https://images.unsplash.com/photo-1517077304055-6e89a383899d?auto=format&fit=crop&q=80&w=800" alt="Iced Tea Detail" className="w-full h-72 object-cover rounded-sm shadow-2xl bg-brand-stone/20" />
               <img src="https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&q=80&w=800" alt="Cookie Detail" className="w-full h-56 object-cover rounded-sm shadow-2xl bg-brand-stone/20" />
            </div>
            <div className="space-y-6">
               <img src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800" alt="Café Ambiance" className="w-full h-56 object-cover rounded-sm shadow-2xl bg-brand-stone/20" />
               <img src="https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&q=80&w=800" alt="Creamy Gelato" className="w-full h-72 object-cover rounded-sm shadow-2xl bg-brand-stone/20" />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-cream p-5 rounded-full shadow-[0_30px_60px_rgba(0,0,0,0.15)] z-20">
               <div className="border-2 border-brand-gold rounded-full w-28 h-28 flex flex-col items-center justify-center text-brand-dark">
                  <Star className="w-4 h-4 text-brand-gold fill-brand-gold mb-1" />
                  <span className="font-serif font-bold text-2xl leading-none">4.8</span>
                  <span className="text-[10px] uppercase tracking-wider mt-2 font-bold opacity-40">{UI_TEXT.rating[lang]}</span>
               </div>
            </div>
          </div>
        </Reveal>

        <div className={isRTL ? 'order-1 text-right' : 'text-left'}>
          <Reveal delay={0.3} variant="slide" direction={isRTL ? 'left' : 'right'}>
            <h2 className="font-sans text-brand-gold text-xs font-bold tracking-[0.4em] uppercase mb-6">
              {UI_TEXT.ourStory[lang]}
            </h2>
            <h3 className="font-serif text-5xl md:text-6xl text-brand-dark mb-10 leading-[1.1] tracking-tight">
              {isRTL ? (
                <>أكثر من مجرد كافيه.<br/><span className="italic text-brand-gold">قصة عريقة من جدة.</span></>
              ) : (
                <>More than a café.<br/><span className="italic text-brand-gold">A Jeddah Tradition.</span></>
              )}
            </h3>
            <p className="font-sans text-brand-dark/70 text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
              {isRTL 
                ? 'ولدت وايت هارت في شوارع جدة النابضة بالحياة، وبدأت بشغف بسيط: إتقان فن الشاي المثلج. ما بدأ كسرّ محلي نما ليصبح وجهة مفضلة لمن يبحثون عن الجودة بلا مساومة.'
                : 'Born in the vibrant streets of Jeddah, White Heart started with a simple obsession: perfecting the art of cold tea. What began as a local secret has grown into a beloved destination for those who seek quality without compromise.'}
            </p>
            <div className={`flex items-center gap-6 pt-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <div className="h-[1px] w-16 bg-brand-gold" />
              <span className="font-serif italic text-2xl text-brand-dark opacity-80">
                {isRTL ? 'تذوق الحب في كل رشفة.' : 'Taste the love in every sip.'}
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default About;