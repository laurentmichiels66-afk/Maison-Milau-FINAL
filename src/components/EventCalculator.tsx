import React, { useState } from 'react';
import { Sparkles, Coffee, Users, ShieldCheck, ArrowRight } from 'lucide-react';

interface EventCalculatorProps {
  onNavigateToForm?: () => void;
}

export const EventCalculator: React.FC<EventCalculatorProps> = ({ onNavigateToForm }) => {
  const [guestCount, setGuestCount] = useState<number>(80);
  const [eventDurationHours, setEventDurationHours] = useState<number>(5);
  const [needMachine, setNeedMachine] = useState<boolean>(true);
  const [needBarista, setNeedBarista] = useState<boolean>(false);

  // Consumption logic: average 1.8 cups of coffee per guest during an event
  const cupsCount = Math.round(guestCount * 1.8);
  const beansKgRequired = +(cupsCount / 120).toFixed(1); // ~120 cups per kg
  
  // Indicative pricing
  const beanCost = +(beansKgRequired * 22.00).toFixed(2);
  const machineRental = needMachine ? 75.00 : 0.00;
  const baristaService = needBarista ? eventDurationHours * 45.00 : 0.00;
  const estimatedTotal = +(beanCost + machineRental + baristaService).toFixed(2);

  return (
    <div className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 shadow-xs" id="event-calculator-widget">
      <div className="border-b border-stone-200 pb-5 mb-6">
        <span className="text-xs font-bold uppercase tracking-wider text-amber-800 block">Event Planner Calculator</span>
        <h3 className="font-serif text-2xl font-bold text-stone-900">Bereken uw Evenement Benodigdheden</h3>
        <p className="text-xs text-stone-500 mt-1">
          Bereken exact de benodigde hoeveelheid specialty koffiebonen en apparatuur voor uw bruiloft, bedrijfsreceptie of tuinfeest.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Controls */}
        <div className="space-y-5">
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs font-bold uppercase text-stone-700">Aantal gasten / aanwezigen</label>
              <span className="text-lg font-bold text-amber-900 font-mono">{guestCount} personen</span>
            </div>
            <input
              type="range"
              min={15}
              max={500}
              step={5}
              value={guestCount}
              onChange={(e) => setGuestCount(Number(e.target.value))}
              className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-amber-900"
            />
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs font-bold uppercase text-stone-700">Duur van het evenement</label>
              <span className="text-lg font-bold text-amber-900 font-mono">{eventDurationHours} uur</span>
            </div>
            <input
              type="range"
              min={2}
              max={12}
              step={1}
              value={eventDurationHours}
              onChange={(e) => setEventDurationHours(Number(e.target.value))}
              className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-amber-900"
            />
          </div>

          <div className="space-y-3 pt-2">
            <label className="flex items-center gap-3 p-3 rounded-lg border border-stone-200 hover:bg-stone-50 cursor-pointer">
              <input
                type="checkbox"
                checked={needMachine}
                onChange={(e) => setNeedMachine(e.target.checked)}
                className="w-4 h-4 text-amber-900 rounded accent-amber-900"
              />
              <span className="text-xs font-medium text-stone-800">
                Inclusief machine-verhuur (volautomaat of compacte professionele machine)
              </span>
            </label>

            <label className="flex items-center gap-3 p-3 rounded-lg border border-stone-200 hover:bg-stone-50 cursor-pointer">
              <input
                type="checkbox"
                checked={needBarista}
                onChange={(e) => setNeedBarista(e.target.checked)}
                className="w-4 h-4 text-amber-900 rounded accent-amber-900"
              />
              <span className="text-xs font-medium text-stone-800">
                Inclusief professionele SCA-gecertificeerde barista ter plaatse
              </span>
            </label>
          </div>
        </div>

        {/* Calculated Results */}
        <div className="bg-[#fcfaf7] border border-stone-200 rounded-xl p-6 flex flex-col justify-between">
          <div className="space-y-3.5">
            <span className="text-xs font-bold text-stone-400 uppercase tracking-wider block">Gecumuleerde Behoefte</span>
            
            <div className="flex justify-between items-baseline border-b border-stone-200/60 pb-2.5">
              <span className="text-xs text-stone-600">Geschat aantal kopjes koffie:</span>
              <span className="font-mono text-base font-bold text-stone-900">~{cupsCount} kopjes</span>
            </div>

            <div className="flex justify-between items-baseline border-b border-stone-200/60 pb-2.5">
              <span className="text-xs text-stone-600">Aanbevolen bonenvolume:</span>
              <span className="font-mono text-base font-bold text-amber-900">{beansKgRequired} kg vers gebrand</span>
            </div>

            <div className="flex justify-between items-baseline border-b border-stone-200/60 pb-2.5">
              <span className="text-xs text-stone-600">Apparatuurformule:</span>
              <span className="text-xs font-semibold text-stone-800">
                {needMachine ? "Dry-hire machine inbegrepen" : "Eigen machine ter plaatse"}
              </span>
            </div>

            <div className="flex justify-between items-baseline border-b border-stone-200/60 pb-2.5">
              <span className="text-xs text-stone-600">Baristaservice:</span>
              <span className="text-xs font-semibold text-stone-800">
                {needBarista ? `Barista ter plaatse (${eventDurationHours}u)` : "Zelfbediening"}
              </span>
            </div>

            <div className="flex justify-between items-baseline pt-2">
              <span className="text-sm font-bold text-stone-900">Indicatieve Totaalprijs:</span>
              <span className="font-serif text-2xl font-bold text-amber-950">€{estimatedTotal.toFixed(2)}</span>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-stone-200/80">
            <button
              id="btn-event-calc-quote"
              onClick={onNavigateToForm}
              className="w-full py-3 px-4 bg-amber-900 text-white rounded-lg font-semibold hover:bg-amber-800 transition-colors flex items-center justify-center gap-2 shadow-xs text-xs"
            >
              <span>Vraag Event Voorstel aan voor {guestCount} personen</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
