import React from 'react';
import Hero from './components/Hero';
import Reviews from './components/Reviews';
import ModulesExplorer from './components/ModulesExplorer';
import AestheticPitch from './components/AestheticPitch';
import BonusesSection from './components/BonusesSection';
import FAQ from './components/FAQ';
import { ShieldCheck, Heart, Sparkles, AlertCircle } from 'lucide-react';
import { HOTMART_CHECKOUT_URL } from './data';

export default function App() {
  const handleOpenCheckout = () => {
    const search = window.location.search;
    if (search) {
      const separator = HOTMART_CHECKOUT_URL.includes('?') ? '&' : '?';
      if (separator === '?') {
        window.location.href = `${HOTMART_CHECKOUT_URL}${search}`;
      } else {
        window.location.href = `${HOTMART_CHECKOUT_URL}&${search.substring(1)}`;
      }
    } else {
      window.location.href = HOTMART_CHECKOUT_URL;
    }
  };

  return (
    <div id="landing-page-root" className="min-h-screen bg-[#FAF8F5] relative text-stone-900 overflow-x-hidden selection:bg-stone-900 selection:text-stone-100">
      
      {/* 2. Main Hero Presentation & Mockups Section */}
      <Hero onOpenCheckout={handleOpenCheckout} />

      {/* 3. Real WhatsApp/iMessage Chat Testimonials Screen */}
      <Reviews />

      {/* 4. Curriculum Modules Accordion step list (9 modules) and QUESTA GUIDA È PERFETTA SE container */}
      <ModulesExplorer onOpenCheckout={handleOpenCheckout} />

      {/* 5. Alice's Editorial Bio & Debt Reduction story */}
      <AestheticPitch />

      {/* 7. Interactive Twin Bonuses Preview Library */}
      <BonusesSection />

      {/* 8. Reassuring Frequently Asked Questions list */}
      <FAQ />

      {/* 9. Final Bottom Conversion CTA Banner prior to footer */}
      <section id="banner-conversione-finale" className="py-10 sm:py-14 bg-stone-900 text-stone-100 relative overflow-hidden text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[--color-brand-600]/10 rounded-full blur-3xl -z-10" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Sparkles className="w-8 h-8 text-amber-500 mx-auto animate-pulse" />
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight max-w-2xl mx-auto leading-tight">
            Pronto a lanciare il tuo primo prodotto digitale?
          </h2>
          <div className="w-full max-w-lg mx-auto overflow-hidden rounded-2xl border border-stone-800 shadow-xl bg-stone-950 p-2 my-4">
            <img 
              src="https://i.ibb.co/DDgxYwVK/Chat-GPT-Image-27-de-mai-de-2026-13-02-12.png" 
              alt="Da Zero al Tuo Primo Prodotto Digitale"
              className="w-full h-auto rounded-xl object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <p className="font-sans text-stone-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Unisciti ad Andrea, Laura, Federica e oltre 200 studenti motivati che hanno applicato passo dopo passo le strategie pratiche descritte nel bundle.
          </p>
          <div className="pt-4">
            <button
              onClick={() => handleOpenCheckout()}
              className="bg-white hover:bg-stone-100 text-stone-950 font-sans text-base font-bold py-4 px-10 rounded-xl shadow-xl transition-all hover:scale-102 cursor-pointer uppercase tracking-wider"
            >
              VOGLIO PARTECIPARE ALLA SFIDA →
            </button>
          </div>
          <div className="flex items-center justify-center gap-1.5 text-xs text-stone-500 pt-2 font-sans">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>Garanzia 100% rimborsabile entro 7 giorni via Hotmart</span>
          </div>
        </div>
      </section>

      {/* 10. Styled Legal and Disclaimer Footer */}
      <footer id="footer-legal" className="bg-stone-950 text-stone-400 py-12 border-t border-stone-900 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-center sm:text-left">


          <div className="space-y-4 font-sans leading-relaxed text-[11px] text-stone-500" id="legal-disclaimers">
            <p>
              <strong>Disclaimer Importante:</strong> I risultati presentati in questa pagina non sono tipici, garantiti né automatici. Ogni attività commerciale di prodotti digitali o informativi richiede impegno personale, studio metodico, costanza ed esecuzione. I guadagni dei nostri studenti ed Alice Bianchi riflettono il livello di motivazione e caparbietà investiti nello sviluppo dello store.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center pt-4 text-[11px] text-stone-600 font-sans border-t border-stone-900">
            <p>© {new Date().getFullYear()} Alice Bianchi Digital Products. Tutti i diritti riservati.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}
