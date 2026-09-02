import { WebshopCoffeeProduct, GiftboxProduct, AccessoryProduct } from '../types';

export interface WebshopProduct {
  id: string;
  name: string;
  category: 'houseblends' | 'barrel-aged' | 'infused' | 'single-origin' | 'boxes' | 'merchandise' | 'machines';
  description: string;
  basePrice: number;
  formatPrices: { [format: string]: number };
  availableFormats: string[];
  availableGrinds: string[];
  scaScore?: string;
  flavorNotes: string[];
  catalogLink?: string;
}

/**
 * Webshop Coffees with exact retail pricing structure as specified
 */
export const WEBSHOP_COFFEES: WebshopCoffeeProduct[] = [
  {
    id: "ws-selection-daily",
    name: "Milau Selection Daily",
    catalogId: "milau-selection-daily",
    category: "houseblends",
    prices: { "250g": 5.50, "500g": 11.00, "1000g": 21.50, "2000g": 41.00 },
    scaScore: "82 - 83.5 SCA",
    description: "Veelzijdige omniroast voor espresso, lungo, cappuccino en filter.",
    roastStyle: "Omniroast"
  },
  {
    id: "ws-selection-espresso",
    name: "Milau Selection Espresso",
    catalogId: "milau-selection-espresso",
    category: "houseblends",
    prices: { "250g": 5.00, "500g": 10.00, "1000g": 20.00, "2000g": 38.00 },
    scaScore: "80 - 82 SCA",
    description: "Klassieke espresso met veel body en een stabiele crema.",
    roastStyle: "Espresso roast"
  },
  {
    id: "ws-selection-filter",
    name: "Milau Selection Filter",
    catalogId: "milau-selection-filter",
    category: "houseblends",
    prices: { "250g": 6.00, "500g": 12.00, "1000g": 23.50, "2000g": 45.00 },
    scaScore: "83 - 85 SCA",
    description: "Toegankelijke filterkoffie met zachte fruitigheid.",
    roastStyle: "Filter roast"
  },
  {
    id: "ws-premium-daily",
    name: "Milau Premium Daily",
    catalogId: "milau-premium-daily",
    category: "houseblends",
    prices: { "250g": 10.50, "500g": 20.50, "1000g": 40.50, "2000g": 78.00 },
    scaScore: "85 - 86.5 SCA",
    description: "Rijk en evenwichtig, met een aangename zoetheid en romige afdronk.",
    roastStyle: "Medium roast"
  },
  {
    id: "ws-premium-espresso",
    name: "Milau Premium Espresso",
    catalogId: "milau-premium-espresso",
    category: "houseblends",
    prices: { "250g": 10.00, "500g": 19.50, "1000g": 38.50, "2000g": 74.00 },
    scaScore: "85 - 86 SCA",
    description: "Krachtige espresso met tonen van donkere chocolade en gecarameliseerde suiker.",
    roastStyle: "Medium-dark"
  },
  {
    id: "ws-premium-filter",
    name: "Milau Premium Filter",
    catalogId: "milau-premium-filter",
    category: "houseblends",
    prices: { "250g": 11.50, "500g": 22.50, "1000g": 44.00, "2000g": 84.00 },
    scaScore: "86 - 87.5 SCA",
    description: "Verfijnd en complex, met toetsen van rijp fruit en een zachte aciditeit.",
    roastStyle: "Light-medium"
  },
  {
    id: "ws-prestige-daily",
    name: "Milau Prestige Daily",
    catalogId: "milau-prestige-daily",
    category: "houseblends",
    prices: { "250g": 17.50, "500g": 34.00, "1000g": 67.00, "2000g": 128.00 },
    scaScore: "88 - 89.5 SCA",
    description: "Absolute topkwaliteit voor de veeleisende koffiedrinker, rijk en gelaagd.",
    roastStyle: "Omniroast prestige"
  },
  {
    id: "ws-prestige-espresso",
    name: "Milau Prestige Espresso",
    catalogId: "milau-prestige-espresso",
    category: "houseblends",
    prices: { "250g": 17.00, "500g": 33.00, "1000g": 65.00, "2000g": 124.00 },
    scaScore: "88+ SCA",
    description: "Exclusieve espresso met buitengewone diepgang en langdurige afdronk.",
    roastStyle: "Espresso prestige"
  },
  {
    id: "ws-prestige-filter",
    name: "Milau Prestige Filter",
    catalogId: "milau-prestige-filter",
    category: "houseblends",
    prices: { "250g": 18.50, "500g": 36.00, "1000g": 71.00, "2000g": 136.00 },
    scaScore: "89+ SCA",
    description: "Florale en fruitige explosie, zacht gebrand om de meest delicate aroma's te behouden.",
    roastStyle: "Light filter"
  },
  {
    id: "ws-barrel-moscatel",
    name: "Milau Barrel Aged Moscatel",
    catalogId: "milau-barrel-moscatel",
    category: "barrel-aged",
    prices: { "250g": 9.50, "500g": 18.50, "1000g": 36.50, "2000g": 70.00 },
    scaScore: "86.5 SCA base",
    description: "Gerijpt op Moscatel-wijnvaten; honingzoet met druiventonen.",
    roastStyle: "Medium light"
  },
  {
    id: "ws-barrel-sherry",
    name: "Milau Barrel Aged Sherry Cask",
    catalogId: "milau-barrel-sherry",
    category: "barrel-aged",
    prices: { "250g": 11.50, "500g": 22.50, "1000g": 44.50, "2000g": 85.00 },
    scaScore: "87.0 SCA base",
    description: "Oloroso sherryvat-rijping; rozijnen, walnoot en diepe houttonen.",
    roastStyle: "Medium"
  },
  {
    id: "ws-barrel-bourbon",
    name: "Milau Barrel Aged Bourbon Cask",
    catalogId: "milau-barrel-bourbon",
    category: "barrel-aged",
    prices: { "250g": 12.50, "500g": 24.50, "1000g": 48.00, "2000g": 92.00 },
    scaScore: "87.5 SCA base",
    description: "Kentucky Bourbon oak-rijping; vanille, karamel en geroosterde eik.",
    roastStyle: "Medium omni"
  },
  {
    id: "ws-vanilla-infused",
    name: "Milau Bourbon Vanilla Infused",
    catalogId: "milau-vanilla-infused",
    category: "infused",
    prices: { "250g": 7.50, "500g": 14.50, "1000g": 28.50, "2000g": 54.00 },
    scaScore: "83 SCA base",
    description: "Subtiele natuurlijke infusie met echte Madagascar vanillestokken.",
    roastStyle: "Gentle infusion"
  },
  {
    id: "ws-cinnamon-infused",
    name: "Milau Ceylon Cinnamon Infused",
    catalogId: "milau-cinnamon-infused",
    category: "infused",
    prices: { "250g": 7.50, "500g": 14.50, "1000g": 28.50, "2000g": 54.00 },
    scaScore: "83 SCA base",
    description: "Natuurlijke Ceylon kaneelinfusie; verwarmend en kruidig.",
    roastStyle: "Gentle infusion"
  },
  {
    id: "ws-almond-infused",
    name: "Milau Almond Infused",
    catalogId: "milau-almond-infused",
    category: "infused",
    prices: { "250g": 7.50, "500g": 14.50, "1000g": 28.50, "2000g": 54.00 },
    scaScore: "82.7 SCA base",
    description: "Verrijkt met zuiver aroma van geroosterde amandelen.",
    roastStyle: "Gentle infusion"
  },
  {
    id: "ws-single-origin-a",
    name: "Milau Single Origin A",
    catalogId: "milau-single-origin-a",
    category: "single-origin",
    prices: { "250g": 13.00, "500g": 26.00, "1000g": 52.00, "2000g": 99.00 },
    scaScore: "88 SCA",
    description: "Ethiopia Gesha Bench Maji, washed heirloom, Grade 1 (ETOP).",
    roastStyle: "Light/Medium"
  },
  {
    id: "ws-single-origin-b",
    name: "Milau Single Origin B",
    catalogId: "milau-single-origin-b",
    category: "single-origin",
    prices: { "250g": 9.50, "500g": 18.50, "1000g": 36.50, "2000g": 70.00 },
    scaScore: "87 SCA",
    description: "Colombia Ambrosia Pink Bourbon washed micro-lot van Finca El Caney.",
    roastStyle: "Medium"
  },
  {
    id: "ws-single-origin-c",
    name: "Milau Single Origin C",
    catalogId: "milau-single-origin-c",
    category: "single-origin",
    prices: { "250g": 9.50, "500g": 19.00, "1000g": 37.50, "2000g": 71.00 },
    scaScore: "87 SCA",
    description: "Ethiopia Sidamo Arbegona washed heirloom, Grade 1 (ETOP).",
    roastStyle: "Light/Filter"
  }
];

export const GIFTBIS_PRODUCTS: GiftboxProduct[] = [
  {
    id: "gb-duo",
    name: "Giftbox Duo",
    subtitle: "Luxe geschenkdoos met 2x 250g",
    price: 24.50,
    description: "Artisanale specialty bonen naar keuze, verpakt in een luxe geschenkdoos. Ideaal als geschenk voor de koffieliefhebber."
  },
  {
    id: "gb-trio",
    name: "Giftbox Trio",
    subtitle: "Luxe geschenkdoos met 3x 250g bonen",
    price: 36.00,
    description: "Drie zorgvuldig gebrande specialty blends of single origins naar keuze in elegante Maison Milau presentatieverpakking."
  },
  {
    id: "gb-quattro",
    name: "Giftbox Quattro",
    subtitle: "Exclusieve collector giftbox met 4x 250g",
    price: 49.50,
    description: "De ultieme proeverij van ons assortiment inclusief onze barrel-aged of infused creaties."
  }
];

export const ACCESSORIES_PRODUCTS: AccessoryProduct[] = [
  {
    id: "acc-mok",
    name: "Keramische koffiemokken met Maison Milau logo",
    category: "Drinkwaren",
    price: 14.50,
    description: "Duurzaam handgemaakt keramiek met verfijnd Maison Milau logo opdruk."
  },
  {
    id: "acc-kopjes",
    name: "Maison Milau Espresso- en cappuccinokopjes",
    category: "Drinkwaren",
    price: 18.00,
    description: "Dikke porseleinen wanden voor optimaal temperatuurbehoud en crema-stabiliteit."
  },
  {
    id: "acc-glazen",
    name: "Maison Milau Glazen voor cold brew",
    category: "Drinkwaren",
    price: 12.50,
    description: "Dubbelwandig borosilicaatglas, perfect voor ijskoffie en slow-drip extracties."
  },
  {
    id: "acc-recycled",
    name: "Maison Milau Recycled koffiebekers (ideaal voor events of feesten)",
    category: "Drinkwaren",
    price: 9.50,
    description: "100% biologisch afbreekbare en gerecycleerde koffiebekers voor feesten en recepties."
  },
  {
    id: "acc-tshirt",
    name: "T-shirts Maison Milau (dedicated koffiequotes)",
    category: "Merchandise",
    price: 28.00,
    description: "Hoogwaardig biologisch katoen met unieke ambachtelijke koffie-illustratie en quotes."
  }
];

export const B2B_DISCOUNT_TIERS = [
  { volume: "Minder dan 5 kg per maand", discount: "Retailprijs min 10% abonnementskorting", percent: 10 },
  { volume: "10 tot 15 kg per maand", discount: "12%", percent: 12 },
  { volume: "15 tot 30 kg per maand", discount: "15%", percent: 15 },
  { volume: "30 tot 50 kg per maand", discount: "18%", percent: 18 },
  { volume: "Meer dan 50 kg per maand", discount: "20%", percent: 20 }
];

/**
 * Unified Webshop Products List matching catalog & store navigation
 */
export const WEBSHOP_PRODUCTS: WebshopProduct[] = [
  ...WEBSHOP_COFFEES.map(c => ({
    id: c.id,
    name: c.name,
    category: c.category as any,
    description: c.description,
    basePrice: c.prices["250g"],
    formatPrices: c.prices,
    availableFormats: ["250g", "500g", "1000g"],
    availableGrinds: ["Hele Bonen", "Espresso (fijn)", "Filter / Chemex (medium)", "French Press (grof)"],
    scaScore: c.scaScore,
    flavorNotes: [c.roastStyle, "Specialty Micro-roast"],
    catalogLink: `/koffie-catalogus`
  })),

  // Boxes & Proefpakketten
  {
    id: "box-proefpakket",
    name: "Maison Milau Discovery Proefpakket",
    category: "boxes",
    description: "4x 100g specialty bonen naar keuze (Selection, Premium, Barrel Aged en Infused). Ideaal om uw favoriet te ontdekken.",
    basePrice: 19.50,
    formatPrices: { "4x 100g": 19.50 },
    availableFormats: ["4x 100g"],
    availableGrinds: ["Hele Bonen", "Espresso (fijn)", "Filter / Chemex (medium)"],
    flavorNotes: ["Proeverij", "Diverse Herkomsten"],
    catalogLink: `/koffie-catalogus`
  },
  {
    id: "gb-duo-product",
    name: "Giftbox Duo (2x 250g)",
    category: "boxes",
    description: "Luxe geschenkdoos met 2x 250g artisanale specialty bonen naar keuze in chique presentatiedoos.",
    basePrice: 24.50,
    formatPrices: { "2x 250g": 24.50 },
    availableFormats: ["2x 250g"],
    availableGrinds: ["Hele Bonen", "Espresso (fijn)", "Filter / Chemex (medium)"],
    flavorNotes: ["Geschenk", "Luxe Verpakking"]
  },
  {
    id: "gb-trio-product",
    name: "Giftbox Trio (3x 250g)",
    category: "boxes",
    description: "Drie zorgvuldig gebrande specialty blends of single origins naar keuze in luxe geschenkdoos.",
    basePrice: 36.00,
    formatPrices: { "3x 250g": 36.00 },
    availableFormats: ["3x 250g"],
    availableGrinds: ["Hele Bonen", "Espresso (fijn)", "Filter / Chemex (medium)"],
    flavorNotes: ["Cadeautip", "3 Variëteiten"]
  },

  // Merchandise & Cadeaubon
  {
    id: "cadeaubon-milau",
    name: "Maison Milau Digitale / Fysieke Cadeaubon",
    category: "merchandise",
    description: "Verras een koffieliefhebber met een tegoedbon, geldig op het hele assortiment of workshops.",
    basePrice: 25.00,
    formatPrices: { "€25": 25.00, "€50": 50.00, "€100": 100.00 },
    availableFormats: ["€25", "€50", "€100"],
    availableGrinds: ["Digitaal via e-mail", "Luxe fysieke geschenkkaart"],
    flavorNotes: ["Cadeau", "Onbeperkt geldig"]
  },
  {
    id: "acc-mok-product",
    name: "Keramische Koffiemok Maison Milau",
    category: "merchandise",
    description: "Duurzaam handgemaakt keramiek met subtiel gebrand logo. Vaatwasbestendig en robuust.",
    basePrice: 14.50,
    formatPrices: { "Standaard 300ml": 14.50 },
    availableFormats: ["Standaard 300ml"],
    availableGrinds: ["Enkele mok", "Set van 2 (€26)"],
    flavorNotes: ["Keramiek", "Handgemaakt"]
  },
  {
    id: "acc-tshirt-product",
    name: "T-shirt Maison Milau Roastery",
    category: "merchandise",
    description: "100% biologisch fairwear katoen met artisanale koffie-illustratie en quote.",
    basePrice: 28.00,
    formatPrices: { "Small": 28.00, "Medium": 28.00, "Large": 28.00, "X-Large": 28.00 },
    availableFormats: ["Small", "Medium", "Large", "X-Large"],
    availableGrinds: ["Zwart", "Off-White"],
    flavorNotes: ["Bio Katoen", "Duurzaam"]
  },

  // Machines & Barista Tools
  {
    id: "mach-eureka-mignon",
    name: "Eureka Mignon Specialita Molen",
    category: "machines",
    description: "Stille professionele koffiemolen met traploze micrometrische regeling en touch display.",
    basePrice: 429.00,
    formatPrices: { "Mat Zwart": 429.00, "Chroom": 449.00 },
    availableFormats: ["Mat Zwart", "Chroom"],
    availableGrinds: ["Inclusief gratis 1kg bonen", "Inclusief installatieadvies"],
    flavorNotes: ["Home Barista", "55mm platte schijven"]
  },
  {
    id: "mach-la-marzocco-micra",
    name: "La Marzocco Linea Micra",
    category: "machines",
    description: "Dual boiler espressomachine met verzadigde zetgroep, ultieme temperatuurstabiliteit en app-connectiviteit.",
    basePrice: 3490.00,
    formatPrices: { "RVS Zilver": 3490.00, "Mat Zwart": 3490.00 },
    availableFormats: ["RVS Zilver", "Mat Zwart"],
    availableGrinds: ["Inclusief persoonlijke installatie & workshop in atelier"],
    flavorNotes: ["Prosumer", "Dual Boiler"]
  }
];
