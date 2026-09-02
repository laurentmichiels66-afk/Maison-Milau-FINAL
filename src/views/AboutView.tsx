import React from 'react';
import { Coffee, MapPin, Award, HeartHandshake, CheckCircle2, ArrowRight } from 'lucide-react';
import { ValidatedLink } from '../components/ValidatedLink';

interface AboutViewProps {
  onNavigate: (path: string) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onNavigate }) => {
  return (
    <div className="bg-[#faf8f5] text-stone-900 min-h-screen pb-20" id="about-page-container">
      {/* Header */}
      <section className="bg-white border-b border-stone-200 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <nav className="flex items-center gap-2 text-xs text-stone-500 mb-3">
            <button onClick={() => onNavigate('/')} className="hover:text-amber-900">Home</button>
            <span>/</span>
            <span className="text-stone-900 font-semibold">Over Maison Milau</span>
          </nav>

          <div className="max-w-3xl">
            <span className="text-xs font-bold text-amber-800 uppercase tracking-widest block">
              Ambachtelijke Koffiebranderij Oudegem (Dendermonde)
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-stone-950 mt-1 leading-tight">
              Het Verhaal achter Maison Milau
            </h1>
            <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed font-sans">
              Maison Milau is een artisanale micro-roastery ontstaan uit pure passie voor specialty coffee, vakmanschap en eerlijke transparantie. Gebrand in kleine batches in ons atelier in Oudegem.
            </p>
          </div>
        </div>
      </section>

      {/* Story Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4 text-sm text-stone-700 leading-relaxed">
            <h2 className="font-serif text-2xl font-bold text-stone-950">
              Vakmanschap in Kleine Batches
            </h2>
            <p>
              In tegenstelling tot industriële branderijen waar bonen in gigantische volumes donker en bitter worden gebrand, kiezen wij bij Maison Milau voor 'slow craft roasting'. Elke boon heeft zijn eigen optimale brandprofiel om de natuurlijke fruitige, florale of chocolade-achtige tonen maximaal te laten schitteren.
            </p>
            <p>
              Wij selecteren uitsluitend bonen van traceerbare plantages met een gegarandeerde SCA-score (Specialty Coffee Association) tussen 80 en 88+ punten. Zo garanderen we een uitzonderlijke zuiverheid in uw kopje.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-xs space-y-4">
            <span className="text-xs font-bold text-amber-800 uppercase tracking-wider block">Atelier Details</span>
            <div className="space-y-2 text-xs text-stone-700">
              <p><strong>Locatie:</strong> Jef Scheirsstraat 29, 9200 Oudegem (Dendermonde)</p>
              <p><strong>Ondernemingsnummer:</strong> BE 1041.542.844</p>
              <p><strong>Brandfrequentie:</strong> Wekelijks op maandag en dinsdag</p>
              <p><strong>Leveringsbelofte:</strong> Altijd binnen 2 weken na branding bij u thuis of op kantoor</p>
            </div>
            <button
              onClick={() => onNavigate('/afspraakplanner')}
              className="mt-4 px-4 py-2 bg-amber-900 text-white rounded text-xs font-semibold hover:bg-amber-800 transition-colors inline-flex items-center gap-2"
            >
              <span>Bezoek ons atelier op afspraak</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* 3 Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
          <div className="p-6 bg-white rounded-xl border border-stone-200">
            <h3 className="font-serif font-bold text-base text-stone-900 mb-2">1. Democratische Prijzen</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              We maken specialty koffie bereikbaar voor iedereen. Met de Milau Selection geniet u al vanaf €5 van vers gebrande bonen van superieure kwaliteit vergeleken met warenhuismerken.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl border border-stone-200">
            <h3 className="font-serif font-bold text-base text-stone-900 mb-2">2. Vatrijping & Innovatie</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Als een van de weinige branderijen in de Benelux experimenteren we met ongebrande bonen die rijpen op eiken whisky-, rum- en moscatelvaten voor ongekende smaakdiepgang.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl border border-stone-200">
            <h3 className="font-serif font-bold text-base text-stone-900 mb-2">3. Lokale Verankering</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              U vindt ons wekelijks op de markten van Dendermonde, Wetteren en Aalst. We kennen onze klanten persoonlijk en leveren met eigen vervoer in de regio.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
