'use client';

import { useLottie } from "lottie-react";
import * as cat from "@/lottie/cat.json";
import { motion } from "framer-motion";

const Home = () => {
  const options = {
    animationData: (cat as any).default ?? cat,
    loop: true,
    style: { width: 300, height: 300 },
  };

  const { View } = useLottie(options);

  const text = "This Site is Under Construction";
  const characters = text.split("");

  return (
    <div className="flex justify-center items-center h-screen flex-col gap-4">
      <h1 className="text-xl md:text-2xl font-extrabold">
        {characters.map((char, index) => (
          <motion.span
            key={index}
            animate={{ y: [0, -6, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
              delay: index * 0.05,
            }}
            className="inline-block"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </h1>
      {View}
    </div>
  );
}

export default Home;