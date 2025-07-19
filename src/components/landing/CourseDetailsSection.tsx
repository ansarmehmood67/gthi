import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
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

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0
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

const courseDetails = [
  "Il corso viene erogato completamente online in modalità e-learning asincrona.",
  "Potrai accedere alla piattaforma in qualsiasi momento, 24 ore su 24, da qualsiasi dispositivo connesso a Internet.",
  "Ogni modulo è tracciato, include test intermedi e materiali scaricabili."
];

export default function CourseDetailsSection() {
  return (
    <section className="bg-gradient-to-br from-brand-red via-brand-red to-red-700 text-white py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-8 flex flex-col lg:flex-row items-center justify-center lg:justify-between text-center lg:text-left">
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
              {/* Duration and Certificate moved to top */}
              <motion.div className="space-y-4" variants={fadeInUp}>
                <div className="text-xl md:text-2xl font-bold flex items-center gap-3">
                  <span className="text-2xl">⏱️</span>
                  <span>Durata: 16 ore</span>
                </div>
                <div className="text-xl md:text-2xl font-bold flex items-center gap-3">
                  <span className="text-2xl">📋</span>
                  <span>Attestato: digitale, conforme all'Accordo Stato-Regioni 2025 valido in tutta Italia</span>
                </div>
              </motion.div>

              {/* Checklist below */}
              {courseDetails.map((item, index) => (
                <motion.div key={index} className="flex items-start gap-4 group" variants={fadeInUp}>
                  <Check className="w-6 h-6 text-green-400 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-200" />
                  <span className="leading-relaxed">{item}</span>
                </motion.div>
              ))}
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
  );
}
