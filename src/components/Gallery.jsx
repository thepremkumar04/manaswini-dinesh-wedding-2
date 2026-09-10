import { motion } from "framer-motion";

const photos = [
  {
    src: "/images/photo-01.jpeg",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    src: "/images/photo-02.jpeg",
    className: "",
  },
  {
    src: "/images/photo-03.jpeg",
    className: "",
  },
  {
    src: "/images/photo-04.jpeg",
    className: "",
  },
  {
    src: "/images/photo-05.jpeg",
    className: "",
  },
  {
    src: "/images/photo-06.jpeg",
    className: "md:col-span-2",
  },
];

export default function Gallery() {
  return (
    <section className="section-transition relative overflow-hidden bg-maroon px-5 py-24 sm:px-8 md:px-12 md:py-32">
      {/* Subtle texture */}
      <div className="invitation-paper absolute inset-0 opacity-[0.07]" />

      {/* Ambient gold glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/20 blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-sans text-[8px] uppercase tracking-[0.5em] text-gold"
          >
            A glimpse of our moments
          </motion.p>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mx-auto my-5 h-px w-16 bg-gold/50"
          />

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.9 }}
            className="font-display text-6xl leading-none text-cream sm:text-7xl"
          >
            Our Moments
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mx-auto mt-5 max-w-xl font-display text-lg italic leading-7 text-cream/55 sm:text-xl"
          >
            A collection of memories, smiles, and moments that brought us
            closer to this beautiful beginning.
          </motion.p>
        </div>

        {/* Gallery */}
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 md:mt-20 md:grid-cols-4 md:gap-5">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.src}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.8,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`group relative overflow-hidden border border-gold/25 bg-cream/10 p-1 ${photo.className}`}
            >
              <div className="relative h-full w-full overflow-hidden bg-maroon/80">
                <img
                  src={photo.src}
                  alt={`Manaswini and Dinesh — moment ${index + 1}`}
                  loading={index === 0 ? "eager" : "lazy"}
                  className="h-full w-full object-contain transition duration-700 ease-out group-hover:scale-[1.02]"
                />

                {/* Image overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-maroon/45 via-transparent to-transparent opacity-70" />

                {/* Gold corner */}
                <span className="absolute left-3 top-3 h-5 w-5 border-l border-t border-gold/60" />
                <span className="absolute bottom-3 right-3 h-5 w-5 border-b border-r border-gold/60" />

                {/* Number */}
                <span className="absolute bottom-3 left-4 font-sans text-[8px] tracking-[0.25em] text-cream/60">
                  0{index + 1}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing ornament */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 1 }}
          className="mt-14 text-center text-2xl text-gold/60"
        >
          ❦
        </motion.div>
      </div>
    </section>
  );
}