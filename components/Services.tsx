import React from 'react';
import { motion } from 'framer-motion';
import { Feather, Layers, Sparkles, Eye } from 'lucide-react';
import { SERVICES } from '../constants';
import { ServiceItem } from '../types';

const iconMap = {
  Feather: Feather,
  Layers: Layers,
  Sparkles: Sparkles,
  Eye: Eye,
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-heading text-3xl md:text-4xl text-black mb-4">Services & Preise</h2>
          <p className="text-gray-600 font-light">
            Wähle deinen Look. Alle Behandlungen beinhalten eine ausführliche Beratung.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service: ServiceItem, index) => {
            const Icon = iconMap[service.iconName];
            return (
              <motion.div 
                key={service.id}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-black mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:bg-black group-hover:text-white">
                  <Icon size={28} strokeWidth={1.5} />
                </div>
                <h3 className="font-heading font-medium text-xl text-black mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 mb-6 leading-relaxed flex-grow">
                  {service.description}
                </p>
                <div className="mt-auto pt-6 border-t border-gray-200 w-full">
                  <span className="font-medium text-lg text-black">{service.price}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm text-gray-500 mb-6">
            * Preise können je nach Aufwand variieren. Neumodellage inkl. Bürstchen und Pflegehinweise.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
