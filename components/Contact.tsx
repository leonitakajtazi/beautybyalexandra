import React, { useState } from 'react';
import { Instagram, Send, MapPin } from 'lucide-react';
import { INSTAGRAM_URL, INSTAGRAM_HANDLE } from '../constants';

type Termin = {
  id: number;
  date: string;
  time: string;
  reserved: boolean;
};

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', message: '' });
  
  // Demo Termine
  const [termine, setTermine] = useState<Termin[]>([]);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const addTermin = () => {
    if (!date || !time) return;
    setTermine([...termine, { id: Date.now(), date, time, reserved: false }]);
    setDate('');
    setTime('');
  };

  const reserveTermin = (id: number) => {
    setTermine(termine.map(t => t.id === id ? { ...t, reserved: true } : t));
    alert('Termin erfolgreich reserviert!');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Anfrage von ${formState.name}`;
    const body = `Name: ${formState.name}\nNachricht: ${formState.message}`;
    window.location.href = `mailto:info@beautybyalexandra.de?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left: Booking Info & Demo Termine */}
          <div>
            <h2 className="font-heading text-4xl text-brand-dark mb-6">Termin vereinbaren</h2>
            <p className="text-brand-text/80 mb-8 leading-relaxed">
              Ich freue mich darauf, dich in meinem Homestudio begrüßen zu dürfen. 
              Da ich während der Behandlungen nicht telefonieren kann, finden Terminvereinbarungen 
              ausschließlich schriftlich statt.
            </p>

            {/* Demo Termine */}
            <div className="mb-8 p-6 bg-brand-white rounded-2xl border border-brand-dark/5">
              <h3 className="font-heading mb-4 text-brand-dark">Demo: Eigene Termine hinzufügen</h3>
              <div className="flex gap-2 mb-4">
                <input 
                  type="date" 
                  className="border p-2 rounded w-1/2"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
                <input 
                  type="time" 
                  className="border p-2 rounded w-1/2"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                />
              </div>
              <button 
                className="bg-brand-dark text-white py-2 px-4 rounded hover:bg-brand-light transition-colors mb-4"
                onClick={addTermin}
              >
                Termin hinzufügen
              </button>

              <ul className="space-y-2">
                {termine.map(t => (
                  <li key={t.id} className="flex justify-between items-center border p-2 rounded">
                    <span>{t.date} {t.time}</span>
                    {!t.reserved ? (
                      <button 
                        className="bg-brand-blush text-brand-dark px-2 py-1 rounded hover:bg-brand-dark/10"
                        onClick={() => reserveTermin(t.id)}
                      >
                        Reservieren
                      </button>
                    ) : (
                      <span className="text-green-600 font-medium">Reserviert</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Schnelle Nachricht senden */}
            <div className="p-6 bg-brand-white rounded-2xl border border-brand-dark/5">
              <h4 className="font-heading mb-4 text-brand-dark">Schnelle Nachricht senden</h4>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Dein Name" 
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-dark outline-none"
                  value={formState.name}
                  onChange={(e) => setFormState({...formState, name: e.target.value})}
                />
                <textarea 
                  rows={3} 
                  placeholder="Deine Frage oder Terminwunsch..." 
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-dark outline-none resize-none"
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                />
                <button 
                  type="submit"
                  className="w-full bg-brand-dark text-white py-3 rounded-lg hover:bg-brand-light transition-colors flex items-center justify-center gap-2 font-medium tracking-wide"
                >
                  <Send size={16}/> Absenden
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
                 <img src="./images/8.PNG" alt="Insta post" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
               </div>
               <div className="aspect-square bg-gray-100 rounded overflow-hidden">
                 <img src="./images/9.png" alt="Insta post" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
               </div>
               <div className="aspect-square bg-gray-100 rounded overflow-hidden">
                 <img src="./images/10.png" alt="Insta post" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
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
