import React from 'react';
import { MapPin, Calendar, Clock, Coffee, Sparkles, ArrowRight } from 'lucide-react';
import { ValidatedLink } from '../components/ValidatedLink';

interface MarketsViewProps {
  onNavigate: (path: string) => void;
}

export const MarketsView: React.FC<MarketsViewProps> = ({ onNavigate }) => {
  return (
    <div className="bg-[#faf8f5] text-stone-900 min-h-screen pb-20" id="markets-page-container">
      {/* Header */}
      <section className="bg-white border-b border-stone-200 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <nav className="flex items-center gap-2 text-xs text-stone-500 mb-3">
            <button onClick={() => onNavigate('/')} className="hover:text-amber-900">Home</button>
            <span>/</span>
            <span className="text-stone-900 font-semibold">Lokale Markten</span>
          </nav>

          <div className="max-w-3xl">
            <span className="text-xs font-bold text-amber-800 uppercase tracking-widest block">
              Ontmoet Ons Wekelijks
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-stone-950 mt-1 leading-tight">
              Proef & Koop Vers Gebrande Bonen op de Markt
            </h1>
            <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed font-sans">
              Kom proeven en koop je vers gebrande bonen rechtstreeks op de wekelijkse markten in Dendermonde, Wetteren en Aalst. Onze meesterbrander staat klaar met vers gezette filter- en espressokoffie en professioneel zetadvies.
            </p>
          </div>
        </div>
      </section>

      {/* Markets Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Dendermonde */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase text-amber-800 tracking-wider">Elke Week</span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-amber-100 text-amber-900">Maandag</span>
              </div>

              <h2 className="font-serif text-2xl font-bold text-stone-950 mb-2">
                Dendermonde
              </h2>

              <div className="space-y-2 text-xs text-stone-600 mb-6">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-amber-900" />
                  <span>Grote Markt & Centrum, 9200 Dendermonde</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-amber-900" />
                  <span>08:00 – 13:00</span>
                </div>
              </div>

              <p className="text-xs text-stone-700 leading-relaxed">
                Onze thuisbasis! Ontdek hier onze vers gebrande houseblends, seizoensgebonden single origins en proef versgemalen bonen op uw eigen gewenste zetmethode.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-stone-100">
              <span className="text-[11px] text-stone-400 block mb-2">Betaling via Bancontact, Payconiq of cash</span>
              <button
                onClick={() => onNavigate('/webshop')}
                className="text-xs font-bold text-amber-900 hover:text-amber-700 inline-flex items-center gap-1.5"
              >
                <span>Of bestel vooraf online & haal af</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Wetteren */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase text-amber-800 tracking-wider">Elke Week</span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-amber-100 text-amber-900">Donderdag</span>
              </div>

              <h2 className="font-serif text-2xl font-bold text-stone-950 mb-2">
                Wetteren
              </h2>

              <div className="space-y-2 text-xs text-stone-600 mb-6">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-amber-900" />
                  <span>Marktplein, 9230 Wetteren</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-amber-900" />
                  <span>07:30 – 12:30</span>
                </div>
              </div>

              <p className="text-xs text-stone-700 leading-relaxed">
                Gezellige weekmarkt in het hart van Wetteren. Breng gerust uw herbruikbare bewaarblik mee: we vullen uw favoriete bonen graag ter plaatse af.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-stone-100">
              <span className="text-[11px] text-stone-400 block mb-2">Gratis proefkopje bij aankoop van 1kg bonen</span>
              <button
                onClick={() => onNavigate('/webshop')}
                className="text-xs font-bold text-amber-900 hover:text-amber-700 inline-flex items-center gap-1.5"
              >
                <span>Bekijk assortiment</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Aalst */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase text-amber-800 tracking-wider">Elke Week</span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-amber-100 text-amber-900">Zaterdag</span>
              </div>

              <h2 className="font-serif text-2xl font-bold text-stone-950 mb-2">
                Aalst
              </h2>

              <div className="space-y-2 text-xs text-stone-600 mb-6">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-amber-900" />
                  <span>Grote Markt & Hopmarkt, 9300 Aalst</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-amber-900" />
                  <span>08:00 – 12:30</span>
                </div>
              </div>

              <p className="text-xs text-stone-700 leading-relaxed">
                Start uw zaterdagochtend met vers gebrande specialty koffie in het bruisende centrum van Aalst. Proef onze Barrel Aged specialiteiten gerijpt op eikenhouten vaten.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-stone-100">
              <span className="text-[11px] text-stone-400 block mb-2">Ruime keuze aan cadeauboxen & proefpakketten</span>
              <button
                onClick={() => onNavigate('/webshop')}
                className="text-xs font-bold text-amber-900 hover:text-amber-700 inline-flex items-center gap-1.5"
              >
                <span>Bekijk webshop</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
