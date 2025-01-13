"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "../../lib/utils";
import { Sidebar, SidebarBody, SidebarLink } from "./sidebar";
import Checkbox from "./checkbox"

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    label: string;
    href: string;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      if (scrollYProgress.get() < 0.06) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    }
  });

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 100,
          y: 0,
        }}
        animate={{
          y: visible ? 0 : 0,
          opacity: visible ? 1 : 1,
        }}
        transition={{
          duration: 0.8,
        }}
        className={cn(
          "fixed top-0 z-50 flex w-full translate-y-full items-center justify-between px-0 py-0",
          className
        )}
      >
        {visible ? (
          <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className="fixed top-0 z-50 flex w-full translate-y-full items-center justify-between px-5 py-5"
        >
            <nav className="flex items-center space-x-7 font-grotesk text-works-title font-black sm:block">
              <a href="#intro" className="z-50">
                <span className="text-works-title text-secondary-200">
                  {"<Justin>"}
                </span>
                <span className="absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
              </a>
            </nav>
            <nav className="flex items-center space-x-7 font-grotesk text-body-3 sm:block">
              <a href="#about" className="group relative hidden md:inline-block">
                <span>About</span>
                <span className="absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
              </a>
              <a href="#projects" className="group relative hidden md:inline-block">
                <span>Projects</span>
                <span className="absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
              </a>
              <a href="#contact" className="bg-accent-200 px-8 py-3 rounded-full group relative hover:bg-accent-300">
                <span className="relative w-fit">
                  <span className="absolute bottom-0 h-[0.125em] w-0 bg-secondary-700 opacity-90 duration-300 ease-out group-hover:w-full from-transparent"></span>
                  <span>Contact</span>
                </span>
              </a>
            </nav>
          </motion.header>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-0 z-50 flex w-full items-center justify-end px-5 pt-5"
          >
            <div className="flex items-center justify-center text-heading-3 p-5 overflow-hidden w-[60px] h-[60px] bg-secondary-600 hover:bg-secondary-700 shadow-[2px_2px_20px_rgba(0,0,0,0.08)] rounded-full group hover:duration-300 duration-300 hover:scale-90">
              <Checkbox menuOpen={menuOpen} toggleMenu={toggleMenu}/>
            </div>
            
          </motion.div>
        )}
        {menuOpen && (
        <Sidebar open={menuOpen} setOpen={setMenuOpen}>
          <SidebarBody className="pt-96 pl-20">
            {navItems.map((item, index) => (
              <SidebarLink key={`${item.label}-${index}`} link={{ label: item.label, href: item.href }} />
            ))}
          </SidebarBody>
        </Sidebar>
      )}
      </motion.div>
    </AnimatePresence>
  );
};
