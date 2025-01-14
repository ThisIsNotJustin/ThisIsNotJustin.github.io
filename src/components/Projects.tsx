"use client";
import Image from "next/image";
import React, { useState, useRef } from "react";
import { Carousel, Card } from "./ui/apple-cards-carousel";
import repositories from "../lib/repositories";

export default function Projects() {
  const [visibleCount, setVisibleCount] = useState(3);
  const projectsRef = useRef<HTMLDivElement>(null);

  const cards = data.map((card, index) => (
    <Card key={index} card={card} index={index} layout={true} />
  ));

  const visibleProjects = repositories.slice(0, visibleCount);

  const handleShowMore = () => {
    if (visibleCount < 10) {
      setVisibleCount((prevCount) => Math.min(10, repositories.length));
    } else {
      setVisibleCount((prevCount) => Math.min(prevCount + 10, repositories.length));
    }
  };

  const handleHide = () => {
    setVisibleCount(3);
  };

  return (
    <div ref={projectsRef} id="projects" className="mx-auto items-center justify-center flex flex-col w-full h-full py-20">
      <h2 className="text-5xl sm:text-heading-2 font-semibold uppercase text-secondary-700">
        Projects
      </h2>
      <Carousel items={cards} />
      <div className="mt-10">
        {visibleProjects.map((repo, index) => (
          <div key={index} className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4">
            <h3 className="text-neutral-800 text-xl md:text-2xl font-bold">
              {repo.name}
            </h3>
            <p className="text-neutral-600 text-base md:text-xl">
              {repo.description}
            </p>
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              View Repository
            </a>
          </div>
        ))}
        {visibleCount < repositories.length && (
          <button
            onClick={handleShowMore}
            className="mt-4 px-6 py-2 text-white"
          >
            Show More
          </button>
        )} 
        { visibleCount > 3 && (
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

const data = [
  {
    category: "App Development",
    content: <DummyContent />,
  },
  {
    category: "AI & ML",
    content: <DummyContent />,
  },
  {
    category: "Software Engineering",
    content: <DummyContent />,
  },

  {
    category: "Embedded Systems",
    content: <DummyContent />,
  },
  {
    category: "Web Development",
    content: <DummyContent />,
  },
  {
    category: "3D Modelling",
    content: <DummyContent />,
  },
];