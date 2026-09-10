import { motion } from "framer-motion";

export default function Blessing() {
  return (
    <section className="section-transition relative overflow-hidden bg-ivory px-6 py-28 text-center sm:px-10 md:py-36">
      {/* Paper texture */}
      <div className="invitation-paper absolute inset-0 opacity-70" />

      {/* Decorative glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.06, 0.14, 0.06],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/20 blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-3xl">

        {/* Ornament */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl text-gold"
        >
          ❦
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-8 font-sans text-[9px] uppercase tracking-[0.5em] text-maroon/55"
        >
          Your Presence Means Everything
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35, duration: 1 }}
          className="mt-5 font-display text-6xl leading-none text-maroon sm:text-7xl md:text-8xl"
        >
          Come Bless
          <br />
          Our Beginning
        </motion.h2>

        <div className="mx-auto my-8 gold-divider" />

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.55, duration: 0.9 }}
          className="mx-auto max-w-xl font-display text-xl italic leading-8 text-brown/55 sm:text-2xl"
        >
          Your love, blessings and presence will make
          our wedding day even more special.
        </motion.p>

        {/* Couple */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.9 }}
          className="mt-12"
        >
          <p className="font-display text-4xl text-maroon sm:text-5xl">
            Manaswini
          </p>

          <p className="my-2 font-display text-2xl italic text-gold">
            &
          </p>

          <p className="font-display text-4xl text-maroon sm:text-5xl">
            Dinesh Reddy
          </p>
        </motion.div>

        {/* Date */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-10"
        >
          <p className="font-display text-2xl tracking-[0.18em] text-gold">
            16 • 10 • 2026
          </p>

          <p className="mt-3 font-sans text-[8px] uppercase tracking-[0.3em] text-brown/40">
            PLR Convention Centre • Tirupati
          </p>
        </motion.div>

        <div className="mt-12 text-xl text-gold/60">
          ❦
        </div>
      </div>
    </section>
  );
}