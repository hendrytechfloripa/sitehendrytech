import { motion } from "framer-motion";
import { Phone } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/5548988772675?text=Olá%20Hendry%20Tech!%20Gostaria%20de%20solicitar%20um%20orçamento%20para%20reparo";

const CtaSection = () => {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 gradient-to-br from-primary/8 via-card to-secondary/5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(var(--primary)/0.12)_0%,transparent_50%)]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-[radial-gradient(circle,hsl(var(--primary)/0.05)_0%,transparent_70%)] blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full bg-[radial-gradient(circle,hsl(var(--accent)/0.06)_0%,transparent_70%)] blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="container-main relative z-10 max-w-3xl mx-auto"
      >
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold mb-3 leading-tight"
          >
            Seu Dispositivo Precisa de <span className="gradient-text">Reparo?</span>
          </motion.h2>

          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-6" />

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-2xl mx-auto"
          >
            Envie uma mensagem via WhatsApp e receba um diagnóstico rápido em minutos.
            Atendemos celulares, notebooks, computadores e produtos Apple com excelência 
            em Florianópolis e região.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 gradient-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold text-base hover:-translate-y-1.5 hover:shadow-[0_20px_50px_hsl(var(--primary)/0.4)] transition-all duration-300 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <svg className="w-5 h-5 group-hover:scale-125 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Solicitar Orçamento
            </motion.a>
            <motion.button
              onClick={() => scrollTo("#contato")}
              className="inline-flex items-center justify-center gap-2 border-2 border-primary/70 text-primary px-8 py-4 rounded-xl font-semibold text-base hover:bg-primary/15 hover:border-primary hover:-translate-y-1.5 hover:shadow-[0_12px_32px_hsl(var(--primary)/0.2)] transition-all duration-300 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Phone size={20} className="group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" />
              Fale Conosco
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default CtaSection;
