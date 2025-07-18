import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0 },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0 },
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

          {/* Right Side - MailerLite Form Embed */}
          <motion.div
            className="bg-white rounded-lg p-8 text-gray-900"
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <iframe
              src="/mailerlite-form.html"
              title="MailerLite Form"
              width="100%"
              height="100%"
              className="w-full h-[1000px] border-0"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
