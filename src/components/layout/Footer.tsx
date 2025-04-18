import React from 'react';
import { Phone, Mail, MapPin, Instagram } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-6">Jaya Cakra Pertiwi</h3>
            <p className="text-gray-400 mb-6">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com/jayacakrapertiwi_" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-accent transition">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">{t('footer.quickLinks')}</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#home" className="hover:text-accent transition">{t('nav.home')}</a></li>
              <li><a href="#about" className="hover:text-accent transition">{t('nav.about')}</a></li>
              <li><a href="#services" className="hover:text-accent transition">{t('nav.services')}</a></li>
              <li><a href="#portfolio" className="hover:text-accent transition">{t('nav.portfolio')}</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">{t('services.title')}</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#services" className="hover:text-accent transition">Exhibition Contracting</a></li>
              <li><a href="#services" className="hover:text-accent transition">Event Contracting</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">{t('contact.title')}</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <Phone size={16} className="mr-3 mt-1" />
                <span>+62 ...</span>
              </li>
              <li className="flex items-start">
                <Mail size={16} className="mr-3 mt-1" />
                <span>jayacakrapertiwi@yahoo.com</span>
              </li>
              <li className="flex items-start">
                <MapPin size={16} className="mr-3 mt-1" />
                <span>Alam Sutera, Tangerang</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          {t('footer.copyright')}
        </div>
      </div>
    </footer>
  );
};

export default Footer;