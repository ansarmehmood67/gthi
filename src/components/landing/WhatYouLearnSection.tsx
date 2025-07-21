import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0 }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0 }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 }
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

const learningItems = [
  "Gestione della sicurezza aziendale e organizzazione del lavoro",
  "Normativa D.Lgs. 81/2008 e D.Lgs. 231/2001",
  "Obblighi e responsabilità del Datore di Lavoro",
  "Documentazione, sorveglianza sanitaria, gestione delle emergenze",
  "Ruoli e compiti di RSPP, RLS, medico competente, ASPP",
  "Comunicazione efficace, leadership, gestione dei conflitti"
];

export default function WhatYouLearnSection() {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col lg:flex-row items-start justify-between">
        
        {/* Bulb image first on mobile, second on desktop */}
        <motion.div 
          variants={fadeInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="w-full lg:w-2/5 flex justify-center mb-8 lg:mb-0 order-1 lg:order-2"
        >
          <motion.img 
            src="/lovable-uploads/b122901f-d6a5-4853-87ae-7e9dd269c7c7.png" 
            alt="Lightbulb" 
            className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        {/* Text content second on mobile, first on desktop */}
        <motion.div 
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="w-full lg:flex-1 order-2 lg:order-1"
        >
          <motion.h2 
  className="text-4xl md:text-6xl lg:text-6xl font-bold text-brand-red text-red-600 mb-8 leading-tight text-center lg:text-left"
  variants={fadeInUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 1, ease: "easeOut" }}
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
            {learningItems.map((item, index) => (
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
            <motion.div
  whileHover={{ scale: 1.05, y: -2 }}
  whileTap={{ scale: 0.95 }}
  className="flex justify-center md:justify-start w-full"
>
  <Button
    variant="red"
    size="lg"
    className="hover:shadow-xl hover:shadow-red-500/30 transition-all duration-300"
  >
    SCARICA LA SCHEDA INFORMATIVA
  </Button>
</motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
