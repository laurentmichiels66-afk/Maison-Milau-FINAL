import React, { useState } from 'react';
import { X, ChevronDown, ChevronRight, User, ShoppingBag, Coffee, Briefcase, Calendar, HelpCircle, Info } from 'lucide-react';
import { ValidatedLink } from './ValidatedLink';

interface HamburgerMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (path: string) => void;
}

export const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ isOpen, onClose, onNavigate }) => {
  const [webshopSubOpen, setWebshopSubOpen] = useState(false);

  if (!isOpen) return null;

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    onNavigate(path);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex" id="hamburger-menu-overlay">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-stone-900/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Drawer Panel */}
      <div className="relative ml-auto w-full max-w-sm bg-[#faf8f5] h-full shadow-2xl flex flex-col z-10 border-l border-amber-900/10">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-stone-200">
          <div>
            <span className="text-xs font-semibold tracking-widest text-amber-800 uppercase block">Menu</span>
            <span className="font-serif text-lg font-bold text-stone-900">Maison Milau</span>
          </div>
          <button
            id="close-hamburger-button"
            onClick={onClose}
            className="p-2 text-stone-500 hover:text-stone-900 hover:bg-stone-100 rounded-full transition-colors"
            aria-label="Sluit menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Menu Items */}
        <nav className="flex-1 overflow-y-auto px-4 py-4 space-y-1">
          {/* My Account */}
          <ValidatedLink
            id="nav-my-account"
            href="/account"
            onClick={(e) => handleLinkClick(e, "/account")}
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-stone-800 hover:bg-amber-50 hover:text-amber-900 font-medium transition-colors"
          >
            <User className="w-4 h-4 text-amber-700" />
            <span>My Account</span>
          </ValidatedLink>

          {/* Webshop with accordion subcategories */}
          <div className="rounded-lg overflow-hidden">
            <button
              id="webshop-accordion-toggle"
              onClick={() => setWebshopSubOpen(!webshopSubOpen)}
              className="w-full flex items-center justify-between px-4 py-3 text-stone-800 hover:bg-amber-50 hover:text-amber-900 font-medium transition-colors"
            >
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-4 h-4 text-amber-700" />
                <span>Webshop</span>
              </div>
              {webshopSubOpen ? <ChevronDown className="w-4 h-4 text-stone-400" /> : <ChevronRight className="w-4 h-4 text-stone-400" />}
            </button>

            {webshopSubOpen && (
              <div className="pl-11 pr-4 py-2 space-y-1 bg-amber-50/50 border-l-2 border-amber-600 ml-4 my-1">
                <ValidatedLink
                  id="subnav-webshop-all"
                  href="/webshop"
                  onClick={(e) => handleLinkClick(e, "/webshop")}
                  className="block py-1.5 text-sm font-semibold text-amber-900 hover:underline"
                >
                  Alles in de Webshop →
                </ValidatedLink>
                <ValidatedLink
                  id="subnav-houseblends"
                  href="/webshop?cat=houseblends"
                  onClick={(e) => handleLinkClick(e, "/webshop?cat=houseblends")}
                  className="block py-1 text-sm text-stone-600 hover:text-amber-900"
                >
                  Milau Houseblends
                </ValidatedLink>
                <ValidatedLink
                  id="subnav-barrel-aged"
                  href="/webshop?cat=barrel-aged"
                  onClick={(e) => handleLinkClick(e, "/webshop?cat=barrel-aged")}
                  className="block py-1 text-sm text-stone-600 hover:text-amber-900"
                >
                  Barrel Aged Coffees
                </ValidatedLink>
                <ValidatedLink
                  id="subnav-infused"
                  href="/webshop?cat=infused"
                  onClick={(e) => handleLinkClick(e, "/webshop?cat=infused")}
                  className="block py-1 text-sm text-stone-600 hover:text-amber-900"
                >
                  Infused Coffees
                </ValidatedLink>
                <ValidatedLink
                  id="subnav-single-origin"
                  href="/webshop?cat=single-origin"
                  onClick={(e) => handleLinkClick(e, "/webshop?cat=single-origin")}
                  className="block py-1 text-sm text-stone-600 hover:text-amber-900"
                >
                  Single Origine Coffees
                </ValidatedLink>
                <ValidatedLink
                  id="subnav-giftboxen"
                  href="/webshop?cat=giftboxen"
                  onClick={(e) => handleLinkClick(e, "/webshop?cat=giftboxen")}
                  className="block py-1 text-sm text-stone-600 hover:text-amber-900"
                >
                  Giftboxen & Proefpakketten
                </ValidatedLink>
                <ValidatedLink
                  id="subnav-toebehoren"
                  href="/webshop?cat=toebehoren"
                  onClick={(e) => handleLinkClick(e, "/webshop?cat=toebehoren")}
                  className="block py-1 text-sm text-stone-600 hover:text-amber-900"
                >
                  Toebehoren & merchandise
                </ValidatedLink>
                <ValidatedLink
                  id="subnav-abonnementen"
                  href="/webshop?cat=abonnementen"
                  onClick={(e) => handleLinkClick(e, "/webshop?cat=abonnementen")}
                  className="block py-1 text-sm text-stone-600 hover:text-amber-900"
                >
                  Abonnementen (-10%)
                </ValidatedLink>
                <ValidatedLink
                  id="subnav-promoties"
                  href="/webshop?cat=promoties"
                  onClick={(e) => handleLinkClick(e, "/webshop?cat=promoties")}
                  className="block py-1 text-sm text-stone-600 hover:text-amber-900"
                >
                  Promoties
                </ValidatedLink>
              </div>
            )}
          </div>

          {/* House Blends (direct link to catalog) */}
          <ValidatedLink
            id="nav-house-blends"
            href="/koffies"
            onClick={(e) => handleLinkClick(e, "/koffies")}
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-stone-800 hover:bg-amber-50 hover:text-amber-900 font-medium transition-colors"
          >
            <Coffee className="w-4 h-4 text-amber-700" />
            <span>House Blends</span>
          </ValidatedLink>

          {/* Barrel Aged Coffees */}
          <ValidatedLink
            id="nav-barrel-aged"
            href="/koffies"
            onClick={(e) => handleLinkClick(e, "/koffies")}
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-stone-800 hover:bg-amber-50 hover:text-amber-900 font-medium transition-colors"
          >
            <Coffee className="w-4 h-4 text-amber-700" />
            <span>Barrel Aged Coffees</span>
          </ValidatedLink>

          {/* Infused Coffees */}
          <ValidatedLink
            id="nav-infused"
            href="/koffies"
            onClick={(e) => handleLinkClick(e, "/koffies")}
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-stone-800 hover:bg-amber-50 hover:text-amber-900 font-medium transition-colors"
          >
            <Coffee className="w-4 h-4 text-amber-700" />
            <span>Infused Coffees</span>
          </ValidatedLink>

          {/* Kantoor en Horeca */}
          <ValidatedLink
            id="nav-kantoor-horeca"
            href="/kantoor-horeca"
            onClick={(e) => handleLinkClick(e, "/kantoor-horeca")}
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-stone-800 hover:bg-amber-50 hover:text-amber-900 font-medium transition-colors"
          >
            <Briefcase className="w-4 h-4 text-amber-700" />
            <span>Kantoor en Horeca</span>
          </ValidatedLink>

          {/* Events */}
          <ValidatedLink
            id="nav-events"
            href="/events"
            onClick={(e) => handleLinkClick(e, "/events")}
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-stone-800 hover:bg-amber-50 hover:text-amber-900 font-medium transition-colors"
          >
            <Calendar className="w-4 h-4 text-amber-700" />
            <span>Events</span>
          </ValidatedLink>

          {/* FAQ */}
          <ValidatedLink
            id="nav-faq"
            href="/faq"
            onClick={(e) => handleLinkClick(e, "/faq")}
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-stone-800 hover:bg-amber-50 hover:text-amber-900 font-medium transition-colors"
          >
            <HelpCircle className="w-4 h-4 text-amber-700" />
            <span>FAQ</span>
          </ValidatedLink>

          {/* Over ons */}
          <ValidatedLink
            id="nav-over-ons"
            href="/over-ons"
            onClick={(e) => handleLinkClick(e, "/over-ons")}
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-stone-800 hover:bg-amber-50 hover:text-amber-900 font-medium transition-colors"
          >
            <Info className="w-4 h-4 text-amber-700" />
            <span>Over ons</span>
          </ValidatedLink>
        </nav>

        {/* Footer info in menu */}
        <div className="p-5 border-t border-stone-200 bg-stone-100/70 text-xs text-stone-600">
          <p className="font-semibold text-stone-800">Atelier Maison Milau</p>
          <p>Jef Scheirsstraat 29, 9200 Oudegem</p>
          <p className="mt-1">Tel & WhatsApp: +32 (0)467 77 37 66</p>
          <p>BTW BE 1041.542.844</p>
        </div>
      </div>
    </div>
  );
};
