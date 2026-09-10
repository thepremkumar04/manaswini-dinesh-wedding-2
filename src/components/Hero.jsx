import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-maroon px-6 py-20 text-center">
      {/* Texture */}
      <div className="invitation-paper absolute inset-0 opacity-[0.08]" />

      {/* Ambient glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.12, 0.22, 0.12],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/20 blur-3xl"
      />

      {/* Decorative ornaments */}
      <div className="pointer-events-none absolute left-4 top-8 font-display text-6xl text-gold/30 sm:left-10 sm:text-8xl">
        ❦
      </div>

      <div className="pointer-events-none absolute right-4 top-8 -scale-x-100 font-display text-6xl text-gold/30 sm:right-10 sm:text-8xl">
        ❦
      </div>

      <div className="pointer-events-none absolute bottom-8 left-4 rotate-180 font-display text-6xl text-gold/30 sm:left-10 sm:text-8xl">
        ❦
      </div>

      <div className="pointer-events-none absolute bottom-8 right-4 rotate-180 -scale-x-100 font-display text-6xl text-gold/30 sm:right-10 sm:text-8xl">
        ❦
      </div>

      {/* Main content */}
      <div className="relative z-10 w-full max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-sans text-[9px] uppercase tracking-[0.55em] text-gold"
        >
          With the blessings of our elders
        </motion.p>

        <motion.div
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: 90, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mx-auto my-7 h-px bg-gold/60"
        />

        <motion.p
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="font-serif text-sm uppercase tracking-[0.35em] text-cream/70"
        >
          Wedding Ceremony
        </motion.p>

        {/* Bride */}
        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.6,
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-8 font-display text-6xl sm:text-7xl font-medium leading-[0.8] text-cream sm:text-8xl md:text-9xl"
        >
          Manaswini
        </motion.h1>

        {/* Ampersand */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="my-5 font-display text-4xl italic text-gold sm:text-5xl"
        >
          &
        </motion.div>

        {/* Groom */}
        <motion.h2
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: 1,
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="font-display text-7xl font-medium leading-[0.8] text-cream sm:text-8xl md:text-9xl"
        >
          Dinesh Reddy
        </motion.h2>

        <motion.div
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: 120, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="mx-auto my-8 h-px bg-gold/60"
        />

        {/* Date */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.4, duration: 0.8 }}
        >
          <p className="font-display text-3xl tracking-[0.2em] text-gold sm:text-4xl">
            16 • 10 • 2026
          </p>

          <p className="mt-3 font-sans text-[9px] uppercase tracking-[0.35em] text-cream/55">
            Friday • PLR Convention Centre • Tirupati
          </p>
        </motion.div>

        {/* Muhurtham */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.7, duration: 0.8 }}
          className="mx-auto mt-10 max-w-md border border-gold/25 bg-black/10 px-6 py-5 backdrop-blur-sm"
        >
          <p className="font-sans text-[8px] uppercase tracking-[0.35em] text-gold">
            Auspicious Muhurtham
          </p>

          <p className="mt-2 font-display text-2xl text-cream sm:text-3xl">
            8:15 AM — 10:27 AM
          </p>

          <p className="mt-2 font-sans text-[8px] uppercase tracking-[0.25em] text-cream/45">
            Vrushika Lagnam
          </p>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4, duration: 1 }}
        className="absolute bottom-5 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="flex flex-col items-center gap-1 text-gold/60"
        >
          <span className="font-sans text-[7px] uppercase tracking-[0.3em]">
            Scroll
          </span>
          <ChevronDown size={15} strokeWidth={1} />
        </motion.div>
      </motion.div>
    </section>
  );
}