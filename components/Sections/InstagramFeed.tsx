import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { Heart, Instagram, ArrowRight } from 'lucide-react';
import { INSTAGRAM_POSTS, UI_TEXT } from '../../constants';
import { Reveal } from '../ui/Reveal';
import { LanguageContext } from '../../App';

const InstagramFeed: React.FC = () => {
  const { lang } = useContext(LanguageContext);
  const isRTL = lang === 'ar';

  return (
    <section className="py-32 bg-brand-cream border-t border-brand-dark/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-20 text-center">
          <Reveal variant="slide">
            <h2 className="font-sans text-brand-gold text-xs font-bold tracking-[0.4em] uppercase mb-4">
              {UI_TEXT.socialHeartbeat[lang]}
            </h2>
            <h3 className="font-serif text-5xl md:text-6xl text-brand-dark mb-8 tracking-tight">
              {UI_TEXT.capturedAt[lang]}
            </h3>
          </Reveal>
      </div>

      {/* Film Strip / Polaroid Carousel */}
      <div className="flex flex-nowrap gap-12 px-6 lg:px-12 overflow-x-auto pb-24 no-scrollbar select-none cursor-grab active:cursor-grabbing">
        {INSTAGRAM_POSTS.map((post, idx) => (
          <motion.div 
            key={post.id}
            initial={{ opacity: 0, rotate: idx % 2 === 0 ? -4 : 4, y: 50 }}
            whileInView={{ opacity: 1, rotate: idx % 2 === 0 ? -2 : 2, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            whileHover={{ y: -15, rotate: 0, scale: 1.02 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="min-w-[320px] md:min-w-[420px] bg-white p-5 pb-14 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] transition-all group"
          >
            <div className="aspect-square bg-brand-stone/10 overflow-hidden mb-8 relative">
              <img src={post.image} alt="Instagram Post" className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110" />
              <div className="absolute top-4 right-4 bg-black/20 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-2 text-white text-[10px] font-bold">
                <Heart size={12} className="fill-white" />
                {post.likes}
              </div>
            </div>
            <div className={`px-2 ${isRTL ? 'text-right' : 'text-left'}`}>
              <div className={`flex items-center gap-2 mb-4 text-brand-gold ${isRTL ? 'flex-row-reverse' : ''}`}>
                <Instagram size={18} />
                <span className="font-sans font-bold text-[10px] uppercase tracking-widest opacity-60">@whiteheartcafe</span>
              </div>
              <p className="font-serif italic text-xl text-brand-dark/90 line-clamp-2 leading-snug">
                {post.caption[lang]}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-12">
          <Reveal variant="fade">
            <a href="https://instagram.com" target="_blank" className="inline-flex items-center gap-4 text-brand-dark hover:text-brand-gold transition-colors group px-8 py-4 border border-brand-dark/10 rounded-full">
              <span className="font-sans font-bold uppercase tracking-[0.3em] text-[10px]">{isRTL ? 'انضم إلى مجتمعنا' : 'Join our Community'}</span>
              <ArrowRight size={16} className={isRTL ? 'rotate-180 group-hover:-translate-x-2' : 'group-hover:translate-x-2'} />
            </a>
          </Reveal>
      </div>
    </section>
  );
};

export default InstagramFeed;