import React, { useState } from 'react';
import { Menu, ShoppingBag, User, Globe, Layers, Phone } from 'lucide-react';
import { ValidatedLink } from './ValidatedLink';
import { HamburgerMenu } from './HamburgerMenu';
import { Language } from '../types';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  cartCount: number;
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenArchitecture: () => void;
  onOpenCart: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPath,
  onNavigate,
  cartCount,
  currentLang,
  onLanguageChange,
  onOpenArchitecture,
  onOpenCart
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [webshopDropdown, setWebshopDropdown] = useState(false);

  const handleNav = (path: string) => {
    onNavigate(path);
    setWebshopDropdown(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#fdfcfb] border-b border-stone-200/80 shadow-xs">
      {/* Top Banner with Roastery Location & Specs */}
      <div className="bg-stone-900 text-stone-200 text-xs py-2 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4 text-[11px] sm:text-xs">
            <span className="font-semibold text-amber-400">Ambachtelijke Koffiebranderij · Oudegem (Dendermonde)</span>
            <span className="hidden md:inline text-stone-400">|</span>
            <span className="hidden md:inline text-stone-300">Vers gebrande specialty koffie geleverd binnen 1-2 weken na branding</span>
          </div>

          <div className="flex items-center gap-4 text-[11px] sm:text-xs">
            <a 
              href="https://wa.me/32467773766" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <Phone className="w-3 h-3" />
              <span>WhatsApp: +32 (0)467 77 37 66</span>
            </a>

            {/* Architecture Specification Button (Sitemap, Routes, Entities, Menus) */}
            <button
              id="btn-inspect-architecture"
              onClick={onOpenArchitecture}
              className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-900/40 text-amber-200 border border-amber-700/60 hover:bg-amber-800/60 transition-colors font-mono text-[10px]"
              title="Bekijk de goedgekeurde architectuur (Sitemap, Routes, Database Entities, Menus)"
            >
              <Layers className="w-3 h-3" />
              <span>Systeem Specs (Stap 1-4)</span>
            </button>

            {/* Language Switcher */}
            <div className="flex items-center gap-1 bg-stone-800 px-2 py-0.5 rounded text-[11px]">
              <Globe className="w-3 h-3 text-stone-400" />
              {(['nl', 'en', 'fr'] as Language[]).map((lang) => (
                <button
                  key={lang}
                  onClick={() => onLanguageChange(lang)}
                  className={`px-1 rounded uppercase font-semibold transition-colors ${
                    currentLang === lang ? 'bg-amber-700 text-white' : 'text-stone-400 hover:text-stone-200'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center gap-3">
          <button
            id="brand-logo-button"
            onClick={() => handleNav("/")}
            className="text-left group focus:outline-hidden"
          >
            <span className="font-serif tracking-widest text-2xl sm:text-3xl font-bold text-stone-900 block group-hover:text-amber-900 transition-colors">
              MAISON MILAU
            </span>
            <span className="text-[11px] font-sans tracking-widest uppercase text-amber-800 block -mt-1 font-semibold">
              Ambachtelijke Koffiebranderij
            </span>
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-stone-700">
          <button
            id="nav-link-home"
            onClick={() => handleNav("/")}
            className={`transition-colors hover:text-amber-900 ${currentPath === '/' ? 'text-amber-900 font-bold border-b-2 border-amber-800 pb-0.5' : ''}`}
          >
            Home
          </button>

          <button
            id="nav-link-koffies"
            onClick={() => handleNav("/koffies")}
            className={`transition-colors hover:text-amber-900 ${currentPath === '/koffies' ? 'text-amber-900 font-bold border-b-2 border-amber-800 pb-0.5' : ''}`}
          >
            Onze Koffies
          </button>

          {/* Webshop with hover dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setWebshopDropdown(true)}
            onMouseLeave={() => setWebshopDropdown(false)}
          >
            <button
              id="nav-link-webshop"
              onClick={() => handleNav("/webshop")}
              className={`flex items-center gap-1 transition-colors hover:text-amber-900 ${currentPath === '/webshop' ? 'text-amber-900 font-bold border-b-2 border-amber-800 pb-0.5' : ''}`}
            >
              <span>Webshop</span>
            </button>

            {webshopDropdown && (
              <div className="absolute top-full left-0 w-64 bg-white rounded-lg shadow-xl border border-stone-200 py-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                <button
                  onClick={() => handleNav("/webshop")}
                  className="w-full text-left px-4 py-2 text-xs font-bold text-amber-900 hover:bg-amber-50 uppercase tracking-wider"
                >
                  Volledige Webshop →
                </button>
                <div className="h-px bg-stone-100 my-1" />
                <button
                  onClick={() => handleNav("/webshop?cat=houseblends")}
                  className="w-full text-left px-4 py-2 text-sm text-stone-700 hover:bg-amber-50 hover:text-amber-900"
                >
                  Milau Houseblends
                </button>
                <button
                  onClick={() => handleNav("/webshop?cat=barrel-aged")}
                  className="w-full text-left px-4 py-2 text-sm text-stone-700 hover:bg-amber-50 hover:text-amber-900"
                >
                  Barrel Aged Coffees
                </button>
                <button
                  onClick={() => handleNav("/webshop?cat=infused")}
                  className="w-full text-left px-4 py-2 text-sm text-stone-700 hover:bg-amber-50 hover:text-amber-900"
                >
                  Infused Coffees
                </button>
                <button
                  onClick={() => handleNav("/webshop?cat=single-origin")}
                  className="w-full text-left px-4 py-2 text-sm text-stone-700 hover:bg-amber-50 hover:text-amber-900"
                >
                  Single Origine Coffees
                </button>
                <button
                  onClick={() => handleNav("/webshop?cat=giftboxen")}
                  className="w-full text-left px-4 py-2 text-sm text-stone-700 hover:bg-amber-50 hover:text-amber-900"
                >
                  Giftboxen & Proefpakketten
                </button>
                <button
                  onClick={() => handleNav("/webshop?cat=toebehoren")}
                  className="w-full text-left px-4 py-2 text-sm text-stone-700 hover:bg-amber-50 hover:text-amber-900"
                >
                  Toebehoren & merchandise
                </button>
                <button
                  onClick={() => handleNav("/webshop?cat=abonnementen")}
                  className="w-full text-left px-4 py-2 text-sm text-stone-700 hover:bg-amber-50 hover:text-amber-900"
                >
                  Abonnementen (-10%)
                </button>
                <button
                  onClick={() => handleNav("/webshop?cat=promoties")}
                  className="w-full text-left px-4 py-2 text-sm text-amber-700 hover:bg-amber-50 font-semibold"
                >
                  Promoties
                </button>
              </div>
            )}
          </div>

          <button
            id="nav-link-kantoor-horeca"
            onClick={() => handleNav("/kantoor-horeca")}
            className={`transition-colors hover:text-amber-900 ${currentPath === '/kantoor-horeca' ? 'text-amber-900 font-bold border-b-2 border-amber-800 pb-0.5' : ''}`}
          >
            Kantoor en Horeca
          </button>

          <button
            id="nav-link-events"
            onClick={() => handleNav("/events")}
            className={`transition-colors hover:text-amber-900 ${currentPath === '/events' ? 'text-amber-900 font-bold border-b-2 border-amber-800 pb-0.5' : ''}`}
          >
            Events
          </button>

          <button
            id="nav-link-afspraakplanner"
            onClick={() => handleNav("/afspraakplanner")}
            className={`transition-colors hover:text-amber-900 ${currentPath === '/afspraakplanner' ? 'text-amber-900 font-bold border-b-2 border-amber-800 pb-0.5' : ''}`}
          >
            Afspraakplanner
          </button>

          <button
            id="nav-link-faq"
            onClick={() => handleNav("/faq")}
            className={`transition-colors hover:text-amber-900 ${currentPath === '/faq' ? 'text-amber-900 font-bold border-b-2 border-amber-800 pb-0.5' : ''}`}
          >
            FAQ
          </button>

          <button
            id="nav-link-over-ons"
            onClick={() => handleNav("/over-ons")}
            className={`transition-colors hover:text-amber-900 ${currentPath === '/over-ons' ? 'text-amber-900 font-bold border-b-2 border-amber-800 pb-0.5' : ''}`}
          >
            Over ons
          </button>
        </nav>

        {/* Header Right Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Account Portal Button */}
          <button
            id="header-account-button"
            onClick={() => handleNav("/account")}
            className="flex items-center gap-1.5 px-3 py-2 rounded-md text-stone-700 hover:text-stone-900 hover:bg-stone-100 transition-colors text-sm font-medium"
            title="Mijn Account (B2C & B2B)"
          >
            <User className="w-4 h-4 text-amber-800" />
            <span className="hidden sm:inline">Mijn Account</span>
          </button>

          {/* Shopping Cart Button */}
          <button
            id="header-cart-button"
            onClick={onOpenCart}
            className="relative flex items-center gap-1.5 px-3 py-2 rounded-md bg-amber-900 text-white hover:bg-amber-800 transition-colors text-sm font-medium shadow-xs"
            title="Winkelwagen"
          >
            <ShoppingBag className="w-4 h-4" />
            <span className="hidden sm:inline">Winkelwagen</span>
            {cartCount > 0 && (
              <span 
                id="cart-badge-count"
                className="ml-1 px-1.5 py-0.2 bg-amber-500 text-stone-900 font-bold rounded-full text-xs"
              >
                {cartCount}
              </span>
            )}
          </button>

          {/* Hamburger Menu Button */}
          <button
            id="hamburger-menu-toggle"
            onClick={() => setMenuOpen(true)}
            className="p-2 text-stone-700 hover:text-stone-900 hover:bg-stone-100 rounded-md transition-colors"
            aria-label="Open menu"
            title="Hamburger Menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Slide-out Hamburger Menu */}
      <HamburgerMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        onNavigate={handleNav}
      />
    </header>
  );
};
