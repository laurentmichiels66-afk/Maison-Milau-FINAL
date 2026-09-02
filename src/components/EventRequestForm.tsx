import React, { useState } from 'react';
import { Send, CheckCircle2, AlertTriangle, Calendar } from 'lucide-react';

export const EventRequestForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: 'Bruiloft / Trouwfeest',
    date: '',
    guestsCount: 80,
    needsMachine: 'Ja, dry-hire espressomachine gewenst',
    needsBarista: 'Nee, zelfbediening volstaat',
    notes: ''
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: 'idle' | 'success' | 'error'; message: string }>({
    type: 'idle',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.date) {
      setStatus({
        type: 'error',
        message: 'Gelieve naam, e-mail, telefoonnummer en gewenste datum in te vullen.'
      });
      return;
    }

    setLoading(true);
    setStatus({ type: 'idle', message: '' });

    try {
      // Backend Endpoint Execution: POST /api/events/quote
      const response = await fetch('/api/events/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok && data.success) {
        // Success Action
        setStatus({
          type: 'success',
          message: data.message || 'Uw eventaanvraag is goed ontvangen. We nemen binnen 24u contact op.'
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          eventType: 'Bruiloft / Trouwfeest',
          date: '',
          guestsCount: 80,
          needsMachine: 'Ja, dry-hire espressomachine gewenst',
          needsBarista: 'Nee, zelfbediening volstaat',
          notes: ''
        });
      } else {
        // Error Action
        setStatus({
          type: 'error',
          message: data.error || 'Er is een fout opgetreden bij het verzenden.'
        });
      }
    } catch (err) {
      setStatus({
        type: 'error',
        message: 'Verbindingsfout met server. Probeer het later opnieuw.'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white border border-stone-200 rounded-xl p-6 sm:p-8 shadow-xs" id="event-form-section">
      <div className="mb-6">
        <h3 className="font-serif text-2xl font-bold text-stone-900">
          Vraag een Offerte aan voor uw Evenement
        </h3>
        <p className="text-xs text-stone-600 mt-1">
          Koffiecatering & machine-verhuur voor trouwfeesten, verjaardagen, recepties of bedrijfsevenementen.
        </p>
      </div>

      {status.type === 'success' && (
        <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded-lg flex items-start gap-3 text-emerald-900 text-xs">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold block">Aanvraag Verzonden!</span>
            <p>{status.message}</p>
          </div>
        </div>
      )}

      {status.type === 'error' && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3 text-red-900 text-xs">
          <AlertTriangle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold block">Fout bij formulier</span>
            <p>{status.message}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
              Contactpersoon *
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-3 py-2 rounded-lg border border-stone-300 text-xs text-stone-900 bg-stone-50"
              placeholder="Uw voor- en achternaam"
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
              Telefoonnummer *
            </label>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-3 py-2 rounded-lg border border-stone-300 text-xs text-stone-900 bg-stone-50"
              placeholder="+32 ..."
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
              Type evenement
            </label>
            <select
              value={formData.eventType}
              onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
              className="w-full px-3 py-2 rounded-lg border border-stone-300 text-xs text-stone-900 bg-stone-50"
            >
              <option>Bruiloft / Trouwfeest</option>
              <option>Tuinfeest / Verjaardag</option>
              <option>Bedrijfsreceptie / Nieuwjaarsdrink</option>
              <option>Beurs / Festival</option>
              <option>Overige</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
              Datum van het evenement *
            </label>
            <input
              type="date"
              required
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              className="w-full px-3 py-2 rounded-lg border border-stone-300 text-xs text-stone-900 bg-stone-50"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
              Geschat aantal personen
            </label>
            <input
              type="number"
              min={10}
              max={1000}
              value={formData.guestsCount}
              onChange={(e) => setFormData({ ...formData, guestsCount: Number(e.target.value) })}
              className="w-full px-3 py-2 rounded-lg border border-stone-300 text-xs text-stone-900 bg-stone-50"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
              Machineverhuur
            </label>
            <select
              value={formData.needsMachine}
              onChange={(e) => setFormData({ ...formData, needsMachine: e.target.value })}
              className="w-full px-3 py-2 rounded-lg border border-stone-300 text-xs text-stone-900 bg-stone-50"
            >
              <option>Ja, dry-hire espressomachine gewenst</option>
              <option>Nee, enkel vers gebrande specialty koffiebonen</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
              Baristaservice
            </label>
            <select
              value={formData.needsBarista}
              onChange={(e) => setFormData({ ...formData, needsBarista: e.target.value })}
              className="w-full px-3 py-2 rounded-lg border border-stone-300 text-xs text-stone-900 bg-stone-50"
            >
              <option>Nee, zelfbediening volstaat</option>
              <option>Ja, professionele SCA barista ter plaatse gewenst</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
            Bijkomende wensen of vragen
          </label>
          <textarea
            rows={3}
            value={formData.notes}
            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
            className="w-full px-3 py-2 rounded-lg border border-stone-300 text-xs text-stone-900 bg-stone-50"
            placeholder="Specifieke koffievoorkeuren, locatie van het feest..."
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="px-6 py-2.5 bg-amber-900 text-white rounded-lg text-xs font-semibold hover:bg-amber-800 transition-colors flex items-center gap-2"
        >
          <Send className="w-3.5 h-3.5" />
          <span>{loading ? 'Bezig met versturen...' : 'Verstuur Evenement Aanvraag'}</span>
        </button>
      </form>
    </div>
  );
};
