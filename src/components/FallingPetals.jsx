import { motion } from "framer-motion";

const petals = Array.from({ length: 28 }, (_, index) => {
  const types = ["rose", "round", "leaf"];

  return {
    id: index,
    type: types[index % types.length],
    left: `${(index * 23 + 7) % 100}%`,
    delay: (index % 15) * 0.65,
    duration: 9 + (index % 7) * 1.5,
    size: 8 + (index % 6) * 2,
    drift: 25 + (index % 5) * 12,
  };
});

function PetalShape({ type, size }) {
  if (type === "round") {
    return (
      <div
        className="h-full w-full rounded-full"
        style={{
          background:
            "radial-gradient(circle at 35% 30%, #F5C5D2, #D96B8B 70%)",
        }}
      />
    );
  }

  if (type === "leaf") {
    return (
      <div
        className="h-full w-full"
        style={{
          borderRadius: "100% 0 100% 0",
          background:
            "linear-gradient(135deg, #A9C9B7, #5F8F78)",
          transform: "rotate(-25deg)",
        }}
      />
    );
  }

  return (
    <div
      className="h-full w-full"
      style={{
        borderRadius: "100% 0 100% 0",
        background:
          "linear-gradient(135deg, #FFD7E1, #C94F72)",
      }}
    />
  );
}

export default function FallingPetals() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-40 overflow-hidden"
      aria-hidden="true"
    >
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          initial={{
            y: "-12vh",
            x: 0,
            rotate: 0,
            opacity: 0,
          }}
          animate={{
            y: "112vh",
            x: [
              0,
              petal.drift,
              -petal.drift,
              petal.drift * 0.6,
              -petal.drift * 0.4,
            ],
            rotate: [0, 100, 200, 300, 420],
            opacity: [
              0,
              0.75,
              0.7,
              0.5,
              0,
            ],
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-0"
          style={{
            left: petal.left,
            width: petal.size,
            height:
              petal.type === "round"
                ? petal.size
                : petal.size * 0.7,
          }}
        >
          <PetalShape
            type={petal.type}
            size={petal.size}
          />
        </motion.div>
      ))}
    </div>
  );
}