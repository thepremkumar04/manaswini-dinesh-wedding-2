import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  MessageCircle,
  ExternalLink,
} from "lucide-react";

export default function StudioSignature() {
  return (
    <section className="relative overflow-hidden bg-[#633B3F] px-6 pb-32 pt-16 sm:px-8 sm:pb-28">
      {/* Texture */}
      <div className="invitation-paper absolute inset-0 opacity-[0.035]" />

      {/* Ambient glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.06, 0.12, 0.06],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/20 blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-3xl text-center">

        {/* Ornament */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-xl text-gold"
        >
          ❦
        </motion.div>

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 15, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="mx-auto mt-6 flex max-w-[280px] items-center justify-center rounded-2xl border border-gold/20 bg-white/95 px-6 py-4 shadow-xl"
        >
          <img
            src="/studio-logo.png"
            alt="Suresh Studio"
            className="h-auto w-full max-w-[230px] object-contain"
          />
        </motion.div>

        {/* Studio name */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-6 font-display text-4xl text-cream sm:text-5xl"
        >
          Suresh Studio
        </motion.h2>

        <p className="mt-3 text-[8px] uppercase tracking-[0.35em] text-gold">
          Photography • Cinematography • Wedding Films
        </p>

        <p className="mt-3 text-xs text-cream/50">
          Tirupati • Puttur
        </p>

        <div className="mx-auto my-7 h-px w-16 bg-gold/40" />

        {/* Contact buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3">

          <a
            href="tel:+919866030257"
            className="inline-flex items-center gap-2 border border-gold/25 bg-white/5 px-4 py-2.5 text-[8px] tracking-[0.12em] text-cream/75 transition-colors hover:border-gold/60 hover:text-gold"
          >
            <Phone size={12} strokeWidth={1.5} />
            +91 98660 30257
          </a>

          <a
            href="https://www.instagram.com/sureshstudio7/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-gold/25 bg-white/5 px-4 py-2.5 text-[8px] uppercase tracking-[0.15em] text-cream/75 transition-colors hover:border-gold/60 hover:text-gold"
          >
            <span className="text-[10px] font-semibold"></span>
            Instagram
          </a>

          <a
            href="https://maps.app.goo.gl/Mjk2ZW5fXAoN8ku89"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-gold/25 bg-white/5 px-4 py-2.5 text-[8px] uppercase tracking-[0.15em] text-cream/75 transition-colors hover:border-gold/60 hover:text-gold"
          >
            <MapPin size={12} strokeWidth={1.5} />
            Location
            <ExternalLink size={10} strokeWidth={1.5} />
          </a>

        </div>

        {/* Tagline */}
        <p className="mt-8 text-[7px] uppercase tracking-[0.3em] text-cream/20">
          Capturing moments that last forever
        </p>
      </div>

      {/* Website credit — bottom right */}
      <motion.div
        initial={{ opacity: 0, x: 15 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.7 }}
        className="absolute bottom-5 right-5 z-20 whitespace-nowrap text-center sm:bottom-7 sm:right-8"
      >
        <p className="text-[7px] uppercase tracking-[0.22em] text-cream/40">
          Website Crafted By
        </p>

        <p className="mt-1 font-display text-base text-cream/80">
          Prem
        </p>

        <a
          href="https://wa.me/918008307484"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1 inline-flex items-center gap-1.5 text-[8px] tracking-[0.12em] text-gold/70 transition-colors hover:text-gold"
        >
          <MessageCircle size={11} strokeWidth={1.5} />
          8008307484
        </a>
      </motion.div>
    </section>
  );
}