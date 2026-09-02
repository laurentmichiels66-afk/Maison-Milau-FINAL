import React, { useState } from 'react';
import { X, Layers, Compass, Database, Menu, CheckCircle2, AlertCircle, FileCode } from 'lucide-react';
import { APPROVED_SITEMAP } from '../data/sitemap';
import { PAGE_ROUTES } from '../data/routes';
import { DATABASE_ENTITIES } from '../data/entities';
import { HAMBURGER_MENU, PRIMARY_NAV_MENU } from '../data/menus';
import { CONFIG, TODO_ITEMS } from '../config/site.config';

interface SystemArchitectureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SystemArchitectureModal: React.FC<SystemArchitectureModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'sitemap' | 'routes' | 'entities' | 'menus' | 'config' | 'forms'>('sitemap');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/80 backdrop-blur-xs" id="architecture-modal-overlay">
      <div className="bg-[#faf8f5] border border-amber-900/20 rounded-xl shadow-2xl w-full max-w-5xl h-[85vh] flex flex-col overflow-hidden text-stone-800">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-200 bg-white">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-amber-900 text-white rounded-lg">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-serif text-lg font-bold text-stone-900">Maison Milau · Productie Architectuur</h2>
              <p className="text-xs text-stone-500">Stap 1: Sitemap | Stap 2: Routes | Stap 3: Database Entiteiten | Stap 4: Navigatiemenu's | Config & Formulieren</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-stone-700 hover:bg-stone-100 rounded-md transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-stone-200 bg-stone-100/70 px-6 gap-2 text-xs font-semibold overflow-x-auto">
          <button
            onClick={() => setActiveTab('sitemap')}
            className={`py-3 px-3 border-b-2 flex items-center gap-1.5 transition-colors ${
              activeTab === 'sitemap' ? 'border-amber-900 text-amber-950 bg-white' : 'border-transparent text-stone-600 hover:text-stone-900'
            }`}
          >
            <Compass className="w-4 h-4 text-amber-800" />
            <span>Stap 1: Sitemap</span>
          </button>

          <button
            onClick={() => setActiveTab('routes')}
            className={`py-3 px-3 border-b-2 flex items-center gap-1.5 transition-colors ${
              activeTab === 'routes' ? 'border-amber-900 text-amber-950 bg-white' : 'border-transparent text-stone-600 hover:text-stone-900'
            }`}
          >
            <Layers className="w-4 h-4 text-amber-800" />
            <span>Stap 2: Paginaviews & Routes</span>
          </button>

          <button
            onClick={() => setActiveTab('entities')}
            className={`py-3 px-3 border-b-2 flex items-center gap-1.5 transition-colors ${
              activeTab === 'entities' ? 'border-amber-900 text-amber-950 bg-white' : 'border-transparent text-stone-600 hover:text-stone-900'
            }`}
          >
            <Database className="w-4 h-4 text-amber-800" />
            <span>Stap 3: Database Entiteiten</span>
          </button>

          <button
            onClick={() => setActiveTab('menus')}
            className={`py-3 px-3 border-b-2 flex items-center gap-1.5 transition-colors ${
              activeTab === 'menus' ? 'border-amber-900 text-amber-950 bg-white' : 'border-transparent text-stone-600 hover:text-stone-900'
            }`}
          >
            <Menu className="w-4 h-4 text-amber-800" />
            <span>Stap 4: Navigatiemenu's</span>
          </button>

          <button
            onClick={() => setActiveTab('config')}
            className={`py-3 px-3 border-b-2 flex items-center gap-1.5 transition-colors ${
              activeTab === 'config' ? 'border-amber-900 text-amber-950 bg-white' : 'border-transparent text-stone-600 hover:text-stone-900'
            }`}
          >
            <AlertCircle className="w-4 h-4 text-amber-800" />
            <span>Configuratie & TODOs</span>
          </button>

          <button
            onClick={() => setActiveTab('forms')}
            className={`py-3 px-3 border-b-2 flex items-center gap-1.5 transition-colors ${
              activeTab === 'forms' ? 'border-amber-900 text-amber-950 bg-white' : 'border-transparent text-stone-600 hover:text-stone-900'
            }`}
          >
            <FileCode className="w-4 h-4 text-amber-800" />
            <span>Formulieren Contracten</span>
          </button>
        </div>

        {/* Tab Content */}
        <div className="flex-1 overflow-y-auto p-6">
          
          {/* TAB 1: SITEMAP */}
          {activeTab === 'sitemap' && (
            <div className="space-y-4">
              <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg text-xs text-amber-900">
                <span className="font-bold block mb-1">Goedgekeurde Sitemap Specificatie (Geen gefingeerde pagina's):</span>
                Alle pagina's op de website zijn 1-op-1 gemapt op deze goedgekeurde sitemap. Elke link wordt geverifieerd via de link-validator voor rendering.
              </div>

              <div className="overflow-x-auto border border-stone-200 rounded-lg bg-white">
                <table className="w-full text-left text-xs border-collapse">
                  <thead className="bg-stone-100 text-stone-700 font-semibold border-b border-stone-200">
                    <tr>
                      <th className="p-3">Pad</th>
                      <th className="p-3">Titel</th>
                      <th className="p-3">Categorie</th>
                      <th className="p-3">Prioriteit</th>
                      <th className="p-3">Omschrijving</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 font-mono text-[11px]">
                    {APPROVED_SITEMAP.map((item) => (
                      <tr key={item.path} className="hover:bg-amber-50/50">
                        <td className="p-3 font-bold text-amber-900">{item.path}</td>
                        <td className="p-3 font-sans text-stone-800 font-medium">{item.title}</td>
                        <td className="p-3 font-sans">
                          <span className="px-2 py-0.5 rounded-full bg-stone-100 text-stone-700 border border-stone-300">
                            {item.category}
                          </span>
                        </td>
                        <td className="p-3 text-stone-600">{item.priority.toFixed(1)}</td>
                        <td className="p-3 font-sans text-stone-600 text-xs">{item.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 2: ROUTES */}
          {activeTab === 'routes' && (
            <div className="space-y-4">
              <div className="bg-stone-100 p-4 rounded-lg text-xs text-stone-700">
                <span className="font-bold block mb-1">Stap 2: Paginaviews & Routes (Geregistreerd in het Systeem)</span>
                Routes worden strikt gevalideerd. Als een bezoeker een niet-bestaande link opent, toont het systeem een route-fout in plaats van een willekeurige pagina te verzinnen.
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {PAGE_ROUTES.map((route) => (
                  <div key={route.route} className="bg-white border border-stone-200 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-sm font-bold text-amber-900">{route.route}</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-medium">Geregistreerd</span>
                    </div>
                    <p className="text-xs font-semibold text-stone-800">{route.name}</p>
                    <p className="text-[11px] font-mono text-stone-500 mt-1">Component: {route.componentName}</p>
                    <p className="text-[11px] font-mono text-stone-400 mt-0.5 truncate">Canonical: {route.canonical}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: DATABASE ENTITIES */}
          {activeTab === 'entities' && (
            <div className="space-y-6">
              <div className="bg-stone-100 p-4 rounded-lg text-xs text-stone-700">
                <span className="font-bold block mb-1">Stap 3: Database Entiteiten & Schema Architectuur</span>
                Gegevens worden gestructureerd opgeslagen per entiteit en per taal in de database.
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {DATABASE_ENTITIES.map((entity) => (
                  <div key={entity.name} className="bg-white border border-stone-200 rounded-lg p-4">
                    <div className="flex items-center justify-between border-b border-stone-100 pb-2 mb-2">
                      <div>
                        <span className="font-bold text-sm text-stone-900">{entity.name}</span>
                        <span className="text-xs font-mono text-amber-800 ml-2">({entity.table})</span>
                      </div>
                      <Database className="w-4 h-4 text-stone-400" />
                    </div>
                    <p className="text-xs text-stone-600 mb-3">{entity.description}</p>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400 block mb-1">Attributen:</span>
                      <ul className="space-y-1 font-mono text-[11px] text-stone-600 bg-stone-50 p-2.5 rounded border border-stone-100">
                        {entity.attributes.map((attr, idx) => (
                          <li key={idx} className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-700"></span>
                            <span>{attr}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: MENUS */}
          {activeTab === 'menus' && (
            <div className="space-y-6">
              <div className="bg-stone-100 p-4 rounded-lg text-xs text-stone-700">
                <span className="font-bold block mb-1">Stap 4: Navigatiemenu's Specificatie</span>
                Elk menu-item linkt uitsluitend naar een bestaande entiteit of route.
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white border border-stone-200 rounded-lg p-4">
                  <h4 className="font-bold text-sm text-stone-900 mb-3 flex items-center gap-2">
                    <Menu className="w-4 h-4 text-amber-800" />
                    <span>Hamburger Menu Structuur (Exact zoals gespecificeerd)</span>
                  </h4>
                  <ul className="space-y-2 text-xs divide-y divide-stone-100">
                    {HAMBURGER_MENU.map((item) => (
                      <li key={item.title} className="pt-2">
                        <div className="flex items-center justify-between font-medium text-stone-800">
                          <span>{item.title}</span>
                          <span className="font-mono text-[11px] text-amber-800">{item.path}</span>
                        </div>
                        {item.subcategories && (
                          <div className="pl-4 mt-1 space-y-1 border-l-2 border-amber-600">
                            {item.subcategories.map(sub => (
                              <div key={sub.title} className="flex items-center justify-between text-[11px] text-stone-600">
                                <span>↳ {sub.title}</span>
                                <span className="font-mono text-stone-400">{sub.path}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white border border-stone-200 rounded-lg p-4">
                  <h4 className="font-bold text-sm text-stone-900 mb-3 flex items-center gap-2">
                    <Compass className="w-4 h-4 text-amber-800" />
                    <span>Desktop Header & Footer Menus</span>
                  </h4>
                  <ul className="space-y-2 text-xs divide-y divide-stone-100">
                    {PRIMARY_NAV_MENU.map((item) => (
                      <li key={item.title} className="pt-2 flex items-center justify-between font-medium text-stone-800">
                        <span>{item.title}</span>
                        <span className="font-mono text-[11px] text-amber-800">{item.path}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: CONFIG & TODOS */}
          {activeTab === 'config' && (
            <div className="space-y-6">
              <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg text-xs text-amber-900">
                <span className="font-bold block mb-1">Centrale Configuratie Parameters:</span>
                Alle externe koppelingen, API base URL's, e-mailadressen en OAuth instellingen worden geladen uit configuratievariabelen. Geen hardcoded waarden.
              </div>

              <div className="bg-white border border-stone-200 rounded-lg p-4 font-mono text-xs space-y-2">
                <div className="flex justify-between py-1 border-b border-stone-100">
                  <span className="text-stone-500">SITE_URL</span>
                  <span className="font-bold text-stone-900">{CONFIG.SITE_URL}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-stone-100">
                  <span className="text-stone-500">LOGIN_URL</span>
                  <span className="font-bold text-stone-900">{CONFIG.LOGIN_URL}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-stone-100">
                  <span className="text-stone-500">REGISTER_URL</span>
                  <span className="font-bold text-stone-900">{CONFIG.REGISTER_URL}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-stone-100">
                  <span className="text-stone-500">API_BASE_URL</span>
                  <span className="font-bold text-stone-900">{CONFIG.API_BASE_URL}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-stone-100">
                  <span className="text-stone-500">SUPPORT_EMAIL</span>
                  <span className="font-bold text-stone-900">{CONFIG.SUPPORT_EMAIL}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-stone-100">
                  <span className="text-stone-500">SMTP_SERVER</span>
                  <span className="font-bold text-stone-900">{CONFIG.SMTP_SERVER}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-stone-100">
                  <span className="text-stone-500">POM_MERCHANT_ID</span>
                  <span className="font-bold text-stone-900">{CONFIG.POM_MERCHANT_ID}</span>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-bold text-stone-900 mb-3">TODO Items voor Externe Productiekoppelingen</h4>
                <div className="space-y-3">
                  {TODO_ITEMS.map((todo) => (
                    <div key={todo.id} className="bg-white border-l-4 border-amber-600 p-3 rounded-r-lg border-y border-r border-stone-200">
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span className="font-bold text-stone-900 font-mono">{todo.id}: {todo.variable}</span>
                        <span className="px-2 py-0.5 rounded text-[10px] bg-amber-100 text-amber-900 font-semibold">{todo.status}</span>
                      </div>
                      <p className="text-xs text-stone-600">{todo.description}</p>
                      <span className="text-[11px] text-amber-800 font-medium mt-1 block">Provider: {todo.provider}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 6: FORMS */}
          {activeTab === 'forms' && (
            <div className="space-y-4">
              <div className="bg-stone-100 p-4 rounded-lg text-xs text-stone-700">
                <span className="font-bold block mb-1">Productie Formuliercontracten:</span>
                Ieder formulier heeft een gedefinieerde validatie, actie, backend endpoint, succesactie en foutactie. Geen formulier bestaat zonder backend proces.
              </div>

              <div className="space-y-4">
                <div className="bg-white border border-stone-200 p-4 rounded-lg">
                  <h4 className="font-bold text-sm text-stone-900">1. B2B Offerte & Proefpakket Formulier</h4>
                  <p className="text-xs text-stone-600 mt-1">Gespecificeerd op pagina Kantoor en Horeca voor zakelijke koffieformules en proefsessies.</p>
                  <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-2 text-xs font-mono bg-stone-50 p-3 rounded border border-stone-100">
                    <div><span className="text-stone-400">Endpoint:</span> POST /api/b2b/quote</div>
                    <div><span className="text-stone-400">Validatie:</span> Bedrijfsnaam, contact, email, tel verplicht</div>
                    <div><span className="text-stone-400">Succesactie:</span> Bevestiging met referentie + dispatch binnen 24u</div>
                    <div><span className="text-stone-400">Foutactie:</span> Inline validatie-alarm met ontbrekende velden</div>
                  </div>
                </div>

                <div className="bg-white border border-stone-200 p-4 rounded-lg">
                  <h4 className="font-bold text-sm text-stone-900">2. Evenement Koffiecatering Aanvraag</h4>
                  <p className="text-xs text-stone-600 mt-1">Gespecificeerd op pagina Events voor mobiele barista en apparatuurverhuur.</p>
                  <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-2 text-xs font-mono bg-stone-50 p-3 rounded border border-stone-100">
                    <div><span className="text-stone-400">Endpoint:</span> POST /api/events/quote</div>
                    <div><span className="text-stone-400">Validatie:</span> Datum, aantal gasten, contactgegevens</div>
                    <div><span className="text-stone-400">Succesactie:</span> Automatische offerteberekening & opvolging</div>
                    <div><span className="text-stone-400">Foutactie:</span> Formulier resetblokkade met veldmarkering</div>
                  </div>
                </div>

                <div className="bg-white border border-stone-200 p-4 rounded-lg">
                  <h4 className="font-bold text-sm text-stone-900">3. Afspraakplanner Atelier Oudegem</h4>
                  <p className="text-xs text-stone-600 mt-1">Voor cupping, proeverij en white label consultatie in Jef Scheirsstraat 29.</p>
                  <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-2 text-xs font-mono bg-stone-50 p-3 rounded border border-stone-100">
                    <div><span className="text-stone-400">Endpoint:</span> POST /api/appointments</div>
                    <div><span className="text-stone-400">Validatie:</span> Slotbeschikbaarheid, datum, naam, email</div>
                    <div><span className="text-stone-400">Succesactie:</span> Directe afspraakbevestiging in het atelier</div>
                    <div><span className="text-stone-400">Foutactie:</span> Waarschuwing bij bezet tijdslot</div>
                  </div>
                </div>

                <div className="bg-white border border-stone-200 p-4 rounded-lg">
                  <h4 className="font-bold text-sm text-stone-900">4. Support Ticket & Retouren</h4>
                  <p className="text-xs text-stone-600 mt-1">Onderdeel van de Coolblue / Amazon-geïnspireerde Klantenservice & FAQ.</p>
                  <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-2 text-xs font-mono bg-stone-50 p-3 rounded border border-stone-100">
                    <div><span className="text-stone-400">Endpoint:</span> POST /api/support/ticket</div>
                    <div><span className="text-stone-400">Validatie:</span> Categoriekeuze, ordernummer (indien retour), omschrijving</div>
                    <div><span className="text-stone-400">Succesactie:</span> Ticketnummer generatie + support tracking</div>
                    <div><span className="text-stone-400">Foutactie:</span> Foutmelding met contactverwijzing</div>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 border-t border-stone-200 bg-white flex items-center justify-between text-xs text-stone-500">
          <span>Productie-architectuur Maison Milau BV · BE 1041.542.844</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-stone-800 text-white rounded font-medium hover:bg-stone-700 transition-colors"
          >
            Sluiten
          </button>
        </div>

      </div>
    </div>
  );
};
