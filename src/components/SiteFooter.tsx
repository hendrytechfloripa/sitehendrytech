import { Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const SiteFooter = () => {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const links = [
    { label: "Home", href: "#home" },
    { label: "Serviços", href: "#servicos" },
    { label: "Sobre", href: "#sobre" },
    { label: "Contato", href: "#contato" },
  ];

  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <footer className="section-padding pb-6 bg-secondary/60 border-t border-primary/15 relative overflow-hidden backdrop-blur-sm">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[radial-gradient(circle,hsl(var(--primary)/0.05)_0%,transparent_70%)] pointer-events-none blur-3xl" />

      <div className="container-main relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10"
        >
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/images/logo-redonda.jpeg"
                alt="Hendry Tech"
                className="w-12 h-12 rounded-full object-cover border-2 border-primary/30 hover:border-primary/60 transition-all duration-300 shadow-[0_4px_12px_hsl(var(--primary)/0.2)]"
              />
              <h4 className="text-primary font-bold text-lg">Hendry Tech</h4>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Assistência técnica especializada em celulares, notebooks,
              computadores e linha Apple. Qualidade premium em Florianópolis e
              região.
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="text-primary font-bold mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-primary to-transparent rounded-full" />
              Links Rápidos
            </h4>
            <div className="flex flex-col gap-2.5">
              {links.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(link.href);
                  }}
                  className="text-muted-foreground text-sm hover:text-primary hover:translate-x-1 transition-all duration-200 inline-flex items-center gap-2 group"
                  whileHover={{ x: 4 }}
                >
                  <span className="text-primary/30 group-hover:text-primary transition-colors duration-200">
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="text-primary font-bold mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-primary to-transparent rounded-full" />
              Contato & Localização
            </h4>
            <div className="space-y-3.5 text-sm text-muted-foreground">
              <motion.p className="flex items-center gap-2 hover:text-primary transition-colors duration-200 group cursor-pointer">
                <Phone size={16} className="text-primary shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <strong className="text-foreground group-hover:text-primary transition-colors duration-200">+55 (48) 98877-2675</strong>
              </motion.p>
              <motion.p className="flex items-center gap-2 hover:text-primary transition-colors duration-200 group cursor-pointer">
                <svg className="w-4 h-4 text-primary shrink-0 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </motion.p>
              <motion.p className="flex items-center gap-2 hover:text-primary transition-colors duration-200 group cursor-pointer">
                <MapPin size={16} className="text-primary shrink-0 group-hover:scale-110 transition-transform duration-300" />
                Florianópolis, SC
              </motion.p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-primary/10 pt-6 text-center"
        >
          <p className="text-muted-foreground/70 text-xs leading-relaxed">
            © {new Date().getFullYear()} Hendry Tech. Todos os direitos reservados. | Assistência Técnica Premium em Celulares, Notebooks e Computadores | Florianópolis, SC
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default SiteFooter;
