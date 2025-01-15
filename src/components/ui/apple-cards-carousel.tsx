"use client";
import React, {
  useEffect,
  // useRef,
  useState,
  createContext,
  useContext,
} from "react";
// import { IoIosClose } from "react-icons/io";
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";
import { cn } from "../../lib/utils";
// import AnimatePresence from "framer-motion"
import { motion } from "framer-motion";
// import Image, { ImageProps } from "next/image";
// import { useOutsideClick } from "../hooks/use-outside-click";

interface CarouselProps {
  items: React.JSX.Element[];
  initialScroll?: number;
  onCategorySelect: (index: number) => void;
}

type Card = {
  category: string;
  content: React.ReactNode;
};

export const CarouselContext = createContext<{
  onCardClose: (index: number) => void;
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
}>({
  onCardClose: () => {},
  currentIndex: 0,
  setCurrentIndex: () => {},
});

export const Carousel = ({ items, initialScroll = 0, onCategorySelect }: CarouselProps) => {
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      // setCanScrollLeft(scrollLeft > 0);
      // setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const scrollLeft = () => {
    if (currentIndex > 0) {
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex);
      scrollToIndex(newIndex);
      onCategorySelect(newIndex);
    }
  };

  const scrollRight = () => {
    if (currentIndex < items.length - 1) {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
      scrollToIndex(newIndex);
      onCategorySelect(newIndex);
    }
  };

  const scrollToIndex = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = isMobile() ? 230 : 384;
      const gap = isMobile() ? 4 : 8;
      const scrollPosition = (cardWidth + gap) * index - (carouselRef.current.clientWidth / 2 - cardWidth / 2);
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    }
  };

  const handleCardClose = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = isMobile() ? 230 : 384; // (md:w-96)
      const gap = isMobile() ? 4 : 8;
      const scrollPosition = (cardWidth + gap) * (index);
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  const isMobile = () => {
    return window && window.innerWidth < 768;
  };

  return (
    <CarouselContext.Provider
      value={{ onCardClose: handleCardClose, currentIndex, setCurrentIndex }}
    >
      <div className="relative w-full">
        <div
          className="flex w-full overflow-x-scroll overscroll-x-auto py-10 md:py-20 scrollbar-hide scroll-smooth"
          ref={carouselRef}
          onScroll={checkScrollability}
        >
          <div
            className={cn(
              "flex flex-row justify-start gap-4 px-4",
            )}
          >
            {items.map((item, index) => (
              <motion.div
                initial={{
                  opacity: 1,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: 0.2 * index,
                    ease: "easeOut",
                    once: false,
                  },
                }}
                key={"card" + index}
                className={cn(
                  "rounded-3xl",
                )}
              >
                {item} 
              </motion.div>
            ))}
          </div>
        </div>
        <div className="=">
          <button
            className="absolute left-0 top-40 z-40 h-10 w-10 rounded-full bg-gray-100 opacity-40 hover:opacity-75 flex items-center justify-center disabled:opacity-20"
            onClick={scrollLeft}
            disabled={currentIndex === 0}
          >
            <HiArrowNarrowLeft className="h-6 w-6 text-gray-500" />
          </button>
          <button
            className="absolute right-0 top-40 z-40 h-10 w-10 rounded-full bg-gray-100 opacity-40 hover:opacity-75 flex items-center justify-center disabled:opacity-20"
            onClick={scrollRight}
            disabled={currentIndex === items.length - 1}
          >
            <HiArrowNarrowRight className="h-6 w-6 text-gray-500" />
          </button>
        </div>
      </div>
    </CarouselContext.Provider>
  );
};

export const Label = ({
  card,
  index,
  layout = false,
  onClick,
  isSelected,
}: {
  card: Card;
  index: number;
  layout?: boolean;
  onClick: () => void;
  isSelected: boolean;
}) => {
  // const containerRef = useRef<HTMLDivElement>(null);
  const { currentIndex, setCurrentIndex } = useContext(CarouselContext);

  const handleCLick = () => {
    setCurrentIndex(index);
    onClick();
  }

  return (
    <>
      <motion.button
        layoutId={layout ? `card-${card.category}` : undefined}
        className={cn(
          "rounded-3xl bg-gray-100 dark:bg-red-900 opacity-100 overflow-hidden flex items-start justify-start relative z-10",
          currentIndex === index ? "border-2 border-primary-400" : ""
        )}
        onClick={handleCLick}
      >
        <div className="relative z-40 p-4">
          <motion.p
            layoutId={layout ? `category-${card.category}` : undefined}
            className="text-white text-heading-3 font-semibold whitespace-nowrap"
          >
            {card.category}
          </motion.p>
        </div>
      </motion.button>
    </>
  );
};

/*
export const Card = ({
  card,
  index,
  layout = false,
}: {
  card: Card;
  index: number;
  layout?: boolean;
}) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { onCardClose, currentIndex } = useContext(CarouselContext);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        handleClose();
      }
    }

    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useOutsideClick(containerRef, () => handleClose());

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    onCardClose(index);
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 h-screen z-50 overflow-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bg-black/80 backdrop-blur-lg h-full w-full fixed inset-0"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              ref={containerRef}
              layoutId={layout ? `card-${card.category}` : undefined}
              className="max-w-5xl mx-auto dark:bg-red-900 h-fit  z-[60] my-10 p-4 md:p-10 rounded-3xl relative"
            >
              <button
                className="sticky top-4 h-8 w-8 right-0 ml-auto bg-black dark:bg-white rounded-full flex items-center justify-center"
                onClick={handleClose}
              >
                <IoIosClose className="h-6 w-6 text-neutral-100 dark:text-neutral-900" />
              </button>
              <motion.p
                layoutId={layout ? `category-${card.category}` : undefined}
                className="text-base font-medium text-black dark:text-white"
              >
                {card.category}
              </motion.p>
              <div className="py-10">{card.content}</div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <motion.button
        layoutId={layout ? `card-${card.category}` : undefined}
        onClick={onClick}
        className={cn(
          "rounded-3xl bg-gray-100 dark:bg-red-900 opacity-100 overflow-hidden flex items-start justify-start relative z-10",
          currentIndex === index ? "border-2 border-primary-400" : ""
        )}
      >
        <div className="relative z-40 p-4">
          <motion.p
            layoutId={layout ? `category-${card.category}` : undefined}
            className="text-white text-heading-3 font-semibold whitespace-nowrap"
          >
            {card.category}
          </motion.p>
        </div>
      </motion.button>
    </>
  );
};
*/

/*
export const BlurImage = ({
  height,
  width,
  className,
  alt,
  ...rest
}: ImageProps) => {
  const [isLoading, setLoading] = useState(true);
  return (
    <Image
      className={cn(
        "transition duration-300",
        isLoading ? "blur-sm" : "blur-0",
        className
      )}
      onLoad={() => setLoading(false)}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      src=""
      alt={alt ? alt : "Background of a beautiful view"}
      {...rest}
    />
  );
};
*/