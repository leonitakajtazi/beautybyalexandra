import React from 'react';
import { motion } from 'framer-motion';
import { Award, Heart, ShieldCheck } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl text-black mb-6">
              Hi, ich bin Alexandra.
            </h2>
            <div className="w-16 h-1 bg-gray-700 mb-8"></div>
            
            <p className="text-gray-600 leading-relaxed mb-6">
              Als zertifizierte Lash Artistin habe ich meine Leidenschaft zum Beruf gemacht. 
              In meinem gemütlichen Homestudio im Dachauer Hinterland schaffe ich nicht nur 
              wunderschöne Wimpern-Looks, sondern auch eine Atmosphäre zum Wohlfühlen.
            </p>
            
            <p className="text-gray-600 leading-relaxed mb-8">
              Mir ist es wichtig, dass deine Wimpern nicht nur gut aussehen, sondern auch 
              gesund bleiben. Deshalb arbeite ich ausschließlich mit hochwertigen Materialien 
              und lege größten Wert auf Hygiene und eine saubere Applikationstechnik.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
              <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
                <div className="bg-gray-300 p-3 rounded-full mb-3 text-black">
                  <Award size={24} />
                </div>
                <h3 className="font-medium text-sm uppercase tracking-wide mb-1">Zertifiziert</h3>
                <p className="text-xs text-gray-500">Professionell geschult</p>
              </div>
              <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
                 <div className="bg-gray-300 p-3 rounded-full mb-3 text-black">
                  <ShieldCheck size={24} />
                </div>
                <h3 className="font-medium text-sm uppercase tracking-wide mb-1">Hygiene</h3>
                <p className="text-xs text-gray-500">Höchste Standards</p>
              </div>
              <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
                 <div className="bg-gray-300 p-3 rounded-full mb-3 text-black">
                  <Heart size={24} />
                </div>
                <h3 className="font-medium text-sm uppercase tracking-wide mb-1">Passion</h3>
                <p className="text-xs text-gray-500">Mit Liebe zum Detail</p>
              </div>
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="aspect-[4/5] bg-gray-200 rounded-2xl overflow-hidden shadow-lg relative z-10">
              <img 
                src="./images/AS.jpg" 
                alt="Portrait Beauty by Alexandra" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Decorative Background Element */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-gray-700 rounded-2xl z-0"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
