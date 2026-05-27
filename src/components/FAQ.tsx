import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { faqData } from '../data';
import { FAQItem } from '../types';

export default function FAQ() {
  const [openFaqId, setOpenFaqId] = useState<number | null>(null);

  const toggleFaq = (id: number) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <section id="domande-faq" className="py-10 sm:py-14 bg-stone-100 border-t border-stone-200/50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title FAQ */}
        <div className="text-center space-y-3 mb-8">
          <div className="inline-flex items-center gap-1 px-3 py-1 bg-stone-200 border border-stone-300 rounded-full text-stone-700 text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3 h-3 text-stone-500" />
            <span>Domande & Risposte</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight leading-none">
            Rispondo Alle Tue Domande
          </h2>
          <p className="font-sans text-stone-500 text-sm">
            Hai dubbi sul funzionamento del business dei prodotti digitali? Ecco tutto ciò che devi sapere.
          </p>
        </div>

        {/* Accordion list details */}
        <div className="space-y-4 text-left" id="faq-accordions">
          {faqData.map((item: FAQItem) => {
            const isOpen = openFaqId === item.id;
            return (
              <div 
                key={item.id}
                className={`border rounded-xl transition-all ${
                  isOpen 
                    ? 'bg-white border-stone-300/80 shadow-md ring-2 ring-stone-900/5' 
                    : 'bg-stone-50/50 border-stone-200/60 hover:bg-white hover:border-stone-300'
                }`}
              >
                {/* Accordion Trigger Summary togglable */}
                <button
                  onClick={() => toggleFaq(item.id)}
                  className="w-full flex items-center justify-between p-5 focus:outline-none cursor-pointer"
                >
                  <span className="font-serif text-sm sm:text-base font-bold text-stone-900 leading-tight">
                    {item.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-stone-500 ml-4 flex-shrink-0"
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </button>

                {/* Collapsible details content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-5 pb-5 pt-1 border-t border-stone-100">
                        <p className="font-sans text-stone-600 text-xs sm:text-[13px] leading-relaxed font-normal">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
