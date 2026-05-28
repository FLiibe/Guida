import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, ChevronDown, CheckCircle, GraduationCap, ArrowDown, UserCheck, Timer, VideoOff, Layers } from 'lucide-react';
import { modulesData } from '../data';
import { Module } from '../types';

interface ModulesExplorerProps {
  onOpenCheckout: () => void;
}

export default function ModulesExplorer({ onOpenCheckout }: ModulesExplorerProps) {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleModule = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const perfectionCriteria = [
    {
      icon: <Layers className="w-5 h-5 text-indigo-600" />,
      text: "Vuoi iniziare a guadagnare online ma non sai minimamente da dove partire"
    },
    {
      icon: <Timer className="w-5 h-5 text-amber-600" />,
      text: "Hai pochissimo tempo libero a disposizione, ma desideri ardentemente creare qualcosa di tuo"
    },
    {
      icon: <VideoOff className="w-5 h-5 text-rose-600" />,
      text: "Non vuoi esporti pubblicamente: desideri usare pseudonimi, vendere prodotti invisibili e non fare video con la tua faccia"
    },
    {
      icon: <GraduationCap className="w-5 h-5 text-emerald-600" />,
      text: "Hai provato tantissimi corsi super teorici da migliaia di euro, senza mai accumulare riscontri pratici immediati"
    }
  ];

  return (
    <section id="programma-moduli" className="py-10 sm:py-14 bg-stone-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Step Banner Header */}
        <div className="bg-stone-900 border border-stone-800 text-stone-100 rounded-2xl py-6 px-8 text-center mb-12 shadow-xl">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase tracking-wider">
            Ecco Cosa Imparerai, Passo dopo Passo
          </h2>
          <p className="font-sans text-stone-400 text-xs sm:text-sm uppercase tracking-widest mt-1.5 font-medium">
            I 9 Moduli Pratici Della Guida Completa "Da Zero"
          </p>
        </div>

        {/* Modular Accordion List */}
        <div id="accordion-modules-list" className="space-y-4 mb-20 text-left">
          {modulesData.map((mod: Module) => {
            const isExpanded = expandedId === mod.id;
            return (
              <div 
                key={mod.id}
                className={`border rounded-2xl transition-all duration-300 ${
                  isExpanded 
                    ? 'bg-white border-[--color-brand-500] shadow-md ring-2 ring-[--color-brand-400]/10' 
                    : 'bg-stone-50/50 border-stone-200/80 hover:bg-white hover:border-stone-300'
                }`}
              >
                {/* Header Toggle */}
                <button
                  onClick={() => toggleModule(mod.id)}
                  className="w-full flex items-center justify-between p-5 focus:outline-none cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    {/* Badge */}
                    <span className={`px-2.5 py-1 text-[10px] font-mono font-bold uppercase rounded-md tracking-wider ${
                      isExpanded ? 'bg-stone-900 text-stone-100' : 'bg-stone-200 text-stone-700'
                    }`}>
                      MODULO {mod.id}
                    </span>
                    <div>
                      <h3 className="font-serif text-base sm:text-lg font-bold text-stone-900 leading-tight">
                        {mod.title}
                      </h3>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <span className="hidden sm:inline-block font-mono text-[10px] text-stone-400 font-bold bg-stone-100 border border-stone-200 px-2 py-0.5 rounded uppercase leading-none">
                      DA PAG. {mod.page}
                    </span>
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-stone-500"
                    >
                      <ChevronDown className="w-5 h-5" />
                    </motion.div>
                  </div>
                </button>

                {/* Collapsible Content */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-5 pb-5 pt-1 border-t border-stone-100">
                        <p className="font-sans text-stone-600 text-sm sm:text-[14px] leading-relaxed mb-4">
                          {mod.description}
                        </p>
                        
                        {/* Highlights checklist */}
                        <div className="bg-stone-100/60 border border-stone-200/50 rounded-xl p-3 sm:p-4 space-y-2.5">
                          <p className="font-sans text-[11px] font-bold text-stone-400 uppercase tracking-widest leading-none mb-2">PUNTI CHIAVE REALI TRATTATI:</p>
                          {mod.highlights.map((hlt, idx) => (
                            <div key={idx} className="flex gap-2.5 items-start">
                              <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                              <span className="font-sans text-[13px] text-stone-700 leading-tight">{hlt}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* QUESTA SFIDA È PERFETTA SE Section */}
        <div id="perfection-case-study" className="bg-stone-900 border border-stone-800 text-stone-100 rounded-3xl p-8 sm:p-12 shadow-xl relative text-left">
          
          {/* Sparkles decorations */}
          <div className="absolute top-4 right-4 text-amber-500 opacity-60 animate-spin" style={{ animationDuration: '6s' }}>
            ✦
          </div>

          <div className="space-y-8">
            <h3 className="font-serif text-2xl sm:text-3xl font-extrabold tracking-tight uppercase leading-tight">
              QUESTO PERCORSO È PERFETTO SE:
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              {perfectionCriteria.map((item, index) => (
                <div key={index} className="flex gap-4 p-4 rounded-xl bg-stone-950 border border-stone-800/80 shadow">
                  <div className="w-10 h-10 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <p className="font-sans text-[13px] leading-relaxed text-stone-300 font-medium">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Micro button inside the target section */}
            <div className="pt-4 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-end gap-4">
              <button
                onClick={() => onOpenCheckout()}
                className="w-full sm:w-auto bg-white hover:bg-stone-100 text-stone-950 font-sans text-sm font-bold py-3.5 px-8 rounded-xl shadow-md transition-all flex items-center justify-center gap-1 cursor-pointer uppercase tracking-wider"
              >
                VOGLIO PARTECIPARE ALLA SFIDA →
              </button>
            </div>

          </div>
        </div>

        {/* Alice Portrait Visual Card */}
        <div className="flex justify-center mt-12" id="alice-portrait-card">
          <div className="relative w-full max-w-[340px] aspect-[4/5] bg-stone-100 border border-stone-200 rounded-3xl p-3 shadow-2xl">
            
            {/* Real portrait photo of Alice */}
            <div className="w-full h-full rounded-2xl overflow-hidden relative group">
              <img
                src="https://i.ibb.co/FLVjDmp9/Chat-GPT-Image-28-mag-2026-17-41-07.png"
                alt="Alice Bianchi Portrait"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              
              {/* Subtle vignette/gradient over image to ensure bottom text readibility */}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent z-10" />

              {/* Bottom tag inside picture */}
              <div className="absolute bottom-4 left-4 right-4 text-center z-20 bg-stone-900/90 border border-stone-800/85 backdrop-blur-xs rounded-2xl py-3 px-4 shadow-md">
                <h4 className="font-serif font-bold text-stone-100 text-base leading-none">
                  Alice Bianchi
                </h4>
                <p className="font-sans text-stone-400 text-[10px] uppercase font-bold tracking-widest mt-1">
                  Digital Product Creator
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
