import { SitemapEntry } from '../types';

/**
 * Step 1: Approved Sitemap
 * No pages exist outside this approved specification.
 */
export const APPROVED_SITEMAP: SitemapEntry[] = [
  {
    path: "/",
    title: "Home",
    category: "General",
    priority: 1.0,
    description: "Ambachtelijke Koffiebranderij · Oudegem (Dendermonde). Overzicht diensten, beloften en koffies."
  },
  {
    path: "/koffies",
    title: "Onze Koffies (Catalogus & Product Information System)",
    category: "Catalog",
    priority: 0.9,
    description: "Diepgaande koffie-educatie, blend ratios, SCA-scores (82-89), smaakprofielen en herkomst."
  },
  {
    path: "/webshop",
    title: "Webshop",
    category: "Commerce",
    priority: 0.9,
    description: "Snel bestellen van vers gebrande koffiebonen per gewicht en maalgraad, giftboxen, merchandise en abonnementen."
  },
  {
    path: "/kantoor-horeca",
    title: "Kantoor en Horeca (B2B)",
    category: "B2B",
    priority: 0.8,
    description: "B2B formules, volumekorting staffels, kantoorcalculator, gratis proefpakket en white label."
  },
  {
    path: "/events",
    title: "Events & Verhuur",
    category: "Events",
    priority: 0.8,
    description: "Koffiecatering voor feesten, mobiele barista bar en dry-hire espressomachines."
  },
  {
    path: "/afspraakplanner",
    title: "Afspraakplanner",
    category: "Services",
    priority: 0.7,
    description: "Online afspraak boeken voor cuppingsessie, atelierbezoek of white label blendontwikkeling."
  },
  {
    path: "/faq",
    title: "Klantenservice & FAQ",
    category: "Support",
    priority: 0.7,
    description: "10 categorieën klantenservice, verzendtermijnen, bpost tarieven, maalgraadregels en returns."
  },
  {
    path: "/over-ons",
    title: "Over Ons",
    category: "Company",
    priority: 0.8,
    description: "Branderij en Ambacht (6-12kg batches), Ons verhaal, Lokale Markten (Dendermonde, Wetteren, Aalst) en contact."
  },
  {
    path: "/account",
    title: "Mijn Account (B2C & B2B Customer Portal)",
    category: "Portal",
    priority: 0.6,
    description: "Persoonlijk dashboard, orderhistoriek, facturen, abonnementsbeheer en Mijn Bedrijf ERP-portaal."
  },
  {
    path: "/checkout",
    title: "Afrekenen & POM Betaling",
    category: "Commerce",
    priority: 0.5,
    description: "Beveiligde betaling met POM (Bancontact, iDEAL, Visa, Mastercard, Apple Pay, Wero, Cartes Bancaires)."
  },
  {
    path: "/admin",
    title: "Webbeheerder Analyse (Privé)",
    category: "Administration",
    priority: 0.1,
    description: "Alleen voor webbeheerder: Verkoopdashboard, omzetrapporten, abonnementschurn en POM settlement."
  }
];
