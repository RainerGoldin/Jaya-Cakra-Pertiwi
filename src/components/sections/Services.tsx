import React from 'react';
import { motion } from 'framer-motion';
import { Building, Calendar } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { ServiceItem } from '../../types/types';

const Services: React.FC = () => {
  const { t } = useLanguage();

  const services: ServiceItem[] = [
    {
      icon: <Building size={24} />,
      title: "Exhibition Contracting",
      description: "Custom exhibition booth design and construction with over 17 years of experience."
    },
    {
      icon: <Calendar size={24} />,
      title: "Event Contracting",
      description: "Full-service event planning and execution for corporate and private events."
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-accent uppercase font-semibold tracking-wider">{t('services.subtitle')}</span>
          <h2 className="section-title-center mt-2">{t('services.title')}</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            {t('services.description')}
          </p>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="service-card"
              >
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center">
                  {typeof t(`services.${service.title}`) === 'object' 
                    ? (t(`services.${service.title}`) as any).title
                    : service.title
                  }
                </h3>
                <p className="text-gray-600 text-center">
                  {typeof t(`services.${service.title}`) === 'object' 
                    ? (t(`services.${service.title}`) as any).description
                    : service.description
                  }
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;