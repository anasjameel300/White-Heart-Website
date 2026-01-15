import React from 'react';
import Navbar from './components/Layout/Navbar';
import Hero from './components/Sections/Hero';
import About from './components/Sections/About';
import Menu from './components/Sections/Menu';
import Delivery from './components/Sections/Delivery';
import Locations from './components/Sections/Locations';
import Footer from './components/Layout/Footer';
import ScrollToTop from './components/ui/ScrollToTop.tsx';

const App: React.FC = () => {
  return (
    <div className="bg-brand-cream min-h-screen selection:bg-brand-gold selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Menu />
        <Delivery />
        <Locations />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default App;