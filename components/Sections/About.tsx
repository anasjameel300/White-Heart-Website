import React from 'react';
import { Reveal } from '../ui/Reveal';
import { Star } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-brand-cream relative">
      {/* Pattern overlay */}
      <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Image Grid */}
        <Reveal variant="scale" duration={1}>
          <div className="grid grid-cols-2 gap-4 relative">
            <div className="space-y-4 pt-12">
              <img
                src="https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?auto=format&fit=crop&q=80&w=800"
                alt="Cold tea detail"
                className="w-full h-64 object-cover rounded-sm shadow-lg hover:shadow-xl transition-shadow duration-500"
              />
              <img
                src="https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&q=80&w=800"
                alt="Cookie stack"
                className="w-full h-48 object-cover rounded-sm shadow-lg hover:shadow-xl transition-shadow duration-500"
              />
            </div>
            <div className="space-y-4">
              <img
                src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&q=80&w=800"
                alt="Cafe interior details"
                className="w-full h-48 object-cover rounded-sm shadow-lg hover:shadow-xl transition-shadow duration-500"
              />
              <img
                src="https://images.unsplash.com/photo-1580915411954-282cb1b0d780?auto=format&fit=crop&q=80&w=800"
                alt="Ice cream scoop"
                className="w-full h-64 object-cover rounded-sm shadow-lg hover:shadow-xl transition-shadow duration-500"
              />
            </div>
            {/* Badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-cream p-4 rounded-full shadow-xl">
              <div className="border border-brand-gold rounded-full w-24 h-24 flex flex-col items-center justify-center text-brand-dark">
                <Star className="w-4 h-4 text-brand-gold fill-brand-gold mb-1" />
                <span className="font-serif font-bold text-xl leading-none">4.8</span>
                <span className="text-[10px] uppercase tracking-wider mt-1">Rating</span>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Content */}
        <div className="relative z-10">
          <Reveal delay={0.2} variant="slide" direction="right">
            <h2 className="font-sans text-brand-gold text-xs font-bold tracking-[0.2em] uppercase mb-4">
              Our Story
            </h2>
            <h3 className="font-serif text-4xl md:text-5xl text-brand-dark mb-8 leading-tight">
              More than a café.<br />
              <span className="italic">A Jeddah Tradition.</span>
            </h3>
            <p className="font-sans text-brand-dark/70 text-lg leading-relaxed mb-6">
              Born in the vibrant streets of Jeddah, White Heart started with a simple obsession: perfecting the art of cold tea. What began as a local secret has grown into a beloved destination for those who seek quality without compromise.
            </p>
            <p className="font-sans text-brand-dark/70 text-lg leading-relaxed mb-8">
              From our warm, gooey cookies baked fresh hourly to our artisanal ice creams, every item on our menu is crafted to bring a moment of joy to your day.
            </p>

            <div className="flex items-center gap-4">
              <div className="h-[1px] w-12 bg-brand-gold"></div>
              <span className="font-serif italic text-xl text-brand-dark">Taste the love in every sip.</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default About;