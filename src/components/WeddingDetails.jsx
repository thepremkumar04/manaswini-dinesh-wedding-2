import { motion } from "framer-motion";
import { Clock, Sparkles } from "lucide-react";

export default function WeddingDetails() {
  return (
    <section className="section-transition relative overflow-hidden bg-cream px-5 py-28 sm:px-8 md:py-36">

      <div className="relative z-10 mx-auto max-w-5xl">

        {/* Header */}
        <div className="text-center">

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="font-sans text-[8px] uppercase tracking-[0.55em] text-maroon/55"
          >
            The Wedding
          </motion.p>

          <div className="gold-divider my-6" />

          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05, duration: 0.5 }}
            className="font-display text-5xl text-maroon sm:text-6xl"
          >
            A Day to Remember
          </motion.h2>

        </div>

        {/* Main date card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="relative mx-auto mt-16 max-w-3xl"
        >

          {/* Outer frame */}
          <div className="border border-gold/35 p-1.5">

            {/* Inner frame */}
            <div className="relative overflow-hidden border border-gold/15 bg-ivory px-5 py-12 text-center sm:px-12 sm:py-16">

              {/* Corner ornaments */}
              <span className="absolute left-4 top-3 font-display text-3xl text-gold/50">
                ❦
              </span>

              <span className="absolute right-4 top-3 -scale-x-100 font-display text-3xl text-gold/50">
                ❦
              </span>

              <span className="absolute bottom-3 left-4 rotate-180 font-display text-3xl text-gold/50">
                ❦
              </span>

              <span className="absolute bottom-3 right-4 rotate-180 -scale-x-100 font-display text-3xl text-gold/50">
                ❦
              </span>

              {/* Date */}
              <p className="font-sans text-[9px] uppercase tracking-[0.5em] text-maroon/50">
                Friday
              </p>

              <p className="mt-5 font-display text-6xl leading-none text-maroon sm:text-8xl">
                16
              </p>

              <p className="mt-2 font-serif text-sm uppercase tracking-[0.45em] text-gold">
                October
              </p>

              <p className="mt-1 font-display text-3xl tracking-[0.25em] text-maroon/80 sm:text-4xl">
                2026
              </p>

              {/* Ornament */}
              <div className="mx-auto my-8 flex items-center justify-center gap-4">
                <span className="h-px w-14 bg-gold/30" />
                <span className="text-xl text-gold">
                  ❦
                </span>
                <span className="h-px w-14 bg-gold/30" />
              </div>

              {/* Muhurtham */}
              <div className="mx-auto max-w-xl border border-gold/20 bg-cream/70 px-5 py-7 sm:px-8">

                <div className="flex items-center justify-center gap-2 text-gold">
                  <Sparkles
                    size={15}
                    strokeWidth={1.3}
                  />

                  <p className="font-sans text-[8px] uppercase tracking-[0.4em]">
                    Auspicious Muhurtham
                  </p>
                </div>

                <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
                  <Clock
                    size={17}
                    strokeWidth={1.3}
                    className="text-gold"
                  />

                  <p className="font-display text-2xl text-maroon sm:text-4xl">
                    8:15 AM — 10:27 AM
                  </p>
                </div>

                <div className="mx-auto my-6 h-px w-14 bg-gold/30" />

                <p className="font-sans text-[8px] uppercase tracking-[0.35em] text-brown/45">
                  Pushkarakalam
                </p>

                <p className="mt-2 font-display text-2xl text-gold sm:text-3xl">
                  8:41 AM — 8:45 AM
                </p>

                <p className="mt-6 font-sans text-[8px] uppercase tracking-[0.35em] text-brown/45">
                  Lagnam
                </p>

                <p className="mt-2 font-display text-2xl italic text-maroon sm:text-3xl">
                  Vrushika Lagnam
                </p>

              </div>

              {/* Venue */}
              <div className="mt-9">

                <p className="font-sans text-[8px] uppercase tracking-[0.4em] text-maroon/45">
                  Wedding Venue
                </p>

                <p className="mt-3 font-display text-3xl text-maroon sm:text-4xl">
                  PLR Convention Centre
                </p>

                <p className="mt-2 font-sans text-[9px] uppercase tracking-[0.25em] text-brown/40">
                  Air Bypass Road • Tirupati
                </p>

              </div>

            </div>
          </div>
        </motion.div>

        {/* Closing line */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mx-auto mt-10 max-w-lg text-center font-display text-xl italic leading-8 text-brown/50 sm:text-2xl"
        >
          A sacred moment, a beautiful beginning,
          and a lifetime together.
        </motion.p>

        <div className="mt-8 text-center text-xl text-gold/60">
          ❦
        </div>

      </div>
    </section>
  );
}