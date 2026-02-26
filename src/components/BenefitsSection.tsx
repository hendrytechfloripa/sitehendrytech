import { motion } from "framer-motion";
import { Apple, Zap, MapPin, Star, Handshake, Wrench } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  { icon: Apple, title: "Especialistas em Apple", description: "Certificados e especializados em iPhones, iPads, MacBooks e iMac." },
  { icon: Zap, title: "Atendimento Rápido", description: "Resposta imediata via WhatsApp e diagnóstico rápido dos problemas." },
  { icon: MapPin, title: "Florianópolis e Região", description: "Atendemos Florianópolis, São José, Palhoça e Biguaçu com agilidade." },
  { icon: Star, title: "Serviço Premium", description: "Qualidade excepcional com profissionais experientes e peças de qualidade." },
  { icon: Handshake, title: "Garantia Total", description: "Todos os serviços com garantia e confiança em nossas soluções." },
  { icon: Wrench, title: "Reparos Complexos", description: "Desde instalação de sistema até reparos em placa e tela com excelência." },
];

const BenefitsSection = () => (
  <section id="sobre" className="section-padding gradient-section-alt relative overflow-hidden">
    {/* Decorative elements */}
    <div className="absolute -top-32 right-1/4 w-96 h-96 rounded-full bg-[radial-gradient(circle,hsl(var(--primary)/0.06)_0%,transparent_70%)] pointer-events-none blur-3xl" />
    <div className="absolute -bottom-20 left-10 w-64 h-64 rounded-full bg-[radial-gradient(circle,hsl(var(--primary)/0.04)_0%,transparent_70%)] pointer-events-none blur-3xl" />

    <div className="container-main relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-primary bg-primary/12 border border-primary/25 mb-4"
        >
          Diferenciais
        </motion.span>
        <h2 className="text-3xl md:text-4xl font-bold">
          Por que escolher <span className="gradient-text">Hendry Tech?</span>
        </h2>
        <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-4" />
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((b, i) => (
          <motion.div
            key={b.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="group relative card-glass rounded-xl p-6 hover:scale-105 transition-all duration-500 overflow-hidden"
            whileHover={{ y: -4 }}
          >
            {/* Glow effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
              <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 to-accent/10 blur-lg" />
            </div>

            <div className="relative z-10 flex gap-4 items-start">
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shrink-0 shadow-[0_4px_16px_hsl(var(--primary)/0.3)] group-hover:scale-110 group-hover:shadow-[0_8px_24px_hsl(var(--primary)/0.4)] transition-all duration-300">
                <b.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-foreground mb-1.5 group-hover:text-primary transition-colors duration-300">{b.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">{b.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsSection;
