import { motion } from "framer-motion";
import {
  Smartphone,
  Laptop,
  Monitor,
  Wrench,
  HardDrive,
  Database,
  ShieldCheck,
  Apple,
  Cpu,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: Apple,
    title: "Conserto iPhone & iPad",
    description: "Reparo de telas, bateria, botões e problemas de software. Peças originais com garantia.",
  },
  {
    icon: Cpu,
    title: "Reparo MacBook & iMac",
    description: "Consertos de hardware, lógica, tela, bateria e problemas de performance em produtos Apple.",
  },
  {
    icon: Smartphone,
    title: "Conserto Celulares Android",
    description: "Tela, bateria, conectores, software e peças. Marcas variadas de celulares inteligentes.",
  },
  {
    icon: Laptop,
    title: "Reparo Notebooks",
    description: "Tela, teclado, HD, SSD, bateria, placa-mãe e atualizações de sistema operacional.",
  },
  {
    icon: Monitor,
    title: "Conserto de Computadores",
    description: "Desktop: fonte, placa-mãe, RAM, HD, SSD e problemas gerais de software.",
  },
  {
    icon: Wrench,
    title: "Reparo de Placas",
    description: "Reparos especializados em placas-mãe, placas de vídeo e outros componentes.",
  },
  {
    icon: HardDrive,
    title: "Instalação de Sistema",
    description: "Instalação de Windows, macOS e Linux com otimização e configuração completa.",
  },
  {
    icon: Database,
    title: "Recuperação de Dados",
    description: "Recuperação segura de dados e arquivos perdidos com confidencialidade garantida.",
  },
  {
    icon: ShieldCheck,
    title: "Limpeza & Manutenção",
    description: "Limpeza interna, remoção de vírus, malware e otimização de desempenho.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const item = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ServicesSection = () => {
  return (
    <section id="servicos" className="section-padding relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-[radial-gradient(circle,hsl(var(--primary)/0.05)_0%,transparent_70%)] blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-[radial-gradient(circle,hsl(var(--primary)/0.03)_0%,transparent_70%)] blur-3xl pointer-events-none" />

      <div className="container-main relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 border border-primary/20 mb-4 animate-fade-in">
            O que fazemos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Nossos <span className="gradient-text">Serviços</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base">
            Soluções completas em assistência técnica para seus dispositivos eletrônicos com precisão e excelência
          </p>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-4" />
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              variants={item}
              className="group relative card-glass rounded-2xl p-6 cursor-default hover:scale-105 transition-all duration-500 overflow-hidden"
              whileHover={{ y: -8 }}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-accent/10 to-primary/20 blur-xl" />
              </div>

              <div className="relative z-10">
                <div className="w-14 h-14 gradient-primary rounded-xl flex items-center justify-center mb-5 group-hover:scale-125 group-hover:-rotate-3 group-hover:shadow-[0_8px_20px_hsl(var(--primary)/0.5)] transition-all duration-400">
                  <service.icon className="w-7 h-7 text-primary-foreground group-hover:animate-subtle-bounce" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                  {service.description}
                </p>

                {/* Arrow indicator */}
                <div className="mt-4 flex items-center gap-2 text-primary/0 group-hover:text-primary transition-all duration-300">
                  <span className="text-xs font-semibold uppercase tracking-wider">Saiba mais</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
