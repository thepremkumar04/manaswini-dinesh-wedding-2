import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function OpeningInvitation({ onOpen }) {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-ivory px-6 py-10">
      {/* Paper texture */}
      <div className="invitation-paper absolute inset-0 opacity-80" />

      {/* Ambient glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/20 blur-3xl"
      />

      {/* Main invitation frame */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 25 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative z-10 w-full max-w-xl"
      >
        {/* Outer border */}
        <div className="relative border border-gold/50 p-1.5 shadow-[0_25px_80px_rgba(73,53,42,0.12)] sm:p-2">
          {/* Inner border */}
          <div className="relative border border-gold/25 bg-cream px-5 py-10 text-center sm:px-12 sm:py-16">
            
            {/* Corner ornaments */}
            <div className="absolute left-3 top-3 text-2xl text-gold/70">
              ❦
            </div>

            <div className="absolute right-3 top-3 -scale-x-100 text-2xl text-gold/70">
              ❦
            </div>

            <div className="absolute bottom-3 left-3 rotate-180 text-2xl text-gold/70">
              ❦
            </div>

            <div className="absolute bottom-3 right-3 rotate-180 -scale-x-100 text-2xl text-gold/70">
              ❦
            </div>

            {/* Small heading */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="font-sans text-[9px] uppercase tracking-[0.45em] text-maroon/70"
            >
              Wedding Invitation
            </motion.p>

            <div className="mx-auto my-6 gold-divider" />

            {/* Names */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 1 }}
              className="font-display text-6xl font-medium leading-[0.9] text-maroon sm:text-7xl"
            >
              Manaswini
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.95, duration: 0.8 }}
              className="my-3 font-display text-3xl italic text-gold"
            >
              &
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.05, duration: 1 }}
              className="font-display text-6xl font-medium leading-[0.9] text-maroon sm:text-7xl"
            >
              Dinesh Reddy
            </motion.h2>

            <div className="mx-auto my-7 gold-divider" />

            {/* Date */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3, duration: 0.8 }}
            >
              <p className="font-serif text-sm uppercase tracking-[0.3em] text-brown">
                Friday
              </p>

              <p className="mt-2 font-display text-2xl tracking-[0.18em] text-gold">
                16 • 10 • 2026
              </p>

              <p className="mt-3 font-sans text-[10px] uppercase tracking-[0.25em] text-brown/60">
                PLR Convention Centre • Tirupati
              </p>
            </motion.div>

            {/* Open button */}
            <motion.button
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.8 }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={onOpen}
              className="group mx-auto mt-10 flex items-center gap-3 border border-gold bg-maroon px-7 py-3.5 font-sans text-[9px] uppercase tracking-[0.35em] text-cream transition-all duration-300 hover:bg-brown"
            >
              Open Invitation

              <ArrowDown
                size={13}
                strokeWidth={1.5}
                className="transition-transform duration-300 group-hover:translate-y-1"
              />
            </motion.button>

            <p className="mt-5 font-sans text-[8px] uppercase tracking-[0.25em] text-brown/35">
              With the blessings of our elders
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}