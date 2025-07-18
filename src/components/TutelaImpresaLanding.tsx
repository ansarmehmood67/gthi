import { Button } from "@/components/ui/button";
import { Check, Facebook, Instagram, Linkedin, Play } from "lucide-react";

import ferrariLogo from "@/assets/ferrari-logo.png";
import warningIcon from "@/assets/warning-icon.png";
import lightbulbIcon from "@/assets/lightbulb-icon.png";
import notebookIcon from "@/assets/notebook-icon.png";
import instructorPhoto from "@/assets/instructor-photo.png";
import tutelaImpresaLogo from "@/assets/tutelaimpresa-logo.png";

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

      {/* CTA Section */}
      <section className="bg-brand-red text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="mb-8">
            <Button variant="redOutline" size="sm">
              💬 Contattaci Ora
            </Button>
          </div>
          <h2 className="text-5xl font-bold leading-tight">
            Pronto per<br />
            trasformare<br />
            la tua azienda?
          </h2>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-brand-red mb-4">
            Resta sempre aggiornato
          </h2>
          <p className="text-gray-600 mb-8">
            Segui i nostri canali social per rimanere sempre informato su novità, aggiornamenti<br />
            e contenuti esclusivi di Tutela Impresa.
          </p>
          <div className="flex justify-center gap-8 mb-12">
            <div className="bg-blue-600 p-6 rounded-lg text-white text-center max-w-xs">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
                  <span className="text-brand-red font-bold text-sm">F</span>
                </div>
                <span className="font-bold">Ferrari Service</span>
              </div>
              <p className="text-sm mb-4">Pagina ufficiale<br />1.8k seguaci</p>
              <Button variant="outline" size="sm" className="bg-blue-500 text-white border-white">
                Segui la Pagina →
              </Button>
            </div>

            <div className="bg-pink-600 p-6 rounded-lg text-white text-center max-w-xs">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
                  <span className="text-brand-red font-bold text-sm">F</span>
                </div>
                <span className="font-bold">Ferrari Service</span>
              </div>
              <p className="text-sm mb-4">Profilo aziendale<br />1.2k follower</p>
              <Button variant="outline" size="sm" className="bg-pink-500 text-white border-white">
                Segui su Instagram →
              </Button>
            </div>

            <div className="bg-blue-700 p-6 rounded-lg text-white text-center max-w-xs">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
                  <span className="text-brand-red font-bold text-sm">F</span>
                </div>
                <span className="font-bold">Ferrari Service</span>
              </div>
              <p className="text-sm mb-4">Profilo aziendale<br />800 connections</p>
              <Button variant="outline" size="sm" className="bg-blue-600 text-white border-white">
                Segui su LinkedIn →
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 bg-brand-red rounded-sm flex items-center justify-center">
              <span className="text-white font-bold">T</span>
            </div>
            <span className="font-bold text-2xl text-brand-red">TUTELA IMPRESA</span>
          </div>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            La soluzione completa per la gestione della sicurezza aziendale e degli adempimenti
            normativi. Protezione totale, conformità garantita, futuro sicuro.
          </p>
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="text-blue-600">📧 ferrariservice@tutela-impresa.com</span>
            <span className="text-gray-400">|</span>
            <span className="text-gray-600">📞 T. 02.30316594</span>
          </div>
          <div className="flex justify-center gap-4">
            <Facebook className="w-6 h-6 text-gray-400 hover:text-blue-600 cursor-pointer" />
            <Instagram className="w-6 h-6 text-gray-400 hover:text-pink-600 cursor-pointer" />
            <Linkedin className="w-6 h-6 text-gray-400 hover:text-blue-700 cursor-pointer" />
          </div>
        </div>
      </footer>
    </div>
  );
}