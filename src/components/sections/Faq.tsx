import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { FaqItem } from '../../types/types';

const Faq: React.FC = () => {
  const { t } = useLanguage();
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const faqItems: FaqItem[] = [
    {
      question: t('faq.question1'),
      answer: t('faq.answer1')
    },
    {
      question: t('faq.question2'),
      answer: t('faq.answer2')
    },
    {
      question: t('faq.question3'),
      answer: t('faq.answer3')
    },
    {
      question: t('faq.question4'),
      answer: t('faq.answer4')
    },
    {
      question: t('faq.question5'),
      answer: t('faq.answer5')
    }
  ];

  return (
    <section id="faq" className="py-20 bg-neutral">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-accent uppercase font-semibold tracking-wider">{t('faq.subtitle')}</span>
          <h2 className="section-title-center mt-2">{t('faq.title')}</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            {t('faq.description')}
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-4 bg-white rounded-lg overflow-hidden shadow-sm"
            >
              <button
                className="flex justify-between items-center w-full text-left font-semibold p-5"
                onClick={() => toggleAccordion(index)}
              >
                {item.question}
                <div className={`transition-transform duration-300 ${activeAccordion === index ? 'rotate-180' : ''}`}>
                  {activeAccordion === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  activeAccordion === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-5 pt-0 text-gray-600 border-t">
                  {item.answer}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a className="btn-primary" href='#contact'>
            {t('buttons.askMoreQuestions')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Faq;