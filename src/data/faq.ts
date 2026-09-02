export interface FaqItem {
  id: string;
  category: string;
  question: string;
  answer: string;
  linkText?: string;
  linkPath?: string;
}

export const FAQ_CATEGORIES = [
  "Leveringstermijnen & Verzending",
  "Maalgraden & Zettechnieken",
  "Zakelijk & B2B",
  "Evenementen & Verhuur",
  "Onze Branderij & Kwaliteit",
  "Bestellingen & Betalingen",
  "Track & Trace",
  "Retouren & Terugbetalingen",
  "Abonnementen",
  "Klachten & Ondersteuning"
];

export const FAQ_DATA: FaqItem[] = [
  {
    id: "faq-1",
    category: "Leveringstermijnen & Verzending",
    question: "Wat is jullie levertermijn voor vers gebrande koffie?",
    answer: "Producten die op voorraad zijn, worden binnen 1-2 weken na de brandronde verzonden (zodra de bonen na de brandbatch ontgast en kwaliteitsgecontroleerd zijn). Bij producten die in batch-planning staan (oranje indicator) bedraagt de levertermijn uiterlijk 2 weken.",
    linkText: "Bekijk actuele voorraad in de Webshop",
    linkPath: "/webshop"
  },
  {
    id: "faq-2",
    category: "Leveringstermijnen & Verzending",
    question: "Wat zijn de verzendkosten in België en Nederland?",
    answer: "Verzending binnen België met bpost bedraagt €4,95 voor thuisbezorging. Vanaf een bestelwaarde van €45,00 verzenden wij volledig gratis. Afhalen in ons Atelier in Oudegem of bij onze marktkramen in Dendermonde, Wetteren en Aalst is altijd 100% gratis.",
    linkText: "Lees meer over ons afhaalpunt in Oudegem",
    linkPath: "/over-ons"
  },
  {
    id: "faq-3",
    category: "Leveringstermijnen & Verzending",
    question: "Hoe zit het met leveringen voor B2B en zakelijke klanten?",
    answer: "B2B-bestellingen worden automatisch op vaste frequenties (om de 2 of 4 weken) kosteloos geleverd met btw-factuur en automatische staffelkorting.",
    linkText: "Ontdek B2B kantoor- en horecaformules",
    linkPath: "/kantoor-horeca"
  },
  {
    id: "faq-4",
    category: "Maalgraden & Zettechnieken",
    question: "Waarom worden Le Daily, Le Premium, Tres Bayards en De Drie Reuzen uitsluitend als volle bonen geleverd?",
    answer: "Om de absolute topkwaliteit en aroma's op jouw specifieke machine of volautomaat te garanderen, leveren we deze blends uitsluitend in volle bonen. Zo kun je de maalgraad perfect afstemmen op jouw apparatuur.",
    linkText: "Bekijk de koffies in de Webshop",
    linkPath: "/webshop"
  },
  {
    id: "faq-5",
    category: "Maalgraden & Zettechnieken",
    question: "Hoe bewaar ik gebrande koffiebonen het best?",
    answer: "Bewaar je koffie altijd in de originele hersluitbare zak met eenrichtingsventiel op een koele, donkere en droge plek. Niet in de koelkast, want vocht tast de aromarijke oliën aan."
  },
  {
    id: "faq-6",
    category: "Zakelijk & B2B",
    question: "Wat zijn de voordelen van Milau at Work voor ons bedrijf of kantoor?",
    answer: "Wij leveren vers gebrande specialty koffie met aantrekkelijke B2B staffelkortingen, transparante maandfacturen, flexibele abonnementen zonder wurgcontracten en optionele volautomaten of espressomachines (Jura, Thermoplan) met all-in onderhoudsservice.",
    linkText: "Bekijk onze B2B-formules",
    linkPath: "/kantoor-horeca"
  },
  {
    id: "faq-7",
    category: "Zakelijk & B2B",
    question: "Kunnen we als horecazaak of bar een eigen White Label blend laten ontwikkelen?",
    answer: "Zeker. Voor horeca en specialty bars ontwikkelen we een exclusief brandprofiel en leveren we desgewenst zakken bedrukt met jullie eigen logo en branding.",
    linkText: "Neem contact op voor Custom Roasting & White Label",
    linkPath: "/kantoor-horeca"
  },
  {
    id: "faq-8",
    category: "Evenementen & Verhuur",
    question: "Welke verhuurpakketten bieden jullie aan voor evenementen?",
    answer: "We bieden complete \"Dry-Hire\" pakketten: een selectien van je favoriete koffie gecombineerd meet een compacte koffiemachine voor een intiem tuinfeest of verjaardag tot een professioneel volatumatisch espressomachine voor huwelijken en grotere bedrijfsfeesten.",
    linkText: "Ontdek verhuurpakketten op Milau at Events",
    linkPath: "/events"
  },
  {
    id: "faq-9",
    category: "Evenementen & Verhuur",
    question: "Kunnen we ook een professionele barista inhuren op locatie?",
    answer: "Ja, voor beurzen, bedrijfsevenementen en festivals kunnen we een complete mobiele koffiebar inclusief SCA-gecertificeerde barista verzorgen.",
    linkText: "Vraag cateringofferte aan",
    linkPath: "/events"
  },
  {
    id: "faq-10",
    category: "Onze Branderij & Kwaliteit",
    question: "Wat maakt Maison Milau anders dan traditionele industriële koffiemerken?",
    answer: "Wij branden uitsluitend specialty grade bonen (SCA 83+) in kleine batches op een hypermoderne, geconditioneerde trommelbrander in ons atelier te Oudegem. Geen bittere verbranding, maar maximale zoetheid en terroir-expressie.",
    linkText: "Lees meer over onze branderij te Oudegem",
    linkPath: "/over-ons"
  },
  {
    id: "faq-11",
    category: "Onze Branderij & Kwaliteit",
    question: "Kan ik de branderij in Oudegem bezoeken of langskomen voor vers gebrande bonen?",
    answer: "Jazeker. Je bent van harte welkom om op afspraak een cuppingsessie bij te wonen of vers gebrande bonen direct bij de branderij af te halen.",
    linkText: "Plan een bezoek of cuppingsessie",
    linkPath: "/afspraakplanner"
  }
];
