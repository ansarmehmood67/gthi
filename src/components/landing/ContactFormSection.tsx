import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

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

export default function ContactFormSection() {
  return (
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
  );
}