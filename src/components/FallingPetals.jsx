import { motion } from "framer-motion";

const petalColors = [
  "bg-[#F3E7D3]/70", // champagne
  "bg-[#FFF8EC]/65", // ivory
  "bg-[#E8CFC8]/60", // soft blush
  "bg-[#D8B978]/65", // muted gold
  "bg-[#F1D9C8]/55", // peach champagne
  "bg-[#C5A15A]/55", // antique gold
];

const petals = Array.from({ length: 28 }, (_, index) => ({
  id: index,
  left: `${(index * 37) % 100}%`,
  size: 8 + ((index * 13) % 8),
  duration: 14 + ((index * 17) % 8),
  delay: (index * 0.8) % 10,
  drift: -60 + ((index * 29) % 120),
  rotate: 240 + ((index * 47) % 480),
  color: petalColors[index % petalColors.length],
}));

export default function FallingPetals() {
  return (
    <div
      className="petal-layer pointer-events-none fixed inset-0 z-40 overflow-hidden"
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
            opacity: [0, 0.75, 0.6, 0.4, 0],
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