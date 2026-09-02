import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { SystemArchitectureModal } from './components/SystemArchitectureModal';
import { CartDrawer } from './components/CartDrawer';
import { CartItem, WebshopView } from './views/WebshopView';
import { HomeView } from './views/HomeView';
import { CatalogView } from './views/CatalogView';
import { B2BView } from './views/B2BView';
import { EventsView } from './views/EventsView';
import { AppointmentView } from './views/AppointmentView';
import { FaqView } from './views/FaqView';
import { AccountView } from './views/AccountView';
import { AboutView } from './views/AboutView';
import { MarketsView } from './views/MarketsView';
import { WorkshopView } from './views/WorkshopView';
import { ContactView } from './views/ContactView';
import { validateLink } from './config/site.config';
import { WebshopProduct, WEBSHOP_PRODUCTS } from './data/webshop';
import { AlertTriangle, ArrowLeft } from 'lucide-react';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>('/');
  const [currentLang, setCurrentLang] = useState<'nl' | 'fr' | 'en' | 'de'>('nl');
  const [isArchitectureModalOpen, setIsArchitectureModalOpen] = useState<boolean>(false);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

  // Cart state persisted in localStorage or local memory
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('mm_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('mm_cart', JSON.stringify(cart));
    } catch (e) {
      console.warn('Storage save failed', e);
    }
  }, [cart]);

  // Handle URL changes & browser history
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };

    window.addEventListener('popstate', handlePopState);
    // Initialize from path
    if (window.location.pathname && window.location.pathname !== '/') {
      setCurrentPath(window.location.pathname);
    }

    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: string) => {
    // Strip search params for routing match
    const cleanPath = path.split('?')[0];
    setCurrentPath(cleanPath);
    window.history.pushState({}, '', path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAddToCart = (
    product: WebshopProduct,
    format: string,
    grind: string,
    isSubscription: boolean
  ) => {
    const basePrice = product.formatPrices[format] || product.basePrice;
    const finalPrice = isSubscription ? +(basePrice * 0.90).toFixed(2) : basePrice;
    const cartItemId = `${product.id}-${format}-${grind}-${isSubscription ? 'sub' : 'one'}`;

    setCart(prev => {
      const existing = prev.find(item => item.id === cartItemId);
      if (existing) {
        return prev.map(item =>
          item.id === cartItemId ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [
        ...prev,
        {
          id: cartItemId,
          productId: product.id,
          name: product.name,
          category: product.category,
          format,
          grind,
          price: finalPrice,
          quantity: 1,
          isSubscription
        }
      ];
    });
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCart(prev =>
      prev
        .map(item => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  // STRICT VALIDATION: Check whether currentPath is in approved registry
  const validation = validateLink(currentPath);

  // Render view based on route
  const renderView = () => {
    if (!validation.isValid) {
      return (
        <div className="max-w-3xl mx-auto py-24 px-4 text-center">
          <div className="inline-flex p-4 bg-amber-100 text-amber-900 rounded-full mb-4">
            <AlertTriangle className="w-8 h-8" />
          </div>
          <span className="text-xs font-bold text-red-600 uppercase tracking-widest block mb-2">
            Niet-Goedgekeurde Route
          </span>
          <h2 className="font-serif text-3xl font-bold text-stone-900 mb-3">
            Ongeldig of Niet-Geregistreerd Paginapad
          </h2>
          <p className="text-sm text-stone-600 mb-6 leading-relaxed">
            Het pad <code className="font-mono bg-stone-100 px-2 py-0.5 rounded text-amber-900">{currentPath}</code> is niet opgenomen in de goedgekeurde sitemap en routes-registry conform Stap 1 en Stap 2 van het systeem.
          </p>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-2.5 bg-amber-900 text-white rounded-lg text-xs font-bold hover:bg-amber-800 transition-colors inline-flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Terug naar Home</span>
          </button>
        </div>
      );
    }

    switch (currentPath) {
      case '/':
        return <HomeView onNavigate={navigate} />;
      case '/koffie-catalogus':
      case '/koffies':
        return <CatalogView onNavigate={navigate} />;
      case '/webshop':
        return (
          <WebshopView
            onNavigate={navigate}
            cart={cart}
            onAddToCart={handleAddToCart}
            onOpenCart={() => setIsCartOpen(true)}
          />
        );
      case '/kantoor-horeca':
        return <B2BView onNavigate={navigate} />;
      case '/events':
        return <EventsView onNavigate={navigate} />;
      case '/afspraakplanner':
        return <AppointmentView onNavigate={navigate} />;
      case '/faq':
        return <FaqView onNavigate={navigate} />;
      case '/account':
      case '/login':
      case '/register':
        return <AccountView onNavigate={navigate} />;
      case '/over-ons':
        return <AboutView onNavigate={navigate} />;
      case '/lokale-markten':
        return <MarketsView onNavigate={navigate} />;
      case '/workshops-proeverijen':
        return <WorkshopView onNavigate={navigate} />;
      case '/contact':
        return <ContactView onNavigate={navigate} />;
      default:
        return <HomeView onNavigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#faf8f5]">
      {/* Primary Header */}
      <Header
        currentPath={currentPath}
        onNavigate={navigate}
        cartCount={cart.reduce((a, b) => a + b.quantity, 0)}
        onOpenCart={() => setIsCartOpen(true)}
        currentLang={currentLang}
        onSelectLang={setCurrentLang}
        onOpenArchitecture={() => setIsArchitectureModalOpen(true)}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        {renderView()}
      </main>

      {/* Footer */}
      <Footer onNavigate={navigate} />

      {/* System Architecture Inspector Modal */}
      <SystemArchitectureModal
        isOpen={isArchitectureModalOpen}
        onClose={() => setIsArchitectureModalOpen(false)}
      />

      {/* Shopping Cart & POM Checkout Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />
    </div>
  );
}
