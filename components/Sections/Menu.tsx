import React, { useState } from 'react';
import { MENU_ITEMS } from '../../constants';
import { Reveal } from '../ui/Reveal';
import { MenuItem } from '../../types';

const CATEGORIES = ['All', 'Cold Tea', 'Cookies', 'Ice Cream'];

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All'
    ? MENU_ITEMS
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 bg-brand-stone/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <Reveal variant="slide" direction="up">
            <h2 className="font-sans text-brand-gold text-xs font-bold tracking-[0.2em] uppercase mb-4">
              Discover Flavors
            </h2>
            <h3 className="font-serif text-4xl md:text-5xl text-brand-dark mb-4">
              Curated for Your Palette
            </h3>
          </Reveal>

          {/* Category Filter */}
          <Reveal delay={0.2} variant="fade">
            <div className="flex flex-wrap justify-center gap-6 mt-10">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-sm font-sans uppercase tracking-widest px-4 py-2 transition-all duration-300 ${activeCategory === cat
                      ? 'text-brand-dark border-b-2 border-brand-gold'
                      : 'text-brand-dark/50 hover:text-brand-dark'
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {filteredItems.map((item: MenuItem, index: number) => (
            <Reveal key={item.id} width="100%" delay={index % 3 * 0.1} variant="slide">
              <div className="group cursor-pointer">
                <div className="relative overflow-hidden mb-6 rounded-sm shadow-md aspect-[4/5]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {item.popular && (
                    <div className="absolute top-4 right-4 bg-brand-gold text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1">
                      Best Seller
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-serif italic text-2xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      View Details
                    </span>
                  </div>
                </div>
                <div className="flex justify-between items-baseline mb-2">
                  <h4 className="font-serif text-2xl text-brand-dark group-hover:text-brand-gold transition-colors">
                    {item.name}
                  </h4>
                  {item.price && (
                    <span className="font-sans font-bold text-brand-dark">{item.price}</span>
                  )}
                </div>
                <p className="font-sans text-brand-dark/60 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;