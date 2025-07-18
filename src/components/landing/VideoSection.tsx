import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0
  }
};

export default function VideoSection() {
  return (
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
  );
}