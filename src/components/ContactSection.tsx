import { useState } from "react";
import { motion } from "framer-motion";
import { User, Mail, MessageSquare, Send } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.message) return;
    const msg = `Olá Hendry Tech! Meu nome é ${form.name}. ${form.message}`;
    window.open(`https://wa.me/5548988772675?text=${encodeURIComponent(msg)}`, "_blank");
    setSubmitted(true);
    setForm({ name: "", email: "", phone: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  const inputClass =
    "w-full px-4 py-3.5 rounded-xl bg-secondary/40 border border-primary/20 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/60 focus:bg-secondary/60 focus:shadow-[0_0_0_4px_hsl(var(--primary)/0.15)] transition-all duration-300 text-sm backdrop-blur-sm";

  return (
    <section id="contato" className="section-padding relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 right-0 w-96 h-96 rounded-full bg-[radial-gradient(circle,hsl(var(--primary)/0.08)_0%,transparent_70%)] -translate-y-1/2 pointer-events-none blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-72 h-72 rounded-full bg-[radial-gradient(circle,hsl(var(--primary)/0.04)_0%,transparent_70%)] pointer-events-none blur-3xl" />

      <div className="max-w-xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-primary bg-primary/12 border border-primary/25 mb-4"
          >
            Rápido e Fácil
          </motion.span>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Entre em <span className="gradient-text">Contato</span>
          </h2>
          <p className="text-muted-foreground text-base">Vamos conversar sobre suas necessidades em tempo real</p>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-4" />
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="card-glass rounded-2xl p-8 border border-primary/15"
        >
          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mb-6 p-4 rounded-lg bg-primary/15 border border-primary/30 text-primary text-sm font-medium flex items-center gap-2"
            >
              <svg className="w-5 h-5 animate-bounce" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Mensagem enviada! Você será redirecionado ao WhatsApp.
            </motion.div>
          )}

          <div className="space-y-5">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
            >
              <label className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide mb-2.5 text-foreground/90">
                <User size={16} className="text-primary" /> Nome Completo
              </label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Seu nome aqui..."
                required
                className={inputClass}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <label className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide mb-2.5 text-foreground/90">
                <Mail size={16} className="text-primary" /> Email
              </label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="seu@email.com"
                className={inputClass}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
            >
              <label className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide mb-2.5 text-foreground/90">
                <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </label>
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder="(48) 98877-2675"
                required
                className={inputClass}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <label className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide mb-2.5 text-foreground/90">
                <MessageSquare size={16} className="text-primary" /> Mensagem
              </label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Descreva seu problema ou dúvida..."
                required
                rows={4}
                className={`${inputClass} resize-none`}
              />
            </motion.div>

            <motion.button
              type="submit"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full gradient-primary text-primary-foreground py-4 rounded-xl font-semibold text-base flex items-center justify-center gap-2 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_hsl(var(--primary)/0.4)] transition-all duration-300 group"
            >
              <Send size={18} className="group-hover:-rotate-45 group-hover:scale-110 transition-all duration-300" />
              Enviar Mensagem
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
