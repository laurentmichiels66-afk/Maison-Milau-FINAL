import React from 'react';
import { AppointmentForm } from '../components/AppointmentForm';
import { MapPin, Phone, Mail, Clock, Calendar, Compass, ShieldCheck } from 'lucide-react';
import { ValidatedLink } from '../components/ValidatedLink';

interface AppointmentViewProps {
  onNavigate: (path: string) => void;
}

export const AppointmentView: React.FC<AppointmentViewProps> = ({ onNavigate }) => {
  return (
    <div className="bg-[#faf8f5] text-stone-900 min-h-screen pb-20" id="appointment-page-container">
      {/* Header Banner */}
      <section className="bg-white border-b border-stone-200 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <nav className="flex items-center gap-2 text-xs text-stone-500 mb-3">
            <button onClick={() => onNavigate('/')} className="hover:text-amber-900">Home</button>
            <span>/</span>
            <span className="text-stone-900 font-semibold">Afspraak Planner</span>
          </nav>

          <div className="max-w-3xl">
            <span className="text-xs font-bold text-amber-800 uppercase tracking-widest block">
              Atelier Oudegem (Dendermonde)
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-stone-950 mt-1 leading-tight">
              Plan een Bezoek aan onze Ambachtelijke Branderij
            </h1>
            <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed font-sans">
              Bezoek aan ons branderij-atelier in Oudegem is mogelijk op afspraak of tijdens onze afhaaldagen. Boek een cuppingsessie, kom proeven van onze nieuwste barrel aged batches of bespreek uw eigen private white label met onze meesterbrander.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left: Atelier Info & Opening Times */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs">
              <h3 className="font-serif text-lg font-bold text-stone-900 mb-4">
                Atelier Gegevens
              </h3>

              <ul className="space-y-4 text-xs text-stone-700">
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-amber-900 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-stone-900">Maison Milau Atelier:</span>
                    <span>Jef Scheirsstraat 29</span>
                    <span className="block text-stone-500">9200 Oudegem (Dendermonde)</span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-amber-900 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-stone-900">Telefoon & WhatsApp:</span>
                    <a href="tel:+32467773766" className="text-amber-900 hover:underline">
                      +32 (0)467 77 37 66
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-amber-900 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-stone-900">E-mail:</span>
                    <a href="mailto:Maison-milau@gmail.com" className="text-amber-900 hover:underline">
                      Maison-milau@gmail.com
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs">
              <h3 className="font-serif text-lg font-bold text-stone-900 mb-3">
                Wekelijkse Marktdagen
              </h3>
              <p className="text-xs text-stone-500 mb-4 leading-relaxed">
                Niet in de mogelijkheid om langs te komen op afspraak? Bezoek onze stand op de wekelijkse markten:
              </p>

              <div className="space-y-2.5 text-xs">
                <div className="p-2.5 bg-stone-50 rounded-lg border border-stone-100 flex justify-between items-center">
                  <span className="font-semibold text-stone-800">Maandag Dendermonde</span>
                  <span className="text-stone-500 font-mono">08:00 - 13:00</span>
                </div>
                <div className="p-2.5 bg-stone-50 rounded-lg border border-stone-100 flex justify-between items-center">
                  <span className="font-semibold text-stone-800">Donderdag Wetteren</span>
                  <span className="text-stone-500 font-mono">07:30 - 12:30</span>
                </div>
                <div className="p-2.5 bg-stone-50 rounded-lg border border-stone-100 flex justify-between items-center">
                  <span className="font-semibold text-stone-800">Zaterdag Aalst</span>
                  <span className="text-stone-500 font-mono">08:00 - 12:30</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Appointment Form Widget */}
          <div className="lg:col-span-2">
            <AppointmentForm />
          </div>

        </div>
      </div>
    </div>
  );
};
