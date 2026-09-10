import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const weddingDate = new Date("2026-10-16T08:15:00+05:30");

function getTimeLeft() {
  const difference = weddingDate.getTime() - Date.now();

  if (difference <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      started: true,
    };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor(
      (difference / (1000 * 60 * 60)) % 24
    ),
    minutes: Math.floor(
      (difference / (1000 * 60)) % 60
    ),
    seconds: Math.floor(
      (difference / 1000) % 60
    ),
    started: false,
  };
}

const units = [
  { key: "days", label: "Days" },
  { key: "hours", label: "Hours" },
  { key: "minutes", label: "Minutes" },
  { key: "seconds", label: "Seconds" },
];

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section-transition relative overflow-hidden bg-ivory px-5 py-24 sm:px-8 md:py-32">
      {/* Texture */}
      <div className="invitation-paper absolute inset-0 opacity-70" />

      {/* Ambient glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.08, 0.18, 0.08],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/20 blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-5xl text-center">

        {/* Heading */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-sans text-[9px] uppercase tracking-[0.5em] text-maroon/60"
        >
          Until the Wedding
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.9 }}
          className="mt-5 font-display text-6xl text-maroon sm:text-7xl"
        >
          Counting Every Moment
        </motion.h2>

        <div className="mx-auto my-7 gold-divider" />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35, duration: 0.8 }}
          className="font-display text-xl italic text-brown/55"
        >
          Until Manaswini & Dinesh begin their journey together
        </motion.p>

        {/* Countdown */}
        {timeLeft.started ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mx-auto mt-14 max-w-xl border border-gold/35 bg-cream px-6 py-12 royal-glow"
          >
            <p className="font-sans text-[9px] uppercase tracking-[0.4em] text-gold">
              The Wedding Has Begun
            </p>

            <h3 className="mt-4 font-display text-5xl text-maroon sm:text-6xl">
              A Beautiful Beginning
            </h3>

            <p className="mt-4 font-display text-xl italic text-brown/50">
              Manaswini & Dinesh
            </p>
          </motion.div>
        ) : (
          <div className="mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-5">

            {units.map((unit, index) => (
              <motion.div
                key={unit.key}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  delay: 0.15 * index,
                  duration: 0.8,
                }}
                whileHover={{ y: -5 }}
                className={`relative border p-5 shadow-[0_15px_40px_rgba(73,53,42,0.07)] sm:p-7 ${
                  index === 0
                    ? "border-maroon bg-maroon text-cream"
                    : "border-gold/30 bg-cream text-maroon"
                }`}
              >
                {/* Decorative ring */}
                <div
                  className={`pointer-events-none absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border ${
                    index === 0
                      ? "border-gold/15"
                      : "border-gold/10"
                  }`}
                />

                <motion.p
                  key={`${unit.key}-${timeLeft[unit.key]}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className="relative font-display text-5xl font-medium sm:text-6xl md:text-7xl"
                >
                  {String(timeLeft[unit.key]).padStart(2, "0")}
                </motion.p>

                <p
                  className={`relative mt-3 font-sans text-[8px] uppercase tracking-[0.3em] ${
                    index === 0
                      ? "text-cream/60"
                      : "text-brown/45"
                  }`}
                >
                  {unit.label}
                </p>
              </motion.div>
            ))}
          </div>
        )}

        {/* Wedding date */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mt-12"
        >
          <p className="font-display text-3xl tracking-[0.15em] text-gold sm:text-4xl">
            16 • 10 • 2026
          </p>

          <p className="mt-3 font-sans text-[8px] uppercase tracking-[0.3em] text-brown/40">
            Friday • 8:15 AM • PLR Convention Centre • Tirupati
          </p>
        </motion.div>

        <div className="mt-8 text-xl text-gold/60">
          ❦
        </div>
      </div>
    </section>
  );
}