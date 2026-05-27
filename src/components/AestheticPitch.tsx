import React from 'react';
import { Sparkle } from 'lucide-react';

export default function AestheticPitch() {
  return (
    <section id="storia-erika" className="py-10 sm:py-14 bg-stone-100 border-t border-b border-stone-200/60 overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="space-y-6 text-left" id="bio-erika-text">
          
          {/* Elegant tiny line */}
          <div className="flex items-center gap-2">
            <span className="w-10 h-[1.5px] bg-[--color-brand-500]" />
            <span className="font-sans text-[11px] font-bold text-[--color-brand-600] uppercase tracking-widest flex items-center gap-1">
              La Mia Rinascita <Sparkle className="w-3 h-3 text-stone-400" />
            </span>
          </div>

          {/* Display Title */}
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-stone-900 leading-[1.15]">
            Da 19K debiti fino <br className="hidden sm:inline" />
            a vivere di <span className="text-[--color-brand-600] font-medium italic underline decoration-from-font underline-offset-4">prodotti digitali</span>.
          </h2>

          {/* Story Paragraphs */}
          <div className="font-sans text-stone-700 text-[15px] sm:text-[16px] space-y-5 leading-relaxed font-normal">
            
            <p>
              Ciao, sono <strong>Alice</strong> e dopo anni di sacrifici, sono finita imprigionata nel classico lavoro <strong>9-17</strong>, proprio come te. I debiti salivano e lo stipendio fisso mensile non bastava più nemmeno a coprire le spese minime quotidiane.
            </p>
            
            <p>
              È stato allora che ho scoperto la magia dei <strong>prodotti digitali</strong>. Armata solo della mia voglia di riscatto, Canva si è rivelato la chiave di volta. Mi ha consentito di uscire da quel baratro spaventoso di <strong>19.000€ di debito</strong> accumulati, traghettandomi verso la mia totale libertà finanziaria e decisionale.
            </p>
            
            <p>
              Non ho mai avuto come unico scopo accumulare denaro fine a se stesso. Cercavo disperatamente <strong>libertà d'azione, serenità interna</strong> e la possibilità concreta di garantire sostegno economico e tranquillità mentale alla mia famiglia.
            </p>

            <blockquote className="border-l-4 border-[--color-brand-500] pl-4 italic text-stone-600 font-serif text-base sm:text-lg my-6">
              &ldquo;Se ce l’ho fatta io partendo da un lavoro 9-17 frustrante con 19k di sofferenza, chiunque armato di costanza e del giusto percorso pratico può sbloccare la propria prima vendita.&rdquo;
            </blockquote>

            <p>
              Grazie alle guide e ai prodotti digitali, sono oggi fiera di aver riscritto la mia esistenza e di guidare, ogni giorno, centinaia di persone cariche di sogni a tracciare la propria rotta tramite questi identici, identici passaggi operativi.
            </p>

          </div>



        </div>
      </div>
    </section>
  );
}
