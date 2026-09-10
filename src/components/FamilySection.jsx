import { motion } from "framer-motion";

const families = [
  {
    label: "Bride's Family",
    names: (
      <>
        <span>Sri Pelluru</span>
        <br />
        <span>Gopinadh Reddy</span>
      </>
    ),
    mother: "Smt. Sowjanya",
    side: "left",
  },
  {
    label: "Groom's Family",
    names: (
      <>
        <span>Sri Maram Reddy</span>
        <br />
        <span>Chiranjeevi Reddy</span>
      </>
    ),
    mother: "Smt. Aruna",
    side: "right",
  },
];

function FamilyCard({ family, index }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: family.side === "left" ? -40 : 40,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
        amount: 0.25,
      }}
      transition={{
        duration: 1,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -5 }}
      className="group relative"
    >
      {/* Outer frame */}
      <div className="relative border border-gold/35 bg-cream/70 p-[5px] shadow-[0_20px_60px_rgba(99,59,63,0.07)] transition-shadow duration-500 group-hover:shadow-[0_25px_70px_rgba(99,59,63,0.12)]">
        {/* Inner frame */}
        <div className="relative min-h-[300px] border border-gold/15 px-7 py-12 sm:px-10 sm:py-14">

          {/* Corner ornaments */}
          <span className="absolute left-3 top-2 font-display text-2xl text-gold/55">
            ❦
          </span>

          <span className="absolute right-3 top-2 -scale-x-100 font-display text-2xl text-gold/55">
            ❦
          </span>

          <span className="absolute bottom-2 left-3 rotate-180 font-display text-2xl text-gold/55">
            ❦
          </span>

          <span className="absolute bottom-2 right-3 rotate-180 -scale-x-100 font-display text-2xl text-gold/55">
            ❦
          </span>

          {/* Family label */}
          <p className="font-sans text-[8px] uppercase tracking-[0.42em] text-gold">
            {family.label}
          </p>

          {/* Small divider */}
          <div className="mx-auto my-6 h-px w-12 bg-gold/35" />

          {/* Father */}
          <h3 className="font-display text-3xl leading-tight text-maroon sm:text-4xl">
            {family.names}
          </h3>

          {/* Ampersand */}
          <p className="my-4 font-display text-2xl italic text-gold">
            &
          </p>

          {/* Mother */}
          <h4 className="font-display text-2xl text-maroon sm:text-3xl">
            {family.mother}
          </h4>

          {/* Bottom line */}
          <div className="mx-auto mt-7 h-px w-8 bg-gold/25" />

          <p className="mt-4 font-sans text-[7px] uppercase tracking-[0.3em] text-brown/35">
            With their blessings
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function FamilySection() {
  return (
    <section className="section-transition relative overflow-hidden bg-ivory px-5 py-24 sm:px-8 md:px-12 md:py-32">

      {/* Paper texture */}
      <div className="invitation-paper absolute inset-0 opacity-80" />

      {/* Ambient glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.05, 0.11, 0.05],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-3xl"
      />

      {/* Decorative side ornaments */}
      <div className="pointer-events-none absolute left-3 top-24 font-display text-7xl text-maroon/[0.035] sm:left-8 sm:text-9xl">
        ❦
      </div>

      <div className="pointer-events-none absolute bottom-24 right-3 rotate-180 font-display text-7xl text-maroon/[0.035] sm:right-8 sm:text-9xl">
        ❦
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* Header */}
        <div className="text-center">

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-sans text-[8px] uppercase tracking-[0.5em] text-maroon/55"
          >
            Together with their families
          </motion.p>

          <motion.div
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 80, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.8 }}
            className="mx-auto my-6 h-px bg-gold/60"
          />

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25, duration: 0.9 }}
            className="font-display text-6xl leading-none text-maroon sm:text-7xl md:text-8xl"
          >
            We Invite You
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.45, duration: 0.8 }}
            className="mx-auto mt-6 max-w-xl font-display text-lg italic leading-7 text-brown/55 sm:text-xl"
          >
            With immense joy and the blessings of our elders,
            we request your gracious presence as we celebrate
            this beautiful beginning.
          </motion.p>
        </div>

        {/* Family area */}
        <div className="relative mt-16 md:mt-20">

          {/* Desktop center ornament */}
          <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 md:block">

            <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-gold/40 bg-ivory shadow-[0_10px_40px_rgba(99,59,63,0.08)]">

              <div className="absolute inset-2 rounded-full border border-gold/15" />

              <span className="relative font-display text-3xl text-gold">
                &
              </span>
            </div>

            {/* Horizontal ornaments */}
            <div className="absolute right-full top-1/2 mr-4 h-px w-20 bg-gradient-to-l from-gold/35 to-transparent" />

            <div className="absolute left-full top-1/2 ml-4 h-px w-20 bg-gradient-to-r from-gold/35 to-transparent" />
          </div>

          {/* Family cards */}
          <div className="grid gap-8 md:grid-cols-2 md:gap-20">
            {families.map((family, index) => (
              <FamilyCard
                key={family.label}
                family={family}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Formal invitation line */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mx-auto mt-16 max-w-2xl text-center"
        >
          <div className="flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-gold/25" />
            <span className="text-lg text-gold/70">❦</span>
            <span className="h-px w-12 bg-gold/25" />
          </div>

          <p className="mt-5 font-display text-lg italic text-brown/45 sm:text-xl">
            Your gracious presence and blessings
            will make our celebration complete.
          </p>
        </motion.div>

        {/* Bottom ornament */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mt-12 text-center text-2xl text-gold/60"
        >
          ❦
        </motion.div>

      </div>
    </section>
  );
}