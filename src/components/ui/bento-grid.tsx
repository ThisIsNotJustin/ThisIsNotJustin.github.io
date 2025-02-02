"use client";

import { cn } from "../../lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {React.Children.map(children, (child, idx) => {
        if (React.isValidElement(child)) {
          const typeChild = child as React.ReactElement<{
            className?: string;
            idx?: number;
            onMouseEnter?: () => void;
            onMouseLeave?: () => void;
            isHovered?: boolean;
          }>;

          const originalClass = typeChild.props.className || '';
          return React.cloneElement(typeChild, {
            idx,
            onMouseEnter: () => setHoveredIndex(idx),
            onMouseLeave: () => setHoveredIndex(null),
            isHovered: hoveredIndex === idx,
            className: originalClass,
          });
        }
        return child;
      })}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  link,
  idx,
  isHovered,
  onMouseEnter,
  onMouseLeave,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  link?: string;
  idx?: number;
  isHovered?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}) => {
  const ItemContent = () => (
    <div
      className={cn(
        `row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200
        shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] 
        bg-white border border-transparent justify-between flex flex-col space-y-4 relative z-20 h-full`,
        className
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );

  return (
    <div
      className={cn("relative group block p-2",
        className
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <AnimatePresence>
        {isHovered && (
          <motion.span
            className="absolute inset-0 bg-secondary-700/[0.8] block rounded-3xl"
            layoutId="hoverBackground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.15 } }}
            exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
          />
        )}
      </AnimatePresence>

      {link ? (
        <Link href={link} className="h-full w-full block">
          <ItemContent />
        </Link>
      ) : (
        <ItemContent />
      )}
    </div>
  );
};