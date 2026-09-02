import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Send, CheckCircle2, AlertTriangle } from 'lucide-react';

export const AppointmentForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'Cuppingsessie & Smaaktest',
    date: '',
    time: '10:00',
    notes: ''
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: 'idle' | 'success' | 'error'; message: string }>({
    type: 'idle',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.date) {
      setStatus({
        type: 'error',
        message: 'Gelieve alle verplichte velden (naam, e-mail, telefoon en datum) in te vullen.'
      });
      return;
    }

    setLoading(true);
    setStatus({ type: 'idle', message: '' });

    try {
      const response = await fetch('/api/appointments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus({
          type: 'success',
          message: data.message || 'Uw afspraak in onze branderij te Oudegem is bevestigd! We kijken ernaar uit u te ontvangen.'
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          type: 'Cuppingsessie & Smaaktest',
          date: '',
          time: '10:00',
          notes: ''
        });
      } else {
        setStatus({
          type: 'error',
          message: data.error || 'Er is een fout opgetreden bij het inboeken.'
        });
      }
    } catch (err) {
      setStatus({
        type: 'error',
        message: 'Kan geen verbinding maken met het afsprakensysteem.'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white border border-stone-200 rounded-xl p-6 sm:p-8 shadow-xs" id="appointment-form-widget">
      <div className="flex items-start gap-4 mb-6">
        <div className="p-3 bg-amber-100 text-amber-900 rounded-xl">
          <Calendar className="w-6 h-6" />
        </div>
        <div>
          <h3 className="font-serif text-xl font-bold text-stone-900">
            Boek een Bezoek of Cuppingsessie
          </h3>
          <p className="text-xs text-stone-600 mt-1 flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-amber-800" />
            <span>Roastery Atelier: Jef Scheirsstraat 29, 9200 Oudegem (Dendermonde)</span>
          </p>
        </div>
      </div>

      {status.type === 'success' && (
        <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded-lg flex items-start gap-3 text-emerald-900 text-xs">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold block">Afspraak Bevestigd!</span>
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
              Type Afspraak
            </label>
            <select
              value={formData.type}
              onChange={(e) => setFormData({ ...formData, type: e.target.value })}
              className="w-full px-3 py-2 rounded-lg border border-stone-300 text-xs text-stone-900 bg-stone-50"
            >
              <option>Cuppingsessie & Smaaktest</option>
              <option>White Label & Eigen Huismerk Ontwikkeling</option>
              <option>Atelier Bezoek & Directe Afhaling</option>
              <option>B2B Kantoor- & Horecaproeverij</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
              Gewenste Datum *
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
              Gewenst Tijdstip
            </label>
            <select
              value={formData.time}
              onChange={(e) => setFormData({ ...formData, time: e.target.value })}
              className="w-full px-3 py-2 rounded-lg border border-stone-300 text-xs text-stone-900 bg-stone-50"
            >
              <option>09:30 - 10:30</option>
              <option>10:30 - 11:30</option>
              <option>13:30 - 14:30</option>
              <option>15:00 - 16:00</option>
              <option>16:30 - 17:30</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
            Opmerkingen of specifieke koffie-interesses
          </label>
          <textarea
            rows={2}
            value={formData.notes}
            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
            className="w-full px-3 py-2 rounded-lg border border-stone-300 text-xs text-stone-900 bg-stone-50"
            placeholder="Bijv. aantal personen, interesse in barrel aged koffies of espresso blends..."
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="px-6 py-2.5 bg-amber-900 text-white rounded-lg text-xs font-semibold hover:bg-amber-800 transition-colors flex items-center gap-2 shadow-xs"
        >
          <Send className="w-3.5 h-3.5" />
          <span>{loading ? 'Bezig met inplannen...' : 'Bevestig Afspraak in Atelier'}</span>
        </button>
      </form>
    </div>
  );
};
