import { useState, useEffect } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Faq from './components/sections/Faq';
import Portfolio from './components/sections/Portfolio';
import Contact from './components/sections/Contact';
import emailjs from 'emailjs-com';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Initialize EmailJS with your user ID
    // Replace 'YOUR_EMAILJS_USER_ID' with your actual EmailJS user ID
    emailjs.init('YOUR_EMAILJS_USER_ID');
  }, []);

  return (
    <LanguageProvider>
      <div className="font-sans flex flex-col min-h-screen">
        <Header scrolled={scrolled} />
        <main className="flex-grow">
          <Hero />
          <About />
          <Services />
          <Portfolio />
          <Faq />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
