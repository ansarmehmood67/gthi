import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Logo from "@/assets/tutelalogo.svg";

interface HeaderProps {
  isScrolled: boolean;
}

export default function Header({ isScrolled }: HeaderProps) {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-xl border-b border-gray-200/50' 
          : 'bg-white/90 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex justify-between items-center">
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="flex items-center"
        >
          <img 
            src={Logo} 
            alt="TutelaImpresa Ferrari Service" 
            className="h-12 md:h-16 object-contain"
          />
        </motion.div>
        <div className="hidden md:flex gap-4">
          <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
          <a href="https://www.ferrariservice.it/wp-content/uploads/2025/09/100-ONLINE-CORSO-DATORI-DI-LAVORO.pdf" target="_blank" rel="noopener noreferrer">
            <Button variant="whiteRedText" size="sm">
              SCARICA LA SCHEDA INFORMATIVA
            </Button>
           </a>

          </motion.div>
          <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
            <a href="https://tinyurl.com/FDDLPO" target="_blank" rel="noopener noreferrer">
            <Button variant="yellow" size="sm" className="hover:shadow-lg transition-all duration-300">
              ACQUISTA ORA
            </Button>
            </a>
          </motion.div>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a href="https://tinyurl.com/FDDLPO" target="_blank" rel="noopener noreferrer">
            <Button variant="yellow" size="sm" className="text-xs px-3">
              ACQUISTA
            </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
}