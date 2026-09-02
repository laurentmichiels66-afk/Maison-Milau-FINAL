import React, { useState } from 'react';
import { FAQ_CATEGORIES, FAQ_DATA, FaqItem } from '../data/faq';
import { Search, ChevronDown, ChevronUp, HelpCircle, RotateCcw, MessageSquare, Phone, Mail, FileText, ArrowRight } from 'lucide-react';
import { SupportTicketForm } from '../components/SupportTicketForm';

interface FaqViewProps {
  onNavigate: (path: string) => void;
}

export const FaqView: React.FC<FaqViewProps> = ({ onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({
    'faq-1': true,
    'faq-2': false,
  });

  const [activePortal, setActivePortal] = useState<'faq' | 'returns' | 'ticket'>('faq');

  const toggleItem = (id: string) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const filteredItems = FAQ_DATA.filter(item => {
    const matchesCat = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  // Group filtered items by category
  const categoriesWithItems = FAQ_CATEGORIES.map(categoryName => {
    const items = filteredItems.filter(item => item.category === categoryName);
    return {
      category: categoryName,
      items
    };
  }).filter(group => group.items.length > 0);

  return (
    <div className="bg-[#faf8f5] text-stone-900 min-h-screen pb-20" id="faq-page-container">
      {/* Top Banner - Help Center like Coolblue / Amazon */}
      <section className="bg-white border-b border-stone-200 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <nav className="flex items-center gap-2 text-xs text-stone-500 mb-3">
            <button onClick={() => onNavigate('/')} className="hover:text-amber-900">Home</button>
            <span>/</span>
            <span className="text-stone-900 font-semibold">Klantenservice & Help Center</span>
          </nav>

          <div className="max-w-3xl">
            <span className="text-xs font-bold text-amber-800 uppercase tracking-widest block">
              Klantenservice & Help Center
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-stone-950 mt-1 leading-tight">
              Waarmee kunnen we u helpen?
            </h1>
            <p className="mt-3 text-base text-stone-600 leading-relaxed font-sans">
              Vind snel antwoorden op vragen over bestellingen, levering binnen 2 weken na branding, betalingen via POM, b2b staffels of meld een retour.
            </p>

            {/* Quick Search Bar */}
            <div className="mt-6 relative max-w-xl">
              <Search className="w-5 h-5 text-stone-400 absolute left-3.5 top-3.5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Zoek een vraag (bijv. levertermijn, retour, maalgraad, abonnement)..."
                className="w-full pl-11 pr-4 py-3 bg-stone-50 border border-stone-300 rounded-xl text-sm text-stone-900 focus:outline-hidden focus:ring-2 focus:ring-amber-700 shadow-xs"
              />
            </div>
          </div>

          {/* Quick Action Navigation Buttons */}
          <div className="mt-8 flex flex-wrap gap-2 pt-6 border-t border-stone-100">
            <button
              onClick={() => setActivePortal('faq')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-colors ${
                activePortal === 'faq' ? 'bg-amber-900 text-white' : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
              }`}
            >
              Veelgestelde Vragen
            </button>
            <button
              onClick={() => setActivePortal('returns')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-colors ${
                activePortal === 'returns' ? 'bg-amber-900 text-white' : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
              }`}
            >
              Retouren & Garantie Portaal
            </button>
            <button
              onClick={() => setActivePortal('ticket')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-colors ${
                activePortal === 'ticket' ? 'bg-amber-900 text-white' : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
              }`}
            >
              Support Ticket & Klacht Indienen
            </button>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        {activePortal === 'returns' && (
          <div className="space-y-8">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-xs">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-amber-100 text-amber-900 rounded-xl">
                  <RotateCcw className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-stone-900">Retouren & Garantie Portaal</h3>
                  <p className="text-xs text-stone-600 mt-1">
                    Volgens de Belgische wetgeving inzake consumentenrecht en hygiënevoorwaarden voor levensmiddelen.
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-xs text-stone-700 leading-relaxed border-t border-stone-100 pt-4">
                <p>
                  <strong>Koffiebonen & Versproducten:</strong> Aangezien koffiebonen een vers gebrand voedingsproduct betreffen, kunnen geopende verpakkingen wegens hygiëne- en kwaliteitsbescherming niet worden geretourneerd. Ongeopende, intacte verpakkingen met intact aromaventiel en zegel kunnen binnen 14 dagen na ontvangst worden teruggestuurd.
                </p>
                <p>
                  <strong>Machines, Barista Accessoires & Servies:</strong> Hiervoor geldt het wettelijke herroepingsrecht van 14 dagen na levering. Het product dient ongebruikt en in de originele fabrieksverpakking geretourneerd te worden. Op machines geldt standaard 2 jaar fabrieksgarantie.
                </p>
                <p>
                  <strong>Retouradres Atelier:</strong> Maison Milau BV, t.a.v. Retouren, Jef Scheirsstraat 29, 9200 Oudegem (Dendermonde), België.
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-stone-100 flex items-center justify-between">
                <span className="text-xs text-stone-500">Meld uw retour eenvoudig via ons ticketportaal:</span>
                <button
                  onClick={() => setActivePortal('ticket')}
                  className="px-4 py-2 bg-amber-900 text-white rounded text-xs font-semibold hover:bg-amber-800 transition-colors"
                >
                  Direct Retour Melden →
                </button>
              </div>
            </div>
          </div>
        )}

        {activePortal === 'ticket' && (
          <div className="max-w-3xl mx-auto">
            <SupportTicketForm />
          </div>
        )}

        {activePortal === 'faq' && (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Category Side-menu */}
            <div className="space-y-1.5">
              <span className="text-xs font-bold text-stone-400 uppercase tracking-wider block mb-2 px-2">
                Categorieën
              </span>
              <button
                onClick={() => setActiveCategory('all')}
                className={`w-full text-left px-3.5 py-2.5 rounded-lg text-xs font-semibold transition-colors ${
                  activeCategory === 'all'
                    ? 'bg-amber-900 text-white'
                    : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200/60'
                }`}
              >
                Alle Vragen
              </button>
              {FAQ_CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`w-full text-left px-3.5 py-2.5 rounded-lg text-xs font-semibold transition-colors ${
                    activeCategory === cat
                      ? 'bg-amber-900 text-white'
                      : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200/60'
                  }`}
                >
                  {cat}
                </button>
              ))}

              {/* Direct Assistance Box */}
              <div className="mt-6 p-4 bg-white rounded-xl border border-stone-200 shadow-xs text-xs space-y-2">
                <span className="font-bold text-stone-900 block">Nog geen antwoord?</span>
                <p className="text-stone-500">Ons team helpt u graag persoonlijk via mail of WhatsApp.</p>
                <div className="pt-2 space-y-1 text-amber-900 font-semibold">
                  <a href="mailto:Maison-milau@gmail.com" className="block hover:underline">
                    Maison-milau@gmail.com
                  </a>
                  <a href="tel:+32467773766" className="block hover:underline">
                    +32 (0)467 77 37 66
                  </a>
                </div>
              </div>
            </div>

            {/* Accordion Questions List */}
            <div className="lg:col-span-3 space-y-6">
              {categoriesWithItems.length === 0 ? (
                <div className="bg-white p-8 rounded-2xl border border-stone-200 text-center text-xs text-stone-500">
                  Geen vragen gevonden voor deze zoekopdracht.
                </div>
              ) : (
                categoriesWithItems.map(group => (
                  <div key={group.category} className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs">
                    <div className="bg-stone-50/80 px-6 py-4 border-b border-stone-200">
                      <h3 className="font-serif text-lg font-bold text-stone-900">{group.category}</h3>
                    </div>

                    <div className="divide-y divide-stone-100">
                      {group.items.map(item => {
                        const isOpen = !!openItems[item.id];
                        return (
                          <div key={item.id} className="p-5">
                            <button
                              onClick={() => toggleItem(item.id)}
                              className="w-full flex items-center justify-between text-left gap-4 group"
                            >
                              <span className="font-serif font-bold text-sm text-stone-900 group-hover:text-amber-900 transition-colors">
                                {item.question}
                              </span>
                              {isOpen ? (
                                <ChevronUp className="w-4 h-4 text-stone-400 shrink-0" />
                              ) : (
                                <ChevronDown className="w-4 h-4 text-stone-400 shrink-0" />
                              )}
                            </button>

                            {isOpen && (
                              <div className="mt-3 pt-3 border-t border-stone-100 text-xs text-stone-600 leading-relaxed animate-fade-in font-sans">
                                <p>{item.answer}</p>
                                {item.linkPath && (
                                  <div className="mt-2.5">
                                    <button
                                      onClick={() => onNavigate(item.linkPath!)}
                                      className="text-amber-900 font-semibold hover:underline inline-flex items-center gap-1"
                                    >
                                      <span>{item.linkText || 'Lees meer'}</span>
                                      <ArrowRight className="w-3 h-3" />
                                    </button>
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
