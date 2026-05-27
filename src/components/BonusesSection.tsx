import React from 'react';
import { Sparkles } from 'lucide-react';

export default function BonusesSection() {
  return (
    <section id="box-bonus" className="py-10 sm:py-14 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[--color-brand-600]/10 border border-[--color-brand-600]/20 rounded-full text-[--color-brand-700] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[--color-brand-600] animate-bounce" />
            <span>Bonus Esclusivi Inclusi Nel Tuo Ordine</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight leading-tight">
            I Regali di Alice per Accelerare I Tuoi Risultati
          </h2>
          <p className="font-sans text-stone-600 text-base sm:text-lg">
            Ricevi immediatamente all'acquisto queste risorse strategiche del valore complessivo di 98€, completamente gratuite per te oggi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto text-left">
          
          {/* Bonus #1 Info Block */}
          <div className="bg-white border border-stone-200/80 p-8 sm:p-10 rounded-3xl shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              <div>
                <span className="font-mono text-[10px] font-bold text-stone-400 uppercase tracking-widest block leading-none mb-2">BONUS #1</span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 leading-tight">
                  150 Idee di Prodotti Digitali Facili da Vendere
                </h3>
                <p className="font-sans text-xs sm:text-sm text-orange-700 font-semibold uppercase tracking-widest mt-2 font-bold">Valore Commerciale: 49.00€ — Gratis</p>
              </div>
              <p className="font-sans text-stone-600 text-base leading-relaxed font-normal">
                Il manuale definitivo per non rimanere mai più senza idee. Trovi 150 spunti divisi in 10 nicchie redditizie, valutati per difficoltà di creazione, piattaforma consigliata e motivazione di mercato.
              </p>
            </div>
            
            <div className="space-y-2 border-t border-stone-100 pt-6 text-sm font-medium text-stone-500 font-sans">
              <div className="flex items-center gap-2">
                <span className="text-emerald-600 font-bold">✓</span>
                <span>10 Nicchie redditizie analizzate in dettaglio</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-600 font-bold">✓</span>
                <span>Nessun budget iniziale richiesto (0€)</span>
              </div>
            </div>
          </div>

          {/* Bonus #2 Info Block */}
          <div className="bg-white border border-stone-200/80 p-8 sm:p-10 rounded-3xl shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              <div>
                <span className="font-mono text-[10px] font-bold text-stone-400 uppercase tracking-widest block leading-none mb-2">BONUS #2</span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 leading-tight">
                  Kit ChatGPT & Template di Design Canva
                </h3>
                <p className="font-sans text-xs sm:text-sm text-orange-700 font-semibold uppercase tracking-widest mt-2 font-bold">Valore Commerciale: 49.00€ — Gratis</p>
              </div>
              <p className="font-sans text-stone-600 text-base leading-relaxed font-normal">
                Tutti i prompt intelligenti pronti per far scrivere a ChatGPT interi ebook, capitoli, titoli accattivanti e descrizioni ad alta conversione per il tuo store. Include i 5 stili estetici Canva pronti da personalizzare.
              </p>
            </div>
            
            <div className="space-y-2 border-t border-stone-100 pt-6 text-sm font-medium text-stone-500 font-sans">
              <div className="flex items-center gap-2">
                <span className="text-emerald-600 font-bold">✓</span>
                <span>Prompt pronti per Ebook, Planner e Copywriting</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-600 font-bold">✓</span>
                <span>5 Palette e stili estetici pre-settati su Canva</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
