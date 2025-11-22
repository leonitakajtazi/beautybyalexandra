import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants';
import { ServiceItem } from '../types';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-heading text-3xl md:text-4xl text-black mb-4">Meine Leistungen</h2>
          <p className="text-gray-600 font-light">
            Wähle deinen Look.
          </p>
        </div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service: ServiceItem, index) => {
            return (
              <motion.div 
                key={service.id}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-full h-60 rounded-xl overflow-hidden mb-4">
  <img 
    src={service.image}
    alt={service.title}
    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
  />
</div>


                <h3 className="font-heading font-medium text-lg text-black">
                  {service.title}
                </h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
