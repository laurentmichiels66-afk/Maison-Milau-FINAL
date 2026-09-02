import { RouteDefinition } from '../types';

/**
 * Step 2: Page Routes Definition
 * Maps each URL path to its designated view component, auth requirements, and canonical link.
 */
export const PAGE_ROUTES: RouteDefinition[] = [
  {
    route: "/",
    name: "Home",
    componentName: "HomeView",
    authRequired: false,
    canonical: "https://maisonmilau.be/"
  },
  {
    route: "/koffies",
    name: "Onze Koffies (Catalogus)",
    componentName: "CatalogView",
    authRequired: false,
    canonical: "https://maisonmilau.be/koffies"
  },
  {
    route: "/webshop",
    name: "Webshop",
    componentName: "WebshopView",
    authRequired: false,
    canonical: "https://maisonmilau.be/webshop"
  },
  {
    route: "/kantoor-horeca",
    name: "Kantoor en Horeca",
    componentName: "B2BView",
    authRequired: false,
    canonical: "https://maisonmilau.be/kantoor-horeca"
  },
  {
    route: "/events",
    name: "Events & Verhuur",
    componentName: "EventsView",
    authRequired: false,
    canonical: "https://maisonmilau.be/events"
  },
  {
    route: "/afspraakplanner",
    name: "Afspraakplanner",
    componentName: "AppointmentView",
    authRequired: false,
    canonical: "https://maisonmilau.be/afspraakplanner"
  },
  {
    route: "/faq",
    name: "Klantenservice & FAQ",
    componentName: "FaqView",
    authRequired: false,
    canonical: "https://maisonmilau.be/faq"
  },
  {
    route: "/over-ons",
    name: "Over Ons",
    componentName: "AboutView",
    authRequired: false,
    canonical: "https://maisonmilau.be/over-ons"
  },
  {
    route: "/account",
    name: "Mijn Account",
    componentName: "AccountView",
    authRequired: false,
    canonical: "https://maisonmilau.be/account"
  },
  {
    route: "/checkout",
    name: "Afrekenen",
    componentName: "CheckoutView",
    authRequired: false,
    canonical: "https://maisonmilau.be/checkout"
  },
  {
    route: "/admin",
    name: "Webbeheerder Analyse",
    componentName: "AdminView",
    authRequired: true,
    role: "admin",
    canonical: "https://maisonmilau.be/admin"
  }
];
