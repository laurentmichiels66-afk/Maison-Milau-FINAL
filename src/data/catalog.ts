import { CoffeeCatalogItem } from '../types';

export const COFFEE_CATALOG: CoffeeCatalogItem[] = [
  // Milau Selection
  {
    id: "milau-selection-daily",
    name: "Milau Selection Daily",
    range: "Milau Selection",
    type: "veelzijdige omniroast voor espresso, lungo, cappuccino en filter.",
    startingPrice: 5.50,
    expectedScaScore: "Verwachte blendscore: circa 82 tot 83,5 punten.",
    beanSelection: [
      "50% Brazil Santos Fine Cup 17/18, natural",
      "30% Ethiopia Djimmah Grade 5, natural",
      "20% Costa Rica El Bueyerito Washed, Caturra"
    ],
    flavors: [
      "Melkchocolade",
      "karamel",
      "bergamot",
      "zwarte thee",
      "zachte bloemen",
      "lichte citrus"
    ],
    character: "Een toegankelijke en evenwichtige koffie. Brazilië levert body en chocolade, Ethiopië geeft een lichte aromatische lift en Costa Rica zorgt voor zoetheid en structuur.",
    webshopProductId: "ws-selection-daily"
  },
  {
    id: "milau-selection-espresso",
    name: "Milau Selection Espresso",
    range: "Milau Selection",
    type: "klassieke espresso met veel body en een stabiele crema.",
    startingPrice: 5.00,
    expectedScaScore: "Verwachte kwaliteitspositie: circa 80 tot 82 punten.",
    beanSelection: [
      "55% Brazil Santos Fine Cup 17/18, natural",
      "25% India Cherry A, natural",
      "20% Uganda Robusta Screen 18"
    ],
    flavors: [
      "Donkere chocolade",
      "cacao",
      "geroosterde hazelnoot",
      "bruine specerijen",
      "lange, krachtige afdronk"
    ],
    character: "De Braziliaanse arabica vormt de zoete chocoladebasis. India voegt kruidigheid en body toe. De Uganda robusta versterkt crema, intensiteit en herkenbaarheid in melkdranken.",
    webshopProductId: "ws-selection-espresso"
  },
  {
    id: "milau-selection-filter",
    name: "Milau Selection Filter",
    range: "Milau Selection",
    type: "toegankelijke filterkoffie met zachte fruitigheid.",
    startingPrice: 6.00,
    expectedScaScore: "Verwachte blendscore: circa 83 tot 85 punten.",
    beanSelection: [
      "45% Ethiopia Limu G2 Washed",
      "35% Peru Valley Coffee Grade 1 Washed",
      "20% Brazil Itaguaçu Blend Natural"
    ],
    flavors: [
      "Citrus",
      "groene druif",
      "pruim",
      "amandel",
      "hazelnoot",
      "walnoot"
    ],
    character: "Een zachte filterblend met frisse Ethiopische aroma’s, een cleane Peruaanse structuur en een ronde Braziliaanse notenbasis.",
    webshopProductId: "ws-selection-filter"
  },

  // Milau Premium
  {
    id: "milau-premium-daily",
    name: "Milau Premium Daily",
    range: "Milau Premium",
    type: "verfijnde omniroast voor zowel zwarte koffie als melkbereidingen.",
    startingPrice: 10.00,
    expectedScaScore: "Verwachte blendscore: circa 85,5 tot 86 punten.",
    beanSelection: [
      "40% Brazil Pico Mirante Natural, 86 punten",
      "35% Ethiopia Guji Hambella Buku Saisa Natural, 85,5 punten",
      "25% Kenya Ngorona Washed PB Top, 86 punten"
    ],
    flavors: [
      "Cacao nibs",
      "melkchocolade",
      "bessen",
      "abrikoos",
      "braam",
      "peer"
    ],
    character: "Brazilië geeft zoete chocolade en body. Ethiopië levert bessen en cacao. Kenya zorgt voor helderheid, sappigheid en een langere afdronk.",
    webshopProductId: "ws-premium-daily"
  },
  {
    id: "milau-premium-espresso",
    name: "Milau Premium Espresso",
    range: "Milau Premium",
    type: "fruitige specialty espresso die ook in cappuccino herkenbaar blijft.",
    startingPrice: 10.50,
    expectedScaScore: "Verwachte blendscore: circa 86 tot 87 punten.",
    beanSelection: [
      "40% Honduras La Joya 120-hour Fermented Natural, Catuai/Bourbon, 86,75 punten",
      "35% Brazil Uva Fazenda Pinhal Natural, 86 punten",
      "25% Colombia Ambrosia Pink Bourbon Washed, 87 punten"
    ],
    flavors: [
      "Kers",
      "pruim",
      "kokos",
      "hazelnoot",
      "cashew",
      "honing",
      "cranberry",
      "sinaasappel",
      "vanille"
    ],
    character: "Een complexe maar toegankelijke premium espresso. Honduras levert rijp fruit, Brazilië geeft body en zoetheid, en de Colombia Pink Bourbon voegt aromatische verfijning toe.",
    webshopProductId: "ws-premium-espresso"
  },
  {
    id: "milau-premium-filter",
    name: "Milau Premium Filter",
    range: "Milau Premium",
    type: "heldere, aromatische filterblend.",
    startingPrice: 9.50,
    expectedScaScore: "Verwachte blendscore: circa 86 tot 87 punten.",
    beanSelection: [
      "40% Ethiopia Sidamo Arbegona Washed, 87 punten, circa",
      "30% Kenya Ngorona Washed PB Top, 86 punten",
      "30% Indonesia Catur Pantan Cuaca, 87 punten"
    ],
    flavors: [
      "Groene appel",
      "grapefruit",
      "groene thee",
      "abrikoos",
      "braam",
      "witte druif",
      "sencha-thee"
    ],
    character: "Ethiopië levert florale frisheid, Kenya geeft sappige aciditeit en Indonesië zorgt voor theeachtige structuur en een iets langere body.",
    webshopProductId: "ws-premium-filter"
  },

  // Milau Prestige
  {
    id: "milau-prestige-daily",
    name: "Milau Prestige Daily",
    range: "Milau Prestige",
    type: "exclusieve omniroast met hoge aromatische intensiteit.",
    startingPrice: 14.50,
    expectedScaScore: "Verwachte blendscore: circa 87 tot 88 punten.",
    beanSelection: [
      "40% Indonesia Frinsa Collective Washed, 87 punten",
      "35% Ethiopia Wete Konga Washed",
      "25% Colombia Orange Bourbon Washed, 87 punten"
    ],
    flavors: [
      "Groene appel",
      "citrus",
      "koffieblossom",
      "lemongrass",
      "delicate bloemen",
      "thee",
      "warme specerijen"
    ],
    character: "Een precieze, elegante omniroast. De gewassen Indonesië geeft structuur zonder zware aardse tonen, Ethiopië levert bloemen en citrus, en Orange Bourbon zorgt voor zoetheid en finesse.",
    webshopProductId: "ws-prestige-daily"
  },
  {
    id: "milau-prestige-espresso",
    name: "Milau Prestige Espresso",
    range: "Milau Prestige",
    type: "intens aromatische prestige-espresso met rijp fruit en wijnachtige zoetheid.",
    startingPrice: 15.00,
    expectedScaScore: "Verwachte blendscore: circa 88 punten.",
    beanSelection: [
      "45% Indonesia Frinsa Collective Natural, 88 punten",
      "30% Ethiopia Halo Natural, 88 punten",
      "25% Costa Rica Thermic Aerobic Catuai, 88 punten"
    ],
    flavors: [
      "Cacao nibs",
      "honing",
      "pruim",
      "rode druif",
      "tropisch fruit",
      "wijnachtige zoetheid",
      "suikerriet"
    ],
    character: "De Frinsa Natural geeft body en exotische fruitigheid. Halo voegt florale en rijpe fruitaroma’s toe. Costa Rica maakt het profiel sappig, zoet en gestructureerd.",
    webshopProductId: "ws-prestige-espresso"
  },
  {
    id: "milau-prestige-filter",
    name: "Milau Prestige Filter",
    range: "Milau Prestige",
    type: "high-end filterblend met Gesha-karakter en levendige Kenya-aciditeit.",
    startingPrice: 15.00,
    expectedScaScore: "Verwachte blendscore: circa 88 tot 89 punten.",
    beanSelection: [
      "40% Ethiopia Chelbesa Washed, 88,5 punten",
      "35% Kenya AA Inoi Kerugoya, 89 punten",
      "25% Ethiopia Gesha Bench Maji, 88 punten"
    ],
    flavors: [
      "Jasmijn",
      "zwarte thee",
      "sinaasappel",
      "mandarijn",
      "watermeloen",
      "bloemen",
      "zwarte bes"
    ],
    character: "Een zeer heldere en florale filterblend. Chelbesa vormt de elegante basis, Kenya geeft spanning en sappigheid, en Gesha Bench Maji levert florale complexiteit en een lange afdronk.",
    webshopProductId: "ws-prestige-filter"
  },

  // Barrel-aged coffees
  {
    id: "milau-moscatel-barrel",
    name: "Milau Moscatel Barrel Aged",
    range: "Barrel Aged",
    type: "CASKNOLIA® Moscatel barrels gerijpte specialty koffie.",
    startingPrice: 12.50,
    expectedScaScore: "SCA cup score vóór aging: 86,75.",
    beanSelection: [
      "Honduras La Joya 120-hour Natural, Catuai/Bourbon, 86,75 punten"
    ],
    barrelInfo: "American oak, gedurende 12 maanden seasoned met Moscatel.",
    flavors: [
      "rijpe druif",
      "oranjebloesem",
      "honing",
      "gedroogd fruit",
      "vanille",
      "karamel",
      "toast",
      "zachte eikenkruiden"
    ],
    character: "Basisprofiel: kers, kokos, hazelnoot en pruim. De pruim- en kersachtige natural tonen sluiten aan bij Moscatel zonder dat de koffie te zwaar of bitter wordt.",
    webshopProductId: "ws-moscatel-barrel"
  },
  {
    id: "milau-sherry-barrel",
    name: "Milau Sherry Barrel Aged",
    range: "Barrel Aged",
    type: "CASKNOLIA® Pedro Ximénez sherry cask gerijpte specialty koffie.",
    startingPrice: 10.00,
    expectedScaScore: "SCA cup score vóór aging: 84.",
    beanSelection: [
      "Honduras Montecillos Natural"
    ],
    barrelInfo: "American oak, gedurende 12 maanden seasoned met Pedro Ximénez sherry.",
    flavors: [
      "rozijn",
      "vijg",
      "dadel",
      "donkere karamel",
      "melasse",
      "geroosterde eik",
      "warme zoetheid"
    ],
    character: "Basisprofiel: zwarte druif, karamel, gedroogde dadel en rode appel.",
    webshopProductId: "ws-sherry-barrel"
  },
  {
    id: "milau-bourbon-barrel",
    name: "Milau Bourbon Barrel Aged",
    range: "Barrel Aged",
    type: "Buffalo Trace® Bourbon barrel gerijpte specialty koffie.",
    startingPrice: 9.50,
    expectedScaScore: "SCA cup score: 84,25 voor Canastra.",
    beanSelection: [
      "Brazil Canastra Sweet Catuai"
    ],
    barrelInfo: "Originele Buffalo Trace® Bourbon eiken vaten (1 à 2 maand gerijpt).",
    flavors: [
      "vanille",
      "melasse",
      "bruine suiker",
      "toffee",
      "donkere vruchten",
      "anijs",
      "specerijen",
      "eik"
    ],
    character: "Basisprofiel: bruine suiker, melkchocolade, rode appel en geroosterde amandel.",
    webshopProductId: "ws-bourbon-barrel"
  },

  // Naturally infused coffees
  {
    id: "milau-vanilla-infused",
    name: "Milau Vanilla Infused",
    range: "Naturally Infused",
    type: "Natuurlijk gearomatiseerde specialty koffie met Madagascar-vanille.",
    startingPrice: 8.00,
    expectedScaScore: "SCA cup score vóór infusion: 84,25.",
    beanSelection: [
      "100% Brazil Canastra Sweet Catuai"
    ],
    infusionMethod: "Passieve aroma-infusiemethode zonder kunstmatige smaakstoffen om de koffiekwaliteit te behouden en een zuiverdere, authentiekere smaak te creëren.",
    flavors: [
      "natuurlijke Madagascar-vanille",
      "melkchocolade",
      "karamel",
      "bruine suiker",
      "geroosterde amandel"
    ],
    character: "Fluweelzachte zoetheid van vanille die langzaam op de tong blijft hangen.",
    webshopProductId: "ws-vanilla-infused"
  },
  {
    id: "milau-cinnamon-infused",
    name: "Milau Cinnamon Infused",
    range: "Naturally Infused",
    type: "Natuurlijk gearomatiseerde specialty koffie met kaneel.",
    startingPrice: 8.00,
    expectedScaScore: "gewogen indicatie circa 84,3.",
    beanSelection: [
      "70% Brazil Canastra Sweet Catuai",
      "30% Colombia La Union Washed Castillo"
    ],
    infusionMethod: "Passieve natuurlijke infusie.",
    flavors: [
      "kaneel",
      "bruine suiker",
      "bakkerschocolade",
      "amandel",
      "karamel",
      "vanille"
    ],
    character: "Warme specerijentoetsen gecombineerd met ronde chocoladebasis.",
    webshopProductId: "ws-cinnamon-infused"
  },
  {
    id: "milau-almond-infused",
    name: "Milau Almond Infused",
    range: "Naturally Infused",
    type: "Natuurlijk gearomatiseerde specialty koffie met amandel.",
    startingPrice: 7.50,
    expectedScaScore: "indicatief circa 82,7.",
    beanSelection: [
      "70% Brazil Itaguaçu Blend",
      "30% Brazil Canastra Sweet Catuai"
    ],
    infusionMethod: "Passieve natuurlijke infusie.",
    flavors: [
      "amandel",
      "hazelnoot",
      "walnoot",
      "geroosterde amandel",
      "melkchocolade",
      "bruine suiker"
    ],
    character: "De verfijnde toets van geroosterde amandelen die langzaam op de tong blijft hangen.",
    webshopProductId: "ws-almond-infused"
  },

  // Single Origin coffees
  {
    id: "milau-single-origin-a",
    name: "Milau Single Origin A",
    range: "Single Origin",
    type: "Ethiopia Gesha Bench Maji, washed heirloom, Grade 1.",
    startingPrice: 13.00,
    expectedScaScore: "88 punten (Leverancier: ETOP)",
    beanSelection: [
      "Ethiopia Gesha Bench Maji, washed heirloom, Grade 1"
    ],
    flavors: [
      "zwarte thee",
      "sinaasappel",
      "mandarijn",
      "watermeloen"
    ],
    character: "Uitzonderlijke florale complexiteit, levendige aciditeit en langdurige theeachtige afdronk.",
    webshopProductId: "ws-single-origin-a"
  },
  {
    id: "milau-single-origin-b",
    name: "Milau Single Origin B",
    range: "Single Origin",
    type: "Colombia Ambrosia Pink Bourbon, washed micro-lot van Finca El Caney.",
    startingPrice: 9.50,
    expectedScaScore: "87 punten (Leverancier: Origin Bridge)",
    beanSelection: [
      "washed Pink Bourbon micro-lot van Finca El Caney"
    ],
    flavors: [
      "amandel",
      "bruine suiker",
      "cranberry",
      "citroen",
      "sinaasappel",
      "suikerriet",
      "vanille"
    ],
    character: "Zeldzame Pink Bourbon variëteit met heldere citrustonen en romige zoetheid.",
    webshopProductId: "ws-single-origin-b"
  },
  {
    id: "milau-single-origin-c",
    name: "Milau Single Origin C",
    range: "Single Origin",
    type: "Ethiopia Sidamo Arbegona, washed heirloom, Grade 1.",
    startingPrice: 9.50,
    expectedScaScore: "87 punten (Leverancier: ETOP)",
    beanSelection: [
      "washed heirloom, Grade 1"
    ],
    flavors: [
      "appel",
      "grapefruit",
      "groene appel",
      "groene thee"
    ],
    character: "Frisse en sprankelende Ethiopische gewassen koffie met zuivere fruitige nuances.",
    webshopProductId: "ws-single-origin-c"
  }
];
