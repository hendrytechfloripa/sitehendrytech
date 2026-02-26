import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/5548988772675?text=Olá%20Hendry%20Tech!%20Gostaria%20de%20solicitar%20um%20orçamento";

const HeroSection = () => {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle,hsl(var(--primary)/0.08)_0%,transparent_70%)] top-1/2 right-[-350px] -translate-y-1/2 pointer-events-none blur-3xl" />
      <div className="absolute w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,hsl(var(--primary)/0.05)_0%,transparent_70%)] bottom-[-200px] left-[-200px] pointer-events-none blur-3xl" />
      
      {/* Animated accent line */}
      <div className="absolute top-1/3 right-0 w-1 h-32 bg-gradient-to-b from-primary to-transparent opacity-20" />
      <div className="absolute bottom-1/3 left-0 w-1 h-32 bg-gradient-to-t from-primary to-transparent opacity-20" />

      {/* Decorative logo watermark */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none hidden lg:block">
        <img
          src="/images/logo-redonda.jpeg"
          alt=""
          className="h-[450px] w-auto object-contain rounded-full"
        />
      </div>

      <div className="container-main grid md:grid-cols-2 gap-8 md:gap-16 items-center px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="inline-block px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider text-primary bg-primary/12 border border-primary/30 mb-6 hover:border-primary/50 hover:bg-primary/15 transition-all duration-300 cursor-default"
          >
            Com 5+ Anos de Experiência
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6"
          >
            Assistência Técnica{" "}
            <span className="gradient-text">de Excelência</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8 max-w-lg"
          >
            Consertos especializados em celulares, notebooks e computadores.
            Somos especialistas em linha Apple (iPhones e MacBooks). Atendimento
            rápido e profissional em Florianópolis e região com garantia de
            qualidade premium.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 gradient-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold text-base hover:-translate-y-1.5 hover:shadow-[0_16px_40px_hsl(var(--primary)/0.4)] transition-all duration-300 group"
            >
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Solicitar Serviço
            </a>
            <button
              onClick={() => scrollTo("#servicos")}
              className="inline-flex items-center justify-center gap-2 border-2 border-primary/60 text-primary px-8 py-4 rounded-xl font-semibold text-base hover:bg-primary/10 hover:border-primary hover:-translate-y-1.5 hover:shadow-[0_12px_30px_hsl(var(--primary)/0.2)] transition-all duration-300 group"
            >
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              Conhecer Serviços
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center md:order-last order-first"
        >
          <div className="relative">
            {/* Glow behind the image - enhanced */}
            <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,hsl(var(--primary)/0.25)_0%,hsl(var(--primary)/0.05)_70%)] scale-125 blur-3xl animate-glow-pulse" />
            <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,hsl(var(--accent)/0.15)_0%,transparent_70%)] scale-110 blur-2xl" />
            
            <img
              src="/images/logo-redonda.jpeg"
              alt="Hendry Tech Logo"
              className="relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full object-cover border-2 border-primary/25 shadow-[0_20px_60px_hsl(var(--primary)/0.25)] animate-float hover:border-primary/40 transition-all duration-300"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
