import { cn } from "../lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "../components/ui/bento-grid";
import { IoArrowUp } from "react-icons/io5";

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);

const repositories = [
  {
    name: "adjustable_led",
    description: "Adjust the brightness of an LED with a potentiometer",
    url: "https://github.com/ThisIsNotJustin/adjustable_led",
    stars: 2,
    topics: [
      "c",
      "embedded-systems"
    ],
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IoArrowUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    name: "autodock",
    description: "Go based CLI Tool for automating docker redeployments",
    url: "https://github.com/ThisIsNotJustin/autodock",
    stars: 2,
    topics: [
      "go",
      "software-engineering"
    ],
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <IoArrowUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    name: "balencigo",
    description: "Lightweight and scalable loadbalancer written in Go with a focus on concurrency",
    url: "https://github.com/ThisIsNotJustin/balencigo",
    stars: 2,
    topics: [
      "go",
      "software-engineering"
    ],
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IoArrowUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    name: "basic_arm_os",
    description: "Files for basic ARM based OS in Operating System course",
    url: "https://github.com/ThisIsNotJustin/basic_arm_os",
    stars: 2,
    topics: [
      "arm64",
      "c",
      "embedded-systems"
    ],
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IoArrowUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    name: "bblink",
    description: "Control an LED utilizing a button",
    url: "https://github.com/ThisIsNotJustin/bblink",
    stars: 1,
    topics: [
      "c",
      "embedded-systems"
    ],
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IoArrowUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    name: "BestBuy-GPU-AutoBuyer",
    description: "",
    url: "https://github.com/ThisIsNotJustin/BestBuy-GPU-AutoBuyer",
    stars: 1,
    topics: [
      "python",
      "software-engineering"
    ],
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IoArrowUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    name: "blinky",
    description: "Flash an led utilizing GPIO headers",
    url: "https://github.com/ThisIsNotJustin/blinky",
    stars: 1,
    topics: [
      "c",
      "embedded-systems"
    ],
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IoArrowUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    name: "circular_buffer",
    description: "Educational Circular (Ring) Buffer Implementation for Real-Time Systems",
    url: "https://github.com/ThisIsNotJustin/circular_buffer",
    stars: 2,
    topics: [
      "c",
      "embedded-systems"
    ],
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IoArrowUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    name: "desk_setup",
    description: "",
    url: "https://github.com/ThisIsNotJustin/desk_setup",
    stars: 0,
    topics: [
      "3d-models"
    ],
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <IoArrowUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    name: "DogBreed_Identifier",
    description: "Dog Breed Identifier project created in Python utilizing CNN's",
    url: "https://github.com/ThisIsNotJustin/DogBreed_Identifier",
    stars: 2,
    topics: [
      "ai-ml",
      "python"
    ],
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <IoArrowUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    name: "gocator",
    description: "Local Search Engine written in Go",
    url: "https://github.com/ThisIsNotJustin/gocator",
    stars: 2,
    topics: [
      "ai-ml",
      "go",
      "software-engineering"
    ],
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <IoArrowUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    name: "golden_retriever_detector",
    description: "Facebook Webscraper to receive texts when golden retriever puppies are announced",
    url: "https://github.com/ThisIsNotJustin/golden_retriever_detector",
    stars: 1,
    topics: [
      "python",
      "selenium",
      "software-engineering",
      "twilio"
    ],
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <IoArrowUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    name: "goshort",
    description: "URL Shortener written in Go",
    url: "https://github.com/ThisIsNotJustin/goshort",
    stars: 2,
    topics: [
      "go",
      "software-engineering"
    ],
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <IoArrowUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    name: "Hanoi-Tower-GameSimulation",
    description: "Program to display steps for solving the hanoi tower game (stacked disc game)",
    url: "https://github.com/ThisIsNotJustin/Hanoi-Tower-GameSimulation",
    stars: 0,
    topics: [
      "java"
    ],
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IoArrowUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    name: "https_server_c",
    description: "HTTPS Server written in C for Educational Purposes",
    url: "https://github.com/ThisIsNotJustin/https_server_c",
    stars: 1,
    topics: [
      "c",
      "software-engineering"
    ],
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IoArrowUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    name: "iOSWeatherApp",
    description: "IOS Weather App for getting real time weather in a user's area",
    url: "https://github.com/ThisIsNotJustin/iOSWeatherApp",
    stars: 1,
    topics: [
      "app-development",
      "swift"
    ],
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IoArrowUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    name: "linus_list",
    description: "Linked List with \"Good Taste\" - Linus Torvalds",
    url: "https://github.com/ThisIsNotJustin/linus_list",
    stars: 1,
    topics: [
      "c",
      "software-engineering"
    ],
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IoArrowUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    name: "mac_tiles",
    description: "Window Tiler for Mac OS",
    url: "https://github.com/ThisIsNotJustin/mac_tiles",
    stars: 2,
    topics: [
      "app-development",
      "swift",
      "swiftui"
    ],
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <IoArrowUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    name: "MaruIyagi-Website",
    description: "Website for local sushi restaurant",
    url: "https://github.com/ThisIsNotJustin/MaruIyagi-Website",
    stars: 2,
    topics: [
      "css",
      "html",
      "reactjs",
      "web-development"
    ],
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <IoArrowUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    name: "MNIST_DigitRecognizer",
    description: "Simple MNIST digit recognizer utilizing Python and NumPy",
    url: "https://github.com/ThisIsNotJustin/MNIST_DigitRecognizer",
    stars: 1,
    topics: [
      "ai-ml",
      "python"
    ],
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IoArrowUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    name: "SimpleWeather",
    description: "React Native (TS) Crossplatform Weather App, Simple Weather!",
    url: "https://github.com/ThisIsNotJustin/mobile_weather_app",
    stars: 3,
    topics: [
      "app-development",
      "react-native",
      "typescript"
    ],
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <IoArrowUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    name: "nn_lib",
    description: "Neural Network library written in C for NN Educational Purposes",
    url: "https://github.com/ThisIsNotJustin/nn_lib",
    stars: 2,
    topics: [
      "ai-ml",
      "c",
      "neural-network",
      "software-engineering"
    ],
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IoArrowUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    name: "Old Portfolio",
    description: "My old personal portfolio website",
    url: "https://github.com/ThisIsNotJustin/old-portfolio",
    stars: 1,
    topics: [
      "reactjs",
      "tailwindcss",
      "typedjs",
      "vite",
      "web-development"
    ],
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IoArrowUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    name: "particlecim",
    description: "Simple Particle Simulation with C++ and SFML",
    url: "https://github.com/ThisIsNotJustin/particlecim",
    stars: 2,
    topics: [
      "cpp",
      "software-engineering"
    ],
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IoArrowUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    name: "pi_thing",
    description: "",
    url: "https://github.com/ThisIsNotJustin/pi_thing",
    stars: 1,
    topics: [
      "embedded-systems"
    ],
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <IoArrowUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    name: "pongtex",
    description: "Ping Pong Game utilizing a mutex for mutual exclusion and synchronization",
    url: "https://github.com/ThisIsNotJustin/pongtex",
    stars: 2,
    topics: [
      "c",
      "embedded-systems",
      "software-engineering"
    ],
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IoArrowUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    name: "randomdigit",
    description: "Random number 1-6 on button press, 7 segment display dice!",
    url: "https://github.com/ThisIsNotJustin/randomdigit",
    stars: 2,
    topics: [
      "c",
      "embedded-systems"
    ],
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <IoArrowUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    name: "reflexpi",
    description: "",
    url: "https://github.com/ThisIsNotJustin/reflexpi",
    stars: 0,
    topics: [
      "c",
      "embedded-systems"
    ],
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IoArrowUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    name: "snake-game",
    description: "",
    url: "https://github.com/ThisIsNotJustin/snake-game",
    stars: 0,
    topics: [],
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IoArrowUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    name: "StudyTimerGUI",
    description: "Study Timer defaulted at 90 minutes for a long study session. On 5 minute intervals, the user is told to take a 10 second break.",
    url: "https://github.com/ThisIsNotJustin/StudyTimerGUI",
    stars: 0,
    topics: [
      "java",
      "javaswing"
    ],
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IoArrowUp className="h-4 w-4 text-neutral-500" />,
  }
];

export default repositories;