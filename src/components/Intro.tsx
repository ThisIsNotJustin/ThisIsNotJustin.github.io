"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import StarsBackground from "./ui/starsbackground";
import ShootingStars from "./ui/shootingstars";

export default function Intro() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, .5], [1, 0]);

  return (
    <section ref={targetRef} id="intro" className="relative flex w-full h-screen items-center justify-center">
      <motion.div style={{ opacity }}>
        <StarsBackground className="absolute inset-0 z-0"/>
      </motion.div>
      <div className="z-10 flex flex-col w-full items-center text-title 2xl:text-[10vw] font-black uppercase text-accent-300">
        <motion.div style={{ opacity }}>
          <ShootingStars/>
        </motion.div>
        <motion.div 
          className="z-10 title 2xl:py-16" style={{ opacity }}
        >
          <h1 className="">
            Hey, I&apos;m Justin
          </h1>
          <h1 className="transform scale-y-[-1] opacity-50">
            Hey, I&apos;m Justin
          </h1>
        </motion.div>
      </div>
    </section>
  );
}