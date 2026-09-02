import React, { useState } from 'react';
import { Calculator, ArrowRight, CheckCircle2 } from 'lucide-react';

interface B2BCalculatorProps {
  onSelectVolume?: (kg: number) => void;
  onNavigateToQuote?: () => void;
}

export const B2BCalculator: React.FC<B2BCalculatorProps> = ({ onSelectVolume, onNavigateToQuote }) => {
  const [volumeKg, setVolumeKg] = useState<number>(20);
  const [employeesCount, setEmployeesCount] = useState<number>(15);
  const [mode, setMode] = useState<'volume' | 'office'>('volume');

  // Base reference specialty coffee retail price per kg (Milau Selection Daily: €21.50)
  const baseRetailPricePerKg = 21.50;

  // Calculators logic
  // Cups per kg: approx 125 espresso/lungo cups per kg (8g dose)
  const cupsPerKg = 125;

  // Derive discount percentage from volume
  let discountPercent = 10;
  if (volumeKg >= 50) discountPercent = 20;
  else if (volumeKg >= 30) discountPercent = 18;
  else if (volumeKg >= 15) discountPercent = 15;
  else if (volumeKg >= 10) discountPercent = 12;
  else discountPercent = 10;

  const b2bPricePerKg = +(baseRetailPricePerKg * (1 - discountPercent / 100)).toFixed(2);
  const totalCups = volumeKg * cupsPerKg;
  const costPerCup = +(b2bPricePerKg / cupsPerKg).toFixed(2);
  const monthlyTotal = +(volumeKg * b2bPricePerKg).toFixed(2);
  const monthlySavings = +(volumeKg * (baseRetailPricePerKg - b2bPricePerKg)).toFixed(2);

  // Office mode recommendation
  // Average 2.2 cups per employee per workday (21 workdays = ~46 cups/month/employee = ~0.37 kg/employee)
  const recommendedOfficeKg = Math.max(2, Math.round(employeesCount * 0.37));
  const recommendedFrequency = recommendedOfficeKg > 25 ? "Elke 2 weken" : "Maandelijks";

  const handleApplyVolume = () => {
    if (onSelectVolume) onSelectVolume(volumeKg);
    if (onNavigateToQuote) onNavigateToQuote();
  };

  return (
    <div className="bg-[#fcfaf7] border border-stone-200/90 rounded-2xl p-6 sm:p-8 shadow-xs" id="b2b-calculator-widget">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-stone-200">
        <div>
          <span className="text-xs font-bold text-amber-800 tracking-wider uppercase block">Interactieve B2B Calculator</span>
          <h3 className="font-serif text-2xl font-bold text-stone-900">Bereken uw B2B Prijs</h3>
          <p className="text-xs text-stone-500 mt-1">
            Indicatieve berekening voor horeca, kantoren en bedrijven inclusief staffelkorting.
          </p>
        </div>

        {/* Toggle between Volume and Office mode */}
        <div className="flex items-center bg-stone-200/80 p-1 rounded-lg text-xs font-semibold">
          <button
            onClick={() => setMode('volume')}
            className={`px-3 py-1.5 rounded-md transition-colors ${mode === 'volume' ? 'bg-white text-stone-900 shadow-xs' : 'text-stone-600 hover:text-stone-900'}`}
          >
            Direct Volume (kg)
          </button>
          <button
            onClick={() => setMode('office')}
            className={`px-3 py-1.5 rounded-md transition-colors ${mode === 'office' ? 'bg-white text-stone-900 shadow-xs' : 'text-stone-600 hover:text-stone-900'}`}
          >
            Kantoorcalculator
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-6">
        {/* Left Inputs */}
        <div className="space-y-6">
          {mode === 'volume' ? (
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold uppercase text-stone-700">Maandelijks volume</label>
                <span className="text-xl font-bold text-amber-900">{volumeKg} kg / maand</span>
              </div>
              <input
                type="range"
                min={2}
                max={100}
                step={1}
                value={volumeKg}
                onChange={(e) => setVolumeKg(Number(e.target.value))}
                className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-amber-900"
              />
              <div className="flex justify-between text-[11px] text-stone-500 mt-1 font-mono">
                <span>2 kg</span>
                <span>15 kg (-15%)</span>
                <span>30 kg (-18%)</span>
                <span>50+ kg (-20%)</span>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold uppercase text-stone-700">Aantal medewerkers / koffiedrinkers</label>
                  <span className="text-xl font-bold text-amber-900">{employeesCount} personen</span>
                </div>
                <input
                  type="range"
                  min={2}
                  max={150}
                  step={1}
                  value={employeesCount}
                  onChange={(e) => {
                    const count = Number(e.target.value);
                    setEmployeesCount(count);
                    setVolumeKg(Math.max(2, Math.round(count * 0.37)));
                  }}
                  className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-amber-900"
                />
              </div>

              <div className="bg-amber-50/80 border border-amber-200/80 p-3.5 rounded-lg text-xs space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-stone-600">Geschat verbruik:</span>
                  <span className="font-bold text-stone-900">{recommendedOfficeKg} kg specialty bonen / maand</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-600">Aanbevolen leveringsfrequentie:</span>
                  <span className="font-bold text-amber-900">{recommendedFrequency}</span>
                </div>
              </div>
            </div>
          )}

          <div className="bg-white p-4 rounded-xl border border-stone-200 space-y-2 text-xs">
            <span className="font-semibold text-stone-900 block">Uw B2B Voordelen bij dit volume:</span>
            <ul className="space-y-1 text-stone-600">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Toegewezen staffelkorting: <strong>{discountPercent}% korting</strong></span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Gratis levering in regio Dendermonde, Wetteren en Aalst</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Verzamelfactuur op 30 dagen met 6% BTW op koffiebonen</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Calculated Results */}
        <div className="bg-white border border-stone-200 rounded-xl p-6 flex flex-col justify-between shadow-xs">
          <div className="space-y-4">
            <span className="text-xs font-bold text-stone-400 uppercase tracking-wider block">Indicatief Maandoverzicht</span>
            
            <div className="flex justify-between items-baseline border-b border-stone-100 pb-3">
              <span className="text-sm text-stone-600">Uw B2B prijs per kg:</span>
              <span className="font-mono text-lg font-bold text-stone-900">€{b2bPricePerKg.toFixed(2)}</span>
            </div>

            <div className="flex justify-between items-baseline border-b border-stone-100 pb-3">
              <span className="text-sm text-stone-600">Geschat aantal kopjes per maand:</span>
              <span className="font-mono text-sm font-semibold text-stone-800">~{totalCups} kopjes</span>
            </div>

            <div className="flex justify-between items-baseline border-b border-stone-100 pb-3">
              <span className="text-sm text-stone-600">Kostprijs per kopje:</span>
              <span className="font-mono text-sm font-bold text-emerald-700">€{costPerCup.toFixed(2)} per kop</span>
            </div>

            <div className="flex justify-between items-baseline border-b border-stone-100 pb-3">
              <span className="text-base font-semibold text-stone-900">Totaal maandelijks (excl. btw):</span>
              <span className="font-serif text-2xl font-bold text-amber-900">€{monthlyTotal.toFixed(2)}</span>
            </div>

            <div className="flex justify-between items-baseline bg-emerald-50 px-3 py-2 rounded-lg border border-emerald-200">
              <span className="text-xs font-semibold text-emerald-900">Uw maandelijkse besparing:</span>
              <span className="font-mono text-sm font-bold text-emerald-800">€{monthlySavings.toFixed(2)} / mnd</span>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-stone-100">
            <button
              id="btn-calculator-quote-cta"
              onClick={handleApplyVolume}
              className="w-full py-3 px-4 bg-amber-900 text-white rounded-lg font-semibold hover:bg-amber-800 transition-colors flex items-center justify-center gap-2 shadow-xs text-sm"
            >
              <span>Vraag Offerte aan met dit volume ({volumeKg} kg)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
