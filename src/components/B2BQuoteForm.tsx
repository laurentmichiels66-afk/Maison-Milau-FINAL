import React, { useState } from 'react';
import { Send, CheckCircle, AlertTriangle } from 'lucide-react';

interface B2BQuoteFormProps {
  defaultMonthlyVolume?: number;
}

export const B2BQuoteForm: React.FC<B2BQuoteFormProps> = ({ defaultMonthlyVolume }) => {
  const [formData, setFormData] = useState({
    companyName: '',
    vatNumber: '',
    contactPerson: '',
    email: '',
    phone: '',
    sectorType: 'Horeca / Restaurant / Café / Koffiebar',
    machineNeed: 'Enkel verse specialty koffiebonen (wij hebben al een machine)',
    notes: defaultMonthlyVolume ? `Indicatief berekend maandvolume: ${defaultMonthlyVolume} kg` : ''
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: 'idle' | 'success' | 'error'; message: string }>({
    type: 'idle',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.companyName.trim() || !formData.contactPerson.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setStatus({
        type: 'error',
        message: 'Gelieve alle verplichte velden (*) correct in te vullen.'
      });
      return;
    }

    setLoading(true);
    setStatus({ type: 'idle', message: '' });

    try {
      // Backend Endpoint Execution: POST /api/b2b/quote
      const response = await fetch('/api/b2b/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok && data.success) {
        // Success Action
        setStatus({
          type: 'success',
          message: data.message || 'Uw B2B aanvraag werd succesvol ontvangen. Wij bezorgen u binnen 24u een voorstel op maat.'
        });
        setFormData({
          companyName: '',
          vatNumber: '',
          contactPerson: '',
          email: '',
          phone: '',
          sectorType: 'Horeca / Restaurant / Café / Koffiebar',
          machineNeed: 'Enkel verse specialty koffiebonen (wij hebben al een machine)',
          notes: ''
        });
      } else {
        // Error Action
        setStatus({
          type: 'error',
          message: data.error || 'Er is een fout opgetreden bij het versturen van uw aanvraag. Probeer het opnieuw.'
        });
      }
    } catch (err) {
      setStatus({
        type: 'error',
        message: 'Verbindingsfout met server. Controleer uw netwerkverbinding of neem rechtstreeks contact op.'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white border border-stone-200 rounded-xl p-6 sm:p-8 shadow-xs" id="b2b-quote-form-container">
      <div className="mb-6">
        <h3 className="font-serif text-2xl font-bold text-stone-900">
          Vraag een B2B Voorstel of Gratis Proefpakket aan
        </h3>
        <p className="text-sm text-stone-600 mt-2">
          Vul onderstaand formulier in en we bezorgen u binnen 24u een voorstel op maat van uw onderneming.
        </p>
      </div>

      {status.type === 'success' && (
        <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded-lg flex items-start gap-3 text-emerald-900 text-sm">
          <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold block">Aanvraag Bevestigd!</span>
            <p>{status.message}</p>
          </div>
        </div>
      )}

      {status.type === 'error' && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3 text-red-900 text-sm">
          <AlertTriangle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold block">Validatiefout</span>
            <p>{status.message}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4" id="b2b-quote-form">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
              Bedrijfsnaam / Horecazaak *
            </label>
            <input
              type="text"
              required
              value={formData.companyName}
              onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-hidden focus:ring-2 focus:ring-amber-700 text-sm text-stone-900 bg-stone-50/50"
              placeholder="Bijv. Brasserie De Molen"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
              BTW-nummer
            </label>
            <input
              type="text"
              value={formData.vatNumber}
              onChange={(e) => setFormData({ ...formData, vatNumber: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-hidden focus:ring-2 focus:ring-amber-700 text-sm text-stone-900 bg-stone-50/50"
              placeholder="BE 0123.456.789"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
              Contactpersoon *
            </label>
            <input
              type="text"
              required
              value={formData.contactPerson}
              onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-hidden focus:ring-2 focus:ring-amber-700 text-sm text-stone-900 bg-stone-50/50"
              placeholder="Voornaam & Achternaam"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
              E-mailadres *
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-hidden focus:ring-2 focus:ring-amber-700 text-sm text-stone-900 bg-stone-50/50"
              placeholder="naam@bedrijf.be"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
              Telefoonnummer *
            </label>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-hidden focus:ring-2 focus:ring-amber-700 text-sm text-stone-900 bg-stone-50/50"
              placeholder="+32 ..."
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
              Sector / Type zaak
            </label>
            <select
              value={formData.sectorType}
              onChange={(e) => setFormData({ ...formData, sectorType: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-hidden focus:ring-2 focus:ring-amber-700 text-sm text-stone-900 bg-stone-50/50"
            >
              <option>Horeca / Restaurant / Café / Koffiebar</option>
              <option>Kantoor / Bedrijfsruimte</option>
              <option>Handelszaak / Boetiek / Kapper</option>
              <option>Residentieel centrum / Zorginstelling</option>
              <option>Overige</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
              Machine & Behoefte
            </label>
            <select
              value={formData.machineNeed}
              onChange={(e) => setFormData({ ...formData, machineNeed: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-hidden focus:ring-2 focus:ring-amber-700 text-sm text-stone-900 bg-stone-50/50"
            >
              <option>Enkel verse specialty koffiebonen (wij hebben al een machine)</option>
              <option>Koffiebonen + Volautomaat bonenmachine (Kantoor)</option>
              <option>Koffiebonen + Professionele traditionele pistonmachine (Horeca)</option>
              <option>Enkel gratis proefpakket aanvragen</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
            Eventuele vragen of opmerkingen
          </label>
          <textarea
            rows={3}
            value={formData.notes}
            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-hidden focus:ring-2 focus:ring-amber-700 text-sm text-stone-900 bg-stone-50/50"
            placeholder="Vermeld uw voorkeuren, gewenste timing of machines..."
          />
        </div>

        <button
          id="btn-submit-b2b-quote"
          type="submit"
          disabled={loading}
          className="w-full sm:w-auto px-8 py-3 bg-amber-900 text-white rounded-lg font-semibold hover:bg-amber-800 transition-colors shadow-xs flex items-center justify-center gap-2"
        >
          <Send className="w-4 h-4" />
          <span>{loading ? 'Bezig met verzenden...' : 'Verstuur B2B Aanvraag'}</span>
        </button>
      </form>
    </div>
  );
};
