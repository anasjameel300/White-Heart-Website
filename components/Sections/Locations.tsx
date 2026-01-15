import React from 'react';
import { MapPin, ArrowUpRight, Clock } from 'lucide-react';
import { LOCATIONS } from '../../constants';
import { Reveal } from '../ui/Reveal';

const Locations: React.FC = () => {
  return (
    <section id="locations" className="py-24 bg-brand-cream relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <div className="text-center mb-16">
          <Reveal variant="blur" direction="up">
            <h2 className="font-sans text-brand-gold text-xs font-bold tracking-[0.2em] uppercase mb-4">
              Visit Us
            </h2>
            <h3 className="font-serif text-4xl md:text-5xl text-brand-dark mb-4">
              Find Your Nearest <br /><span className="italic">White Heart</span>
            </h3>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {LOCATIONS.map((location, index) => (
            <Reveal key={location.id} width="100%" delay={index * 0.15} variant="slide">
              <div className="group bg-white p-8 border border-brand-dark/5 hover:border-brand-gold/50 transition-colors duration-300 shadow-sm hover:shadow-md relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowUpRight className="w-6 h-6 text-brand-gold" />
                </div>

                <h4 className="font-serif text-2xl text-brand-dark mb-2">{location.name}</h4>
                <div className="flex items-start gap-3 text-brand-dark/60 mb-6">
                  <MapPin className="w-5 h-5 shrink-0 mt-1" />
                  <p className="font-sans leading-relaxed">{location.address}</p>
                </div>

                <div className="h-[1px] w-full bg-brand-dark/5 mb-6"></div>

                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div className="flex items-center gap-2 text-brand-dark/50 text-sm">
                    <Clock className="w-4 h-4" />
                    <span>Daily: 4:00 PM - 2:00 AM</span>
                  </div>
                  <a
                    href={location.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-dark font-bold text-xs uppercase tracking-widest border-b border-brand-dark hover:text-brand-gold hover:border-brand-gold transition-colors pb-1"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Map Placeholder Image */}
        <Reveal delay={0.4} variant="scale">
          <div className="mt-16 w-full h-80 bg-brand-stone/30 grayscale rounded-sm overflow-hidden relative group">
            <img
              src="https://images.unsplash.com/photo-1577086663218-615d0b0a5e8f?auto=format&fit=crop&q=80&w=2000"
              alt="Map of Jeddah"
              className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <a href="https://goo.gl/maps/placeholder" target="_blank" className="px-8 py-3 bg-brand-cream text-brand-dark font-bold uppercase tracking-widest text-sm shadow-xl hover:bg-brand-gold hover:text-white transition-colors">
                Open in Google Maps
              </a>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
};

export default Locations;