import React, { useRef, useState } from 'react';
import { Coffee, Building2, UtensilsCrossed, Tag, Check, Award, Truck, ShieldCheck, ArrowRight } from 'lucide-react';
import { B2BCalculator } from '../components/B2BCalculator';
import { B2BQuoteForm } from '../components/B2BQuoteForm';

interface B2BViewProps {
  onNavigate: (path: string) => void;
}

export const B2BView: React.FC<B2BViewProps> = ({ onNavigate }) => {
  const formRef = useRef<HTMLDivElement>(null);
  const [selectedCalculatedVolume, setSelectedCalculatedVolume] = useState<number>(20);

  const scrollToQuoteForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-[#faf8f5] text-stone-900 min-h-screen pb-20" id="b2b-page-container">
      {/* Top Banner */}
      <section className="bg-white border-b border-stone-200 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <nav className="flex items-center gap-2 text-xs text-stone-500 mb-3">
            <button onClick={() => onNavigate('/')} className="hover:text-amber-900">Home</button>
            <span>/</span>
            <span className="text-stone-900 font-semibold">Kantoor & Horeca</span>
          </nav>

          <div className="max-w-3xl">
            <span className="text-xs font-bold text-amber-800 uppercase tracking-widest block">
              B2B Koffieoplossingen
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-stone-950 mt-1 leading-tight">
              Specialty Koffie voor Kantoren, Bedrijven & Horeca
            </h1>
            <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed font-sans">
              Verras uw klanten en medewerkers met dagelijks vers gebrande artisanale specialty koffie. Van flexibele koffieleveringen tot all-in machineformules en white-label branding: Maison Milau is uw lokale koffiepartner in Oost-Vlaanderen en daarbuiten.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <button
                onClick={scrollToQuoteForm}
                className="px-6 py-3 bg-amber-900 text-white rounded-lg text-xs font-bold hover:bg-amber-800 transition-colors shadow-xs"
              >
                Vraag Vrijblijvend Voorstel of Proefpakket Aan
              </button>
              <button
                onClick={() => onNavigate('/afspraakplanner')}
                className="px-6 py-3 bg-stone-100 text-stone-800 rounded-lg text-xs font-semibold hover:bg-stone-200 transition-colors"
              >
                Plan een Proeverij in ons Atelier
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4 B2B Formules Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-800 block">Formules op Maat</span>
          <h2 className="font-serif text-3xl font-bold text-stone-950 mt-1">
            Onze B2B-Formules
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Formule 1 */}
          <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs flex flex-col justify-between">
            <div>
              <div className="p-3 bg-amber-100 text-amber-900 rounded-xl w-fit mb-4">
                <Coffee className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-stone-950 mb-2">
                1. Enkel Koffiebonen (Flexibel Maandvolume)
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed mb-4">
                U beschikt al over een professionele bonenmachine of pistonmachine? Wij leveren maandelijks of tweewekelijks uw gewenste volume vers gebrande specialty koffiebonen aan scherpe B2B-tarieven met staffelkorting. Altijd flexibel aanpasbaar of pauzeerbaar.
              </p>
              <ul className="space-y-2 text-xs text-stone-700">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>Keuze uit Milau Selection Daily, Espresso of Premium Blends</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>Geen langlopende aankoopverplichting</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>Staffelkorting van 10% tot 20% afhankelijk van volume</span>
                </li>
              </ul>
            </div>
            <div className="pt-6 mt-6 border-t border-stone-100">
              <button
                onClick={scrollToQuoteForm}
                className="text-xs font-bold text-amber-900 hover:text-amber-700 inline-flex items-center gap-1.5"
              >
                <span>Vraag offerte voor koffiebonen</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Formule 2 */}
          <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs flex flex-col justify-between">
            <div>
              <div className="p-3 bg-amber-100 text-amber-900 rounded-xl w-fit mb-4">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-stone-950 mb-2">
                2. Kantoor Volautomaat Totaaloplossing
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed mb-4">
                Een zorgeloze totaaloplossing voor uw team: een betrouwbare Swiss-engineered volautomatische bonenmachine (Jura / Franke) gecombineerd met periodieke levering van vers gebrande bonen, waterfilters en onderhoudsservice.
              </p>
              <ul className="space-y-2 text-xs text-stone-700">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>Geschikt van 5 tot 100+ medewerkers</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>Intuïtieve one-touch espresso, lungo en cappuccino</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>Onderhoud, ontkalking en snelle vervangservice inbegrepen</span>
                </li>
              </ul>
            </div>
            <div className="pt-6 mt-6 border-t border-stone-100">
              <button
                onClick={scrollToQuoteForm}
                className="text-xs font-bold text-amber-900 hover:text-amber-700 inline-flex items-center gap-1.5"
              >
                <span>Vraag kantoor totaalpakket aan</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Formule 3 */}
          <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs flex flex-col justify-between">
            <div>
              <div className="p-3 bg-amber-100 text-amber-900 rounded-xl w-fit mb-4">
                <UtensilsCrossed className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-stone-950 mb-2">
                3. Horeca Professionele Espresso Oplossing
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed mb-4">
                Onderscheid uw restaurant, brasserie of koffiebar met uitzonderlijke koffiekwaliteit. Wij leveren high-end traditionele pistonmachines (La Marzocco, Sanremo) of ondersteunen uw bestaande setup inclusief barista-training voor uw personeel.
              </p>
              <ul className="space-y-2 text-xs text-stone-700">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>Consistente extractie en prachtige crema</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>Gratis afstelling van uw koffiemolen en espressomachine</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>Mogelijkheid tot cupping in ons atelier in Oudegem</span>
                </li>
              </ul>
            </div>
            <div className="pt-6 mt-6 border-t border-stone-100">
              <button
                onClick={scrollToQuoteForm}
                className="text-xs font-bold text-amber-900 hover:text-amber-700 inline-flex items-center gap-1.5"
              >
                <span>Vraag horeca formule aan</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Formule 4 */}
          <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs flex flex-col justify-between">
            <div>
              <div className="p-3 bg-amber-100 text-amber-900 rounded-xl w-fit mb-4">
                <Tag className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-stone-950 mb-2">
                4. White-Label & Private Brand
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed mb-4">
                Wilt u uw eigen koffieblend serveren of verkopen onder uw eigen merknaam of horecalabel? In ons atelier stellen we samen uw ideale smaakprofiel samen, gebrand in Oudegem en verpakt in zakken met uw eigen logo en design.
              </p>
              <ul className="space-y-2 text-xs text-stone-700">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>Exclusief samengestelde houseblend voor uw zaak</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>Eigen verpakking met professionele afwerking</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>Ideaal voor relatiegeschenken en retailverkoop</span>
                </li>
              </ul>
            </div>
            <div className="pt-6 mt-6 border-t border-stone-100">
              <button
                onClick={scrollToQuoteForm}
                className="text-xs font-bold text-amber-900 hover:text-amber-700 inline-flex items-center gap-1.5"
              >
                <span>Ontwikkel uw eigen huismerk</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Gratis Proefpakket Banner */}
      <section className="bg-stone-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400 block mb-1">
              Kosteloos Kennismaken
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold">
              Gratis Proefpakket voor Ondernemingen
            </h3>
            <p className="text-sm text-stone-300 mt-2">
              Wilt u de kwaliteit van Maison Milau eerst zelf ervaren? Vraag vrijblijvend een gratis proefpakket aan voor uw kantoor of zaak. We bezorgen het persoonlijk of via post.
            </p>
          </div>
          <button
            onClick={scrollToQuoteForm}
            className="px-6 py-3 bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs rounded-lg transition-colors shrink-0 shadow-lg"
          >
            Vraag Gratis Proefpakket Aan
          </button>
        </div>
      </section>

      {/* Onze Beloftes voor Zakelijke Klanten */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-800 block">Zekerheid</span>
          <h2 className="font-serif text-3xl font-bold text-stone-950 mt-1">
            Onze Beloftes voor Zakelijke Klanten
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-5 bg-white rounded-xl border border-stone-200">
            <Coffee className="w-5 h-5 text-amber-900 mb-2" />
            <h4 className="font-serif font-bold text-base text-stone-900 mb-1">Altijd Vers Gebrand</h4>
            <p className="text-xs text-stone-600">Binnen 2 weken na branding geleverd, met vermelding van branddatum op elke zak.</p>
          </div>

          <div className="p-5 bg-white rounded-xl border border-stone-200">
            <Truck className="w-5 h-5 text-amber-900 mb-2" />
            <h4 className="font-serif font-bold text-base text-stone-900 mb-1">Lokale Service</h4>
            <p className="text-xs text-stone-600">Persoonlijke levering en snelle opvolging in regio Dendermonde, Wetteren, Aalst en Gent.</p>
          </div>

          <div className="p-5 bg-white rounded-xl border border-stone-200">
            <ShieldCheck className="w-5 h-5 text-amber-900 mb-2" />
            <h4 className="font-serif font-bold text-base text-stone-900 mb-1">Flexibele Contracten</h4>
            <p className="text-xs text-stone-600">Pas uw maandelijks volume op elk moment aan volgens uw reële kantoor- of horecadrukte.</p>
          </div>

          <div className="p-5 bg-white rounded-xl border border-stone-200">
            <Award className="w-5 h-5 text-amber-900 mb-2" />
            <h4 className="font-serif font-bold text-base text-stone-900 mb-1">Fiscaal Voordelig</h4>
            <p className="text-xs text-stone-600">6% BTW op koffiebonen en 100% aftrekbare bedrijfskost. Maandelijkse overzichtelijke verzamelfactuur.</p>
          </div>
        </div>
      </section>

      {/* Interactive Calculator Section */}
      <section className="py-8 max-w-7xl mx-auto px-4 sm:px-6">
        <B2BCalculator
          onSelectVolume={(kg) => setSelectedCalculatedVolume(kg)}
          onNavigateToQuote={scrollToQuoteForm}
        />
      </section>

      {/* B2B Quote Form Section */}
      <section ref={formRef} className="py-12 max-w-7xl mx-auto px-4 sm:px-6">
        <B2BQuoteForm defaultMonthlyVolume={selectedCalculatedVolume} />
      </section>
    </div>
  );
};
