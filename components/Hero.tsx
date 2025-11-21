import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { INSTAGRAM_URL } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="./images/back.PNG" 
          alt="Lash Studio Aesthetic" 
          className="w-full h-full object-cover object-center opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/40 to-white/90"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block py-1 px-3 mb-6 border border-gray-400 rounded-full text-black text-xs tracking-[0.2em] uppercase bg-white/50 backdrop-blur-sm">
            Homestudio • Dachauer Hinterland
          </span>
          
          <h1 className="font-heading font-light text-5xl md:text-7xl lg:text-8xl text-black mb-6">
            Elevate Your<br/> <span className="font-medium italic text-gray-700">Natural</span> Beauty
          </h1>
          
          <p className="font-sans text-lg md:text-xl text-gray-600 max-w-xl mx-auto mb-10 leading-relaxed">
            Premium Lash Extensions für den perfekten Augenaufschlag. 
            Individuell, natürlich und mit höchsten Qualitätsstandards.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href={INSTAGRAM_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-black text-white px-8 py-4 rounded-full text-sm uppercase tracking-widest hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              <span>Termin per DM</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#services" 
              className="px-8 py-4 rounded-full text-black border border-gray-400 hover:bg-white hover:border-transparent text-sm uppercase tracking-widest transition-all duration-300 backdrop-blur-sm"
            >
              Preise ansehen
            </a>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <motion.div 
        className="absolute bottom-10 right-10 hidden md:block text-gray-300"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <Sparkles size={120} />
      </motion.div>
    </section>
  );
};

export default Hero;
