import { motion } from "framer-motion";
import { Award, ShieldCheck, Apple, Wrench } from "lucide-react";

const items = [
  { icon: Award, title: "Profissionais Certificados", desc: "Técnicos com experiência e treinamento contínuo" },
  { icon: ShieldCheck, title: "Garantia Total", desc: "Todos os serviços com garantia de qualidade" },
  { icon: Apple, title: "Especialistas Apple", desc: "Conhecimento profundo de produtos Apple" },
  { icon: Wrench, title: "Equipamento Premium", desc: "Ferramentas e peças de qualidade comprovada" },
];

const TrustSection = () => (
  <section className="section-padding relative overflow-hidden">
    {/* Background elements */}
    <div className="absolute top-20 left-1/4 w-96 h-96 rounded-full bg-[radial-gradient(circle,hsl(var(--primary)/0.08)_0%,transparent_70%)] pointer-events-none blur-3xl" />
    <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-[radial-gradient(circle,hsl(var(--primary)/0.05)_0%,transparent_70%)] pointer-events-none blur-3xl" />

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
          Credibilidade
        </motion.span>
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Confiança & <span className="gradient-text">Qualidade Garantida</span>
        </h2>
        <p className="text-muted-foreground text-base">Normas profissionais e compromisso com excelência em tudo que fazemos</p>
        <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-4" />
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="group relative text-center p-6 rounded-2xl card-glass hover:scale-105 transition-all duration-500 overflow-hidden"
            whileHover={{ y: -4 }}
          >
            {/* Glow effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
              <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 to-accent/10 blur-lg" />
            </div>

            <div className="relative z-10">
              <div className="w-16 h-16 mx-auto gradient-primary rounded-xl flex items-center justify-center mb-4 shadow-[0_8px_24px_hsl(var(--primary)/0.35)] group-hover:scale-110 group-hover:shadow-[0_12px_32px_hsl(var(--primary)/0.5)] transition-all duration-300">
                <item.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustSection;
