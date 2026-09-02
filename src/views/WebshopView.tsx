import React, { useState, useEffect } from 'react';
import { WEBSHOP_PRODUCTS, WebshopProduct } from '../data/webshop';
import { ShoppingBag, Search, Check, RefreshCw, ArrowRight, ShieldCheck, CreditCard, Sparkles, Filter, Info, X } from 'lucide-react';

interface WebshopViewProps {
  onNavigate: (path: string) => void;
  cart: CartItem[];
  onAddToCart: (product: WebshopProduct, format: string, grind: string, isSubscription: boolean) => void;
  onOpenCart: () => void;
}

export interface CartItem {
  id: string;
  productId: string;
  name: string;
  category: string;
  format: string;
  grind: string;
  price: number;
  quantity: number;
  isSubscription: boolean;
}

export const WebshopView: React.FC<WebshopViewProps> = ({ onNavigate, cart, onAddToCart, onOpenCart }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // Selected variant state per product (keyed by product id)
  const [productSelections, setProductSelections] = useState<{
    [productId: string]: {
      format: string;
      grind: string;
      isSubscription: boolean;
    }
  }>({});

  const [notification, setNotification] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'Alle Producten' },
    { id: 'houseblends', label: 'Houseblends' },
    { id: 'barrel-aged', label: 'Barrel Aged' },
    { id: 'infused', label: 'Infused Coffees' },
    { id: 'single-origin', label: 'Single Origin' },
    { id: 'boxes', label: 'Proefpakketten' },
    { id: 'merchandise', label: 'Accessoires & Bon' },
    { id: 'machines', label: 'Machines & Tools' },
  ];

  // Helper to get active selection for a product
  const getSelection = (product: WebshopProduct) => {
    return productSelections[product.id] || {
      format: product.availableFormats[0] || '250g',
      grind: product.availableGrinds[0] || 'Hele Bonen',
      isSubscription: false,
    };
  };

  // Update selection
  const updateSelection = (productId: string, updates: Partial<{ format: string; grind: string; isSubscription: boolean }>) => {
    setProductSelections(prev => ({
      ...prev,
      [productId]: {
        ...getSelection(WEBSHOP_PRODUCTS.find(p => p.id === productId)!),
        ...updates
      }
    }));
  };

  // Calculate current price based on format and subscription
  const calculatePrice = (product: WebshopProduct) => {
    const sel = getSelection(product);
    const base = product.formatPrices[sel.format] || product.basePrice;
    if (sel.isSubscription) {
      return +(base * 0.90).toFixed(2); // 10% discount on subscription
    }
    return base;
  };

  const handleAdd = (product: WebshopProduct) => {
    const sel = getSelection(product);
    onAddToCart(product, sel.format, sel.grind, sel.isSubscription);
    setNotification(`Toegevoegd aan mandje: ${product.name} (${sel.format})`);
    setTimeout(() => setNotification(null), 3000);
  };

  const filteredProducts = WEBSHOP_PRODUCTS.filter(product => {
    const matchesCat = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.flavorNotes.some(f => f.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  return (
    <div className="bg-[#faf8f5] text-stone-900 min-h-screen pb-20" id="webshop-container">
      {/* Toast Notification */}
      {notification && (
        <div className="fixed bottom-6 right-6 z-50 bg-stone-900 text-white px-5 py-3 rounded-xl shadow-xl flex items-center gap-3 text-xs border border-amber-800 animate-fade-in">
          <Check className="w-4 h-4 text-emerald-400" />
          <span>{notification}</span>
          <button onClick={onOpenCart} className="underline font-bold text-amber-300 ml-2">Bekijk Mandje</button>
        </div>
      )}

      {/* Header Banner */}
      <div className="bg-white border-b border-stone-200 py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <nav className="flex items-center gap-2 text-xs text-stone-500 mb-3">
            <button onClick={() => onNavigate('/')} className="hover:text-amber-900">Home</button>
            <span>/</span>
            <span className="text-stone-900 font-semibold">Webshop</span>
          </nav>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <span className="text-xs font-bold text-amber-800 uppercase tracking-widest block">
                Artisanale Micro-Roastery Webshop
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-950 mt-1">
                Verse Specialty Koffie Bestellen
              </h1>
              <p className="mt-3 text-sm text-stone-600 leading-relaxed">
                Vers gebrand in Oudegem (Dendermonde), binnen 2 weken na branding geleverd. Kies voor een eenmalige bestelling of geniet van 10% doorlopende korting met een flexibel abonnement.
              </p>
            </div>

            {/* Quick Cart Button */}
            <button
              id="webshop-open-cart-btn"
              onClick={onOpenCart}
              className="px-5 py-2.5 bg-amber-900 text-white rounded-lg text-xs font-bold hover:bg-amber-800 transition-colors flex items-center gap-2 shadow-xs shrink-0 self-start md:self-auto"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Winkelmandje ({cart.reduce((a, b) => a + b.quantity, 0)})</span>
            </button>
          </div>

          {/* Category Filter Pills & Search */}
          <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-stone-100">
            <div className="flex flex-wrap gap-1.5 w-full md:w-auto">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                    selectedCategory === cat.id
                      ? 'bg-amber-900 text-white shadow-xs'
                      : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <div className="relative w-full md:w-64">
              <Search className="w-4 h-4 text-stone-400 absolute left-3 top-2.5" />
              <input
                type="text"
                placeholder="Zoek product of smaak..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 text-xs bg-stone-50 border border-stone-300 rounded-lg text-stone-900 focus:outline-hidden focus:ring-2 focus:ring-amber-700"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map(product => {
            const sel = getSelection(product);
            const currentPrice = calculatePrice(product);

            return (
              <div
                key={product.id}
                id={`webshop-product-${product.id}`}
                className="bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="p-6">
                  {/* Category & Badge */}
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] font-semibold text-amber-800 uppercase tracking-wider">
                      {product.category}
                    </span>
                    {product.scaScore && (
                      <span className="text-xs font-bold font-mono px-2 py-0.5 rounded bg-amber-50 text-amber-900 border border-amber-200">
                        SCA {product.scaScore}
                      </span>
                    )}
                  </div>

                  <h3 className="font-serif text-xl font-bold text-stone-950 mb-1">
                    {product.name}
                  </h3>

                  <p className="text-xs text-stone-600 line-clamp-2 mb-3 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Flavor Notes */}
                  {product.flavorNotes.length > 0 && (
                    <div className="flex flex-wrap gap-1 mb-4">
                      {product.flavorNotes.map(flavor => (
                        <span key={flavor} className="text-[10px] px-2 py-0.5 rounded bg-stone-100 text-stone-700 font-medium">
                          {flavor}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* STRICT REQUIREMENT: BI-DIRECTIONAL LINK TO CATALOG */}
                  {product.catalogLink && (
                    <div className="mb-5 pb-3 border-b border-stone-100">
                      <button
                        onClick={() => onNavigate(product.catalogLink!)}
                        className="text-xs font-semibold text-amber-900 hover:text-amber-700 inline-flex items-center gap-1.5 transition-colors underline underline-offset-2"
                      >
                        <Info className="w-3.5 h-3.5" />
                        <span>View detailed coffee information</span>
                      </button>
                    </div>
                  )}

                  {/* Product Options: Format */}
                  {product.availableFormats.length > 0 && (
                    <div className="mb-3">
                      <label className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block mb-1">
                        Formaat & Gewicht
                      </label>
                      <div className="grid grid-cols-3 gap-1.5">
                        {product.availableFormats.map(fmt => (
                          <button
                            key={fmt}
                            onClick={() => updateSelection(product.id, { format: fmt })}
                            className={`py-1.5 px-2 text-xs font-medium rounded border transition-colors ${
                              sel.format === fmt
                                ? 'bg-amber-900 text-white border-amber-900'
                                : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                            }`}
                          >
                            {fmt}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Product Options: Grind */}
                  {product.availableGrinds.length > 0 && (
                    <div className="mb-4">
                      <label className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block mb-1">
                        Maalgraad
                      </label>
                      <select
                        value={sel.grind}
                        onChange={(e) => updateSelection(product.id, { grind: e.target.value })}
                        className="w-full text-xs py-1.5 px-2 bg-stone-50 border border-stone-200 rounded text-stone-800"
                      >
                        {product.availableGrinds.map(grd => (
                          <option key={grd} value={grd}>{grd}</option>
                        ))}
                      </select>
                    </div>
                  )}

                  {/* Purchase Mode Toggle: One-time vs Subscription */}
                  <div className="p-2.5 rounded-lg bg-stone-50 border border-stone-200/70 space-y-1.5">
                    <label className="flex items-center gap-2 cursor-pointer text-xs">
                      <input
                        type="radio"
                        name={`mode-${product.id}`}
                        checked={!sel.isSubscription}
                        onChange={() => updateSelection(product.id, { isSubscription: false })}
                        className="accent-amber-900"
                      />
                      <span className="font-medium text-stone-800">Eenmalige aankoop</span>
                    </label>

                    <label className="flex items-center gap-2 cursor-pointer text-xs">
                      <input
                        type="radio"
                        name={`mode-${product.id}`}
                        checked={sel.isSubscription}
                        onChange={() => updateSelection(product.id, { isSubscription: true })}
                        className="accent-amber-900"
                      />
                      <span className="font-medium text-amber-900 flex items-center gap-1">
                        <span>Abonnement</span>
                        <span className="text-[10px] px-1.5 py-0.2 rounded bg-amber-200 text-amber-900 font-bold">-10% korting</span>
                      </span>
                    </label>
                  </div>
                </div>

                {/* Price and Add to Cart Action */}
                <div className="p-4 bg-stone-50 border-t border-stone-100 flex items-center justify-between gap-3">
                  <div>
                    <span className="text-[10px] text-stone-500 uppercase block font-semibold">Totaalprijs</span>
                    <span className="font-serif text-xl font-bold text-stone-900">
                      €{currentPrice.toFixed(2)}
                    </span>
                  </div>

                  <button
                    id={`btn-add-to-cart-${product.id}`}
                    onClick={() => handleAdd(product)}
                    className="px-4 py-2 bg-amber-900 text-white rounded-lg text-xs font-bold hover:bg-amber-800 transition-colors flex items-center gap-1.5 shadow-xs"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>In Winkelmand</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
