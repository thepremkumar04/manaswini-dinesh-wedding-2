import { motion } from "framer-motion";
import { MapPin, Navigation, ExternalLink } from "lucide-react";

const mapUrl =
  "https://maps.app.goo.gl/xpwATjxSfLZfqbaG7";

export default function Venue() {
  return (
    <section className="section-transition relative overflow-hidden bg-maroon px-6 py-24 sm:px-10 md:py-32">

      <div className="relative z-10 mx-auto max-w-4xl text-center">

        {/* Heading */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="font-sans text-[9px] uppercase tracking-[0.5em] text-gold"
        >
          The Celebration
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05, duration: 0.5 }}
          className="mt-5 font-display text-6xl text-cream sm:text-7xl"
        >
          Where We Meet
        </motion.h2>

        <div className="mx-auto my-7 gold-divider" />

        {/* Venue Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="relative mx-auto mt-12 max-w-2xl border border-gold/35 bg-ivory px-6 py-10 sm:px-12 sm:py-14"
        >

          {/* Corner ornaments */}
          <div className="absolute left-4 top-4 text-xl text-gold/50">
            ❦
          </div>

          <div className="absolute right-4 top-4 -scale-x-100 text-xl text-gold/50">
            ❦
          </div>

          <div className="absolute bottom-4 left-4 rotate-180 text-xl text-gold/50">
            ❦
          </div>

          <div className="absolute bottom-4 right-4 rotate-180 -scale-x-100 text-xl text-gold/50">
            ❦
          </div>

          {/* Location icon */}
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-gold/35 text-gold">
            <MapPin size={22} strokeWidth={1.2} />
          </div>

          <p className="mt-6 font-sans text-[8px] uppercase tracking-[0.4em] text-maroon/50">
            Wedding Venue
          </p>

          <h3 className="mt-3 font-display text-4xl text-maroon sm:text-5xl">
            PLR Convention Centre
          </h3>

          <div className="mx-auto my-6 h-px w-16 bg-gold/40" />

          <p className="font-serif text-lg text-brown/70">
            Air Bypass Road
          </p>

          <p className="mt-1 font-sans text-xs uppercase tracking-[0.25em] text-brown/45">
            Tirupati, Andhra Pradesh
          </p>

          {/* Date */}
          <div className="mt-8">
            <p className="font-display text-2xl tracking-[0.15em] text-gold">
              16 • 10 • 2026
            </p>

            <p className="mt-2 font-sans text-[8px] uppercase tracking-[0.3em] text-brown/40">
              Friday • 8:15 AM — 10:27 AM
            </p>
          </div>

          {/* Google Maps */}
          <a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto mt-9 flex w-fit items-center gap-2 border border-gold bg-maroon px-7 py-3.5 font-sans text-[9px] uppercase tracking-[0.3em] text-cream transition-colors duration-200 hover:bg-brown"
          >
            <Navigation size={13} strokeWidth={1.5} />

            Open in Google Maps

            <ExternalLink size={11} strokeWidth={1.5} />
          </a>
        </motion.div>

        {/* Closing text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mx-auto mt-10 max-w-md font-display text-xl italic text-cream/50"
        >
          We look forward to celebrating this
          beautiful day with you.
        </motion.p>

        <div className="mt-8 text-xl text-gold/60">
          ❦
        </div>

      </div>
    </section>
  );
}