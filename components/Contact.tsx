import React, { useState } from 'react';
import { Instagram, Send, MapPin, Mail } from 'lucide-react';
import { INSTAGRAM_URL, INSTAGRAM_HANDLE } from '../constants';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Since this is a frontend demo, we just alert. 
    // In production this would connect to an email service.
    const subject = `Anfrage von ${formState.name}`;
    const body = `Name: ${formState.name}\nNachricht: ${formState.message}`;
    window.location.href = `mailto:info@beautybyalexandra.de?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left: Booking Info & CTA */}
          <div>
            <h2 className="font-heading text-4xl text-brand-dark mb-6">Termin vereinbaren</h2>
            <p className="text-brand-text/80 mb-8 leading-relaxed">
              Ich freue mich darauf, dich in meinem Homestudio begrüßen zu dürfen. 
              Da ich während der Behandlungen nicht telefonieren kann, finden Terminvereinbarungen 
              ausschließlich schriftlich statt.
            </p>

            <div className="space-y-6 mb-10">
               <div className="flex items-start gap-4">
                <div className="bg-brand-blush p-3 rounded-full text-brand-dark shrink-0">
                  <Instagram size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-brand-dark">Instagram DM (Bevorzugt)</h3>
                  <p className="text-sm text-gray-500 mb-2">Schreib mir einfach deinen Wunschtermin.</p>
                  <a 
                    href={INSTAGRAM_URL} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-brand-dark font-medium border-b border-brand-dark hover:text-brand-light hover:border-brand-light transition-colors"
                  >
                    {INSTAGRAM_HANDLE}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-brand-blush p-3 rounded-full text-brand-dark shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-brand-dark">Standort</h3>
                  <p className="text-sm text-gray-500">Homestudio im Dachauer Hinterland<br/>Genaue Adresse bei Terminbestätigung.</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-brand-white rounded-2xl border border-brand-dark/5">
              <h4 className="font-heading mb-4 text-brand-dark">Schnelle Nachricht senden</h4>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="sr-only">Dein Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    placeholder="Dein Name" 
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-dark focus:ring-0 outline-none bg-white transition-colors"
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">Nachricht</label>
                  <textarea 
                    id="message" 
                    rows={3} 
                    placeholder="Deine Frage oder Terminwunsch..." 
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-dark focus:ring-0 outline-none bg-white transition-colors resize-none"
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-brand-dark text-white py-3 rounded-lg hover:bg-brand-light transition-colors flex items-center justify-center gap-2 font-medium tracking-wide"
                >
                  <span>Absenden</span>
                  <Send size={16} />
                </button>
              </form>
            </div>
          </div>

          {/* Right: Mock Instagram Feed */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-heading text-xl">Folge mir auf Instagram</h3>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-sm text-brand-dark font-medium hover:underline">
                {INSTAGRAM_HANDLE}
              </a>
            </div>
            
            <div className="grid grid-cols-2 gap-2">
               {/* Mock Insta Grid */}
               <div className="aspect-square bg-gray-100 rounded overflow-hidden">
                 <img src="https://picsum.photos/id/106/400/400" alt="Insta post" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
               </div>
               <div className="aspect-square bg-gray-100 rounded overflow-hidden">
                 <img src="https://picsum.photos/id/129/400/400" alt="Insta post" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
               </div>
               <div className="aspect-square bg-gray-100 rounded overflow-hidden">
                 <img src="https://picsum.photos/id/177/400/400" alt="Insta post" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
               </div>
               <div className="aspect-square bg-gray-100 rounded overflow-hidden flex items-center justify-center bg-brand-dark/5 group cursor-pointer">
                 <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-center p-4">
                    <span className="block text-brand-dark font-medium mb-2">Mehr sehen</span>
                    <Instagram className="mx-auto text-brand-dark group-hover:scale-125 transition-transform" />
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