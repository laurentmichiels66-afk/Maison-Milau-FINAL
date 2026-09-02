import React, { useState } from 'react';
import { COFFEE_CATALOG } from '../data/catalog';
import { CoffeeCatalogItem } from '../types';
import { Coffee, Search, SlidersHorizontal, ArrowRight, ShieldCheck, Check, Layers, Sparkles, Scale } from 'lucide-react';

interface CatalogViewProps {
  onNavigate: (path: string) => void;
}

export const CatalogView: React.FC<CatalogViewProps> = ({ onNavigate }) => {
  const [selectedRange, setSelectedRange] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeCoffee, setActiveCoffee] = useState<CoffeeCatalogItem | null>(null);
  const [compareList, setCompareList] = useState<CoffeeCatalogItem[]>([]);
  const [showCompareModal, setShowCompareModal] = useState<boolean>(false);

  const ranges = ['all', 'Milau Selection', 'Milau Premium', 'Milau Prestige', 'Barrel Aged', 'Naturally Infused', 'Single Origin'];

  const filteredCoffees = COFFEE_CATALOG.filter(coffee => {
    const matchesRange = selectedRange === 'all' || coffee.range === selectedRange;
    const matchesSearch = coffee.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          coffee.flavors.some(f => f.toLowerCase().includes(searchQuery.toLowerCase())) ||
                          coffee.type.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesRange && matchesSearch;
  });

  const toggleCompare = (coffee: CoffeeCatalogItem) => {
    if (compareList.some(c => c.id === coffee.id)) {
      setCompareList(compareList.filter(c => c.id !== coffee.id));
    } else {
      if (compareList.length < 3) {
        setCompareList([...compareList, coffee]);
      }
    }
  };

  return (
    <div className="bg-[#faf8f5] text-stone-900 min-h-screen pb-20" id="catalog-pis-container">
      {/* Header Banner - Product Information System (PIS) */}
      <div className="bg-white border-b border-stone-200 py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <nav className="flex items-center gap-2 text-xs text-stone-500 mb-3">
            <button onClick={() => onNavigate('/')} className="hover:text-amber-900">Home</button>
            <span>/</span>
            <span className="text-stone-900 font-semibold">Koffie Catalogus & PIS</span>
          </nav>

          <div className="max-w-3xl">
            <span className="text-xs font-bold text-amber-800 uppercase tracking-widest block">
              Product Information System (PIS)
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-950 mt-1">
              Onze Koffies: Herkomst & Smaakprofielen
            </h1>
            <p className="mt-3 text-sm sm:text-base text-stone-600 leading-relaxed">
              Het catalogussysteem is ontworpen voor ontdekking, educatie, SCA-kwaliteitsscores en diepgaande blendprofielen.
              Wilt u direct bestellen? Gebruik bij elke koffie de bi-directionele knop <strong>ORDER THIS COFFEE</strong> naar de webshop.
            </p>
          </div>

          {/* Filtering and Search Controls */}
          <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-stone-100">
            {/* Range Pills */}
            <div className="flex flex-wrap gap-1.5 w-full md:w-auto">
              {ranges.map(range => (
                <button
                  key={range}
                  onClick={() => setSelectedRange(range)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                    selectedRange === range
                      ? 'bg-amber-900 text-white shadow-xs'
                      : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                  }`}
                >
                  {range === 'all' ? 'Alle Collecties' : range}
                </button>
              ))}
            </div>

            {/* Search and Compare bar */}
            <div className="flex items-center gap-3 w-full md:w-auto">
              <div className="relative flex-1 sm:w-64">
                <Search className="w-4 h-4 text-stone-400 absolute left-3 top-2.5" />
                <input
                  type="text"
                  placeholder="Zoek op smaaknoot of boon..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-1.5 text-xs bg-stone-50 border border-stone-300 rounded-lg text-stone-900 focus:outline-hidden focus:ring-2 focus:ring-amber-700"
                />
              </div>

              {compareList.length > 0 && (
                <button
                  onClick={() => setShowCompareModal(true)}
                  className="px-3 py-1.5 bg-amber-800 text-white rounded-lg text-xs font-semibold hover:bg-amber-700 transition-colors flex items-center gap-1.5 shrink-0"
                >
                  <Scale className="w-3.5 h-3.5" />
                  <span>Vergelijk ({compareList.length})</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Catalog Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCoffees.map(coffee => {
            const isComparing = compareList.some(c => c.id === coffee.id);

            return (
              <div
                key={coffee.id}
                id={`catalog-card-${coffee.id}`}
                className="bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="p-6">
                  {/* Category & SCA badge */}
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-stone-100 text-stone-800 border border-stone-200">
                      {coffee.range}
                    </span>
                    <span className="text-xs font-bold text-amber-900 font-mono">
                      {coffee.expectedScaScore.replace("Verwachte blendscore: ", "").replace("Verwachte kwaliteitspositie: ", "")}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-stone-950 mb-1">
                    {coffee.name}
                  </h3>

                  <p className="text-xs text-stone-500 italic mb-4">
                    {coffee.type}
                  </p>

                  {/* Bean selection */}
                  <div className="mb-4 bg-stone-50 p-3 rounded-lg border border-stone-100">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-900 block mb-1.5">
                      Bean Selection & Herkomst
                    </span>
                    <ul className="space-y-1 text-xs text-stone-700">
                      {coffee.beanSelection.map((bean, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-700 shrink-0 mt-1.5" />
                          <span>{bean}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Flavors tags */}
                  <div className="mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400 block mb-1.5">
                      Flavors & Smaaktonen
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {coffee.flavors.map(flavor => (
                        <span
                          key={flavor}
                          className="px-2 py-0.5 rounded bg-amber-50 text-amber-950 text-[11px] font-medium border border-amber-200/60"
                        >
                          {flavor}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Karakter */}
                  <div className="mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400 block mb-1">
                      Karakter
                    </span>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      {coffee.character}
                    </p>
                  </div>

                  {/* Extra Barrel or Infusion info if applicable */}
                  {coffee.barrelInfo && (
                    <div className="mb-4 p-2.5 bg-amber-950/5 border border-amber-900/20 rounded-lg text-xs text-amber-950">
                      <span className="font-semibold block">Vatrijping:</span>
                      <span>{coffee.barrelInfo}</span>
                    </div>
                  )}

                  {coffee.infusionMethod && (
                    <div className="mb-4 p-2.5 bg-stone-100 rounded-lg text-xs text-stone-700">
                      <span className="font-semibold block">Infusietechniek:</span>
                      <span>{coffee.infusionMethod}</span>
                    </div>
                  )}
                </div>

                {/* Bottom Actions: Bi-directional Link to Webshop & Compare */}
                <div className="p-4 bg-stone-50 border-t border-stone-100 flex items-center justify-between gap-3">
                  <button
                    onClick={() => toggleCompare(coffee)}
                    className={`text-xs px-2.5 py-1.5 rounded border transition-colors flex items-center gap-1 ${
                      isComparing
                        ? 'bg-amber-100 border-amber-400 text-amber-900 font-semibold'
                        : 'bg-white border-stone-300 text-stone-600 hover:bg-stone-100'
                    }`}
                  >
                    <Scale className="w-3 h-3" />
                    <span>{isComparing ? 'Geselecteerd' : 'Vergelijk'}</span>
                  </button>

                  {/* BI-DIRECTIONAL CTA AS STRICTLY REQUIRED: "ORDER THIS COFFEE" */}
                  <button
                    id={`btn-order-coffee-${coffee.id}`}
                    onClick={() => onNavigate(`/webshop?product=${coffee.webshopProductId}`)}
                    className="px-4 py-2 bg-amber-900 text-white rounded-lg text-xs font-bold hover:bg-amber-800 transition-colors flex items-center gap-1.5 shadow-xs"
                    title="Ga direct naar webshop om deze koffie te bestellen"
                  >
                    <span>ORDER THIS COFFEE</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Comparison Modal */}
      {showCompareModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/70 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-4xl w-full p-6 shadow-2xl border border-stone-200 max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-stone-200 mb-6">
              <div className="flex items-center gap-2">
                <Scale className="w-5 h-5 text-amber-900" />
                <h3 className="font-serif text-xl font-bold text-stone-950">Koffies Vergelijken</h3>
              </div>
              <button
                onClick={() => setShowCompareModal(false)}
                className="text-xs font-semibold px-3 py-1 bg-stone-100 hover:bg-stone-200 rounded text-stone-700"
              >
                Sluiten
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {compareList.map(coffee => (
                <div key={coffee.id} className="p-4 border border-stone-200 rounded-xl bg-stone-50/50 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-amber-900 uppercase">{coffee.range}</span>
                    <h4 className="font-serif text-lg font-bold text-stone-900 mb-2">{coffee.name}</h4>
                    <p className="text-xs font-mono font-bold text-amber-800 mb-3">{coffee.expectedScaScore}</p>
                    
                    <div className="mb-3">
                      <span className="text-[10px] font-bold text-stone-400 uppercase block mb-1">Blend Formule:</span>
                      <ul className="text-xs text-stone-700 space-y-1">
                        {coffee.beanSelection.map((b, idx) => (
                          <li key={idx}>• {b}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-3">
                      <span className="text-[10px] font-bold text-stone-400 uppercase block mb-1">Smaaktonen:</span>
                      <p className="text-xs text-stone-800">{coffee.flavors.join(", ")}</p>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setShowCompareModal(false);
                      onNavigate(`/webshop?product=${coffee.webshopProductId}`);
                    }}
                    className="mt-4 w-full py-2 bg-amber-900 text-white rounded text-xs font-bold hover:bg-amber-800 transition-colors"
                  >
                    ORDER THIS COFFEE
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
