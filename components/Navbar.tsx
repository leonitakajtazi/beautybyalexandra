import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram } from 'lucide-react';
import { INSTAGRAM_URL } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Über mich', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Galerie', href: '#gallery' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Kontakt', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
       <a href="#home" className="flex items-center space-x-2">
  <img src="./images/logo.jpg" alt="Beauty by Alexandra" className="h-10 md:h-12" />
  <span className="font-heading font-light text-2xl md:text-3xl text-brand-dark">
    Beauty by <span className="font-semibold">Alexandra</span>
  </span>
</a>


        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-brand-text hover:text-brand-dark text-sm uppercase tracking-widest transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href={INSTAGRAM_URL} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-brand-dark hover:text-brand-light transition-colors"
          >
            <Instagram size={20} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-brand-dark"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl py-8 px-6 flex flex-col space-y-6 animate-fade-in-down">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-brand-text text-lg font-medium text-center"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="flex justify-center pt-4">
             <a 
              href={INSTAGRAM_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-brand-dark text-white px-6 py-3 rounded-full flex items-center space-x-2"
            >
              <Instagram size={18} />
              <span>Instagram</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;