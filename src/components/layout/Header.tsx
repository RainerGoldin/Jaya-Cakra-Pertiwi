import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface HeaderProps {
  scrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ scrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const isActive = (section: string) => activeSection === section;

  const menuItems = [
    { id: 'home', label: t('nav.home') },
    { id: 'about', label: t('nav.about') },
    { id: 'services', label: t('nav.services') },
    { id: 'portfolio', label: t('nav.portfolio') },
    { id: 'faq', label: t('nav.faq') }
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className={`text-xl font-bold ${scrolled ? 'text-primary' : 'text-white bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg'}`}>
            {scrolled ? (
              <img src="/public/logo.webp" alt="Jaya Cakra Pertiwi" className="h-16 -my-2" />
            ) : (
              <span className="text-2xl">Jaya Cakra Pertiwi</span>
            )}
        </div>
        
        {/* Desktop Navigation with consistent background styling */}
        <nav className="hidden md:flex items-center space-x-8">
          {menuItems.map(({id, label}) => (
            <a 
              key={id}
              href={`#${id}`} 
              className={`px-3 py-1 rounded-md transition-all ${
                scrolled 
                  ? `${isActive(id) ? 'bg-accent/10 text-accent' : 'text-gray-700 hover:bg-gray-100'}`
                  : `${isActive(id) 
                      ? 'bg-white/20 text-white font-medium backdrop-blur-sm' 
                      : 'text-white hover:bg-white/10 backdrop-blur-sm'}`
              }`}
            >
              {label}
            </a>
          ))}
        </nav>
        
        {/* Language Toggle with consistent styling */}
        <button 
          onClick={toggleLanguage}
          className={`hidden md:flex items-center px-4 py-2 rounded-full transition-all ${
            scrolled 
              ? 'bg-accent/10 text-accent hover:bg-accent hover:text-white' 
              : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm'
          }`}
          aria-label="Switch language"
        >
          <Globe size={16} className="mr-2" />
          <span className="font-medium">{language.toUpperCase()}</span>
        </button>
        
        <button className={`hidden md:block ${
          scrolled 
            ? 'btn-secondary' 
            : 'bg-white/10 hover:bg-white/20 text-white px-6 py-2 rounded-full backdrop-blur-sm transition-all'
        }`}>
          <a href="#contact">{t('buttons.contactUs')}</a>
        </button>
        
        {/* Mobile Menu Controls with consistent styling */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={toggleLanguage}
            className={`flex items-center justify-center p-2 rounded-full mr-4 ${
              scrolled 
                ? 'bg-accent/10 text-accent hover:bg-accent hover:text-white' 
                : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm'
            }`}
            aria-label="Switch language"
          >
            <Globe size={20} />
          </button>
          
          <button 
            className={`p-2 rounded-lg ${
              scrolled 
                ? 'bg-accent/10 text-accent hover:bg-accent hover:text-white' 
                : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation with transparent background */}
      {isMenuOpen && (
        <div className={`md:hidden backdrop-blur-sm py-4 px-4 ${
          scrolled ? 'bg-white/80' : 'bg-black/30'
        }`}>
          <nav className="flex flex-col space-y-4">
            {['home', 'about', 'services', 'portfolio', 'faq', 'contact'].map((section) => (
              <a 
                key={section}
                href={`#${section}`} 
                className={`px-4 py-2 rounded-md transition-all ${
                  scrolled
                    ? location.hash === `#${section}`
                      ? 'bg-accent/10 text-accent font-medium'
                      : 'text-gray-700 hover:bg-gray-100/50'
                    : location.hash === `#${section}`
                      ? 'bg-white/20 text-white font-medium'
                      : 'text-white hover:bg-white/10'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t(`nav.${section}`) || section.toUpperCase()}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;