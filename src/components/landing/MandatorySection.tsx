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

export default function MandatorySection() {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col lg:flex-row items-center text-center lg:text-left">
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
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight"
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              OBBLIGATORIO DAL 2025
            </motion.h2>
            <motion.p 
              className="text-3xl md:text-3xl text-brand-red font-extrabold"
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            >
              CONFORME AL NUOVO ACCORDO STATO-REGIONI
            </motion.p>
            <motion.div 
              className="space-y-3 text-lg md:text-xl text-gray-900 font-DM-Sans"
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
                Il Nuovo corso da 16 ore per Datori di Lavoro è obbligatorio dal 2025
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
  );
}