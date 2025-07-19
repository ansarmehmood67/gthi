import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import tutelaImpresaLogo from "@/assets/tutelalogo.svg";

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

const socialIcons = [
  { 
    href: "https://www.facebook.com/ferrariservice.it", 
    icon: "M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.877v-6.987h-2.54v-2.89h2.54V9.845c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.261c-1.243 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.128 22 16.991 22 12z" 
  },
  { 
    href: "https://www.instagram.com/ferrariservice.it/", 
    icon: "M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm4.75-.25a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5z" 
  },
  { 
    href: "https://www.linkedin.com/company/ferrariservice", 
    icon: "M20.447 20.452h-3.554v-5.569 c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939 v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" 
  }
];

export default function Footer() {
  return (
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
              src={tutelaImpresaLogo} 
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
          {socialIcons.map((social, index) => (
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
  );
}