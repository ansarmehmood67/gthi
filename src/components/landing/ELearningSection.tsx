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
      staggerChildren: 0.5,
      delayChildren: 0.3
    }
  }
};

const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0
  }
};

export default function ELearningSection() {
  return (
    <section className="bg-gradient-to-br from-brand-red via-brand-red to-red-700 text-white py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 md:px-8 flex flex-col lg:flex-row items-start justify-center lg:justify-between text-center lg:text-left">

        <motion.div 
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="w-full lg:flex-1 mb-8 lg:mb-0"
        >
          <motion.h2 
            className="text-5xl md:text-6xl lg:text-6xl font-bold mb-6 md:mb-8 leading-tight"
            variants={fadeInUp}
          >
            MODALITÀ<br />
            E-LEARNING
          </motion.h2>
          <motion.div 
            className="text-brand-yellow text-3xl sm:text-4xl md:text-6xl lg:text-4xl font-extrabold mb-6 md:mb-8 "
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div 
              variants={staggerItem}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              FREQUENTI QUANDO PUOI
            </motion.div>
            <motion.div 
              variants={staggerItem}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              SUPERI L'ESAME
            </motion.div>
            <motion.div 
              variants={staggerItem}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              SCARICHI L'ATTESTATO
            </motion.div>
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
            <motion.p className="text-2xl sm:text-4xl md:text-2xl mb-4" variants={fadeInUp}>
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
                <a href="https://www.ferrariservice.it/wp-content/uploads/2025/09/100-ONLINE-CORSO-DATORI-DI-LAVORO.pdf" target="_blank" rel="noopener noreferrer">
                <Button variant="redOutline" size="lg" className="hover:shadow-xl transition-all duration-300">
                  SCARICA LA SCHEDA INFORMATIVA
                </Button>
                </a>
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
  );
}