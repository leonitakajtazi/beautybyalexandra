// Footer.tsx
import React from 'react';
import { CEO_HANDLE, INSTAGRAM_URL } from '../constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="text-center md:text-left">
            <h3 className="font-heading text-xl mb-2">Beauty by Alexandra</h3>
            <p className="text-gray-300 text-sm">Premium Lash Extensions im Dachauer Hinterland.</p>
          </div>

          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Impressum</a>
            <a href="#" className="hover:text-white transition-colors">Datenschutz</a>
            <a href="#" className="hover:text-white transition-colors">AGB</a>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
          <p>&copy; {currentYear} Beauty by Alexandra. Alle Rechte vorbehalten.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
             <span>CEO: {CEO_HANDLE}</span>
             <span className="hidden md:inline">|</span>
             <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
