import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Phone, Mail, MapPin, ChevronDown, ChevronUp, 
  Instagram, ExternalLink, Award, Clock, CheckCircle, 
  Sparkles, Building, Calendar, Users, ArrowRight,
  ChevronLeft, ChevronRight, Globe
} from 'lucide-react';
import { motion } from 'framer-motion';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [language, setLanguage] = useState<'en' | 'id'>('en');
  const [selectedImage, setSelectedImage] = useState<{
    name: string;
    location: string;
    image: string;
  } | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const heroImages = [
    "../public/slider/booth-construction.png",
    "../public/slider/booth-assembly.png",
    "../public/slider/booth-painting.png"
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1));
    }, 5000);
    
    return () => clearInterval(interval);
  }, [heroImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? heroImages.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'id' : 'en');
  };

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  // Translations
  const translations = {
    en: {
      nav: {
        home: "Home",
        about: "About",
        services: "Services",
        portfolio: "Portfolio",
        contact: "Contact",
        faq: "FAQ"
      },
      buttons: {
        contactUs: "Contact Us",
        viewPortfolio: "View Portfolio",
        askMoreQuestions: "Ask More Questions",
        getDirections: "Get Directions",
        sendMessage: "Send Message"
      },
      hero: {
        title: "Exhibition Booth Design Excellence",
        subtitle: "With almost two decades of expertise, we specialize in creating stunning exhibition booths, interior designs, and event spaces that transform your brand vision into reality."
      },
      about: {
        title: "About Us",
        subtitle: "About Our Company",
        paragraph1: "Since 2008, PT. Jaya Cakra Pertiwi has been crafting more than just exhibition booths, we've been building experiences. As seasoned design architects, our journey lies in transforming your brand's vision into a tangible reality.",
        paragraph2: "Our enduring commitment to design and customer satisfaction has made us a trusted partner for countless organizations. We specialize in creating exhibition spaces that not only showcase your offerings but also authentically amplify your brand's essence, ensuring a lasting impression on every visitor.",
        exploreServices: "Explore our services"
      },
      services: {
        title: "Our Services",
        subtitle: "What We Offer",
        description: "We provide comprehensive solutions for exhibition booths, interior design, and event management to help your brand stand out."
      },
      faq: {
        title: "Frequently Asked Questions",
        subtitle: "Common Questions",
        description: "Find answers to the most common questions about our exhibition booth services."
      },
      portfolio: {
        title: "Our Portfolio",
        subtitle: "Our Projects",
        description: "Explore our latest exhibition booth designs and projects."
      },
      contact: {
        title: "Contact Us",
        subtitle: "Get In Touch",
        phone: "Phone",
        email: "Email",
        sendMessage: "Send Us a Message",
        namePlaceholder: "Your Name",
        emailPlaceholder: "Your Email",
        messagePlaceholder: "Your Message"
      },
      location: {
        title: "Our Location",
        subtitle: "Find Us",
        office: "PT. Jaya Cakra Pertiwi Office"
      },
      footer: {
        description: "Exhibition booth specialists with over 17 years of experience in Indonesia.",
        quickLinks: "Quick Links",
        copyright: "© 2023 Jaya Cakra Pertiwi. All Rights Reserved."
      }
    },
      id: {
        nav: {
          home: "Beranda",
          about: "Tentang",
          services: "Layanan",
          portfolio: "Portofolio",
          contact: "Kontak",
          faq: "FAQ"
        },
      buttons: {
        contactUs: "Hubungi Kami",
        viewPortfolio: "Lihat Portofolio",
        askMoreQuestions: "Tanyakan Lebih Banyak",
        getDirections: "Petunjuk Arah",
        sendMessage: "Kirim Pesan"
      },
      hero: {
        title: "Keunggulan Desain Booth Pameran",
        subtitle: "Dengan hampir dua dekade keahlian, kami mengkhususkan diri dalam menciptakan booth pameran, desain interior, dan ruang acara yang menakjubkan yang mengubah visi merek Anda menjadi kenyataan."
      },
      about: {
        title: "Tentang Kami",
        subtitle: "Tentang Perusahaan Kami",
        paragraph1: "Sejak 2008, PT. Jaya Cakra Pertiwi telah membuat lebih dari sekadar booth pameran, kami telah membangun pengalaman. Sebagai arsitek desain berpengalaman, perjalanan kami terletak pada mengubah visi merek Anda menjadi kenyataan yang nyata.",
        paragraph2: "Komitmen kami yang berkelanjutan terhadap desain dan kepuasan pelanggan telah menjadikan kami mitra tepercaya bagi banyak organisasi. Kami mengkhususkan diri dalam menciptakan ruang pameran yang tidak hanya menampilkan penawaran Anda tetapi juga secara otentik memperkuat esensi merek Anda, memastikan kesan yang langgeng pada setiap pengunjung.",
        exploreServices: "Jelajahi layanan kami"
      },
      services: {
        title: "Layanan Kami",
        subtitle: "Yang Kami Tawarkan",
        description: "Kami menyediakan solusi komprehensif untuk booth pameran, desain interior, dan manajemen acara untuk membantu merek Anda menonjol."
      },
      faq: {
        title: "Pertanyaan yang Sering Diajukan",
        subtitle: "Pertanyaan Umum",
        description: "Temukan jawaban untuk pertanyaan yang paling umum tentang layanan booth pameran kami."
      },
      portfolio: {
        title: "Portofolio Kami",
        subtitle: "Proyek Kami",
        description: "Jelajahi desain booth pameran dan proyek terbaru kami."
      },
      contact: {
        title: "Hubungi Kami",
        subtitle: "Tetap Terhubung",
        phone: "Telepon",
        email: "Email",
        sendMessage: "Kirim Pesan Kepada Kami",
        namePlaceholder: "Nama Anda",
        emailPlaceholder: "Email Anda",
        messagePlaceholder: "Pesan Anda"
      },
      location: {
        title: "Lokasi Kami",
        subtitle: "Temukan Kami",
        office: "Kantor PT. Jaya Cakra Pertiwi"
      },
      footer: {
        description: "Spesialis booth pameran dengan pengalaman lebih dari 17 tahun di Indonesia.",
        quickLinks: "Tautan Cepat",
        copyright: "© 2023 Jaya Cakra Pertiwi. Seluruh Hak Dilindungi."
      }
    }
  };

  const t = translations[language];

  const faqItems = [
    {
      question: "Is it possible to build a booth in less than 1 week?",
      answer: "Yes, we can build simple booth designs in less than a week, but we recommend planning at least 2-3 weeks ahead for standard booths and 4-6 weeks for complex custom designs to ensure the highest quality."
    },
    {
      question: "I need supporting promotional materials, can you provide them?",
      answer: "Absolutely! We offer a complete range of promotional materials including banners, brochures, digital displays, and custom branded items to complement your exhibition booth."
    },
    {
      question: "Is there a design fee?",
      answer: "We include basic design services in our booth packages. For more complex custom designs, we charge a design fee that is credited toward your project if you proceed with construction."
    },
    {
      question: "Is a budget of 5 million IDR sufficient?",
      answer: "A budget of 5 million IDR can cover a basic booth setup. However, for more elaborate designs with premium materials and features, we recommend a higher budget. We're happy to work with you to maximize value within your budget constraints."
    },
    {
      question: "Can you handle exhibitions out of town?",
      answer: "Yes, we handle exhibitions throughout Indonesia and select international locations. Our experienced team manages all logistics including transportation, setup, and dismantling regardless of location."
    }
  ];

  const portfolioItems = [
    { 
      name: "Paramount Petals", 
      location: "Gading Serpong",
      image: "../public/portfolio/paramount-petals.jpg"
    },
    { 
      name: "Posh Men", 
      location: "Bandung",
      image: "../public/portfolio/posh-men.jpg"
    },
    { 
      name: "Baby Happy", 
      location: "Bandung",
      image: "../public/portfolio/baby-happy.png"
    },
    { 
      name: "Klin Softener", 
      location: "Bandung",
      image: "../public/portfolio/klin-softener.jpg"
    },
    {
      name: "Systema",
      location: "Bandung",
      image: "../public/portfolio/systema.jpg"
    },
    {
      name: "ADH Machine Tool",
      location: "Jakarta",
      image: "../public/portfolio/adh-machine-tool.png"
    },
    {
      name: "Regazza",
      location: "Jakarta",
      image: "../public/portfolio/regazza.png"
    },
    {
      name: "Emeron Lovely",
      location: "Bali",
      image: "../public/portfolio/emeron-lovely.png"
    },
    {
      name: "Blatoz",
      location: "Jakarta",
      image: "../public/portfolio/blatoz.png"
    },
    {
      name: "Hers Protex",
      location: "Jakarta",
      image: "../public/portfolio/hers-protex.png"
    },
    {
      name: "Mama Lemon",
      location: "Bandung",
      image: "../public/portfolio/mama-lemon.png"
    },
    {
      name: "K Natural White",
      location: "Bandung",
      image: "../public/portfolio/k-natural-white.png"
    },
    {
      name: "SoSoft",
      location: "Jakarta",
      image: "../public/portfolio/sosoft.png"
    },
    {
      name: "Top Mokachinno",
      location: "Surabaya",
      image: "../public/portfolio/top-mokachinno.jpg"
    },
    {
      name: "Cannon Ball",
      location: "-",
      image: "../public/portfolio/cannon-ball.png"
    },
    {
      name: "Poise",
      location: "-",
      image: "../public/portfolio/poise.png"
    },
    {
      name: "OT Anggur Merah",
      location: "-",
      image: "../public/portfolio/ot-anggur-merah.png"
    }
  ];

  const services = [
    {
      icon: <Building size={24} />,
      title: "Exhibition Contracting",
      description: "Custom exhibition booth design and construction with over 17 years of experience."
    },
    {
      icon: <Sparkles size={24} />,
      title: "Interior Design",
      description: "Professional interior design services for commercial and residential spaces."
    },
    {
      icon: <Calendar size={24} />,
      title: "Event Contracting",
      description: "Full-service event planning and execution for corporate and private events."
    }
  ];

  const stats = [
    {
      icon: <Award size={32} className="text-accent" />,
      value: "100+",
      label: "Projects Completed"
    },
    {
      icon: <Clock size={32} className="text-accent" />,
      value: "17+",
      label: "Years Experience"
    },
    {
      icon: <CheckCircle size={32} className="text-accent" />,
      value: "100%",
      label: "Client Satisfaction"
    },
    {
      icon: <Users size={32} className="text-accent" />,
      value: "100%",
      label: "Premium Quality"
    }
  ];

  return (
    <div className="font-sans">
      {/* Header */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
        {/* Add state for active section */}
        {(() => {
          const [activeSection, setActiveSection] = useState('home');

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
        { id: 'home', label: t.nav.home },
        { id: 'about', label: t.nav.about },
        { id: 'services', label: t.nav.services }, 
        { id: 'faq', label: t.nav.faq },
        { id: 'portfolio', label: t.nav.portfolio },
        { id: 'contact', label: t.nav.contact }
          ];

          return (
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className={`text-xl font-bold ${scrolled ? 'text-primary' : 'text-white bg-primary/30 px-4 py-2 rounded-lg'}`}>
            Jaya Cakra Pertiwi
          </div>
          
          {/* Desktop Navigation with active states and background highlights */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map(({id, label}) => (
          <a 
            key={id}
            href={`#${id}`} 
            className={`px-3 py-1 rounded-md transition-all ${
              scrolled 
            ? `text-gray-700 ${isActive(id) ? 'bg-accent/10 text-accent' : 'hover:bg-gray-100'}`
            : `text-white ${isActive(id) 
              ? 'bg-white/20 font-medium' 
              : 'hover:bg-white/10'}`
            }`}
          >
            {label}
          </a>
            ))}
          </nav>
          
          {/* Language Toggle with enhanced visibility */}
          <button 
            onClick={toggleLanguage}
            className={`hidden md:flex items-center px-4 py-2 rounded-full transition-all ${
          scrolled 
            ? 'bg-neutral hover:bg-accent hover:text-white text-primary' 
            : 'bg-white/30 hover:bg-white/40 text-white backdrop-blur-sm'
            }`}
            aria-label="Switch language"
          >
            <Globe size={16} className="mr-2" />
            <span className="font-medium">{language.toUpperCase()}</span>
          </button>
          
          <button className="hidden md:block btn-secondary">
            {t.buttons.contactUs}
          </button>
          
          {/* Mobile Menu Button with enhanced visibility */}
          <div className="md:hidden flex items-center">
            <button 
          onClick={toggleLanguage}
          className={`flex items-center justify-center p-2 rounded-full mr-4 ${
            scrolled 
              ? 'bg-neutral hover:bg-accent hover:text-white text-primary' 
              : 'bg-white/30 hover:bg-white/40 text-white backdrop-blur-sm'
          }`}
          aria-label="Switch language"
            >
          <Globe size={20} />
            </button>
            
            <button 
          className={`p-2 rounded-lg ${
            scrolled 
              ? 'text-gray-700 bg-gray-100' 
              : 'text-white bg-white/20 backdrop-blur-sm'
          }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
          );
        })()}
        
        {/* Mobile Navigation with enhanced visibility */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-sm py-4 px-4 shadow-lg">
        <nav className="flex flex-col space-y-4">
          {['home', 'about', 'services', 'faq', 'portfolio', 'contact'].map((section) => (
            <a 
          key={section}
          href={`#${section}`} 
          className={`px-4 py-2 rounded-md transition-all ${
            location.hash === `#${section}` 
              ? 'bg-accent/10 text-accent font-medium' 
              : 'hover:bg-gray-100'
          }`}
          onClick={() => setIsMenuOpen(false)}
            >
          {t.nav[section as keyof typeof t.nav] || section.toUpperCase()}
            </a>
          ))}
          <button className="btn-secondary w-full mt-4">
            {t.buttons.contactUs}
          </button>
        </nav>
          </div>
        )}
      </header>

      {/* Hero Section with Image Slider */}
      <section id="home" className="min-h-screen flex items-center bg-primary text-white relative overflow-hidden">
        {/* Image Slider */}
        <div className="absolute inset-0 w-full h-full">
          {heroImages.map((image, index) => (
            <div 
              key={index}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img 
                src={image} 
                alt={`Exhibition booth construction ${index + 1}`} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/60"></div>
            </div>
          ))}
        </div>
        
        {/* Slider Controls */}
        <button 
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 z-10 transition-all"
          onClick={prevSlide}
        >
          <ChevronLeft size={24} className="text-white" />
        </button>
        <button 
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 z-10 transition-all"
          onClick={nextSlide}
        >
          <ChevronRight size={24} className="text-white" />
        </button>
        
        {/* Slider Indicators */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-${index === currentSlide ? '8' : '2'} h-2 rounded-full transition-all ${
                index === currentSlide ? 'bg-accent' : 'bg-white/50'
              }`}
            ></button>
          ))}
        </div>
        
        <div className="container mx-auto px-4 py-16 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">{t.hero.title}</h1>
            <p className="text-lg md:text-xl mb-10 text-gray-200 max-w-2xl mx-auto">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="btn-primary">
                {t.buttons.contactUs}
              </a>
              <a href="#portfolio" className="btn-outline">
                {t.buttons.viewPortfolio}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-neutral">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* About Content */}
          <div>
            <span className="text-sm text-accent uppercase font-semibold tracking-wider">{t.about.subtitle}</span>
            <h2 className="section-title mt-2 mb-6">{t.about.title}</h2>
            
            <p className="mb-6 text-gray-600">
            {t.about.paragraph1}
            </p>
            <p className="mb-6 text-gray-600">
            {t.about.paragraph2}
            </p>
            
            <a href="#services" className="inline-flex items-center text-accent font-medium hover:underline">
            {t.about.exploreServices} <ArrowRight size={16} className="ml-2" />
            </a>
          </div>
          
          {/* Image Section */}
          <div className="flex justify-center items-center">
            <img 
            src="../public/about_us.jpg" 
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

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-sm text-accent uppercase font-semibold tracking-wider">{t.services.subtitle}</span>
            <h2 className="section-title-center mt-2">{t.services.title}</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              {t.services.description}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                <h3 className="text-xl font-semibold mb-4 text-center">{service.title}</h3>
                <p className="text-gray-600 text-center">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-neutral">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-sm text-accent uppercase font-semibold tracking-wider">{t.faq.subtitle}</span>
            <h2 className="section-title-center mt-2">{t.faq.title}</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              {t.faq.description}
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
            <button className="btn-primary">
              {t.buttons.askMoreQuestions}
            </button>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
        <span className="text-sm text-accent uppercase font-semibold tracking-wider">{t.portfolio.subtitle}</span>
        <h2 className="section-title-center mt-2">{t.portfolio.title}</h2>
        <p className="max-w-2xl mx-auto text-gray-600">
          {t.portfolio.description}
        </p>
          </div>
          
          {/* Portfolio Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-11/12 mx-auto">
            {portfolioItems
              .slice((currentSlide * 6), (currentSlide * 6) + 6)
              .map((item, index) => (
              <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              // transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="portfolio-card relative group cursor-pointer"
              onClick={() => {
                setSelectedImage(item);
                setIsModalOpen(true);
              }}
              >
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="portfolio-card-content group-hover:opacity-100">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-200">{item.location}</p>
              </div>
              </motion.div>
            ))}
            </div>
            
            {/* Image Modal */}
            {isModalOpen && selectedImage && (
              <div 
              className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
              onClick={() => setIsModalOpen(false)}
              >
              <div className="relative max-w-4xl w-full">
                <button 
                className="absolute -top-10 right-0 text-white hover:text-accent"
                onClick={() => setIsModalOpen(false)}
                >
                <X size={24} />
                </button>
                <img 
                src={selectedImage.image} 
                alt={selectedImage.name} 
                className="w-full h-auto rounded-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 text-white p-4 rounded-b-lg">
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

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <span className="text-sm text-accent uppercase font-semibold tracking-wider">{t.contact.subtitle}</span>
              <h2 className="text-3xl font-bold mb-8 mt-2">{t.contact.title}</h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center mr-4">
                    <Phone size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-lg mb-1">{t.contact.phone}</div>
                    <div className="text-gray-300">+6221-5695-8447</div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center mr-4">
                    <Mail size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-lg mb-1">{t.contact.email}</div>
                    <div className="text-gray-300">info@jayacakraPertiwi.com</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-primary-light p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">{t.contact.sendMessage}</h3>
                <form>
                  <div className="mb-4">
                    <input 
                      type="text" 
                      placeholder={t.contact.namePlaceholder} 
                      className="w-full p-3 rounded bg-primary-dark text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:border-accent"
                    />
                  </div>
                  <div className="mb-4">
                    <input 
                      type="email" 
                      placeholder={t.contact.emailPlaceholder} 
                      className="w-full p-3 rounded bg-primary-dark text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:border-accent"
                    />
                  </div>
                  <div className="mb-4">
                    <textarea 
                      placeholder={t.contact.messagePlaceholder} 
                      rows={4}
                      className="w-full p-3 rounded bg-primary-dark text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:border-accent"
                    ></textarea>
                  </div>
                  <button type="submit" className="btn-primary w-full">
                    {t.buttons.sendMessage}
                  </button>
                </form>
              </div>
            </div>
            
            {/* Location */}
            <div>
              <span className="text-sm text-accent uppercase font-semibold tracking-wider">{t.location.subtitle}</span>
              <h2 className="text-3xl font-bold mb-8 mt-2">{t.location.title}</h2>
              
              <div className="mb-6">
              <p className="text-lg mb-1">{t.location.office}</p>
              <p className="text-gray-300">Rukan Artha Gading Niaga Blok D No.9A-9B</p>
                <p className="text-gray-300">Kelapa Gading Barat, Jakarta Utara, Indonesia</p>
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
                {t.buttons.getDirections}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-bold mb-6">Jaya Cakra Pertiwi</h3>
              <p className="text-gray-400 mb-6">
                {t.footer.description}
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-accent transition">
                  <Instagram size={20} />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-6">{t.footer.quickLinks}</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#home" className="hover:text-accent transition">{t.nav.home}</a></li>
                <li><a href="#about" className="hover:text-accent transition">{t.nav.about}</a></li>
                <li><a href="#services" className="hover:text-accent transition">{t.nav.services}</a></li>
                <li><a href="#portfolio" className="hover:text-accent transition">{t.nav.portfolio}</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-6">{t.services.title}</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#services" className="hover:text-accent transition">Exhibition Contracting</a></li>
                <li><a href="#services" className="hover:text-accent transition">Interior Design</a></li>
                <li><a href="#services" className="hover:text-accent transition">Event Contracting</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-6">{t.contact.title}</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start">
                  <Phone size={16} className="mr-3 mt-1" />
                  <span>+6221-5695-8447</span>
                </li>
                <li className="flex items-start">
                  <Mail size={16} className="mr-3 mt-1" />
                  <span>info@jayacakraPertiwi.com</span>
                </li>
                <li className="flex items-start">
                  <MapPin size={16} className="mr-3 mt-1" />
                  <span>Kelapa Gading, Jakarta Utara</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
            {t.footer.copyright}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;