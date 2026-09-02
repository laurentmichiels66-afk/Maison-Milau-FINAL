import React, { useRef } from 'react';
import { Sparkles, Calendar, Coffee, Users, ShieldCheck, ArrowRight } from 'lucide-react';
import { EventCalculator } from '../components/EventCalculator';
import { EventRequestForm } from '../components/EventRequestForm';

interface EventsViewProps {
  onNavigate: (path: string) => void;
}

export const EventsView: React.FC<EventsViewProps> = ({ onNavigate }) => {
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-[#faf8f5] text-stone-900 min-h-screen pb-20" id="events-page-container">
      {/* Hero Banner */}
      <section className="bg-white border-b border-stone-200 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <nav className="flex items-center gap-2 text-xs text-stone-500 mb-3">
            <button onClick={() => onNavigate('/')} className="hover:text-amber-900">Home</button>
            <span>/</span>
            <span className="text-stone-900 font-semibold">Events & Verhuur</span>
          </nav>

          <div className="max-w-3xl">
            <span className="text-xs font-bold text-amber-800 uppercase tracking-widest block">
              Koffiecatering & Apparatuur
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-stone-950 mt-1 leading-tight">
              Bestel koffiebonen met/zonder machine voor je event
            </h1>
            <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed font-sans">
              Geef uw gasten een onvergetelijke koffie-ervaring. Van compacte espressomachines voor een intiem tuinfeest of trouwfeest tot complete mobiele barista-bars voor grote beurzen en congressen.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <button
                onClick={scrollToForm}
                className="px-6 py-3 bg-amber-900 text-white rounded-lg text-xs font-bold hover:bg-amber-800 transition-colors shadow-xs"
              >
                Neem contact op voor all event solutions
              </button>
              <button
                onClick={() => onNavigate('/webshop')}
                className="px-6 py-3 bg-stone-100 text-stone-800 rounded-lg text-xs font-semibold hover:bg-stone-200 transition-colors"
              >
                Koffiebonen Direct Kopen
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Event Formules Grid */}
      <section className="py-14 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-xl border border-stone-200 shadow-xs">
            <div className="p-2.5 bg-amber-100 text-amber-900 rounded-lg w-fit mb-3">
              <Coffee className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-bold text-stone-900 mb-1">Enkel Verse Bonen</h3>
            <p className="text-xs text-stone-600 leading-relaxed mb-4">
              U heeft al een machine op locatie? Bestel onze Milau Selection of Barrel Aged bonen, speciaal afgestemd op feestvolumes met verse branddatum.
            </p>
            <span className="text-xs font-bold text-amber-900">Vanaf €21,50 / kg</span>
          </div>

          <div className="p-6 bg-white rounded-xl border border-stone-200 shadow-xs">
            <div className="p-2.5 bg-amber-100 text-amber-900 rounded-lg w-fit mb-3">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-bold text-stone-900 mb-1">Dry-Hire Machine + Bonen</h3>
            <p className="text-xs text-stone-600 leading-relaxed mb-4">
              Huur een gebruiksvriendelijke volautomatische espressomachine of compacte 1-groeps pistonmachine inclusief koffiebonen, suiker en melkkannetjes.
            </p>
            <span className="text-xs font-bold text-amber-900">Machine vanaf €75 / weekend</span>
          </div>

          <div className="p-6 bg-white rounded-xl border border-stone-200 shadow-xs">
            <div className="p-2.5 bg-amber-100 text-amber-900 rounded-lg w-fit mb-3">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-bold text-stone-900 mb-1">Full-Service Barista Bar</h3>
            <p className="text-xs text-stone-600 leading-relaxed mb-4">
              Complete ontzorging met professionele barista, latte art, specialty bonen, bio melk, havermelk en stijlvol barmeubel voor uw receptie of bedrijfsfeest.
            </p>
            <span className="text-xs font-bold text-amber-900">Op maat berekend</span>
          </div>
        </div>
      </section>

      {/* Interactive Event Calculator */}
      <section className="py-6 max-w-7xl mx-auto px-4 sm:px-6">
        <EventCalculator onNavigateToForm={scrollToForm} />
      </section>

      {/* Contact / Offerte Form */}
      <section ref={formRef} className="py-12 max-w-7xl mx-auto px-4 sm:px-6">
        <EventRequestForm />
      </section>
    </div>
  );
};
