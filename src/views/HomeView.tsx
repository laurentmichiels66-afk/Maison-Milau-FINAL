import React from 'react';
import { ArrowRight, Coffee, Award, Sparkles, Check, MapPin, Calendar, HeartHandshake } from 'lucide-react';
import { ValidatedLink } from '../components/ValidatedLink';

interface HomeViewProps {
  onNavigate: (path: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate }) => {
  return (
    <div className="bg-[#faf8f5] text-stone-900 min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-16 sm:pb-24 border-b border-stone-200/80 bg-linear-to-b from-stone-100/60 to-[#faf8f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold uppercase tracking-widest mb-4">
              Ambachtelijke Koffiebranderij · Oudegem (Dendermonde)
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-stone-950 leading-tight">
              Maison Milau Artisanale koffiebranderij .
            </h1>
            <p className="mt-5 text-base sm:text-xl text-stone-700 leading-relaxed font-sans">
              Ambachtelijk gebrande specialty koffies voor elke gelegenheid. Bij jou thuis, voor op kantoor, in je horecazaak of exclusieve koffiecatering vour jouw tuinfeest.
            </p>

            {/* Direct naar onze hoofddiensten */}
            <div className="mt-8 pt-6 border-t border-stone-200">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-900 block mb-4">
                Direct naar onze hoofddiensten:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button
                  onClick={() => onNavigate('/webshop')}
                  className="p-4 bg-white rounded-xl border border-stone-200/90 shadow-xs hover:border-amber-700 hover:shadow-md transition-all text-left group"
                >
                  <span className="font-serif font-bold text-stone-900 group-hover:text-amber-900 block text-base">
                    Webshop
                  </span>
                  <span className="text-xs text-stone-500 mt-1 block">
                    Artisanale Houseblends, Barrel Aged Koffies
                  </span>
                  <span className="text-xs text-amber-800 font-semibold mt-2 inline-flex items-center gap-1">
                    Naar webshop <ArrowRight className="w-3 h-3" />
                  </span>
                </button>

                <button
                  onClick={() => onNavigate('/kantoor-horeca')}
                  className="p-4 bg-white rounded-xl border border-stone-200/90 shadow-xs hover:border-amber-700 hover:shadow-md transition-all text-left group"
                >
                  <span className="font-serif font-bold text-stone-900 group-hover:text-amber-900 block text-base">
                    B2B Oplossingen
                  </span>
                  <span className="text-xs text-stone-500 mt-1 block">
                    Horeca, kantoren, proefpakket & machineformules
                  </span>
                  <span className="text-xs text-amber-800 font-semibold mt-2 inline-flex items-center gap-1">
                    B2B formules <ArrowRight className="w-3 h-3" />
                  </span>
                </button>

                <button
                  onClick={() => onNavigate('/events')}
                  className="p-4 bg-white rounded-xl border border-stone-200/90 shadow-xs hover:border-amber-700 hover:shadow-md transition-all text-left group"
                >
                  <span className="font-serif font-bold text-stone-900 group-hover:text-amber-900 block text-base">
                    Events & Verhuur
                  </span>
                  <span className="text-xs text-stone-500 mt-1 block">
                    Koffiecatering & machines voor al uw feesten
                  </span>
                  <span className="text-xs text-amber-800 font-semibold mt-2 inline-flex items-center gap-1">
                    Event formules <ArrowRight className="w-3 h-3" />
                  </span>
                </button>
              </div>
            </div>

            {/* CTA Link Buttons */}
            <div className="mt-8 flex flex-wrap gap-3">
              <button
                id="hero-link-webshop"
                onClick={() => onNavigate('/webshop')}
                className="px-6 py-3 bg-amber-900 text-white rounded-lg font-semibold hover:bg-amber-800 transition-colors shadow-xs text-sm"
              >
                LINK Naar Webshop
              </button>
              <button
                id="hero-link-kantoor-horeca"
                onClick={() => onNavigate('/kantoor-horeca')}
                className="px-6 py-3 bg-stone-800 text-white rounded-lg font-semibold hover:bg-stone-700 transition-colors shadow-xs text-sm"
              >
                LINK Naar Kantoor & Horeca
              </button>
              <button
                id="hero-link-events"
                onClick={() => onNavigate('/events')}
                className="px-6 py-3 bg-stone-200 text-stone-900 rounded-lg font-semibold hover:bg-stone-300 transition-colors text-sm"
              >
                LINK Naar Events
              </button>
              <button
                id="hero-link-afspraakplanner"
                onClick={() => onNavigate('/afspraakplanner')}
                className="px-6 py-3 border border-stone-300 bg-white text-stone-800 rounded-lg font-semibold hover:bg-stone-50 transition-colors text-sm"
              >
                LINK Naar Afspraakplanner
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Maison Milau beloften Section */}
      <section className="py-16 sm:py-20 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-800 block">Onze Kwaliteitsgarantie</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-950 mt-1">
              Maison Milau beloften
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-stone-50 border border-stone-200/80 flex items-start gap-4">
              <div className="p-2 bg-amber-100 text-amber-900 rounded-lg shrink-0">
                <Coffee className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-medium text-stone-900">
                  Altijd vers gebrand koffie, geleverd binnen 2 weken na branding
                </p>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-stone-50 border border-stone-200/80 flex items-start gap-4">
              <div className="p-2 bg-amber-100 text-amber-900 rounded-lg shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-medium text-stone-900">
                  Zeer democratische prijzen en gegarandeertd beter dan koffie uit de rekken!
                </p>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-stone-50 border border-stone-200/80 flex items-start gap-4">
              <div className="p-2 bg-amber-100 text-amber-900 rounded-lg shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-medium text-stone-900">
                  Promoties, kortingen, abonemementen en klantendiest beschikbaar
                </p>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-stone-50 border border-stone-200/80 flex items-start gap-4">
              <div className="p-2 bg-amber-100 text-amber-900 rounded-lg shrink-0">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-medium text-stone-900">
                  Bezoek ons en ontwikkel je eigen koffieblend en huismerk in ons koffie atelier.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-stone-50 border border-stone-200/80 flex items-start gap-4">
              <div className="p-2 bg-amber-100 text-amber-900 rounded-lg shrink-0">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-medium text-stone-900">
                  Voorzie je trouw, verjaardag of jaarlijkse nieuwjaarecepties met prestige koffie.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-stone-50 border border-stone-200/80 flex items-start gap-4">
              <div className="p-2 bg-amber-100 text-amber-900 rounded-lg shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-medium text-stone-900">
                  Vind ons op de wekelijkse markten in Dendermonde, Aalst en Wetteren
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Onze Koffies Section */}
      <section className="py-16 sm:py-24 bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-800 block">Assortiment</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-950 mt-1">
              Onze Koffies
            </h2>
          </div>

          <div className="space-y-8">
            {/* 1. Milau Selection */}
            <div className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 shadow-xs">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-stone-100 pb-4 mb-4">
                <div>
                  <span className="text-xs font-bold text-amber-800 uppercase tracking-widest">SCA 80-83.5</span>
                  <h3 className="font-serif text-2xl font-bold text-stone-950">
                    Milau Selection; vanaf €5
                  </h3>
                </div>
                <button
                  onClick={() => onNavigate('/webshop?cat=houseblends')}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 bg-amber-900 text-white rounded-lg hover:bg-amber-800 transition-colors w-fit"
                >
                  <span>Ontdek de Milau Selection (Espresso, Filter, Daily) → webshop</span>
                </button>
              </div>
              <p className="text-sm text-stone-700 leading-relaxed">
                Het Milau Selection-assortiment (espresso, filter en de dagelijke koffie) biedt specialty koffie aan tegen uitzonderlijk aantrekkelijke prijzen. Met Milau Selection willen we onze klanten op een zeer toegankelijke en democratische manier laten kennis met de wereld van specialty koffie, zonder meer te betalen dan warenhuiskoffies. Laat de eentonige warenhuismerken achter je en ontdek de unieke smaakprofielen van zorgvuldig geselecteerde koffiebonen uit alle hoeken van de wereld. De prijsklopper onder speciality koffies.
              </p>
            </div>

            {/* 2. Milau Premium */}
            <div className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 shadow-xs">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-stone-100 pb-4 mb-4">
                <div>
                  <span className="text-xs font-bold text-amber-800 uppercase tracking-widest">SCA 85+</span>
                  <h3 className="font-serif text-2xl font-bold text-stone-950">
                    Milau Premium; vanaf €10
                  </h3>
                </div>
                <button
                  onClick={() => onNavigate('/webshop?cat=houseblends')}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 bg-amber-900 text-white rounded-lg hover:bg-amber-800 transition-colors w-fit"
                >
                  <span>Ontdek de Milau Premium (Espresso, Filter, Daily) → webshop</span>
                </button>
              </div>
              <p className="text-sm text-stone-700 leading-relaxed">
                Voor het Milau Premium-assortiment selecteren wij uitsluitend koffiebonen met een SCA-score van minimaal 85 punten. Deze bonen onderscheiden zich door hun verfijnde aroma's, complexe smaken en uitzonderlijke kwaliteit. Het Premium-gamma is ontwikkeld voor koffieliefhebbers die op zoek zijn naar een rijkere en meer uitgesproken koffiebeleving.
              </p>
            </div>

            {/* 3. Milau Prestige */}
            <div className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 shadow-xs">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-stone-100 pb-4 mb-4">
                <div>
                  <span className="text-xs font-bold text-amber-800 uppercase tracking-widest">SCA 88+</span>
                  <h3 className="font-serif text-2xl font-bold text-stone-950">
                    Milau Prestige; vanaf €17
                  </h3>
                </div>
                <button
                  onClick={() => onNavigate('/webshop?cat=houseblends')}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 bg-amber-900 text-white rounded-lg hover:bg-amber-800 transition-colors w-fit"
                >
                  <span>Ontdek de Milau Prestige (Espresso, Filter, Daily) → webshop</span>
                </button>
              </div>
              <p className="text-sm text-stone-700 leading-relaxed">
                Een koffiebeleving voor de echte liefhebber van koffie. Voor het Milau Prestige-assortiment selecteren wij uitsluitend koffiebonen met een SCA-score van minimaal 88 punten. Deze uitzonderlijke koffies behoren tot de absolute top van de specialty koffie wereld en werden beoordeeld volgens de hoogste kwaliteitsstandaarden. Elke boon is op zichzelf al een unieke smaakervaring als single origin, maar in onze zorgvuldig samengestelde house blends komen deze kwaliteiten samen in een harmonieuze en onvergetelijke explosie van smaken. Zo een koffie hebt je nog nooit eerder gedronken.
              </p>
            </div>

            {/* 4. Barrel Aged Koffie */}
            <div className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 shadow-xs">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-stone-100 pb-4 mb-4">
                <div>
                  <span className="text-xs font-bold text-amber-800 uppercase tracking-widest">Oak Cask Aged</span>
                  <h3 className="font-serif text-2xl font-bold text-stone-950">
                    Barrel Aged Koffie ; vanaf 9,5 euro
                  </h3>
                </div>
                <button
                  onClick={() => onNavigate('/webshop?cat=barrel-aged')}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 bg-amber-900 text-white rounded-lg hover:bg-amber-800 transition-colors w-fit"
                >
                  <span>Ontdek de Milau Barel Aged Koffie → webshop</span>
                </button>
              </div>
              <p className="text-sm text-stone-700 leading-relaxed">
                Onze groene koffiebonen worden 1 a 2 maand gerijpt op eiken vaten waardoor subtiele houttonen, extra diepgang en een uniek smaakprofiel ontstaan. Afhankelijk van het gebruikte vat, zoals whisky-, bourbon-, rum- of sherryvaten, ontwikkelen de bonen unieke aroma's en subtiele smaaknuances die elke batch een eigen karakter geven. Een absulote aanrader en uiterst zeldzaam.
              </p>
            </div>

            {/* 5. Infused Coffee */}
            <div className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 shadow-xs">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-stone-100 pb-4 mb-4">
                <div>
                  <span className="text-xs font-bold text-amber-800 uppercase tracking-widest">Natuurlijke Infusie</span>
                  <h3 className="font-serif text-2xl font-bold text-stone-950">
                    Infused Coffee; vanaf 7,5 euro
                  </h3>
                </div>
                <button
                  onClick={() => onNavigate('/webshop?cat=infused')}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 bg-amber-900 text-white rounded-lg hover:bg-amber-800 transition-colors w-fit"
                >
                  <span>Ontdek de Milau Infused Coffees → webshop</span>
                </button>
              </div>
              <p className="text-sm text-stone-700 leading-relaxed">
                Bij onze Infused Coffee worden premium koffiebonen nat het brandproces verrijkt met natuurlijke aroma’s van vanille, kaneel, amandel, karamel of cacao. We gebruiken een passieve aroma-infusiemethode zonder kunstmatige smaakstoffen om de koffiekwaliteit te behouden en een zuiverdere, authentiekere smaak te creëren.. Het resultaat is een fluweelzachte zoetheid van vanille, of de verfijnde toets van geroosterde amandelen die langzaam op de tong blijft hangen
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
