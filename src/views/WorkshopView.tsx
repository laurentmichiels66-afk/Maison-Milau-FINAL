import React from 'react';
import { Sparkles, Calendar, Coffee, Users, ArrowRight, Award } from 'lucide-react';
import { ValidatedLink } from '../components/ValidatedLink';

interface WorkshopViewProps {
  onNavigate: (path: string) => void;
}

export const WorkshopView: React.FC<WorkshopViewProps> = ({ onNavigate }) => {
  return (
    <div className="bg-[#faf8f5] text-stone-900 min-h-screen pb-20" id="workshops-page-container">
      {/* Header */}
      <section className="bg-white border-b border-stone-200 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <nav className="flex items-center gap-2 text-xs text-stone-500 mb-3">
            <button onClick={() => onNavigate('/')} className="hover:text-amber-900">Home</button>
            <span>/</span>
            <span className="text-stone-900 font-semibold">Workshops & Proeverijen</span>
          </nav>

          <div className="max-w-3xl">
            <span className="text-xs font-bold text-amber-800 uppercase tracking-widest block">
              Atelier Oudegem (Dendermonde)
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-stone-950 mt-1 leading-tight">
              Workshops, Cupping & Barista Sessies
            </h1>
            <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed font-sans">
              Ontwikkel je zintuigen en leer professioneel koffie proeven zoals een meesterbrander. Ontdek de subtiele verschillen tussen terroirs, variëteiten en verwerkingsmethodes in ons koffie-atelier in Oudegem.
            </p>
          </div>
        </div>
      </section>

      {/* Workshop Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Workshop 1: SCA Cupping */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-xs flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-amber-800 uppercase tracking-wider block mb-2">Sensorisch Proeven</span>
              <h3 className="font-serif text-2xl font-bold text-stone-950 mb-2">SCA Cuppingsessie</h3>
              <p className="text-xs text-stone-600 mb-4 leading-relaxed">
                Leer proeven via het officiële Specialty Coffee Association (SCA) cupping protocol. Breek de korst, slurpt de aroma's en ontdek smaaktonen van jasmijn tot donkere chocolade.
              </p>
              <div className="space-y-1 text-xs text-stone-700 bg-stone-50 p-3 rounded-lg border border-stone-100 mb-4">
                <div><strong>Duur:</strong> 2 uur</div>
                <div><strong>Groep:</strong> Maximaal 8 personen</div>
                <div><strong>Inclusief:</strong> Proeverij van 6 specialty coffees + gratis 250g bonen naar keuze</div>
              </div>
            </div>
            <button
              onClick={() => onNavigate('/afspraakplanner')}
              className="w-full py-2.5 bg-amber-900 text-white rounded text-xs font-bold hover:bg-amber-800 transition-colors flex items-center justify-center gap-1.5"
            >
              <span>Boek Cuppingsessie (€45 p.p.)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Workshop 2: Home Barista */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-xs flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-amber-800 uppercase tracking-wider block mb-2">Praktijk & Extractie</span>
              <h3 className="font-serif text-2xl font-bold text-stone-950 mb-2">Home Barista Masterclass</h3>
              <p className="text-xs text-stone-600 mb-4 leading-relaxed">
                Haal het maximale uit uw espressomachine of piston thuis. Leer maalgraad afstellen, perfecte dosering, channeling voorkomen en fluweelzacht microschuim opschuimen voor latte art.
              </p>
              <div className="space-y-1 text-xs text-stone-700 bg-stone-50 p-3 rounded-lg border border-stone-100 mb-4">
                <div><strong>Duur:</strong> 3 uur</div>
                <div><strong>Groep:</strong> 4 tot 6 deelnemers</div>
                <div><strong>Inclusief:</strong> Handson oefenen op professionele La Marzocco machine</div>
              </div>
            </div>
            <button
              onClick={() => onNavigate('/afspraakplanner')}
              className="w-full py-2.5 bg-amber-900 text-white rounded text-xs font-bold hover:bg-amber-800 transition-colors flex items-center justify-center gap-1.5"
            >
              <span>Boek Masterclass (€75 p.p.)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Workshop 3: Private Blend & Teambuilding */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-xs flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-amber-800 uppercase tracking-wider block mb-2">Bedrijven & Groepen</span>
              <h3 className="font-serif text-2xl font-bold text-stone-950 mb-2">Blend Creation & Teambuilding</h3>
              <p className="text-xs text-stone-600 mb-4 leading-relaxed">
                Ontwerp samen met uw collega's of vriendengroep jullie eigen exclusieve huisblend. We branden ter plekke een unieke batch bonen die iedereen mee naar huis krijgt in gepersonaliseerde zakken.
              </p>
              <div className="space-y-1 text-xs text-stone-700 bg-stone-50 p-3 rounded-lg border border-stone-100 mb-4">
                <div><strong>Duur:</strong> Op maat (2 tot 4 uur)</div>
                <div><strong>Groep:</strong> 6 tot 25 personen</div>
                <div><strong>Inclusief:</strong> Drankjes, artisanale zoetigheden & eigen blendzakken</div>
              </div>
            </div>
            <button
              onClick={() => onNavigate('/afspraakplanner')}
              className="w-full py-2.5 bg-amber-900 text-white rounded text-xs font-bold hover:bg-amber-800 transition-colors flex items-center justify-center gap-1.5"
            >
              <span>Vraag Privé-Sessie Aan</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
