import React from 'react';
import { ArrowRight, ShoppingBag, Smartphone } from 'lucide-react';
import { Reveal } from '../ui/Reveal';

const Delivery: React.FC = () => {
  return (
    <section id="delivery" className="py-24 bg-brand-dark text-brand-cream relative overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-accent/20 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <Reveal variant="slide" direction="up">
              <h2 className="font-sans text-brand-gold text-xs font-bold tracking-[0.2em] uppercase mb-4">
                Delivery
              </h2>
              <h3 className="font-serif text-4xl md:text-5xl text-brand-cream mb-6 leading-tight">
                Your favorites,<br />
                <span className="italic text-brand-stone">delivered to your door.</span>
              </h3>
              <p className="font-sans text-brand-stone/70 text-lg leading-relaxed mb-10 max-w-md">
                Craving our signature cold tea or a warm cookie box? We are available on all major delivery platforms across Jeddah.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#" className="group flex items-center justify-between px-6 py-4 bg-brand-cream text-brand-dark rounded-sm min-w-[200px] hover:bg-brand-gold transition-colors duration-300">
                  <span className="font-bold uppercase tracking-wider text-sm">HungerStation</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="#" className="group flex items-center justify-between px-6 py-4 border border-brand-stone/20 text-brand-cream rounded-sm min-w-[200px] hover:border-brand-gold hover:text-brand-gold transition-colors duration-300">
                  <span className="font-bold uppercase tracking-wider text-sm">Jahez</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
              <div className="mt-4">
                <a href="#" className="group flex items-center justify-between px-6 py-4 border border-brand-stone/20 text-brand-cream rounded-sm w-full sm:w-[200px] hover:border-brand-gold hover:text-brand-gold transition-colors duration-300">
                  <span className="font-bold uppercase tracking-wider text-sm">ToYou</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </Reveal>
          </div>

          {/* Visual/Image */}
          <div className="order-1 lg:order-2 relative">
            <Reveal delay={0.3} variant="scale">
              <div className="relative z-10 bg-brand-stone/5 border border-brand-stone/10 p-8 rounded-sm backdrop-blur-sm">
                <div className="aspect-square relative overflow-hidden rounded-sm mb-6">
                  <img
                    src="https://images.unsplash.com/photo-1607567793390-3482598379ba?q=80&w=800&auto=format&fit=crop"
                    alt="Takeaway packaging"
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="flex items-center gap-4 text-brand-gold">
                  <ShoppingBag className="w-6 h-6" />
                  <span className="font-serif italic text-xl">Perfectly packaged for freshness.</span>
                </div>
              </div>
              {/* Decorative floating element */}
              <div className="absolute -bottom-10 -left-10 bg-brand-gold p-6 rounded-full hidden md:block shadow-2xl animate-bounce-slow">
                <Smartphone className="w-8 h-8 text-brand-dark" />
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Delivery;