import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function Finale() {
  return (
    <section className="relative flex min-h-[75vh] items-center justify-center overflow-hidden bg-maroon px-6 py-24 text-center">
      {/* Subtle paper texture */}
      <div className="invitation-paper pointer-events-none absolute inset-0 opacity-[0.05]" />

      {/* Corner ornaments */}
      <div className="absolute left-5 top-5 text-4xl text-gold/25">
        ❦
      </div>

      <div className="absolute right-5 top-5 -scale-x-100 text-4xl text-gold/25">
        ❦
      </div>

      <div className="relative z-10 mx-auto max-w-3xl">

        {/* Heart */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-gold/30"
        >
          <Heart
            size={18}
            strokeWidth={1.2}
            className="text-gold"
          />
        </motion.div>

        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-8 font-sans text-[9px] uppercase tracking-[0.5em] text-gold"
        >
          With Love & Gratitude
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05, duration: 0.55 }}
          className="mt-5 font-display text-6xl text-cream sm:text-7xl md:text-8xl"
        >
          Thank You
        </motion.h2>

        <div className="mx-auto my-8 gold-divider" />

        {/* Message */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.55 }}
          className="mx-auto max-w-lg font-display text-xl italic leading-8 text-cream/55 sm:text-2xl"
        >
          We cannot wait to celebrate this beautiful beginning
          surrounded by the people we love.
        </motion.p>

        {/* Couple */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.55 }}
          className="mt-12"
        >
          <h3 className="font-display text-5xl text-cream sm:text-6xl">
            Manaswini
          </h3>

          <p className="my-2 font-display text-3xl italic text-gold">
            &
          </p>

          <h3 className="font-display text-5xl text-cream sm:text-6xl">
            Dinesh Reddy
          </h3>
        </motion.div>

        {/* Date */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-10"
        >
          <p className="font-display text-2xl tracking-[0.18em] text-gold">
            16 • 10 • 2026
          </p>

          <p className="mt-3 font-sans text-[8px] uppercase tracking-[0.3em] text-cream/35">
            PLR Convention Centre • Tirupati
          </p>
        </motion.div>

        {/* Closing */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25, duration: 0.5 }}
          className="mt-12"
        >
          <p className="font-display text-xl italic text-cream/45">
            See you at the wedding
          </p>

          <div className="mt-6 text-2xl text-gold/60">
            ❦
          </div>
        </motion.div>

      </div>
    </section>
  );
}