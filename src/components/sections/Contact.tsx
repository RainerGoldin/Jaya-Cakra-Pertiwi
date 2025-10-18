import React from 'react';
import { Phone, Mail, ExternalLink } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const Contact: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <span className="text-sm text-accent uppercase font-semibold tracking-wider">{t('contact.subtitle')}</span>
            <h2 className="text-3xl font-bold mb-8 mt-2">{t('contact.title')}</h2>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center mr-4">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="font-semibold text-lg mb-1">{t('contact.phone')}</div>
                  <div className="text-gray-300">+62-811-9982-713</div>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center mr-4">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="font-semibold text-lg mb-1">{t('contact.email')}</div>
                  <div className="text-gray-300">jayacakrapertiwi@yahoo.com</div>
                </div>
              </div>
            </div>

          </div>
          
          {/* Location */}
          <div>
            <span className="text-sm text-accent uppercase font-semibold tracking-wider">{t('location.subtitle')}</span>
            <h2 className="text-3xl font-bold mb-8 mt-2">{t('location.title')}</h2>
            
            <div className="mb-6">
              <p className="text-lg mb-1">{t('location.office')}</p>
              <p className="text-gray-300">Ruko, Jl. Jalur Sutera Timur Blok 3B No.25</p>
              <p className="text-gray-300">Kel. Kunciran, Kec. Pinang, Kota Tangerang, Banten</p>
            </div>
            
            <div className="bg-gray-200 h-96 rounded-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.9214427546897!2d106.89!3d-6.15!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMDknMDAuMCJTIDEwNsKwNTMnMjQuMCJF!5e0!3m2!1sen!2sid!4v1625000000000!5m2!1sen!2sid" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                title="Office Location"
              ></iframe>
            </div>
            
            <button className="mt-6 bg-white text-primary px-6 py-3 rounded hover:bg-gray-100 transition flex items-center justify-center">
              <ExternalLink size={18} className="mr-2" />
              <a href="https://maps.app.goo.gl/9x9YWSo5H8cNo1py7">{t('buttons.getDirections')}</a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;