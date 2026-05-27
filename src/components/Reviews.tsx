import React from 'react';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';
import { testimonialsData } from '../data';

export default function Reviews() {
  return (
    <section 
      id="studenti-risultati" 
      className="py-10 sm:py-14 bg-white border-t border-b border-stone-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 space-y-4">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 leading-tight">
            Alcuni Risultati dei Miei Studenti
          </h2>
        </div>

        {/* 5 Chat Bubble Cards Grid */}
        <div className="flex flex-wrap gap-8 justify-center">
          {testimonialsData.map((test, index) => (
            <motion.div
              key={test.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="w-full md:w-[calc(50%-16px)] lg:w-[calc(33.33%-22px)]"
            >
              {/* WhatsApp/Instagram DM Style Bubble */}
              <div className="bg-[#F3F4F6] text-stone-900 rounded-[32px] p-8 sm:p-10 shadow-sm hover:shadow-md transition-shadow duration-300 relative text-left">
                <p className="font-sans text-[15px] sm:text-[16px] text-stone-900 leading-relaxed font-normal whitespace-pre-line select-text">
                  {test.message}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
