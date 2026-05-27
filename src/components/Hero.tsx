import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, ShieldCheck, CheckCircle, GraduationCap, Laptop, Sparkle } from 'lucide-react';

interface HeroProps {
  onOpenCheckout: () => void;
}

export default function Hero({ onOpenCheckout }: HeroProps) {
  return (
    <section 
      id="hero-intro" 
      className="relative min-h-[90vh] sm:min-h-screen pt-16 pb-10 sm:pt-24 sm:pb-16 bg-gradient-to-b from-stone-50 via-stone-50/80 to-stone-100 flex items-center overflow-hidden"
    >
      {/* Decorative ambient background blur vectors */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-stone-300/30 rounded-full blur-3xl -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full text-center">
        <div className="space-y-8 flex flex-col items-center" id="hero-text-content">
          
          {/* Main Hook & Headings */}
          <div className="space-y-4">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-stone-900 leading-[1.2] text-center"
            >
              <span className="block font-sans text-[13px] sm:text-[15px] font-extrabold uppercase tracking-[0.3em] text-amber-600 mb-3">Challenge</span>
              Da Zero al Tuo Primo <br className="hidden sm:inline" />
              <span className="text-[--color-brand-600] italic underline decoration-from-font underline-offset-4">Prodotto Digitale</span>
            </motion.h1>
            
            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-sans text-base sm:text-lg lg:text-xl font-bold text-stone-700 uppercase tracking-widest text-center"
            >
              Dalla creazione alla prima vendita: i 9 moduli del successo
            </motion.h2>

            {/* Added image right below title/subtitle */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="w-full max-w-lg mx-auto overflow-hidden rounded-2xl border border-stone-200 shadow-md bg-white p-2 mt-4"
            >
              <img 
                src="https://i.ibb.co/DDgxYwVK/Chat-GPT-Image-27-de-mai-de-2026-13-02-12.png" 
                alt="Da Zero al Tuo Primo Prodotto Digitale"
                className="w-full h-auto rounded-xl object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>

          {/* High-Converting Persuasive Copy */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-sans text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl mx-auto text-center"
          >
            Crea il tuo primo prodotto digitale in <strong>meno di un weekend</strong> con Canva e ChatGPT. Ti guido passo dopo passo, in 9 moduli pratici, fino alla tua prima vendita online usando le stesse identiche strategie che ho utilizzato io (anche se parti completamente da zero senza followers!).
          </motion.p>

          {/* Bullet Highlights */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 pt-2 text-stone-700 text-sm font-sans max-w-md mx-auto text-left"
          >
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span>9 Moduli Pratici Semplici</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span>25+ Prompt ChatGPT Inclusi</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span>Bonus #1: 150 Idee Pronte</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span>Bonus #2: Kit Canva & ChatGPT</span>
            </div>
          </motion.div>

          {/* Dynamic Button Area */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4 w-full"
            id="hero-call-to-action"
          >
            <button
              onClick={() => onOpenCheckout()}
              className="relative overflow-hidden bg-stone-900 hover:bg-stone-800 text-stone-50 font-sans text-base font-bold py-4 px-8 rounded-xl shadow-lg transition-all group flex items-center justify-center gap-2.5 cursor-pointer uppercase tracking-wider"
            >
              <span>VOGLIO PARTECIPARE ALLA SFIDA →</span>
            </button>
          </motion.div>

          {/* Subtext Proof Box */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="p-6 rounded-2xl bg-white border border-stone-200 shadow-md text-base sm:text-lg text-stone-700 font-sans leading-relaxed max-w-2xl mx-auto text-center"
          >
            Ti mostrerò tutto ciò di cui hai bisogno per lanciare un prodotto digitale. 
            Il mio studente medio riesce a incassare i primi <strong>100€ nei primi 7 giorni</strong>, 
            ma tanti sono riusciti a incassare fino a <strong>500€ già dalla prima settimana</strong>.
          </motion.div>

        </div>
      </div>
    </section>
  );
}
