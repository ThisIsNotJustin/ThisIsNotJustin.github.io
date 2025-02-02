"use client";

import Image from "next/image";
import React, { useState, useRef, useEffect, useContext } from "react";
import { Carousel, Label, CarouselContext } from "./ui/apple-cards-carousel";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import repositories from "../lib/repositories";
import { IoArrowUp } from "react-icons/io5";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { cn } from "../lib/utils";

export default function Projects() {
  const [visibleCount, setVisibleCount] = useState(4);
  const projectsRef = useRef<HTMLDivElement>(null);
  const { currentIndex, setCurrentIndex } = useContext(CarouselContext);
  const [selectedCategory, setSelectedCategory] = useState(categories[currentIndex]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    setSelectedCategory(categories[currentIndex]);
  }, [currentIndex]);

  const handleCategorySelect = (index: number) => {
    setCurrentIndex(index);
    setSelectedCategory(categories[index]);
  }

  const cards = data.map((card, index) => (
    <Label key={index}
      card={card}
      index={index}
      layout={true}
      onClick={() => handleCategorySelect(index)}
      isSelected={currentIndex === index}
    />
  ));

  const normalize = (str: string) => {
    if (!str) return "";
    if (str === "AI & ML") return "ai-ml";

    return str.trim().toLowerCase().replace(/[ &]/g, "-");
  };

  interface Repository {
    name: string;
    description?: string;
    url?: string;
    stars?: number;
    topics?: string[];
    header: React.JSX.Element;
    className: string;
    icon: React.JSX.Element;
  }

  const arrangeProjects = (projects: Repository[]) => {
    // Create pairs of projects
    const pairs: Repository[][] = [];
    const processedProjects = [...projects];
  
    let index = 0;
    while (processedProjects.length > 0) {
      const pair: Repository[] = [];
      
      // Find a span-2 project
      const span2 = processedProjects.find(p => 
        p.className?.includes('md:col-span-2')
      );
      
      // Find a span-1 project
      const span1 = processedProjects.find(p => 
        !p.className?.includes('md:col-span-2')
      );
      
      if (span2 && span1) {
        if (index % 2 == 0) {
          pair.push(span2);
          pair.push(span1);
        } else {
          pair.push(span1);
          pair.push(span2);
        }

        processedProjects.splice(processedProjects.indexOf(span2), 1);
        processedProjects.splice(processedProjects.indexOf(span1), 1);
      } else {
        pair.push(processedProjects.splice(0,1)[0]);
      }
  
      pairs.push(pair);
      index++;
    }
  
    return pairs.flat();
  };

  const filteredProjects =
    selectedCategory === "All"
      ? repositories
      : repositories.filter((repo) =>
        repo.topics && repo.topics.includes(normalize(selectedCategory))
      );

  const sortedProjects = filteredProjects.sort((a, b) => b.stars - a.stars);
  const arrangedProjects = arrangeProjects(sortedProjects);
  const visibleProjects = arrangedProjects.slice(0, visibleCount);

  const handleShowMore = () => {
    if (visibleCount < 10) {
      setVisibleCount(Math.min(10, filteredProjects.length));
    } else {
      setVisibleCount((prevCount) => Math.min(prevCount + 10, filteredProjects.length));
    }
  };

  const handleHide = () => {
    setVisibleCount(4);
  };

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, .9], [1, 0]);

  return (
    <div ref={projectsRef} id="projects" className="mx-auto items-center justify-center flex flex-col w-full h-full py-20 pb-80">
      <h2 className="text-5xl sm:text-heading-2 font-semibold uppercase text-secondary-700">
        Projects
      </h2>
      <Carousel items={cards} onCategorySelect={handleCategorySelect} />
      <motion.div style={{ opacity }}>
        <div ref={targetRef} className="mt-10">
          <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
            {visibleProjects.map((repos, i) => (
              <BentoGridItem
                key={i}
                link={repos.url}
                title={repos.name}
                description={repos.description}
                header={repos.header}
                className={repos.className}
                icon={repos.icon}
                idx={i}
              />
            ))}
          </BentoGrid>
          {visibleCount < filteredProjects.length && (
            <button
              onClick={handleShowMore}
              className="mt-4 px-6 py-2 text-white"
            >
              Show More
            </button>
          )}
          {visibleCount > 4 && (
            <a href="#projects">
              <button
                onClick={handleHide}
                className="mt-4 px-6 py-2 text-white transition-all scroll-smooth duration-500"
              >
                Hide
              </button>
            </a>
          )}
        </div>
      </motion.div>
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            {index === 0 && (
              <Image
                src="https://avatars.githubusercontent.com/u/127996566?v=4"
                alt="Macbook mockup from Aceternity UI"
                height="500"
                width="500"
                className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
              />
            )}
          </div>
        );
      })}
    </>
  );
};

const categories = [
  "All",
  "AI & ML",
  "App Development",
  "Embedded Systems",
  "Software Engineering",
  "Web Development",
  "3D Models",
];

const data = categories.map((category) => ({
  category,
  content: <DummyContent />,
}));