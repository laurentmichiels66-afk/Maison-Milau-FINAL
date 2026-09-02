import { Language } from '../types';

export interface PageTranslation {
  slug: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  longDescription: string;
  seoTitle: string;
  seoDescription: string;
  status: 'published' | 'draft';
}

export interface MultilingualRecord {
  pageKey: string;
  translations: {
    nl: PageTranslation;
    en: PageTranslation;
    fr: PageTranslation;
  };
}

export const MULTILINGUAL_PAGES: Record<string, MultilingualRecord> = {
  home: {
    pageKey: "home",
    translations: {
      nl: {
        slug: "",
        title: "Ambachtelijke Koffiebranderij · Oudegem (Dendermonde)",
        subtitle: "Maison Milau Artisanale koffiebranderij",
        shortDescription: "Ambachtelijk gebrande specialty koffies voor elke gelegenheid. Bij jou thuis, voor op kantoor, in je horecazaak of exclusieve koffiecatering voor jouw tuinfeest.",
        longDescription: "Maison Milau is een artisanale micro-branderij in Oudegem (Dendermonde). Met zorg en passie gebrande specialty koffies, kantoor- en horeca-oplossingen en machine-verhuur voor evenementen.",
        seoTitle: "Maison Milau · Ambachtelijke Koffiebranderij Oudegem",
        seoDescription: "Artisanale micro-roastery in Oudegem (Dendermonde). Met zorg en passie gebrande specialty koffies, webshop, B2B en events.",
        status: 'published'
      },
      en: {
        slug: "en",
        title: "Artisanal Coffee Roastery · Oudegem (Dendermonde)",
        subtitle: "Maison Milau Artisanal Coffee Roastery",
        shortDescription: "Artisanally roasted specialty coffees for every occasion. At home, in the office, in your hospitality venue or exclusive coffee catering for your garden party.",
        longDescription: "Maison Milau is an artisanal micro-roastery based in Oudegem (Dendermonde), roasting specialty coffee with care and passion.",
        seoTitle: "Maison Milau · Artisanal Coffee Roastery Oudegem",
        seoDescription: "Artisanal micro-roastery in Oudegem. Specialty coffees, webshop, B2B office & hospitality solutions, and events.",
        status: 'published'
      },
      fr: {
        slug: "fr",
        title: "Torréfaction Artisanale de Café · Oudegem (Termonde)",
        subtitle: "Maison Milau Torréfaction Artisanale de Café",
        shortDescription: "Cafés de spécialité torréfiés artisanalement pour chaque occasion. À la maison, au bureau, dans votre établissement ou traiteur café exclusif pour vos réceptions.",
        longDescription: "Maison Milau est une micro-torréfaction artisanale située à Oudegem (Termonde), dédiée aux cafés de spécialité torréfiés avec soin et passion.",
        seoTitle: "Maison Milau · Torréfaction Artisanale de Café",
        seoDescription: "Micro-torréfaction artisanale à Oudegem (Termonde). Cafés de spécialité, boutique en ligne, formules B2B et événements.",
        status: 'published'
      }
    }
  },
  koffies: {
    pageKey: "koffies",
    translations: {
      nl: {
        slug: "koffies",
        title: "Onze Koffies (Catalogus)",
        subtitle: "Product Information System (PIS) & Kennisbank",
        shortDescription: "Educatieve ontdekking van onze specialty blends, SCA-scores (82 tot 89+), herkomst en smaakprofielen.",
        longDescription: "Gedetailleerd overzicht van al onze bonen: Milau Selection, Premium, Prestige, Barrel Aged en Naturally Infused.",
        seoTitle: "Specialty Koffiebonen & Blends · Maison Milau Catalogus",
        seoDescription: "Ontdek onze ambachtelijke koffieblends, barrel-aged en infused koffies met SCA-scores van 82 tot 89+.",
        status: 'published'
      },
      en: {
        slug: "en/coffees",
        title: "Our Coffees (Catalog)",
        subtitle: "Product Information System & Flavor Discovery",
        shortDescription: "Educational discovery of our specialty blends, SCA cup scores (82 to 89+), origins, and flavor profiles.",
        longDescription: "Comprehensive coffee discovery catalog for Milau Selection, Premium, Prestige, Barrel-Aged and Naturally Infused coffees.",
        seoTitle: "Specialty Coffee Beans & Blends · Maison Milau Catalog",
        seoDescription: "Explore artisanal coffee blends, barrel aged, and infused specialty beans with SCA scores 82 to 89+.",
        status: 'published'
      },
      fr: {
        slug: "fr/cafes",
        title: "Nos Cafés (Catalogue)",
        subtitle: "Système d'Information Produits & Découverte",
        shortDescription: "Découverte pédagogique de nos assemblages de spécialité, scores SCA (82 à 89+), terroirs et profils aromatiques.",
        longDescription: "Catalogue détaillé de nos cafés de spécialité : Milau Selection, Premium, Prestige, Affinés en fûts et Infusions naturelles.",
        seoTitle: "Grains de Café de Spécialité · Catalogue Maison Milau",
        seoDescription: "Découvrez nos cafés de spécialité, torréfiés artisanalement avec des notes SCA de 82 à 89+.",
        status: 'published'
      }
    }
  },
  webshop: {
    pageKey: "webshop",
    translations: {
      nl: {
        slug: "webshop",
        title: "Webshop",
        subtitle: "Vers gebrand binnen 1-2 weken na bestelling",
        shortDescription: "Bestel specialty koffiebonen per gewicht en maalgraad, giftboxen, proefpakketten, toebehoren en abonnementen.",
        longDescription: "Snelle aankoopomgeving met veilige POM online betalingen (Bancontact, iDEAL, Visa, Mastercard, Apple Pay).",
        seoTitle: "Koffiebonen Online Kopen · Maison Milau Webshop",
        seoDescription: "Koop ambachtelijk gebrande specialty koffiebonen, giftboxen en koffie-accessoires online. Gratis verzending vanaf €45.",
        status: 'published'
      },
      en: {
        slug: "en/webshop",
        title: "Webshop",
        subtitle: "Freshly roasted within 1-2 weeks of order",
        shortDescription: "Order specialty coffee beans by weight and grind size, gift boxes, tasting packs, and flexible subscriptions.",
        longDescription: "Fast shopping environment with secure POM payment gateway (Bancontact, iDEAL, Apple Pay, Cards).",
        seoTitle: "Buy Specialty Coffee Beans Online · Maison Milau Shop",
        seoDescription: "Order freshly roasted specialty coffee beans, gift boxes, and coffee accessories. Free shipping over €45.",
        status: 'published'
      },
      fr: {
        slug: "fr/boutique",
        title: "Boutique en Ligne",
        subtitle: "Fraîchement torréfié sous 1 à 2 semaines",
        shortDescription: "Commandez nos grains de café de spécialité par poids et mouture, coffrets cadeaux et abonnements flexibles.",
        longDescription: "Boutique d'achat rapide avec paiement sécurisé POM (Bancontact, iDEAL, Cartes Bancaires, Apple Pay).",
        seoTitle: "Acheter du Café de Spécialité · Boutique Maison Milau",
        seoDescription: "Commandez du café en grains fraîchement torréfié, des coffrets cadeaux et accessoires. Livraison gratuite dès 45€.",
        status: 'published'
      }
    }
  }
};
