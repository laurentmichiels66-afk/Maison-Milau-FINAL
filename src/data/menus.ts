import { MenuItem } from '../types';

/**
 * Step 4: Navigation Menus
 * All links strictly verified against registered routes.
 */
export const HAMBURGER_MENU: MenuItem[] = [
  {
    title: "My Account",
    path: "/account"
  },
  {
    title: "Webshop",
    path: "/webshop",
    subcategories: [
      { title: "House Blends", path: "/webshop?cat=houseblends" },
      { title: "Barrel Aged Coffees", path: "/webshop?cat=barrel-aged" },
      { title: "Infused Coffees", path: "/webshop?cat=infused" },
      { title: "Single Origine Coffees", path: "/webshop?cat=single-origin" },
      { title: "Giftboxen & Proefpakketten", path: "/webshop?cat=giftboxen" },
      { title: "Toebehoren & merchandise", path: "/webshop?cat=toebehoren" },
      { title: "Abonnementen", path: "/webshop?cat=abonnementen" },
      { title: "Promoties", path: "/webshop?cat=promoties" }
    ]
  },
  {
    title: "House Blends",
    path: "/koffies?filter=houseblends"
  },
  {
    title: "Barrel Aged Coffees",
    path: "/koffies?filter=barrel-aged"
  },
  {
    title: "Infused Coffees",
    path: "/koffies?filter=infused"
  },
  {
    title: "Kantoor en Horeca",
    path: "/kantoor-horeca"
  },
  {
    title: "Events",
    path: "/events"
  },
  {
    title: "FAQ",
    path: "/faq"
  },
  {
    title: "Over ons",
    path: "/over-ons"
  }
];

export const PRIMARY_NAV_MENU: MenuItem[] = [
  { title: "Onze Koffies", path: "/koffies" },
  {
    title: "Webshop",
    path: "/webshop",
    subcategories: [
      { title: "House Blends", path: "/webshop?cat=houseblends" },
      { title: "Barrel Aged Coffees", path: "/webshop?cat=barrel-aged" },
      { title: "Infused Coffees", path: "/webshop?cat=infused" },
      { title: "Single Origin Coffees", path: "/webshop?cat=single-origin" },
      { title: "Giftboxen & Proefpakketten", path: "/webshop?cat=giftboxen" },
      { title: "Toebehoren & merchandise", path: "/webshop?cat=toebehoren" },
      { title: "Abonnementen", path: "/webshop?cat=abonnementen" },
      { title: "Promoties", path: "/webshop?cat=promoties" }
    ]
  },
  { title: "Kantoor en Horeca", path: "/kantoor-horeca" },
  { title: "Events", path: "/events" },
  { title: "Afspraakplanner", path: "/afspraakplanner" },
  { title: "FAQ", path: "/faq" },
  { title: "Over ons", path: "/over-ons" }
];

export const FOOTER_SITEMAP_MENU: MenuItem[] = [
  { title: "Mijn Account", path: "/account" },
  { title: "Webshop", path: "/webshop" },
  { title: "Kantoor & Horeca", path: "/kantoor-horeca" },
  { title: "Event Planner", path: "/events" },
  { title: "FAQ", path: "/faq" }
];

export const B2C_ACCOUNT_MENU = [
  { id: "dashboard", label: "Dashboard" },
  { id: "orders", label: "Bestellingen & Historiek" },
  { id: "tracking", label: "Bestelling Volgen" },
  { id: "invoices", label: "Facturen" },
  { id: "payments", label: "Betalingen" },
  { id: "subscriptions", label: "Abonnementen" },
  { id: "addresses", label: "Leveringsadressen" },
  { id: "wishlist", label: "Favorieten / Wishlist" },
  { id: "returns", label: "Retouren & Klachten" },
  { id: "support", label: "Support Center" }
];

export const B2B_ACCOUNT_MENU = [
  { id: "dashboard", label: "Dashboard" },
  { id: "orders", label: "Open Orders & Historiek" },
  { id: "quotes", label: "Offertes" },
  { id: "contracts", label: "Contractprijzen & Staffels" },
  { id: "invoices", label: "Facturen & Creditnota's" },
  { id: "payments", label: "Open Saldo & POM Links" },
  { id: "addresses", label: "Vestigingen & Magazijnen" },
  { id: "users", label: "Gebruikers & Rollen" },
  { id: "analytics", label: "Verbruiks-Analytics" },
  { id: "support", label: "B2B Support Desk" }
];
