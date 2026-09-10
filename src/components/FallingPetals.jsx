import { motion } from "framer-motion";

const petalColors = [
  "bg-maroon/40",
  "bg-gold/45",
  "bg-sage/35",
  "bg-brown/25",
  "bg-maroon/30",
  "bg-gold/35",
];

const petals = Array.from({ length: 45 }, (_, index) => ({
  id: index,
  left: `${(index * 37) % 100}%`,
  size: 9 + ((index * 13) % 9),
  duration: 10 + ((index * 17) % 10),
  delay: (index * 0.55) % 10,
  drift: -70 + ((index * 29) % 140),
  rotate: 240 + ((index * 47) % 480),
  color: petalColors[index % petalColors.length],
}));

export default function FallingPetals() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-40 overflow-hidden"
      aria-hidden="true"
    >
      {petals.map((petal) => (
        <motion.span
          key={petal.id}
          className={`absolute top-[-40px] block ${petal.color}`}
          style={{
            left: petal.left,
            width: petal.size,
            height: petal.size * 0.68,
            borderRadius: "70% 30% 70% 30%",
          }}
          animate={{
            y: ["0vh", "110vh"],
            x: [
              0,
              petal.drift,
              petal.drift * -0.5,
              petal.drift,
              petal.drift * -0.3,
            ],
            rotate: [0, petal.rotate],
            opacity: [0, 0.7, 0.6, 0.45, 0],
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}