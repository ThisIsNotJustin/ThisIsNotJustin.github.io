"use client";

import { cn } from "../../lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import React, { createContext, useContext, useState } from "react";
import Image from "next/image";

type BentoGridContextType = {
  hoveredIndex: number | null;
  setHoveredIndex: (index: number | null) => void;
};

const BentoGridContext = createContext<BentoGridContextType>({
  hoveredIndex: null,
  setHoveredIndex: () => { },
});

const useBentoGrid = () => useContext(BentoGridContext);

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <BentoGridContext.Provider value={{ hoveredIndex, setHoveredIndex }}>
      <div className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className
      )}>
        {children}
      </div>
    </BentoGridContext.Provider>
  );
};

interface BentoGridItemProps {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  link?: string;
  idx: number;
  topics?: string[];
}

const getLanguageIcon = (language: string) => {
  const special: { [key: string]: string } = {
    "cpp": "cplusplus/cplusplus-original",
    "go": "go/go-original-wordmark",
    "react-native": "react/react-original",
    "react": "react/react-original",
    "vite": "vitejs/vitejs-original",
  };

  const path = special[language] || `${language}/${language}-original`;

  return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${path}.svg`;
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  link,
  idx,
  topics,
}: BentoGridItemProps) => {
  const { hoveredIndex, setHoveredIndex } = useBentoGrid();
  const isHovered = hoveredIndex === idx;

  const languages = [
    "c", "python", "typescript", "javascript",
    "go", "rust", "csharp", "react", "swift",
    "cpp", "react-native", "java", "vite",
    "tailwindcss", "tensorflow", "docker",
    "redis"
  ];

  const ItemContent = React.memo(function ItemContent() {
    return (
      <div className={cn(
        `row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200
        shadow-input shadow-none p-3 bg-accent-400 border-white/[0.2] 
        border justify-between flex flex-col space-y-4 relative z-20 h-full`,
        className
      )}>
        {header}
        <div className="group-hover/bento:translate-x-2 transition duration-200">
          <div className="text-works-title-large font-bold text-primary-200 mt-2">
            {title}
          </div>
          <div className="grid grid-cols-[1fr_auto] items-center gap-2">
            <div className="font-normal text-sm text-primary-400 line-clamp-2 pt-0.5">
              {description}
            </div>
            <div className="flex -space-x-2 flex-nowrap justify-end">
              {topics
                ?.filter(topic => languages.includes(topic))
                ?.map((language, index) => (
                  <img
                    key={`${language}-${index}`}
                    src={getLanguageIcon(language)}
                    alt={`${language} logo`}
                    className={cn(
                      "p-1.5 h-8 w-8 md:h-10 md:w-10 rounded-3xl border-white/[0.2] border",
                      "bg-accent-400 flex items-center justify-center",
                      "hover:scale-125 transition-all duration-200 hover:z-10"
                    )}
                    style={{ zIndex: topics.length - index }}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div
      className={cn("relative group block p-2",
        className
      )}
      onMouseEnter={() => setHoveredIndex(idx)}
      onMouseLeave={() => setHoveredIndex(null)}
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