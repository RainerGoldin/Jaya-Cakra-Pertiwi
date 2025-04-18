import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Award, Clock, CheckCircle, Users } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { StatItem } from '../../types/types';

const About: React.FC = () => {
  const { t } = useLanguage();

  const stats: StatItem[] = [
    {
      icon: <Award size={32} className="text-accent" />,
      value: "100+",
      label: t('stats.projectsCompleted')
    },
    {
      icon: <Clock size={32} className="text-accent" />,
      value: "17+",
      label: t('stats.yearsExperience')
    },
    {
      icon: <CheckCircle size={32} className="text-accent" />,
      value: "100%",
      label: t('stats.clientSatisfaction')
    },
    {
      icon: <Users size={32} className="text-accent" />,
      value: "100%",
      label: t('stats.premiumQuality')
    }
  ];

  return (
    <section id="about" className="py-20 bg-neutral">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* About Content */}
          <div>
            <span className="text-sm text-accent uppercase font-semibold tracking-wider">
              {t('about.subtitle')}
            </span>
            <h2 className="section-title mt-2 mb-6">{t('about.title')}</h2>
            
            <p className="mb-6 text-gray-600">
              {t('about.paragraph1')}
            </p>
            <p className="mb-6 text-gray-600">
              {t('about.paragraph2')}
            </p>
            
            <a href="#services" className="inline-flex items-center text-accent font-medium hover:underline">
              {t('about.exploreServices')} <ArrowRight size={16} className="ml-2" />
            </a>
          </div>
          
          {/* Image Section */}
          <div className="flex justify-center items-center">
            <img 
              src="/about_us.webp" 
              alt="Team Members" 
              className="w-3/4 h-auto rounded-lg shadow-card"
            />
          </div>
        </div>

        {/* Stats Grid in full width at the bottom */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const [count, setCount] = useState(0);
            const targetValue = parseInt(stat.value);

            useEffect(() => {
              let startValue = 0;
              const duration = 2000;
              const steps = 60;
              const stepTime = duration / steps;
              const increment = targetValue / steps;

              const counter = setInterval(() => {
                startValue += increment;
                if (startValue > targetValue) {
                  setCount(targetValue);
                  clearInterval(counter);
                } else {
                  setCount(Math.floor(startValue));
                }
              }, stepTime);

              return () => clearInterval(counter);
            }, [targetValue]);

            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-white rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow"
              >
                <div className="flex justify-center mb-4">
                  {React.cloneElement(stat.icon, { size: 40 })}
                </div>
                <div className="text-3xl font-bold text-primary mb-2">
                  {count}{stat.value.includes('+') ? '+' : ''}%
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;