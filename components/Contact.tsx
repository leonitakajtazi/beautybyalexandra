// Contact.tsx
import React from 'react';
import { Instagram, MapPin } from 'lucide-react';
import { INSTAGRAM_URL, INSTAGRAM_HANDLE } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left: Booking Info & Button */}
          <div>
            <h2 className="font-heading text-4xl text-black mb-6">Termin vereinbaren</h2>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Ich freue mich darauf, dich in meinem Homestudio begrüßen zu dürfen. 
              Da ich während der Behandlungen nicht telefonieren kann, finden Terminvereinbarungen 
              ausschließlich schriftlich statt.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="bg-gray-200 p-3 rounded-full text-black shrink-0">
                  <Instagram size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-black">Instagram DM (Bevorzugt)</h3>
                  <p className="text-sm text-gray-500 mb-2">Schreib mir einfach deinen Wunschtermin.</p>
                  <a 
                    href={INSTAGRAM_URL} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-black font-medium border-b border-black hover:text-gray-600 hover:border-gray-600 transition-colors"
                  >
                    {INSTAGRAM_HANDLE}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-gray-200 p-3 rounded-full text-black shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-black">Standort</h3>
                  <p className="text-sm text-gray-500">Homestudio im Dachauer Hinterland<br/>Genaue Adresse bei Terminbestätigung.</p>
                </div>
              </div>
            </div>

            {/* Booking Button */}
            <div className="p-6 bg-white rounded-2xl border border-gray-200 flex flex-col items-center">
              <h4 className="font-heading mb-4 text-black text-center">Zum Start der Buchung klicken</h4>
              <a 
                href="https://beautybyas-booking.onrender.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 font-medium tracking-wide text-center"
              >
                Jetzt buchen
              </a>
            </div>
          </div>

          {/* Right: Mock Instagram Feed */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-heading text-xl text-black">Folge mir auf Instagram</h3>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-sm text-black font-medium hover:underline">
                {INSTAGRAM_HANDLE}
              </a>
            </div>
            
            <div className="grid grid-cols-2 gap-2">
              <div className="aspect-square bg-gray-100 rounded overflow-hidden">
                <img src="./images/8.PNG" alt="Insta post" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="aspect-square bg-gray-100 rounded overflow-hidden">
                <img src="./images/9.png" alt="Insta post" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="aspect-square bg-gray-100 rounded overflow-hidden">
                <img src="./images/10.png" alt="Insta post" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="aspect-square bg-gray-100 rounded overflow-hidden flex items-center justify-center bg-gray-200/30 group cursor-pointer">
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-center p-4">
                  <span className="block text-black font-medium mb-2">Mehr sehen</span>
                  <Instagram className="mx-auto text-black group-hover:scale-125 transition-transform" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
