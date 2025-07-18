import { Button } from "@/components/ui/button";
import { Check, Facebook, Instagram, Linkedin, Play } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import ferrariLogo from "@/assets/ferrari-logo.png";
import warningIcon from "@/assets/warning-icon.png";
import lightbulbIcon from "@/assets/lightbulb-icon.png";
import notebookIcon from "@/assets/notebook-icon.png";
import instructorPhoto from "@/assets/instructor-photo.png";
import tutelaImpresaLogo from "@/assets/tutelaimpresa-logo.png";
import facebookBg from "@/assets/facebook-bg.jpg";
import linkedinBg from "@/assets/linkedin-bg.jpg";
const logoImg = tutelaImpresaLogo;

export default function TutelaImpresaLanding() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation variants - smoother animations
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0
    }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { 
      opacity: 1, 
      x: 0
    }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: { 
      opacity: 1, 
      x: 0
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const mobileStaggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        delayChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Premium Sticky Header */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-lg shadow-xl border-b border-gray-200/50' 
            : 'bg-white/90 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex justify-between items-center">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center"
          >
            <img 
              src="/lovable-uploads/c69ce02a-dd9f-457d-90bd-1793b4c8a0be.png" 
              alt="TutelaImpresa Ferrari Service" 
              className="h-12 md:h-16 object-contain"
            />
          </motion.div>
          <div className="hidden md:flex gap-4">
            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
              <Button variant="whiteRedText" size="sm">
                SCARICA LA SCHEDA INFORMATIVA
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
              <Button variant="yellow" size="sm" className="hover:shadow-lg transition-all duration-300">
                ACQUISTA ORA
              </Button>
            </motion.div>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="yellow" size="sm" className="text-xs px-3">
                ACQUISTA
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.header>

      {/* Enhanced Hero Section */}
      <section className="bg-brand-red text-white py-16 md:py-24 mt-16 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-red via-brand-red to-red-700"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-300 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 md:px-8 flex flex-col lg:flex-row items-center">
          <motion.div 
            variants={fadeInLeft}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full lg:w-2/3 lg:pr-12 text-center lg:text-left mb-8 lg:mb-0"
          >
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-10 leading-tight text-white"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              100% ONLINE<br />
              <span className="text-5xl md:text-7xl lg:text-8xl text-white">
                CORSO
              </span><br />
              <span className="text-5xl md:text-7xl lg:text-8xl text-white">
                DATORI DI LAVORO
              </span>
            </motion.h1>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 mt-6 md:mt-10 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <motion.div 
                whileHover={{ scale: 1.05, y: -3 }} 
                whileTap={{ scale: 0.95 }}
                className="group"
              >
                <Button 
                  variant="whiteOutline" 
                  size="lg" 
                  className="group-hover:shadow-2xl group-hover:shadow-white/20 transition-all duration-300 transform"
                >
                  SCARICA LA SCHEDA INFORMATIVA
                </Button>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05, y: -3 }} 
                whileTap={{ scale: 0.95 }}
                className="group"
              >
                <Button 
                  variant="yellow" 
                  size="lg" 
                  className="group-hover:shadow-2xl group-hover:shadow-yellow-500/30 transition-all duration-300 transform group-hover:brightness-110"
                >
                  ACQUISTA ORA
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.div 
            variants={fadeInRight}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full lg:w-1/3 flex justify-center lg:justify-start lg:pl-16"
          >
            <motion.img 
              src="/lovable-uploads/641f76c0-8333-4ae7-ac21-a0340b93a500.png" 
              alt="Ferrari Logo" 
              className="w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 object-contain"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </div>
      </section>

      {/* Enhanced Mandatory Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col lg:flex-row items-center">
          <motion.div 
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full lg:w-2/3 lg:pr-12 mb-8 lg:mb-0 order-2 lg:order-1"
          >
            <div className="space-y-6">
              <motion.h2 
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              >
                OBBLIGATORIO DAL 2025
              </motion.h2>
              <motion.p 
                className="text-xl md:text-2xl text-brand-red font-bold"
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              >
                CONFORME AL NUOVO ACCORDO STATO-REGIONI
              </motion.p>
              <motion.div 
                className="space-y-3 text-lg md:text-xl text-gray-700"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  Il nuovo corso da 16 ore per Datori di Lavoro è obbligatorio dal 2025
                </motion.p>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <strong>per tutte le aziende,</strong>
                </motion.p>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  anche se hai un RSPP esterno.
                </motion.p>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  Il corso è <strong>100% online, tracciato e conforme</strong>
                </motion.p>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  all'Accordo Stato-Regioni del 6 febbraio 2025.
                </motion.p>
              </motion.div>
            </div>
          </motion.div>
          <motion.div 
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="w-full lg:w-1/3 flex justify-center order-1 lg:order-2"
          >
            <motion.img 
              src="/lovable-uploads/f849dc78-5f27-41d0-aef9-ec7438be761c.png" 
              alt="Warning" 
              className="w-56 h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 object-contain"
              whileHover={{ scale: 1.1, rotate: -5 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </div>
      </section>

      {/* Enhanced E-Learning Section */}
      <section className="bg-gradient-to-br from-brand-red via-brand-red to-red-700 text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-300 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 md:px-8 flex flex-col lg:flex-row items-start justify-between">
          <motion.div 
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="w-full lg:flex-1 mb-8 lg:mb-0"
          >
            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 leading-tight"
              variants={fadeInUp}
            >
              MODALITÀ<br />
              E-LEARNING
            </motion.h2>
            <motion.div 
              className="text-brand-yellow text-xl md:text-2xl lg:text-3xl font-bold mb-6 md:mb-8 leading-relaxed"
              variants={fadeInUp}
            >
              FREQUENTI QUANDO PUOI<br />
              SUPERI L'ESAME<br />
              SCARICHI L'ATTESTATO
            </motion.div>
          </motion.div>
          
          <motion.div 
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="w-full lg:flex-1 lg:ml-12 space-y-6"
          >
            <motion.div 
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <motion.p className="text-lg md:text-xl mb-4" variants={fadeInUp}>
                Il corso è interamente online<br />
                (e-learning asincrono), accessibile<br />
                24/7 da PC, tablet o smartphone.
              </motion.p>
              <motion.p className="text-lg md:text-xl mb-4" variants={fadeInUp}>
                Include test intermedi, moduli<br />
                interattivi e supporto tutor.
              </motion.p>
              <motion.p className="text-lg md:text-xl mb-6" variants={fadeInUp}>
                <strong>Durata: 16 ore</strong><br />
                <strong>Attestato: digitale e valido in<br />
                tutta Italia</strong>
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                variants={fadeInUp}
              >
                <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="redOutline" size="lg" className="hover:shadow-xl transition-all duration-300">
                    SCARICA LA SCHEDA INFORMATIVA
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="yellow" size="lg" className="hover:shadow-xl hover:shadow-yellow-500/30 transition-all duration-300">
                    ACQUISTA ORA
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced What You'll Learn Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col lg:flex-row items-start justify-between">
          <motion.div 
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="w-full lg:flex-1 mb-8 lg:mb-0"
          >
            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-red mb-8 leading-tight"
              variants={fadeInUp}
            >
              COSA IMPARERAI?
            </motion.h2>
            <motion.div 
              className="space-y-6"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                "Obblighi e responsabilità del Datore di Lavoro",
                "Normativa D.Lgs. 81/2008 e D.Lgs. 231/2001",
                "Gestione della sicurezza aziendale e organizzazione del lavoro",
                "Documentazione, sorveglianza sanitaria, gestione delle emergenze",
                "Ruoli e compiti di RSPP, RLS, medico competente, ASPP",
                "Comunicazione efficace, leadership, gestione dei conflitti"
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start gap-4 group"
                  variants={fadeInUp}
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                    <Check className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-lg md:text-xl text-gray-800 leading-relaxed pt-1">{item}</span>
                </motion.div>
              ))}
            </motion.div>
            <motion.div 
              className="mt-10"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                <Button variant="red" size="lg" className="hover:shadow-xl hover:shadow-red-500/30 transition-all duration-300">
                  SCARICA LA SCHEDA INFORMATIVA
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.div 
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="w-full lg:w-2/5 flex justify-center"
          >
            <motion.img 
              src="/lovable-uploads/b122901f-d6a5-4853-87ae-7e9dd269c7c7.png" 
              alt="Lightbulb" 
              className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </div>
      </section>

      {/* Enhanced Video Section */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-red mb-8 md:mb-12 relative"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="relative inline-block">
              GUARDA IL VIDEO
              <motion.div 
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-brand-red to-yellow-400 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
            </span>
          </motion.h2>
          <motion.div 
            className="relative max-w-5xl mx-auto mb-8"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="rounded-2xl overflow-hidden relative aspect-video shadow-2xl">
              <iframe 
                src="https://www.youtube.com/embed/WVg5d0aobcs?si=waM49fSSQducyC4P"
                title="Corso Datori di Lavoro Video" 
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Course Details Section */}
      <section className="bg-gradient-to-br from-brand-red via-brand-red to-red-700 text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-300 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 md:px-8 flex flex-col lg:flex-row items-center justify-between">
          <motion.div 
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="w-full lg:flex-1 mb-8 lg:mb-0"
          >
            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight"
              variants={fadeInUp}
            >
              MODALITÀ E DURATA
            </motion.h2>
            <motion.div 
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="space-y-6 text-lg md:text-xl"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  "Il corso viene erogato completamente online in modalità e-learning asincrona.",
                  "Potrai accedere alla piattaforma in qualsiasi momento, 24 ore su 24, da qualsiasi dispositivo connesso a Internet.",
                  "Ogni modulo è tracciato, include test intermedi e materiali scaricabili."
                ].map((item, index) => (
                  <motion.div key={index} className="flex items-start gap-4 group" variants={fadeInUp}>
                    <Check className="w-6 h-6 text-green-400 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-200" />
                    <span className="leading-relaxed">{item}</span>
                  </motion.div>
                ))}
                
                <motion.div className="space-y-4 pt-4" variants={fadeInUp}>
                  <div className="text-xl md:text-2xl font-bold flex items-center gap-3">
                    <span className="text-2xl">⏱️</span>
                    <span>Durata: 16 ore</span>
                  </div>
                  <div className="text-xl md:text-2xl font-bold flex items-center gap-3">
                    <span className="text-2xl">📋</span>
                    <span>Attestato: digitale, conforme all'Accordo Stato-Regioni 2025 valido in tutta Italia</span>
                  </div>
                </motion.div>
              </motion.div>
              
              <motion.div 
                className="mt-8"
                variants={fadeInUp}
              >
                <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="redOutline" size="lg" className="hover:shadow-xl transition-all duration-300">
                    SCARICA LA SCHEDA INFORMATIVA
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="w-full lg:w-2/5 flex items-center justify-center"
          >
            <motion.img 
              src="/lovable-uploads/8887f665-040b-4d66-a143-76b8827f0444.png" 
              alt="Calendar" 
              className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain"
              whileHover={{ scale: 1.1, rotate: -5 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </div>
      </section>

      {/* Enhanced Pricing Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-red mb-12 md:mb-16 relative"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="relative inline-block">
              QUANTO COSTA?
              <motion.div 
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-brand-red to-yellow-400 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
            </span>
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16"
            variants={mobileStaggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Suggested Price */}
            <motion.div 
              className="bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-gray-200 relative group"
              variants={fadeInUp}
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">€250,00</h3>
                <p className="text-sm text-gray-600 mb-4">IVA ESCLUSA</p>
                <p className="text-brand-red font-bold text-lg">
                  PREZZO SUGGERITO<br />
                  ENTE BILATERALE
                </p>
              </div>
            </motion.div>

            {/* Ferrari Service Price - Center Card with uploaded logo */}
            <motion.div 
              className="bg-white p-6 md:p-8 rounded-2xl shadow-xl border-2 border-brand-red relative group transform scale-105"
              variants={fadeInUp}
              whileHover={{ scale: 1.1, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-brand-red text-white px-4 py-2 rounded-full text-sm font-bold">
                  PIÙ POPOLARE
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-white rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">€149,00</h3>
                <p className="text-sm text-gray-600 mb-4">IVA ESCLUSA</p>
                <p className="text-brand-red font-bold text-lg mb-6">CLIENTI</p>
                <div className="flex items-center justify-center mb-6">
                  <img 
                    src="/lovable-uploads/719d571a-1a2d-4a38-9d88-a850b42f2d80.png" 
                    alt="Centro Logo" 
                    className="h-12 object-contain"
                    onError={(e) => {
                      e.currentTarget.src = tutelaImpresaLogo;
                    }}
                  />
                </div>
                <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="red" size="lg" className="w-full rounded-full hover:shadow-xl hover:shadow-red-500/30 transition-all duration-300">
                    ACQUISTA ORA
                  </Button>
                </motion.div>
              </div>
            </motion.div>

            {/* Tutela Impresa Price */}
            <motion.div 
              className="bg-gradient-to-br from-brand-red to-red-700 p-6 md:p-8 rounded-2xl shadow-xl text-white relative group overflow-hidden"
              variants={fadeInUp}
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-red-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <h3 className="text-4xl md:text-5xl font-bold mb-2">€99,00</h3>
                <p className="text-sm mb-4 opacity-90">IVA ESCLUSA</p>
                <p className="text-white font-bold text-lg mb-2">CLIENTI</p>
                <p className="text-white font-bold text-xl mb-6">TUTELA IMPRESA 100%</p>
                <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="w-full bg-white text-brand-red border-white hover:bg-gray-100 rounded-full font-bold hover:shadow-xl transition-all duration-300"
                  >
                    ACQUISTA ORA
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section - keeping existing structure */}
      <section className="bg-brand-red text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Side - Content */}
            <motion.div 
              className="text-left"
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="mb-8">
                <Button variant="redOutline" size="sm">
                  💬 Contattaci Ora
                </Button>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Pronto per<br />
                trasformare<br />
                la tua azienda?
              </h2>
              <p className="text-lg mb-8 leading-relaxed">
                Compila il form e ricevi una demo personalizzata di Tutela Impresa. I nostri esperti ti mostreranno come ottimizzare la sicurezza aziendale.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-sm">📞</span>
                  <span>T. 02.30316594</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm">📧</span>
                  <span>ferrariservice@tutela-impresa.com</span>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Contact Form */}
            <motion.div 
              className="bg-white rounded-lg p-8 text-gray-900"
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-brand-red mb-1">Email</label>
                  <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-brand-red mb-1">Nome</label>
                  <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-brand-red mb-1">Cognome</label>
                  <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-brand-red mb-1">Azienda</label>
                  <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-brand-red mb-1">Phone</label>
                  <input type="tel" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-red" />
                </div>

                <div className="text-xs text-gray-600 mt-4">
                  <p className="font-medium mb-2">Puoi cancellarti in qualsiasi momento.</p>
                  <p>Leggi la nostra <a href="#" className="text-brand-red underline">Privacy Policy</a></p>
                </div>

                <div className="text-xs text-gray-600">
                  <p className="font-medium text-brand-red mb-2">Marketing Permissions</p>
                  <p className="mb-3">La tua privacy è importante per noi. Il consenso sottostante autorizza solo per ricevere aggiornamenti e marketing personalizzato. La tua privacy è importante per noi.</p>
                  
                  <p className="font-medium mb-2">Per favore, facci sapere come preferisci rimanere in contatto:</p>
                  
                  <div className="space-y-2 mb-4">
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span>Email</span>
                    </label>
                    <p className="text-xs ml-6">Ti invieremo occasionalmente e-mail quando presentiamo nuovi prodotti e aggiornamenti importanti per tenerli nel giro.</p>
                    
                    <label className="flex items-center mt-3">
                      <input type="checkbox" className="mr-2" />
                      <span>Pubblicità online personalizzata</span>
                    </label>
                    <p className="text-xs ml-6">Utilizzeremo le tue informazioni per mostrarti annunci più pertinenti per te di prima via migliorare la tua esperienza online.</p>
                  </div>

                  <p className="text-xs mb-4">Puoi cambiare idea in qualsiasi momento facendo clic sul collegamento di annullamento dell'iscrizione nel piè di pagina delle nostre e-mail. Per informazioni sulle nostre pratiche di privacy, visitare il nostro sito web.</p>
                </div>

                <div className="mb-4">
                  <div className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-xs">I'm not a robot</span>
                  </div>
                </div>

                <Button className="w-full bg-brand-red hover:bg-red-700 text-white py-3 rounded-md font-medium">
                  voglio ricevere info
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Social Media Section */}
      <motion.section 
        className="py-8 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <motion.div className="text-center mb-6" variants={fadeInUp}>
            <h2 className="text-3xl lg:text-4xl font-black text-brand-red mb-2 mt-16">
              Resta sempre aggiornato
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Segui i nostri canali social per rimanere sempre informato su novità, 
              aggiornamenti e contenuti esclusivi di Tutela Impresa.
            </p>
          </motion.div>

          {/* Social Cards */}
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6"
            variants={staggerContainer}
          >
            {[
              {
                platform: 'Facebook',
                title: 'Ferrari Service',
                subtitle: 'Pagina ufficiale',
                description: '1.8K seguaci',
                buttonText: 'Segui la Pagina',
                background: facebookBg,
                buttonClass: 'bg-[#1877F2] hover:bg-[#166FE5]',
                url: 'https://www.facebook.com/ferrariservice.it'
              },
              {
                platform: 'Instagram',
                title: 'Ferrari Service',
                subtitle: 'Profilo aziendale',
                description: '196 follower',
                buttonText: 'Segui su Instagram',
                background: facebookBg,
                buttonClass: 'bg-gradient-to-r from-[#E4405F] to-[#F56040] hover:from-[#D73552] hover:to-[#E55A3C]',
                url: 'https://www.instagram.com/ferrariservice.it/'
              },
              {
                platform: 'LinkedIn',
                title: 'Ferrari Service',
                subtitle: 'Profilo aziendale',
                description: '863 collegamenti',
                buttonText: 'Scopri su LinkedIn',
                background: linkedinBg,
                buttonClass: 'bg-[#0A66C2] hover:bg-[#095296]',
                url: 'https://www.linkedin.com/company/ferrariservice'
              }
            ].map((card, index) => (
              <motion.div
                key={index}
                className="group relative h-36 bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
                style={{
                  backgroundImage: `url(${card.background})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-40 transition-all duration-300"></div>

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-between p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-3">
                      <div className="w-16 h-16">
                        <img
                          src={ferrariLogo}
                          alt="Ferrari Logo"
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base font-bold text-white mb-0.5 leading-tight">{card.title}</h3>
                        <p className="text-gray-200 text-xs mb-0.5 font-medium">{card.subtitle}</p>
                        <p className="text-gray-300 text-xs">{card.description}</p>
                      </div>
                    </div>
                    <div className="bg-white bg-opacity-90 backdrop-blur-sm px-2 py-1 rounded-full flex-shrink-0">
                      <span className="text-xs font-semibold text-gray-800">{card.platform}</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="flex justify-start">
                    <motion.a
                      href={card.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${card.buttonClass} text-white py-2 px-4 rounded-lg font-semibold text-xs inline-flex items-center space-x-1.5`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>{card.buttonText}</span>
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Enhanced Footer */}
      <motion.footer 
        className="bg-white text-gray-800 py-16 border-t border-gray-200 mt-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="container mx-auto px-4 text-center max-w-3xl">
          {/* Logo */}
          <motion.div variants={fadeInUp}>
            <Link to="/" className="inline-flex items-center justify-center mb-6">
              <motion.img 
                src={logoImg} 
                alt="Tutela Impresa Logo" 
                className="h-14 object-contain"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
            </Link>
          </motion.div>

          {/* Description */}
          <motion.p 
            className="text-lg text-gray-600 leading-relaxed mb-6"
            variants={fadeInUp}
          >
            La soluzione completa per la gestione della sicurezza aziendale e degli adempimenti normativi.
            Protezione totale, conformità garantita, futuro sicuro.
          </motion.p>
          
          <motion.p 
            className="text-base text-gray-600 mb-4"
            variants={fadeInUp}
          >
            📧 <a href="mailto:info@ferrariservice.it" className="hover:text-brand-red transition-colors">ferrariservice@tutela-impresa.com</a> &nbsp; | &nbsp;
            ☎️ <a href="tel:+390123456789" className="hover:text-brand-red transition-colors">T. 02.30316594</a>
          </motion.p>

          {/* Social Icons */}
          <motion.div 
            className="flex justify-center space-x-4 mb-6"
            variants={fadeInUp}
          >
            {[
              { href: "https://www.facebook.com/ferrariservice.it", icon: "M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.877v-6.987h-2.54v-2.89h2.54V9.845c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.261c-1.243 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.128 22 16.991 22 12z" },
              { href: "https://www.instagram.com/ferrariservice.it/", icon: "M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm4.75-.25a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5z" },
              { href: "https://www.linkedin.com/company/ferrariservice", icon: "M20.447 20.452h-3.554v-5.569 c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939 v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" }
            ].map((social, index) => (
              <motion.a 
                key={index}
                href={social.href} 
                className="w-10 h-10 bg-gray-200 rounded-xl flex items-center justify-center hover:bg-brand-red hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d={social.icon}/>
                </svg>
              </motion.a>
            ))}
          </motion.div>
          
          {/* Divider with Brand Red Icon */}
          <motion.div 
            className="relative flex items-center justify-center my-10"
            variants={fadeInUp}
          >
            <div className="w-full border-t border-gray-300"></div>
            <motion.div 
              className="absolute bg-brand-red rounded-full w-14 h-14 flex items-center justify-center shadow-md"
              whileHover={{ scale: 1.1, rotate: 180 }}
              transition={{ duration: 0.3 }}
            >
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3 8h-6l3-8zm0 14a2 2 0 1 1 .001 3.999A2 2 0 0 1 12 16z" />
              </svg>
            </motion.div>
          </motion.div>

          {/* Business Info Line */}
          <motion.p 
            className="text-sm text-gray-500 mb-1"
            variants={fadeInUp}
          >
            Ferrari Service S.r.l. | P.IVA 03615110263 | Tutti i Diritti Riservati
          </motion.p>
        </div>
      </motion.footer>
    </div>
  );
}
