import React, { createContext, useContext, useState, ReactNode } from 'react';

// Types for our translations
export type Language = 'id' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

// Translations object
export const translations = {
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
      sendMessage: "Send Message",
      sending: "Sending..."
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
      description: "We provide comprehensive solutions for exhibition booths, interior design, and event management to help your brand stand out.",
      "Exhibition Contracting": {
        title: "Exhibition Contracting",
        description: "Custom exhibition booth design and construction with over 17 years of experience."
      },
      "Event Contracting": {
        title: "Event Contracting",
        description: "Full-service event planning and execution for corporate and private events."
      }
    },
    faq: {
      title: "Frequently Asked Questions",
      subtitle: "Common Questions",
      description: "Find answers to the most common questions about our exhibition booth services.",
      question1: "Is it possible to build a booth in less than 1 week?",
      answer1: "Yes, we can build simple booth designs in less than a week, but we recommend planning at least 2-3 weeks ahead for standard booths and 4-6 weeks for complex custom designs to ensure the highest quality.",
      question2: "I need supporting promotional materials, can you provide them?",
      answer2: "Absolutely! We offer a complete range of promotional materials including banners, televisions, and sound systems to complement your exhibition booth.",
      question3: "Is there a design fee?",
      answer3: "We offer free design services for our clients. However, if you require a design without a booth order, we charge a nominal fee that can be credited towards your booth order.",
      question4: "Is a budget of 5 million IDR sufficient?",
      answer4: "A budget of 5 million IDR can cover a basic booth setup. However, for more elaborate designs with premium materials and features, we recommend a higher budget. We're happy to work with you to maximize value within your budget constraints.",
      question5: "Can you handle exhibitions out of town?",
      answer5: "Yes, we handle exhibitions throughout Indonesia. Our experienced team manages all logistics including transportation, setup, and dismantling regardless of location."
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
      form: {
        title: "Send Us a Message",
        name: "Name",
        email: "Email",
        subject: "Subject",
        message: "Message",
        namePlaceholder: "Your Name",
        emailPlaceholder: "your.email@example.com",
        subjectPlaceholder: "Message Subject",
        messagePlaceholder: "Your Message",
        send: "Send Message",
        sending: "Sending...",
        successMessage: "Your message has been sent successfully! We'll get back to you soon.",
        errorMessage: "There was an error sending your message. Please try again later."
      },
      sendMessage: "Send Us a Message",
      namePlaceholder: "Your Name",
      emailPlaceholder: "Your Email",
      messagePlaceholder: "Your Message",
      messageSent: "Your message has been sent successfully! We'll get back to you soon.",
      messageError: "There was an error sending your message. Please try again later.",
      requiredField: "This field is required",
      invalidEmail: "Please enter a valid email address"
    },
    location: {
      title: "Our Location",
      subtitle: "Find Us",
      office: "PT. Jaya Cakra Pertiwi Office"
    },
    footer: {
      description: "Exhibition booth specialists with over 17 years of experience in Indonesia.",
      quickLinks: "Quick Links",
      copyright: "© 2025 Jaya Cakra Pertiwi. All Rights Reserved."
    },
    stats: {
      projectsCompleted: "Projects Completed",
      yearsExperience: "Years Experience",
      clientSatisfaction: "Client Satisfaction",
      premiumQuality: "Premium Quality"
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
      sendMessage: "Kirim Pesan",
      sending: "Mengirim..."
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
      description: "Kami menyediakan solusi komprehensif untuk booth pameran, desain interior, dan manajemen acara untuk membantu merek Anda menonjol.",
      "Exhibition Contracting": {
        title: "Kontraktor Pameran",
        description: "Desain dan konstruksi booth pameran kustom dengan pengalaman lebih dari 17 tahun."
      },
      "Event Contracting": {
        title: "Kontraktor Acara",
        description: "Perencanaan dan pelaksanaan acara layanan lengkap untuk acara perusahaan dan pribadi."
      }
    },
    faq: {
      title: "Pertanyaan yang Sering Diajukan",
      subtitle: "Pertanyaan Umum",
      description: "Temukan jawaban untuk pertanyaan yang paling umum tentang layanan booth pameran kami.",
      question1: "Apakah mungkin membangun booth dalam waktu kurang dari 1 minggu?",
      answer1: "Ya, kami dapat membangun desain booth sederhana dalam waktu kurang dari seminggu, tetapi kami merekomendasikan perencanaan setidaknya 2-3 minggu sebelumnya untuk booth standar dan 4-6 minggu untuk desain khusus yang kompleks untuk memastikan kualitas tertinggi.",
      question2: "Saya membutuhkan materi promosi pendukung, dapatkah Anda menyediakannya?",
      answer2: "Tentu saja! Kami menawarkan rangkaian lengkap materi promosi termasuk spanduk, televisi, dan sistem suara untuk melengkapi booth pameran Anda.",
      question3: "Apakah ada biaya desain?",
      answer3: "Kami menawarkan layanan desain gratis untuk klien kami. Namun, jika Anda memerlukan desain tanpa pesanan booth, kami mengenakan biaya nominal yang dapat dikreditkan ke pesanan booth Anda.",
      question4: "Apakah anggaran 5 juta IDR cukup?",
      answer4: "Anggaran 5 juta IDR dapat mencakup pengaturan booth dasar. Namun, untuk desain yang lebih rumit dengan bahan dan fitur premium, kami merekomendasikan anggaran yang lebih tinggi. Kami senang bekerja sama dengan Anda untuk memaksimalkan nilai dalam batasan anggaran Anda.",
      question5: "Bisakah Anda menangani pameran di luar kota?",
      answer5: "Ya, kami menangani pameran di seluruh Indonesia. Tim kami yang berpengalaman mengelola semua logistik termasuk transportasi, pengaturan, dan pembongkaran terlepas dari lokasi."
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
      form: {
        title: "Kirim Pesan Kepada Kami",
        name: "Nama",
        email: "Email",
        subject: "Subjek",
        message: "Pesan",
        namePlaceholder: "Nama Anda",
        emailPlaceholder: "email.anda@contoh.com",
        subjectPlaceholder: "Subjek Pesan",
        messagePlaceholder: "Pesan Anda",
        send: "Kirim Pesan",
        sending: "Mengirim...",
        successMessage: "Pesan Anda telah berhasil dikirim! Kami akan segera menghubungi Anda kembali.",
        errorMessage: "Terjadi kesalahan saat mengirim pesan Anda. Silakan coba lagi nanti."
      },
      sendMessage: "Kirim Pesan Kepada Kami",
      namePlaceholder: "Nama Anda",
      emailPlaceholder: "Email Anda",
      messagePlaceholder: "Pesan Anda",
      messageSent: "Pesan Anda telah berhasil dikirim! Kami akan segera menghubungi Anda kembali.",
      messageError: "Terjadi kesalahan saat mengirim pesan Anda. Silakan coba lagi nanti.",
      requiredField: "Bidang ini wajib diisi",
      invalidEmail: "Silakan masukkan alamat email yang valid"
    },
    location: {
      title: "Lokasi Kami",
      subtitle: "Temukan Kami",
      office: "Kantor PT. Jaya Cakra Pertiwi"
    },
    footer: {
      description: "Spesialis booth pameran dengan pengalaman lebih dari 17 tahun di Indonesia.",
      quickLinks: "Tautan Cepat",
      copyright: "© 2025 Jaya Cakra Pertiwi. Seluruh Hak Dilindungi."
    },
    stats: {
      projectsCompleted: "Proyek Selesai",
      yearsExperience: "Tahun Pengalaman",
      clientSatisfaction: "Kepuasan Pelanggan",
      premiumQuality: "Kualitas Premium"
    }
  }
};

// Create the context
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation helper function
const getTranslation = (language: Language, key: string): string => {
  // Split the key by dots to access nested properties
  const keys = key.split('.');
  let value: any = translations[language];
  
  for (const k of keys) {
    if (value && value[k] !== undefined) {
      value = value[k];
    } else {
      return key; // Fallback to key if translation not found
    }
  }
  
  return typeof value === 'string' ? value : key;
};

// Provider component
export const LanguageProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('id'); // Default language
  
  const toggleLanguage = () => {
    setLanguage(prev => prev === 'id' ? 'en' : 'id');
  };
  
  // Translation function
  const t = (key: string): string => {
    return getTranslation(language, key);
  };
  
  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook for using the language context
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};