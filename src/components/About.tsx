"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function About() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [.2, 0.4, 0.6, 0.7], [0, 1, 1, 0]);

  return (
    <section ref={targetRef} id="about" className="flex items-center justify-center py-24">
      <motion.div style={{ opacity }}>
        <div className="container mx-auto mb-72">
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-5xl sm:text-heading-2 font-semibold uppercase text-secondary-700 mb-10">
              About Me
            </h2>
            <div className="flex gap-8 md:flex-row lg:gap-10">
              <div className="mx-auto sm:sticky md:top-28 lg:top-32 md:w-1/2">
                <div className="space-y-4 2xl:space-y-10">
                  <p className="text-accent-400 text-body-1 font-medium 2xl:text-4xl text-center">
                    I am a Computer Science graduate from Tennessee Technological University with a passion for full-stack development and design.
                    <br></br>
                    <br></br>
                    I am deeply interested in a wide array of Computer Science topics including Embedded Systems, Machine Learning, Software Development, and Web Development.
                    <br></br>
                    <br></br>
                    Outside of developing, I enjoy hobbies such as powerlifting, rock climbing, and playing with my dog!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};