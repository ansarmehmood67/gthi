import { motion } from "framer-motion";
import ferrariLogo from "@/assets/ferrari-logo.png";
import facebookBg from "@/assets/facebook-bg.jpg";
import linkedinBg from "@/assets/linkedin-bg.jpg";

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

const socialCards = [
  {
    platform: 'Facebook',
    title: 'Ferrari Service',
    subtitle: 'Pagina ufficiale',
    description: '1.8K seguaci',
    buttonText: 'Segui la Pagina',
    background: facebookBg,
    buttonClass: 'bg-[#1877F2] hover:bg-[#166FE5]',
    url: 'https://www.facebook.com/ferrariservice.it'
  },
  {
    platform: 'Instagram',
    title: 'Ferrari Service',
    subtitle: 'Profilo aziendale',
    description: '196 follower',
    buttonText: 'Segui su Instagram',
    background: facebookBg,
    buttonClass: 'bg-gradient-to-r from-[#E4405F] to-[#F56040] hover:from-[#D73552] hover:to-[#E55A3C]',
    url: 'https://www.instagram.com/ferrariservice.it/'
  },
  {
    platform: 'LinkedIn',
    title: 'Ferrari Service',
    subtitle: 'Profilo aziendale',
    description: '863 collegamenti',
    buttonText: 'Scopri su LinkedIn',
    background: linkedinBg,
    buttonClass: 'bg-[#0A66C2] hover:bg-[#095296]',
    url: 'https://www.linkedin.com/company/ferrariservice'
  }
];

export default function SocialMediaSection() {
  return (
    <motion.section 
      className="py-8 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer}
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div className="text-center mb-6" variants={fadeInUp}>
          <h2 className="text-3xl lg:text-4xl font-black text-brand-red mb-2 mt-16">
            Resta sempre aggiornato
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Segui i nostri canali social per rimanere sempre informato su novità, 
            aggiornamenti e contenuti esclusivi di Tutela Impresa.
          </p>
        </motion.div>

        {/* Social Cards */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6"
          variants={staggerContainer}
        >
          {socialCards.map((card, index) => (
            <motion.div
              key={index}
              className="group relative h-36 bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
              style={{
                backgroundImage: `url(${card.background})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
              variants={fadeInUp}
              whileHover={{ y: -5 }}
            >
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-40 transition-all duration-300"></div>

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-between p-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-3">
                    <div className="w-16 h-16">
                      <img
                        src={ferrariLogo}
                        alt="Ferrari Logo"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base font-bold text-white mb-0.5 leading-tight">{card.title}</h3>
                      <p className="text-gray-200 text-xs mb-0.5 font-medium">{card.subtitle}</p>
                      <p className="text-gray-300 text-xs">{card.description}</p>
                    </div>
                  </div>
                  <div className="bg-white bg-opacity-90 backdrop-blur-sm px-2 py-1 rounded-full flex-shrink-0">
                    <span className="text-xs font-semibold text-gray-800">{card.platform}</span>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="flex justify-start">
                  <motion.a
                    href={card.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${card.buttonClass} text-white py-2 px-4 rounded-lg font-semibold text-xs inline-flex items-center space-x-1.5`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>{card.buttonText}</span>
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}