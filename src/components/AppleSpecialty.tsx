import { motion } from "framer-motion";

const specialties = [
  {
    emoji: "📱",
    title: "iPhone & iPad",
    desc: "Telas, bateria, conectores, lógica e reparos de software com garantia.",
  },
  {
    emoji: "💻",
    title: "MacBook & iMac",
    desc: "Tela, bateria, lógica, SSD, reparos de hardware com conhecimento técnico avançado.",
  },
  {
    emoji: "⌚",
    title: "Apple Watch & AirPods",
    desc: "Reparos, bateria, conectividade e acessórios Apple com qualidade premium.",
  },
];

const AppleSpecialty = () => (
  <section className="section-padding bg-gradient-to-b from-primary/5 to-secondary/[0.02] border-y border-primary/15 relative overflow-hidden">
    {/* Background elements */}
    <div className="absolute top-1/2 -left-40 w-80 h-80 rounded-full bg-[radial-gradient(circle,hsl(var(--primary)/0.08)_0%,transparent_70%)] -translate-y-1/2 pointer-events-none blur-3xl" />
    <div className="absolute bottom-10 right-1/3 w-64 h-64 rounded-full bg-[radial-gradient(circle,hsl(var(--primary)/0.05)_0%,transparent_70%)] pointer-events-none blur-3xl" />

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
          Nossa Especialidade
        </motion.span>
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          Excelência em <span className="gradient-text">Produtos Apple</span>
        </h2>
        <p className="text-muted-foreground text-base max-w-2xl mx-auto">
          Especialistas certificados em reparos de produtos Apple com peças originais e garantia
        </p>
        <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-4" />
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {specialties.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="group relative card-glass rounded-2xl p-8 text-center hover:scale-105 transition-all duration-500 overflow-hidden"
            whileHover={{ y: -8 }}
          >
            {/* Glow effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
              <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 to-accent/10 blur-lg" />
            </div>

            <div className="relative z-10">
              <div className="text-6xl mb-4 group-hover:scale-110 group-hover:animate-subtle-bounce transition-all duration-500">{s.emoji}</div>
              <h3 className="text-xl font-bold mb-2.5 text-foreground group-hover:text-primary transition-colors duration-300">
                {s.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                {s.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AppleSpecialty;
