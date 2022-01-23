import React, { useState, useRef, useEffect } from "react";

interface IParallax {
  transform: string;
}

const Hero: React.FC = () => {
  const [heroGradient, setHeroGradient] = useState<true | false>(false);
  const [parallax, setParallax] = useState<IParallax>({ transform: `translateX(0%) translateY(0%)` });
  const burger = useRef<HTMLDivElement | null>(null);

  return (
    <div className="h-[33rem] p-5 flex flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl md:text-6xl font-bold leading-tighter tracking-tighter mb-4">
          Explore the world of{" "}
          <span onClick={() => setHeroGradient((prev) => !prev)} className={`gradient transition-all ease-in duration-150 bg-clip-text text-transparent bg-gradient-to-r ${heroGradient ? "from-blue-500 to-teal-400" : "from-pink-500 to-yellow-500"} `}>
            culinary
          </span>
        </h1>
        <div className="max-w-3xl mx-auto">
          <p className="text-xl px-3 text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">
            Track restaurant you've visited, save those you want to visit, write your thoughts on food and beverages, tell your friends what's good.
          </p>
        </div>
      </div>
      <button className="transition ease-in duration-150 bg-black mx-2 text-white font-medium mt-5 py-4 px-10 rounded hover:-translate-y-1 hover:scale-105 hover:shadow-lg">Get Started</button>
    </div>
  );
};

export default Hero;
