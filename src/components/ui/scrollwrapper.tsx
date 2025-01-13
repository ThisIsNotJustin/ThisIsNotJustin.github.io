"use client";

import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { useBackGroundColor, useBackgroundColor } from "./background"

type ScrollWrapperProps = React.PropsWithChildren<{
    children: ReactNode;
    bgColor: string;
    thresholdVal: number;
}>;

const ScrollWrapper: React.FC<ScrollWrapperProps> = ({ children, bgColor, thresholdVal }) => {
    const { setBgColor } = useBackGroundColor();

    const { ref: sectionRef, inView: sectionInView } = useInView({
        threshold: thresholdVal,
    });

    useEffect(() => {
        if (sectionInView) {
            setBgColor(bgColor);
        }
    }, [sectionInView, bgColor, setBgColor]);

    return (
        <motion.div className="transition-colors duration-500" ref={sectionRef}>
          {children}
        </motion.div>
      );
};

export default ScrollWrapper;