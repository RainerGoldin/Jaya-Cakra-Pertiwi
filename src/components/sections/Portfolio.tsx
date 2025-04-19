import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { portfolioItems } from '../../data/portfolio';
import { PortfolioItem } from '../../types/types';

const Portfolio: React.FC = () => {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedImage, setSelectedImage] = useState<PortfolioItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm text-accent uppercase font-semibold tracking-wider">{t('portfolio.subtitle')}</span>
          <h2 className="section-title-center mt-2">{t('portfolio.title')}</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            {t('portfolio.description')}
          </p>
        </div>
        
        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-11/12 mx-auto h-[512px]">
          {portfolioItems
            .slice((currentSlide * 6), (currentSlide * 6) + 6)
            .map((item, index) => (
              <motion.div 
          key={index}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="portfolio-card relative group cursor-pointer h-64"
          onClick={() => {
            setSelectedImage(item);
            setIsModalOpen(true);
          }}
              >
          <div className="w-full h-full overflow-hidden">
            <img 
              src={item.image} 
              alt={item.name} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <div className="portfolio-card-content group-hover:opacity-100 flex flex-col items-center justify-center">
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <p className="text-gray-200">{item.location}</p>
            <span className="mt-2 px-3 py-1 bg-black bg-opacity-60 text-white text-sm rounded-full flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              Click to zoom
            </span>
          </div>
              </motion.div>
            ))}
        </div>
        
        {/* Image Modal */}
        {isModalOpen && selectedImage && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4 overflow-auto"
            onClick={() => setIsModalOpen(false)}
          >
            <div 
              className="relative bg-transparent"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the container
            >
              <button 
                className="absolute -top-10 right-0 text-white hover:text-accent"
                onClick={() => setIsModalOpen(false)}
              >
                <X size={24} />
              </button>
              <img 
                src={selectedImage.image} 
                alt={selectedImage.name} 
                className="max-h-[90vh] w-auto object-contain" // Show true size with max height constraint
              />
              <div className="bg-black bg-opacity-75 text-white p-4 rounded-b-lg">
                <h3 className="text-xl font-semibold">{selectedImage.name}</h3>
                <p className="text-gray-300">{selectedImage.location}</p>
              </div>
            </div>
          </div>
        )}
        
        {/* Navigation Buttons */}
        <div className="flex justify-center items-center mt-12 space-x-4">
          <button 
            onClick={() => setCurrentSlide(prev => Math.max(0, prev - 1))}
            className="p-2 rounded-full border border-gray-300 hover:bg-gray-100"
            disabled={currentSlide === 0}
          >
            <ChevronLeft size={24} className={currentSlide === 0 ? 'text-gray-300' : 'text-gray-600'} />
          </button>
          
          {/* Page Numbers */}
          {Array.from({ length: Math.ceil(portfolioItems.length / 6) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition
                ${currentSlide === index 
                  ? 'bg-accent text-white' 
                  : 'border border-gray-300 hover:bg-gray-100'
              }`}
            >
              {index + 1}
            </button>
          ))}
          
          <button 
            onClick={() => setCurrentSlide(prev => Math.min(Math.ceil(portfolioItems.length / 6) - 1, prev + 1))}
            className="p-2 rounded-full border border-gray-300 hover:bg-gray-100"
            disabled={currentSlide === Math.ceil(portfolioItems.length / 6) - 1}
          >
            <ChevronRight size={24} className={currentSlide === Math.ceil(portfolioItems.length / 6) - 1 ? 'text-gray-300' : 'text-gray-600'} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;