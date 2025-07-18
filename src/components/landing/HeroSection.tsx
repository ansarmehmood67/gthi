import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import FerrariLogo from "@/assets/ferrari-logo.svg";

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

export default function HeroSection() {
  return (
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
            className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-10 leading-tight text-white"
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
            src={FerrariLogo}
            alt="Ferrari Logo" 
            className="w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 object-contain"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </div>
    </section>
  );
}