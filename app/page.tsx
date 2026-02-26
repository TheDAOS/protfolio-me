'use client';

import { useLottie } from "lottie-react";
import * as cat from "@/lottie/cat.json";

const Home = () => {
  const options = {
    animationData: (cat as any).default ?? cat,
    loop: true,
    style: { width: 300, height: 300 },
  };

  const { View } = useLottie(options);

  return (
    <div className="flex justify-center items-center h-screen flex-col gap-4">
      <h1 className="text-xl md:text-2xl font-extrabold"> This Site is Under Construction</h1>
      {View}
    </div>
  );
}

export default Home;