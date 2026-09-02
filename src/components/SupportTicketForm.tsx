import React, { useState } from 'react';
import { HelpCircle, Send, CheckCircle2, AlertTriangle, RotateCcw } from 'lucide-react';

export const SupportTicketForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    orderNumber: '',
    category: 'Levering & Verzending',
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
        message: 'Gelieve naam, e-mail en uw bericht in te vullen.'
      });
      return;
    }

    setLoading(true);
    setStatus({ type: 'idle', message: '' });

    try {
      const response = await fetch('/api/support/ticket', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus({
          type: 'success',
          message: data.message || `Uw ticket is geregistreerd onder referentie ${data.ticket?.id}. We nemen spoedig contact met u op.`
        });
        setFormData({
          name: '',
          email: '',
          orderNumber: '',
          category: 'Levering & Verzending',
          subject: '',
          message: ''
        });
      } else {
        setStatus({
          type: 'error',
          message: data.error || 'Er is een fout opgetreden bij het aanmaken van uw ticket.'
        });
      }
    } catch (err) {
      setStatus({
        type: 'error',
        message: 'Kan geen verbinding maken met het support endpoint.'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white border border-stone-200 rounded-xl p-6 sm:p-8 shadow-xs" id="support-ticket-form">
      <div className="mb-5">
        <h3 className="font-serif text-xl font-bold text-stone-900">
          Support & Retour Portaal (Ticket Indienen)
        </h3>
        <p className="text-xs text-stone-600 mt-1">
          Heeft u een vraag over uw levering, factuur of wilt u een retour melden? Ons team helpt u snel verder.
        </p>
      </div>

      {status.type === 'success' && (
        <div className="mb-5 p-4 bg-emerald-50 border border-emerald-200 rounded-lg flex items-start gap-3 text-emerald-900 text-xs">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold block">Ticket Aangemaakt!</span>
            <p>{status.message}</p>
          </div>
        </div>
      )}

      {status.type === 'error' && (
        <div className="mb-5 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3 text-red-900 text-xs">
          <AlertTriangle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold block">Fout</span>
            <p>{status.message}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
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

          <div>
            <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
              Ordernummer (optioneel)
            </label>
            <input
              type="text"
              value={formData.orderNumber}
              onChange={(e) => setFormData({ ...formData, orderNumber: e.target.value })}
              className="w-full px-3 py-2 rounded-lg border border-stone-300 text-xs text-stone-900 bg-stone-50"
              placeholder="ORD-2026-..."
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
              Categorie
            </label>
            <select
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className="w-full px-3 py-2 rounded-lg border border-stone-300 text-xs text-stone-900 bg-stone-50"
            >
              <option>Levering & Verzending (Track & Trace)</option>
              <option>Retour- of Terugbetalingsaanvraag</option>
              <option>Factuur of Betalingsvraag (POM / BTW)</option>
              <option>Abonnement Beheer</option>
              <option>Maalgraad of Zetadvies</option>
              <option>Zakelijk / B2B Vraag</option>
              <option>Klacht of Opmerking</option>
            </select>
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
              placeholder="Korte samenvatting van uw vraag"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
            Bericht / Toelichting *
          </label>
          <textarea
            rows={3}
            required
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-3 py-2 rounded-lg border border-stone-300 text-xs text-stone-900 bg-stone-50"
            placeholder="Beschrijf uw vraag of situatie zo gedetailleerd mogelijk..."
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="px-6 py-2.5 bg-amber-900 text-white rounded-lg text-xs font-semibold hover:bg-amber-800 transition-colors flex items-center gap-2 shadow-xs"
        >
          <Send className="w-3.5 h-3.5" />
          <span>{loading ? 'Bezig met registreren...' : 'Verstuur Ticket / Retouraanvraag'}</span>
        </button>
      </form>
    </div>
  );
};
