import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, AlertTriangle, ArrowRight } from 'lucide-react';
import { ValidatedLink } from '../components/ValidatedLink';

interface ContactViewProps {
  onNavigate: (path: string) => void;
}

export const ContactView: React.FC<ContactViewProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: 'idle' | 'success' | 'error'; message: string }>({
    type: 'idle',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({
        type: 'error',
        message: 'Gelieve alle verplichte velden (*) in te vullen.'
      });
      return;
    }

    setLoading(true);
    setStatus({ type: 'idle', message: '' });

    try {
      const res = await fetch('/api/support/ticket', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          category: 'Algemene Vraag / Contact'
        })
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setStatus({
          type: 'success',
          message: 'Hartelijk dank voor uw bericht! We nemen binnen 24 uur contact met u op.'
        });
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        setStatus({
          type: 'error',
          message: data.error || 'Er is een fout opgetreden bij het versturen.'
        });
      }
    } catch (err) {
      setStatus({
        type: 'error',
        message: 'Verbindingsfout met server.'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#faf8f5] text-stone-900 min-h-screen pb-20" id="contact-page-container">
      {/* Header */}
      <section className="bg-white border-b border-stone-200 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <nav className="flex items-center gap-2 text-xs text-stone-500 mb-3">
            <button onClick={() => onNavigate('/')} className="hover:text-amber-900">Home</button>
            <span>/</span>
            <span className="text-stone-900 font-semibold">Contact</span>
          </nav>

          <div className="max-w-3xl">
            <span className="text-xs font-bold text-amber-800 uppercase tracking-widest block">
              Bereikbaarheid & Atelier
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-stone-950 mt-1 leading-tight">
              Contacteer Maison Milau
            </h1>
            <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed font-sans">
              Heeft u een vraag over onze vers gebrande bonen, wilt u advies over uw kantooroplossing of zoekt u apparatuur voor een evenement? Neem gerust contact op.
            </p>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Details & Location */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs space-y-4">
              <h3 className="font-serif text-lg font-bold text-stone-900">
                Atelier & Branderij
              </h3>

              <div className="space-y-3 text-xs text-stone-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-amber-900 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-stone-900">Maison Milau BV</strong>
                    <span>Jef Scheirsstraat 29</span>
                    <span className="block text-stone-500">9200 Oudegem (Dendermonde), België</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-amber-900 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-stone-900">Telefoon & WhatsApp:</strong>
                    <a href="tel:+32467773766" className="text-amber-900 hover:underline">
                      +32 (0)467 77 37 66
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-amber-900 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-stone-900">E-mail:</strong>
                    <a href="mailto:Maison-milau@gmail.com" className="text-amber-900 hover:underline">
                      Maison-milau@gmail.com
                    </a>
                  </div>
                </div>

                <div className="pt-2 border-t border-stone-100 text-[11px] text-stone-500">
                  <span>BTW / Ondernemingsnummer: </span>
                  <span className="font-mono font-bold text-stone-800">BE 1041.542.844</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs space-y-3">
              <h3 className="font-serif text-lg font-bold text-stone-900">
                Openingsuren & Afhaling
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Bezoek aan ons branderij-atelier is mogelijk op afspraak of tijdens onze afhaaldagen.
              </p>
              <button
                onClick={() => onNavigate('/afspraakplanner')}
                className="w-full py-2 bg-amber-900 text-white rounded text-xs font-semibold hover:bg-amber-800 transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Plan een bezoek (afspraak planner)</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-xs">
              <h3 className="font-serif text-2xl font-bold text-stone-900 mb-2">
                Stuur ons een Bericht
              </h3>
              <p className="text-xs text-stone-600 mb-6">
                Vul onderstaand formulier in en we reageren zo spoedig mogelijk.
              </p>

              {status.type === 'success' && (
                <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded-lg flex items-start gap-3 text-emerald-900 text-xs">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block">Bericht Verzonden!</span>
                    <p>{status.message}</p>
                  </div>
                </div>
              )}

              {status.type === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3 text-red-900 text-xs">
                  <AlertTriangle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block">Fout</span>
                    <p>{status.message}</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                      Uw Naam *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg border border-stone-300 text-xs text-stone-900 bg-stone-50"
                      placeholder="Voor- en achternaam"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                      E-mailadres *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg border border-stone-300 text-xs text-stone-900 bg-stone-50"
                      placeholder="naam@domein.be"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                      Telefoonnummer
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg border border-stone-300 text-xs text-stone-900 bg-stone-50"
                      placeholder="+32 ..."
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                      Onderwerp
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg border border-stone-300 text-xs text-stone-900 bg-stone-50"
                      placeholder="Waarover gaat uw vraag?"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                    Uw Bericht *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-stone-300 text-xs text-stone-900 bg-stone-50"
                    placeholder="Typ hier uw vraag of opmerking..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="px-6 py-2.5 bg-amber-900 text-white rounded-lg text-xs font-semibold hover:bg-amber-800 transition-colors flex items-center gap-2 shadow-xs"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{loading ? 'Bezig met versturen...' : 'Verstuur Bericht'}</span>
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
