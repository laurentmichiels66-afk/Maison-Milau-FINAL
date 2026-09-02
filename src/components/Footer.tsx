import React from 'react';
import { ValidatedLink } from './ValidatedLink';
import { Phone, Mail, MapPin, Calendar, Clock, ArrowRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-stone-900 text-stone-300 border-t border-amber-950 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-stone-800">
          
          {/* Column 1: Brand & Atelier */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-amber-500 block mb-1">
              Atelier Maison Milau
            </span>
            <p className="text-sm text-stone-400 mb-3">
              Jef Scheirsstraat 29, 9200 Oudegem (Dendermonde)
            </p>

            <h3 className="font-serif text-2xl font-bold text-white mb-2">
              MAISON MILAU
            </h3>
            <p className="text-xs text-amber-400/90 font-medium tracking-wide uppercase mb-3">
              Ambachtelijke Koffiebranderij
            </p>
            <p className="text-sm text-stone-400 leading-relaxed mb-4">
              Artisanale micro-roastery in Oudegem (Dendermonde). Met zorg en passie gebrande specialty koffies, kantoor- en horeca-oplossingen en machine-verhuur voor evenementen.
            </p>

            <div className="pt-2 text-xs text-stone-400">
              <span className="font-semibold text-stone-200 block">Bedrijfsgegevens:</span>
              <span>BTW & Ondernemingsnummer: BE 1041.542.844</span>
            </div>
          </div>

          {/* Column 2: Atelier & Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-amber-400 mb-4">
              Atelier & Contact
            </h4>
            <ul className="space-y-3 text-sm text-stone-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>Roastery Atelier: Jef Scheirsstraat 29</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <span>Telefoon & WhatsApp:</span>
                  <a href="tel:+32467773766" className="block text-white hover:text-amber-400 transition-colors">
                    +32 (0)467 77 37 66
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <span>E-mailadres:</span>
                  <a href="mailto:Maison-milau@gmail.com" className="block text-white hover:text-amber-400 transition-colors">
                    Maison-milau@gmail.com
                  </a>
                </div>
              </li>
            </ul>

            <div className="mt-6 pt-4 border-t border-stone-800">
              <h5 className="text-xs font-semibold uppercase tracking-wider text-amber-500 mb-2">
                Atelier Bezoek
              </h5>
              <p className="text-xs text-stone-400 mb-3 leading-relaxed">
                Bezoek aan ons branderij-atelier in Oudegem is mogelijk op afspraak of tijdens onze afhaaldagen.
              </p>
              <button
                id="footer-plan-bezoek-btn"
                onClick={() => onNavigate('/afspraakplanner')}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors"
              >
                <span>Plan een bezoek of neem contact op (afspraak planner)</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Column 3: Lokale Markten */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-amber-400 mb-4">
              Lokale Markten
            </h4>
            <p className="text-xs text-stone-400 mb-4 leading-relaxed">
              Kom proeven en koop je vers gebrande bonen rechtstreeks op de wekelijkse markten:
            </p>
            <div className="space-y-3 text-sm">
              <div className="bg-stone-800/80 p-3 rounded-lg border border-stone-700/60">
                <span className="font-semibold text-white block">Maandag Dendermonde</span>
                <span className="text-xs text-stone-400">Centrum · 08:00 – 13:00</span>
              </div>
              <div className="bg-stone-800/80 p-3 rounded-lg border border-stone-700/60">
                <span className="font-semibold text-white block">Donderdag Wetteren</span>
                <span className="text-xs text-stone-400">Markt · 07:30 – 12:30</span>
              </div>
              <div className="bg-stone-800/80 p-3 rounded-lg border border-stone-700/60">
                <span className="font-semibold text-white block">Zaterdag Aalst</span>
                <span className="text-xs text-stone-400">Centrum · 08:00 – 12:30</span>
              </div>
            </div>
          </div>

          {/* Column 4: Sitemap & Formules & Volg Ons */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-amber-400 mb-4">
              Sitemap & Formules
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  id="footer-nav-account"
                  onClick={() => onNavigate('/account')}
                  className="text-stone-300 hover:text-white transition-colors"
                >
                  Mijn Account
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-webshop"
                  onClick={() => onNavigate('/webshop')}
                  className="text-stone-300 hover:text-white transition-colors"
                >
                  Webshop
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-b2b"
                  onClick={() => onNavigate('/kantoor-horeca')}
                  className="text-stone-300 hover:text-white transition-colors"
                >
                  Kantoor & Horeca
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-events"
                  onClick={() => onNavigate('/events')}
                  className="text-stone-300 hover:text-white transition-colors"
                >
                  Event Planner
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-faq"
                  onClick={() => onNavigate('/faq')}
                  className="text-stone-300 hover:text-white transition-colors"
                >
                  FAQ
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-quote"
                  onClick={() => onNavigate('/kantoor-horeca')}
                  className="font-semibold text-amber-400 hover:text-amber-300 transition-colors"
                >
                  Offerte of Vraag Sturen →
                </button>
              </li>
            </ul>

            <div className="mt-6 pt-4 border-t border-stone-800">
              <h5 className="text-xs font-semibold uppercase tracking-wider text-amber-500 mb-2">
                Volg Maison Milau
              </h5>
              <div className="flex flex-col space-y-1.5 text-xs text-stone-400">
                <ValidatedLink
                  id="social-instagram"
                  href="https://www.instagram.com/maison_milau?igsi=MTR4ZnZmeXB4OWQ2aQ%3D%3D&utm_source=qr"
                  className="hover:text-amber-400 transition-colors"
                >
                  Instagram: @maison_milau
                </ValidatedLink>
                <ValidatedLink
                  id="social-facebook"
                  href="https://www.facebook.com/people/Maison-Milau/61594088783935/?mibextid=wwXIfr&rdid=2NNl8EbSQSj7FY2P&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F19aNRNmCbA%2F%3Fmibextid%3DwwXIfr"
                  className="hover:text-amber-400 transition-colors"
                >
                  Facebook: Maison-Milau
                </ValidatedLink>
                <ValidatedLink
                  id="social-whatsapp"
                  href="https://wa.me/32467773766"
                  className="hover:text-emerald-400 transition-colors"
                >
                  WhatsApp: +32467773766
                </ValidatedLink>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal Notice */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© 2026 Maison Milau · Ambachtelijke Koffiebranderij Oudegem. Alle rechten voorbehouden.</p>
          <p className="tracking-wide">
            BTW BE 1041.542.844 · Specialty Coffee Belgium · Vers gebrand in Dendermonde
          </p>
        </div>
      </div>
    </footer>
  );
};
