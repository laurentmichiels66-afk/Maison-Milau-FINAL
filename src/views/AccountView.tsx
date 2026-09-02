import React, { useState, useEffect } from 'react';
import { User, Package, RefreshCw, MapPin, ShieldCheck, LogOut, CheckCircle, Clock, ChevronRight } from 'lucide-react';
import { CONFIG } from '../config/site.config';

interface AccountViewProps {
  onNavigate: (path: string) => void;
}

export const AccountView: React.FC<AccountViewProps> = ({ onNavigate }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [activeTab, setActiveTab] = useState<'orders' | 'subscriptions' | 'quotes' | 'addresses'>('orders');

  const [orders, setOrders] = useState<any[]>([]);
  const [subscriptions, setSubscriptions] = useState<any[]>([]);
  const [quotes, setQuotes] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch user dashboard data from backend
    Promise.all([
      fetch('/api/orders').then(r => r.json()).catch(() => ({ orders: [] })),
      fetch('/api/subscriptions').then(r => r.json()).catch(() => ({ subscriptions: [] })),
      fetch('/api/b2b/quotes').then(r => r.json()).catch(() => ({ quotes: [] }))
    ]).then(([ordersData, subsData, quotesData]) => {
      setOrders(ordersData.orders || []);
      setSubscriptions(subsData.subscriptions || []);
      setQuotes(quotesData.quotes || []);
      setLoading(false);
    });
  }, []);

  return (
    <div className="bg-[#faf8f5] text-stone-900 min-h-screen pb-20" id="account-page-container">
      {/* Top Banner */}
      <section className="bg-white border-b border-stone-200 py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <nav className="flex items-center gap-2 text-xs text-stone-500 mb-3">
            <button onClick={() => onNavigate('/')} className="hover:text-amber-900">Home</button>
            <span>/</span>
            <span className="text-stone-900 font-semibold">Mijn Account</span>
          </nav>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-amber-800 uppercase tracking-widest block">
                Klantenzone
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl font-bold text-stone-950 mt-1">
                Welkom terug, Laurent Michiels
              </h1>
              <p className="text-xs text-stone-500 mt-1">
                Account ID: MM-CUST-88219 • Lid sinds 2026 • Geregistreerd e-mailadres: laurent.michiels66@gmail.com
              </p>
            </div>

            <button
              onClick={() => setIsLoggedIn(false)}
              className="px-4 py-2 border border-stone-300 rounded-lg text-xs font-semibold text-stone-700 hover:bg-stone-50 flex items-center gap-1.5 w-fit"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Uitloggen</span>
            </button>
          </div>
        </div>
      </section>

      {/* Main Account Dashboard */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Side Nav */}
          <div className="space-y-1.5">
            <button
              onClick={() => setActiveTab('orders')}
              className={`w-full text-left px-4 py-3 rounded-xl text-xs font-bold transition-colors flex items-center justify-between ${
                activeTab === 'orders'
                  ? 'bg-amber-900 text-white shadow-xs'
                  : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200/80'
              }`}
            >
              <div className="flex items-center gap-2">
                <Package className="w-4 h-4" />
                <span>Mijn Bestellingen ({orders.length})</span>
              </div>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => setActiveTab('subscriptions')}
              className={`w-full text-left px-4 py-3 rounded-xl text-xs font-bold transition-colors flex items-center justify-between ${
                activeTab === 'subscriptions'
                  ? 'bg-amber-900 text-white shadow-xs'
                  : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200/80'
              }`}
            >
              <div className="flex items-center gap-2">
                <RefreshCw className="w-4 h-4" />
                <span>Koffie Abonnementen ({subscriptions.length})</span>
              </div>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => setActiveTab('quotes')}
              className={`w-full text-left px-4 py-3 rounded-xl text-xs font-bold transition-colors flex items-center justify-between ${
                activeTab === 'quotes'
                  ? 'bg-amber-900 text-white shadow-xs'
                  : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200/80'
              }`}
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" />
                <span>B2B Aanvragen & Offertes ({quotes.length})</span>
              </div>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => setActiveTab('addresses')}
              className={`w-full text-left px-4 py-3 rounded-xl text-xs font-bold transition-colors flex items-center justify-between ${
                activeTab === 'addresses'
                  ? 'bg-amber-900 text-white shadow-xs'
                  : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200/80'
              }`}
            >
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Mijn Adressen & Facturatie</span>
              </div>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Tab Content Panels */}
          <div className="lg:col-span-3">
            
            {/* Orders Tab */}
            {activeTab === 'orders' && (
              <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-xs space-y-6">
                <div className="flex items-center justify-between border-b border-stone-100 pb-4">
                  <h3 className="font-serif text-xl font-bold text-stone-900">Bestelgeschiedenis</h3>
                  <span className="text-xs text-stone-500">Live data uit backend database</span>
                </div>

                {orders.length === 0 ? (
                  <div className="text-center py-10 text-stone-400 text-xs">
                    Geen bestellingen gevonden. Plaats een bestelling in onze webshop.
                  </div>
                ) : (
                  <div className="space-y-4">
                    {orders.map(order => (
                      <div key={order.id} className="p-4 border border-stone-200 rounded-xl bg-stone-50/50">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-200/60 pb-3 mb-3">
                          <div>
                            <span className="font-mono text-xs font-bold text-amber-900">{order.id}</span>
                            <span className="text-xs text-stone-500 ml-3">{new Date(order.createdAt).toLocaleDateString('nl-BE')}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-100 text-emerald-800">
                              {order.status}
                            </span>
                            <span className="font-mono text-xs font-bold text-stone-900">
                              €{order.totalAmount.toFixed(2)}
                            </span>
                          </div>
                        </div>

                        <div className="space-y-1.5 text-xs text-stone-700">
                          {order.items.map((item: any, idx: number) => (
                            <div key={idx} className="flex justify-between">
                              <span>{item.quantity}x {item.name} ({item.format} · {item.grind})</span>
                              <span className="font-mono">€{(item.price * item.quantity).toFixed(2)}</span>
                            </div>
                          ))}
                        </div>

                        {order.trackingCode && (
                          <div className="mt-3 pt-2 border-t border-stone-200/50 flex items-center justify-between text-[11px] text-stone-500">
                            <span>Track & Trace: <strong className="text-stone-800">{order.trackingCode}</strong></span>
                            <span className="text-emerald-700 font-medium">Bpost Levering Onderweg</span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Subscriptions Tab */}
            {activeTab === 'subscriptions' && (
              <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-xs space-y-6">
                <div className="flex items-center justify-between border-b border-stone-100 pb-4">
                  <h3 className="font-serif text-xl font-bold text-stone-900">Lopende Koffie Abonnementen (-10%)</h3>
                  <span className="text-xs text-emerald-700 font-semibold bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                    Actief Abonnement
                  </span>
                </div>

                {subscriptions.map(sub => (
                  <div key={sub.id} className="p-5 border border-stone-200 rounded-xl bg-stone-50/50 space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <span className="font-serif font-bold text-base text-stone-900">{sub.planName}</span>
                        <div className="text-xs text-stone-500 mt-0.5">
                          Formaat: {sub.format} • Maalgraad: {sub.grind} • Frequentie: {sub.frequency}
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="font-mono text-base font-bold text-amber-900">€{sub.pricePerDelivery.toFixed(2)}</span>
                        <span className="block text-[11px] text-stone-400">per levering (incl. 10% korting)</span>
                      </div>
                    </div>

                    <div className="p-3 bg-white border border-stone-200 rounded-lg flex items-center justify-between text-xs">
                      <div>
                        <span className="text-stone-500">Volgende levering:</span>
                        <strong className="text-stone-900 ml-1.5">{sub.nextDeliveryDate}</strong>
                      </div>
                      <span className="text-emerald-700 font-semibold">Vers gebrand op schema</span>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-2">
                      <button className="px-3 py-1.5 bg-stone-100 hover:bg-stone-200 text-stone-800 rounded text-xs font-semibold">
                        Levering 1 week overslaan
                      </button>
                      <button className="px-3 py-1.5 bg-stone-100 hover:bg-stone-200 text-stone-800 rounded text-xs font-semibold">
                        Maalgraad of boon wijzigen
                      </button>
                      <button className="px-3 py-1.5 text-stone-500 hover:text-red-700 text-xs">
                        Abonnement pauzeren
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* B2B Quotes Tab */}
            {activeTab === 'quotes' && (
              <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-xs space-y-4">
                <div className="flex items-center justify-between border-b border-stone-100 pb-4">
                  <h3 className="font-serif text-xl font-bold text-stone-900">Zakelijke Aanvragen & Offertes</h3>
                </div>

                {quotes.map(quote => (
                  <div key={quote.id} className="p-4 border border-stone-200 rounded-xl bg-stone-50">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <span className="font-mono text-xs font-bold text-amber-900">{quote.id}</span>
                        <h4 className="font-serif font-bold text-stone-900">{quote.companyName}</h4>
                      </div>
                      <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-amber-100 text-amber-900">
                        {quote.status}
                      </span>
                    </div>
                    <p className="text-xs text-stone-600 mb-2">Machine/Behoefte: {quote.machineNeed}</p>
                    <div className="text-[11px] text-stone-400">
                      Contact: {quote.contactPerson} ({quote.email}) • Sector: {quote.sectorType}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Addresses Tab */}
            {activeTab === 'addresses' && (
              <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-xs space-y-6">
                <div className="flex items-center justify-between border-b border-stone-100 pb-4">
                  <h3 className="font-serif text-xl font-bold text-stone-900">Opgeslagen Adressen</h3>
                  <button className="text-xs font-semibold text-amber-900 hover:underline">+ Nieuw Adres</button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 border-2 border-amber-900/40 rounded-xl bg-stone-50/50 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-amber-900 uppercase">Standaard Leveradres</span>
                      <span className="text-[10px] px-1.5 py-0.5 bg-amber-100 text-amber-900 rounded font-bold">Actief</span>
                    </div>
                    <p className="text-xs text-stone-800 leading-relaxed font-medium">
                      Laurent Michiels<br />
                      Jef Scheirsstraat 29<br />
                      9200 Oudegem (Dendermonde)<br />
                      België
                    </p>
                  </div>

                  <div className="p-4 border border-stone-200 rounded-xl bg-stone-50/50 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-stone-500 uppercase">Facturatieadres (B2B)</span>
                    </div>
                    <p className="text-xs text-stone-800 leading-relaxed font-medium">
                      Maison Milau BV<br />
                      BTW BE 1041.542.844<br />
                      Jef Scheirsstraat 29<br />
                      9200 Oudegem<br />
                      België
                    </p>
                  </div>
                </div>
              </div>
            )}

          </div>

        </div>
      </div>
    </div>
  );
};
