import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface Stat {
  value: number;
  suffix: string;
  label: string;
  detail: string;
}

const stats: Stat[] = [
  { value: 300, suffix: "+", label: "Clientes Atendidos", detail: "Em Florianópolis e região" },
  { value: 2000, suffix: "+", label: "Reparos Realizados", detail: "Com garantia e qualidade" },
  { value: 98, suffix: "%", label: "Taxa de Satisfação", detail: "Avaliação de clientes" },
  { value: 24, suffix: "h", label: "Resposta Rápida", detail: "Via WhatsApp" },
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;
          let current = 0;
          const increment = target / 50;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, 20);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-extrabold gradient-text mb-2">
      {count}{suffix}
    </div>
  );
};

const StatsSection = () => (
  <section className="section-padding border-y border-primary/15 bg-gradient-to-b from-primary/5 to-secondary/[0.02] relative overflow-hidden">
    {/* Background elements */}
    <div className="absolute top-1/2 right-1/4 w-80 h-80 rounded-full bg-[radial-gradient(circle,hsl(var(--primary)/0.08)_0%,transparent_70%)] -translate-y-1/2 pointer-events-none blur-3xl" />

    <div className="container-main relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h3 className="text-2xl md:text-3xl font-bold gradient-text mb-2">Nossos Números Falam</h3>
        <p className="text-muted-foreground text-sm">Confiança e qualidade comprovadas com resultados</p>
      </motion.div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.5 }}
            className="group relative text-center p-6 rounded-xl card-glass hover:scale-105 transition-all duration-500"
            whileHover={{ y: -4 }}
          >
            {/* Glow effect on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
              <div className="absolute -inset-1 bg-gradient-to-br from-primary/15 to-accent/10 blur-lg" />
            </div>

            <div className="relative z-10">
              <Counter target={s.value} suffix={s.suffix} />
              <div className="text-foreground font-semibold mb-1.5 text-sm group-hover:text-primary transition-colors duration-300">{s.label}</div>
              <div className="text-muted-foreground/70 text-xs leading-relaxed group-hover:text-muted-foreground transition-colors duration-300">{s.detail}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
