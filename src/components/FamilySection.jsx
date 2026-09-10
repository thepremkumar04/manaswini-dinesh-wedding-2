import { motion } from "framer-motion";

const families = [
  {
    label: "Bride's Family",
    father: (
      <>
        Sri Pelluru
        <br />
        Gopinadh Reddy
      </>
    ),
    mother: "Smt. Sowjanya",
    direction: -1,
  },
  {
    label: "Groom's Family",
    father: (
      <>
        Sri Maram Reddy
        <br />
        Chiranjeevi Reddy
      </>
    ),
    mother: "Smt. Aruna",
    direction: 1,
  },
];

function FamilyCard({ family, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
      }}
      className="relative"
    >
      <div className="border border-gold/35 bg-cream p-1">
        <div className="relative border border-gold/15 px-6 py-10 text-center sm:px-10 sm:py-12">

          {/* Lightweight corner ornaments */}
          <span className="absolute left-3 top-2 font-display text-xl text-gold/45">
            ❦
          </span>

          <span className="absolute right-3 top-2 -scale-x-100 font-display text-xl text-gold/45">
            ❦
          </span>

          <span className="absolute bottom-2 left-3 rotate-180 font-display text-xl text-gold/45">
            ❦
          </span>

          <span className="absolute bottom-2 right-3 rotate-180 -scale-x-100 font-display text-xl text-gold/45">
            ❦
          </span>

          <p className="font-sans text-[8px] uppercase tracking-[0.42em] text-gold">
            {family.label}
          </p>

          <div className="mx-auto my-6 h-px w-12 bg-gold/35" />

          <h3 className="font-display text-3xl leading-tight text-maroon sm:text-4xl">
            {family.father}
          </h3>

          <p className="my-4 font-display text-2xl italic text-gold">
            &
          </p>

          <h4 className="font-display text-2xl text-maroon sm:text-3xl">
            {family.mother}
          </h4>

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

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* Heading */}
        <div className="text-center">

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-sans text-[8px] uppercase tracking-[0.5em] text-maroon/55"
          >
            Together with their families
          </motion.p>

          <div className="gold-divider my-6" />

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05, duration: 0.6 }}
            className="font-display text-6xl leading-none text-maroon sm:text-7xl md:text-8xl"
          >
            We Invite You
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mx-auto mt-6 max-w-xl font-display text-lg italic leading-7 text-brown/55 sm:text-xl"
          >
            With immense joy and the blessings of our elders, we request your
            gracious presence as we celebrate this beautiful beginning.
          </motion.p>
        </div>

        {/* Family cards */}
        <div className="relative mt-16 md:mt-20">

          {/* Center ornament — desktop only */}
          <div className="absolute left-1/2 top-1/2 z-20 hidden -translate-x-1/2 -translate-y-1/2 md:block">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-gold/40 bg-ivory">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/15">
                <span className="font-display text-2xl text-gold">
                  &
                </span>
              </div>
            </div>

            <div className="absolute right-full top-1/2 mr-3 h-px w-16 bg-gold/25" />
            <div className="absolute left-full top-1/2 ml-3 h-px w-16 bg-gold/25" />
          </div>

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

        {/* Closing message */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="mx-auto mt-16 max-w-2xl text-center"
        >
          <div className="flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-gold/25" />
            <span className="text-lg text-gold/70">❦</span>
            <span className="h-px w-12 bg-gold/25" />
          </div>

          <p className="mt-5 font-display text-lg italic text-brown/45 sm:text-xl">
            Your gracious presence and blessings will make our celebration
            complete.
          </p>
        </motion.div>

      </div>
    </section>
  );
}