import React, { useState } from 'react';
import { CartItem } from '../views/WebshopView';
import { X, Trash2, Plus, Minus, CreditCard, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { CONFIG } from '../config/site.config';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}) => {
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderComplete, setOrderComplete] = useState<{ reference: string; total: number } | null>(null);
  const [customer, setCustomer] = useState({
    name: '',
    email: '',
    phone: '',
    address: 'Jef Scheirsstraat 10, 9200 Oudegem',
  });

  if (!isOpen) return null;

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal >= 45 ? 0 : 4.95;
  const grandTotal = subtotal + (cart.length > 0 ? shipping : 0);

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!customer.name || !customer.email) return;

    setIsCheckingOut(true);

    try {
      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items: cart,
          totalAmount: grandTotal,
          customer: {
            name: customer.name,
            email: customer.email,
            phone: customer.phone,
            shippingAddress: customer.address
          }
        })
      });

      const data = await response.json();
      if (response.ok && data.success) {
        setOrderComplete({
          reference: data.orderId,
          total: grandTotal
        });
        onClearCart();
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsCheckingOut(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-stone-900/60 backdrop-blur-xs" id="cart-drawer-overlay">
      <div className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between overflow-hidden">
        
        {/* Header */}
        <div className="p-5 border-b border-stone-200 flex items-center justify-between">
          <div>
            <h3 className="font-serif text-lg font-bold text-stone-900">Uw Winkelmandje</h3>
            <span className="text-xs text-stone-500">Maison Milau Specialty Coffee Roastery</span>
          </div>
          <button onClick={onClose} className="p-1 text-stone-400 hover:text-stone-800 rounded">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-5">
          {orderComplete ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="font-serif text-xl font-bold text-stone-900">Bestelling Bevestigd!</h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                Bedankt voor uw bestelling. Uw specialty koffie wordt vers voor u verpakt en binnen 48u verzonden.
              </p>
              <div className="bg-stone-50 p-4 rounded-lg border border-stone-200 text-xs font-mono">
                <div className="text-stone-500">Referentienummer:</div>
                <div className="font-bold text-amber-900 text-sm">{orderComplete.reference}</div>
                <div className="mt-2 text-stone-500">Totaal betaald (incl. btw):</div>
                <div className="font-bold text-stone-900">€{orderComplete.total.toFixed(2)}</div>
              </div>
              <p className="text-[11px] text-stone-400">
                POM Merchant Gateway: <span className="font-mono text-stone-600">{CONFIG.POM_MERCHANT_ID}</span>
              </p>
              <button
                onClick={() => {
                  setOrderComplete(null);
                  onClose();
                }}
                className="w-full py-2.5 bg-amber-900 text-white rounded text-xs font-semibold hover:bg-amber-800"
              >
                Verder Winkelen
              </button>
            </div>
          ) : cart.length === 0 ? (
            <div className="text-center py-16 text-stone-400 space-y-3">
              <p className="text-sm">Uw winkelmandje is leeg.</p>
              <button
                onClick={onClose}
                className="px-4 py-2 bg-stone-100 text-stone-700 rounded text-xs font-semibold hover:bg-stone-200"
              >
                Bekijk onze specialty koffies
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="p-3 border border-stone-200 rounded-xl bg-stone-50/50 flex items-center justify-between gap-3">
                  <div className="flex-1">
                    <h5 className="font-serif text-sm font-bold text-stone-900">{item.name}</h5>
                    <div className="text-[11px] text-stone-500 space-x-2">
                      <span>{item.format}</span>
                      <span>•</span>
                      <span>{item.grind}</span>
                    </div>
                    {item.isSubscription && (
                      <span className="inline-block mt-1 text-[10px] px-1.5 py-0.5 rounded bg-amber-100 text-amber-900 font-semibold">
                        Abonnement (-10%)
                      </span>
                    )}
                    <div className="font-mono text-xs font-bold text-amber-900 mt-1">
                      €{(item.price * item.quantity).toFixed(2)}
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 bg-white border border-stone-200 rounded p-1">
                    <button
                      onClick={() => onUpdateQuantity(item.id, -1)}
                      className="p-1 text-stone-500 hover:text-stone-900"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="text-xs font-bold px-1.5">{item.quantity}</span>
                    <button
                      onClick={() => onUpdateQuantity(item.id, 1)}
                      className="p-1 text-stone-500 hover:text-stone-900"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>

                  <button
                    onClick={() => onRemoveItem(item.id)}
                    className="p-1.5 text-stone-400 hover:text-red-600 rounded"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}

              {/* Checkout Form */}
              <form onSubmit={handleCheckout} className="mt-6 pt-4 border-t border-stone-200 space-y-3">
                <span className="text-xs font-bold uppercase text-stone-700 block">Verzend- & Betaalgegevens</span>
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Volledige Naam *"
                    value={customer.name}
                    onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
                    className="w-full text-xs px-3 py-2 border border-stone-300 rounded bg-stone-50"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    required
                    placeholder="E-mailadres voor factuur & track & trace *"
                    value={customer.email}
                    onChange={(e) => setCustomer({ ...customer, email: e.target.value })}
                    className="w-full text-xs px-3 py-2 border border-stone-300 rounded bg-stone-50"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Telefoonnummer"
                    value={customer.phone}
                    onChange={(e) => setCustomer({ ...customer, phone: e.target.value })}
                    className="w-full text-xs px-3 py-2 border border-stone-300 rounded bg-stone-50"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Leveradres (Straat, Nr, Postcode, Gemeente)"
                    value={customer.address}
                    onChange={(e) => setCustomer({ ...customer, address: e.target.value })}
                    className="w-full text-xs px-3 py-2 border border-stone-300 rounded bg-stone-50"
                  />
                </div>

                <div className="pt-2">
                  <div className="flex items-center gap-2 text-xs text-stone-600">
                    <CreditCard className="w-4 h-4 text-emerald-700" />
                    <span>Veilige betaling via POM / Bancontact / Payconiq / iDeal</span>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isCheckingOut}
                  className="w-full py-3 bg-amber-900 text-white rounded-lg font-bold text-xs hover:bg-amber-800 transition-colors flex items-center justify-center gap-2 shadow-md mt-4"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>{isCheckingOut ? 'Bestelling afronden...' : `Afrekenen €${grandTotal.toFixed(2)}`}</span>
                </button>
              </form>
            </div>
          )}
        </div>

        {/* Footer Summary */}
        {!orderComplete && cart.length > 0 && (
          <div className="p-5 bg-stone-50 border-t border-stone-200 text-xs space-y-2">
            <div className="flex justify-between text-stone-600">
              <span>Subtotaal:</span>
              <span className="font-mono">€{subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-stone-600">
              <span>Verzending (gratis vanaf €45):</span>
              <span className="font-mono">{shipping === 0 ? 'GRATIS' : `€${shipping.toFixed(2)}`}</span>
            </div>
            <div className="flex justify-between text-stone-900 font-bold text-sm pt-2 border-t border-stone-200">
              <span>Totaal (incl. 6% / 21% btw):</span>
              <span className="font-mono text-amber-900">€{grandTotal.toFixed(2)}</span>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
