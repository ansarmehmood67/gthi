import { Button } from "@/components/ui/button";
import { Check, Facebook, Instagram, Linkedin, Play } from "lucide-react";
import { Link } from "react-router-dom";

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
  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <header className="bg-white">
        <div className="max-w-7xl mx-auto px-8 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <img src="/lovable-uploads/c69ce02a-dd9f-457d-90bd-1793b4c8a0be.png" alt="TutelaImpresa Ferrari Service" className="h-12" />
          </div>
          <div className="flex gap-4">
            <Button variant="whiteRedText" size="sm">
              SCARICA LA SCHEDA INFORMATIVA
            </Button>
            <Button variant="yellow" size="sm">
              ACQUISTA ORA
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-brand-red text-white py-20">
        <div className="max-w-7xl mx-auto px-8 flex items-center">
          <div className="w-2/3 pr-12">
            <h1 className="text-6xl font-bold mb-10 leading-tight">
              100% ONLINE<br />
              <span className="text-7xl">CORSO</span><br />
              <span className="text-7xl">DATORI DI LAVORO</span>
            </h1>
            <div className="flex gap-4 mt-10">
              <Button variant="whiteOutline" size="lg">
                SCARICA LA SCHEDA INFORMATIVA
              </Button>
              <Button variant="yellow" size="lg">
                ACQUISTA ORA
              </Button>
            </div>
          </div>
          <div className="w-1/3 flex justify-end">
            <img src="/lovable-uploads/641f76c0-8333-4ae7-ac21-a0340b93a500.png" alt="Ferrari Logo" className="w-56 h-56 object-contain" />
          </div>
        </div>
      </section>

      {/* Mandatory Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-8 flex items-center">
          <div className="w-2/3 pr-12">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              OBBLIGATORIO DAL 2025
            </h2>
            <p className="text-2xl text-brand-red font-bold mb-4">
              CONFORME AL NUOVO ACCORDO STATO-REGIONI
            </p>
            <p className="text-lg text-gray-700 mb-2">
              Il nuovo corso da 16 ore per Datori di Lavoro è obbligatorio dal 2025
            </p>
            <p className="text-lg text-gray-700 mb-2">
              <strong>per tutte le aziende,</strong>
            </p>
            <p className="text-lg text-gray-700 mb-2">
              anche se hai un RSPP esterno.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Il corso è <strong>100% online, tracciato e conforme</strong>
            </p>
            <p className="text-lg text-gray-700">
              all'Accordo Stato-Regioni del 6 febbraio 2025.
            </p>
          </div>
          <div className="w-1/3 flex justify-center pr-8">
            <img src="/lovable-uploads/f849dc78-5f27-41d0-aef9-ec7438be761c.png" alt="Warning" className="w-48 h-48 object-contain" />
          </div>
        </div>
      </section>

      {/* E-Learning Section */}
      <section className="bg-brand-red text-white py-20">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <div className="flex-1">
            <h2 className="text-5xl font-bold mb-8">
              MODALITÀ<br />
              E-LEARNING
            </h2>
            <div className="text-brand-yellow text-2xl font-bold mb-8">
              FREQUENTI QUANDO PUOI<br />
              SUPERI L'ESAME<br />
              SCARICHI L'ATTESTATO
            </div>
          </div>
          <div className="flex-1 ml-12">
            <p className="text-xl mb-6">
              Il corso è interamente online<br />
              (e-learning asincrono), accessibile<br />
              24/7 da PC, tablet o smartphone.
            </p>
            <p className="text-xl mb-6">
              Include test intermedi, moduli<br />
              interattivi e supporto tutor.
            </p>
            <p className="text-xl mb-8">
              <strong>Durata: 16 ore</strong><br />
              <strong>Attestato: digitale e valido in<br />
              tutta Italia</strong>
            </p>
            <div className="flex gap-4">
              <Button variant="redOutline" size="lg">
                SCARICA LA SCHEDA INFORMATIVA
              </Button>
              <Button variant="yellow" size="lg">
                ACQUISTA ORA
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <div className="flex-1">
            <h2 className="text-5xl font-bold text-brand-red mb-8">
              COSA IMPARERAI?
            </h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center flex-shrink-0">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg">Obblighi e responsabilità del Datore di Lavoro</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center flex-shrink-0">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg">Normativa D.Lgs. 81/2008 e D.Lgs. 231/2001</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center flex-shrink-0">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg">Gestione della sicurezza aziendale e organizzazione del lavoro</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center flex-shrink-0">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg">Documentazione, sorveglianza sanitaria, gestione delle emergenze</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center flex-shrink-0">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg">Ruoli e compiti di RSPP, RLS, medico competente, ASPP</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center flex-shrink-0">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg">Comunicazione efficace, leadership, gestione dei conflitti</span>
              </div>
            </div>
            <div className="mt-8">
              <Button variant="red" size="lg">
                SCARICA LA SCHEDA INFORMATIVA
              </Button>
            </div>
          </div>
          <div className="flex justify-center ml-8">
            <img src="/lovable-uploads/b122901f-d6a5-4853-87ae-7e9dd269c7c7.png" alt="Lightbulb" className="w-48 h-48 object-contain" />
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-brand-red mb-8">
            GUARDA IL VIDEO
          </h2>
          <div className="relative max-w-4xl mx-auto mb-8">
            <div className="rounded-lg overflow-hidden relative aspect-video">
              <iframe 
                src="https://www.youtube.com/embed/WVg5d0aobcs?si=waM49fSSQducyC4P"
                title="Corso Datori di Lavoro Video" 
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* Course Details Section */}
      <section className="bg-brand-red text-white py-20">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <div className="flex-1">
            <h2 className="text-5xl font-bold mb-8">
              MODALITÀ E DURATA
            </h2>
            <div className="space-y-4 text-lg">
              <div className="flex items-center gap-3">
                <Check className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span>Il corso viene erogato completamente online in modalità e-learning asincrona.</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span>Potrai accedere alla piattaforma in qualsiasi momento, 24 ore su 24, da qualsiasi dispositivo connesso a Internet.</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span>Ogni modulo è tracciato, include test intermedi e materiali scaricabili.</span>
              </div>
              <div className="text-xl font-bold mt-6">
                ⏱️ Durata: 16 ore
              </div>
              <div className="text-xl font-bold">
                📋 Attestato: digitale, conforme all'Accordo Stato-Regioni 2025 valido in tutta Italia
              </div>
            </div>
            <div className="mt-8">
              <Button variant="redOutline" size="lg">
                SCARICA LA SCHEDA INFORMATIVA
              </Button>
            </div>
          </div>
          <div className="flex-shrink-0 ml-8 flex items-center justify-center">
            <img src="/lovable-uploads/8887f665-040b-4d66-a143-76b8827f0444.png" alt="Calendar" className="w-48 h-48 object-contain" />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold text-brand-red mb-12">
            QUANTO COSTA?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Suggested Price */}
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-4xl font-bold text-gray-900 mb-2">€250,00</h3>
              <p className="text-sm text-gray-600 mb-4">IVA ESCLUSA</p>
              <p className="text-brand-red font-bold text-lg">
                PREZZO SUGGERITO<br />
                ENTE BILATERALE
              </p>
            </div>

            {/* Ferrari Service Price */}
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-4xl font-bold text-gray-900 mb-2">€149,00</h3>
              <p className="text-sm text-gray-600 mb-4">IVA ESCLUSA</p>
              <p className="text-brand-red font-bold text-lg mb-4">CLIENTI</p>
              <div className="flex items-center justify-center mb-6">
                <img src={tutelaImpresaLogo} alt="Tutela Impresa" className="h-8" />
              </div>
              <Button variant="red" size="lg" className="w-full rounded-full">
                ACQUISTA ORA
              </Button>
            </div>

            {/* Tutela Impresa Price */}
            <div className="bg-brand-red p-8 rounded-lg shadow-lg text-white">
              <h3 className="text-4xl font-bold mb-2">€99,00</h3>
              <p className="text-sm mb-4">IVA ESCLUSA</p>
              <p className="text-white font-bold text-lg mb-2">CLIENTI</p>
              <p className="text-white font-bold text-xl mb-6">TUTELA IMPRESA 100%</p>
              <Button variant="outline" size="lg" className="w-full bg-white text-brand-red border-white hover:bg-gray-100 rounded-full font-bold">
                ACQUISTA ORA
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-brand-red text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Side - Content */}
            <div className="text-left">
              <div className="mb-8">
                <Button variant="redOutline" size="sm">
                  💬 Contattaci Ora
                </Button>
              </div>
              <h2 className="text-5xl font-bold leading-tight mb-6">
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
            </div>

            {/* Right Side - Contact Form */}
            <div className="bg-white rounded-lg p-8 text-gray-900">
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
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-6">
            <h2 className="text-3xl lg:text-4xl font-black text-brand-red mb-2 mt-16">
              Resta sempre aggiornato
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Segui i nostri canali social per rimanere sempre informato su novità, 
              aggiornamenti e contenuti esclusivi di Tutela Impresa.
            </p>
          </div>

          {/* Social Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            <div
              className="group relative h-36 bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
              style={{
                backgroundImage: `url(${facebookBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
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
                      <h3 className="text-base font-bold text-white mb-0.5 leading-tight">Ferrari Service</h3>
                      <p className="text-gray-200 text-xs mb-0.5 font-medium">Pagina ufficiale</p>
                      <p className="text-gray-300 text-xs">1.8K seguaci</p>
                    </div>
                  </div>
                  <div className="bg-white bg-opacity-90 backdrop-blur-sm px-2 py-1 rounded-full flex-shrink-0">
                    <span className="text-xs font-semibold text-gray-800">Facebook</span>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="flex justify-start">
                  <a
                    href="https://www.facebook.com/ferrariservice.it"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#1877F2] hover:bg-[#166FE5] text-white py-2 px-4 rounded-lg font-semibold text-xs inline-flex items-center space-x-1.5"
                  >
                    <span>Segui la Pagina</span>
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div
              className="group relative h-36 bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
              style={{
                backgroundImage: `url(${facebookBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
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
                      <h3 className="text-base font-bold text-white mb-0.5 leading-tight">Ferrari Service</h3>
                      <p className="text-gray-200 text-xs mb-0.5 font-medium">Profilo aziendale</p>
                      <p className="text-gray-300 text-xs">196 follower</p>
                    </div>
                  </div>
                  <div className="bg-white bg-opacity-90 backdrop-blur-sm px-2 py-1 rounded-full flex-shrink-0">
                    <span className="text-xs font-semibold text-gray-800">Instagram</span>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="flex justify-start">
                  <a
                    href="https://www.instagram.com/ferrariservice.it/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-[#E4405F] to-[#F56040] hover:from-[#D73552] hover:to-[#E55A3C] text-white py-2 px-4 rounded-lg font-semibold text-xs inline-flex items-center space-x-1.5"
                  >
                    <span>Segui su Instagram</span>
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div
              className="group relative h-36 bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
              style={{
                backgroundImage: `url(${linkedinBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
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
                      <h3 className="text-base font-bold text-white mb-0.5 leading-tight">Ferrari Service</h3>
                      <p className="text-gray-200 text-xs mb-0.5 font-medium">Profilo aziendale</p>
                      <p className="text-gray-300 text-xs">863 collegamenti</p>
                    </div>
                  </div>
                  <div className="bg-white bg-opacity-90 backdrop-blur-sm px-2 py-1 rounded-full flex-shrink-0">
                    <span className="text-xs font-semibold text-gray-800">LinkedIn</span>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="flex justify-start">
                  <a
                    href="https://www.linkedin.com/company/ferrariservice"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#0A66C2] hover:bg-[#095296] text-white py-2 px-4 rounded-lg font-semibold text-xs inline-flex items-center space-x-1.5"
                  >
                    <span>Scopri su LinkedIn</span>
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white text-gray-800 py-16 border-t border-gray-200 mt-12">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          {/* Logo */}
          <Link to="/" className="inline-flex items-center justify-center mb-6">
            <img src={logoImg} alt="Tutela Impresa Logo" className="h-14 object-contain" />
          </Link>

          {/* Description */}
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            La soluzione completa per la gestione della sicurezza aziendale e degli adempimenti normativi.
            Protezione totale, conformità garantita, futuro sicuro.
          </p>
          <p className="text-base text-gray-600 mb-4">
            📧 <a href="mailto:info@ferrariservice.it" className="hover:text-brand-red transition-colors">ferrariservice@tutela-impresa.com</a> &nbsp; | &nbsp;
            ☎️ <a href="tel:+390123456789" className="hover:text-brand-red transition-colors">T. 02.30316594</a>
          </p>

          {/* Social Icons */}
          <div className="flex justify-center space-x-4 mb-6">
            {/* Facebook */}
            <a href="https://www.facebook.com/ferrariservice.it" className="w-10 h-10 bg-gray-200 rounded-xl flex items-center justify-center hover:bg-brand-red hover:text-white transition-all duration-300 transform hover:scale-110">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.877v-6.987h-2.54v-2.89h2.54V9.845c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.261c-1.243 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.128 22 16.991 22 12z"/>
              </svg>
            </a>

            {/* Instagram */}
            <a href="https://www.instagram.com/ferrariservice.it/" className="w-10 h-10 bg-gray-200 rounded-xl flex items-center justify-center hover:bg-brand-red hover:text-white transition-all duration-300 transform hover:scale-110">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm4.75-.25a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5z"/>
              </svg>
            </a>

            {/* LinkedIn */}
            <a href="https://www.linkedin.com/company/ferrariservice" className="w-10 h-10 bg-gray-200 rounded-xl flex items-center justify-center hover:bg-brand-red hover:text-white transition-all duration-300 transform hover:scale-110">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569
                  c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939
                  v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 
                  3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 
                  7.433c-1.144 0-2.063-.926-2.063-2.065 
                  0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 
                  2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 
                  13.019H3.555V9h3.564v11.452zM22.225 
                  0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 
                  24 1.771 24h20.451C23.2 24 24 23.227 24 
                  22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>

          
          {/* Divider with Brand Red Icon */}
          <div className="relative flex items-center justify-center my-10">
            <div className="w-full border-t border-gray-300"></div>
            <div className="absolute bg-brand-red rounded-full w-14 h-14 flex items-center justify-center shadow-md">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3 8h-6l3-8zm0 14a2 2 0 1 1 .001 3.999A2 2 0 0 1 12 16z" />
              </svg>
            </div>
          </div>

          {/* Business Info Line */}
          <p className="text-sm text-gray-500 mb-1">
            Ferrari Service S.r.l. | P.IVA 03615110263 | Tutti i Diritti Riservati
          </p>

          
        </div>
      </footer>
    </div>
  );
}