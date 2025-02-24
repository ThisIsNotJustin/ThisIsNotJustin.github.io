import { cn } from "../lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "../components/ui/bento-grid";
import { IoArrowUp } from "react-icons/io5";
import Image from "next/image";
import { ProjectImage } from "../components/ui/project-image";

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
    header: (
      <ProjectImage 
        src="/assets/embedded.png"
        alt="Potentiometer Controlled LED"
      />
    ),
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
      "docker",
      "software-engineering"
    ],
    header: (
      <ProjectImage 
        src="/assets/docker_reload.png"
        alt="Docker Autoredeploy CLI Tool"
      />
    ),
    className: "md:col-span-2",
    icon: <IoArrowUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    name: "balencigo",
    description: "Lightweight and scalable loadbalancer library written in Go with a focus on concurrency",
    url: "https://github.com/ThisIsNotJustin/balencigo",
    stars: 2,
    topics: [
      "go",
      "software-engineering"
    ],
    header: (
      <ProjectImage 
        src="/assets/lbalancego.png"
        alt="Loadbalancer in Go"
      />
    ),
    className: "md:col-span-1",
    icon: <IoArrowUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    name: "basic_arm_os",
    description: "Files for basic ARM based OS in Operating System course",
    url: "https://github.com/ThisIsNotJustin/basic_arm_os",
    stars: 1,
    topics: [
      "arm64",
      "c",
      "embedded-systems"
    ],
    header: (
      <ProjectImage 
        src="/assets/armdows.png"
        alt="ARM based Operating System"
      />
    ),
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
    header: (
      <ProjectImage 
        src="/assets/embedded.png"
        alt="Button Activated LED"
      />
    ),
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
    header: (
      <ProjectImage 
        src="/assets/bestbuy3090.jpg"
        alt="BestBuy GPU Buyer"
      />
    ),
    className: "md:col-span-1",
    icon: <IoArrowUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    name: "blinky",
    description: "Flash an led utilizing GPIO headers",
    url: "https://github.com/ThisIsNotJustin/blinky",
    stars: 0,
    topics: [
      "c",
      "embedded-systems"
    ],
    header: (
      <ProjectImage 
        src="/assets/embedded.png"
        alt="Basic LED Blink Program"
      />
    ),
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
    header: (
      <ProjectImage 
        src="/assets/circularbuffer.png"
        alt="Ring Buffer for RTOS"
      />
    ),
    className: "md:col-span-1",
    icon: <IoArrowUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    name: "desk_setup",
    description: "3d models for my desk and wall",
    url: "https://github.com/ThisIsNotJustin/desk_setup",
    stars: 0,
    topics: [
      "3d-models"
    ],
    header: (
      <ProjectImage 
        src="/assets/desk_all_front.png"
        alt="Desk & Wall Setup"
      />
    ),
    className: "md:col-span-2",
    icon: <IoArrowUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    name: "Dog Breed Classifier",
    description: "Dog Breed Identifier project created in Python utilizing CNN's",
    url: "https://github.com/ThisIsNotJustin/DogBreed_Identifier",
    stars: 2,
    topics: [
      "ai-ml",
      "python",
      "tensorflow",
    ],
    header: (
      <ProjectImage 
        src="/assets/dogbreed.png"
        alt="Dog Breed Identifier"
      />
    ),
    className: "md:col-span-1",
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
    header: (
      <ProjectImage 
        src="/assets/duckduckgo.png"
        alt="Go based Local Search Engine"
      />
    ),
    className: "md:col-span-2",
    icon: <IoArrowUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    name: "Puppy Detector",
    description: "Facebook Webscraper to receive texts when golden retriever puppies are announced",
    url: "https://github.com/ThisIsNotJustin/golden_retriever_detector",
    stars: 1,
    topics: [
      "python",
      "selenium",
      "software-engineering",
      "twilio"
    ],
    header: (
      <ProjectImage 
        src="/assets/cpp.png"
        alt="Puppy Detector"
      />
    ),
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
      "docker",
      "redis",
      "software-engineering"
    ],
    header: (
      <ProjectImage 
        src="/assets/cpp.png"
        alt="URL Shortener"
      />
    ),
    className: "md:col-span-2",
    icon: <IoArrowUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    name: "Hanoi Tower Solver",
    description: "Program to display steps for solving the hanoi tower game (stacked disc game)",
    url: "https://github.com/ThisIsNotJustin/Hanoi-Tower-GameSimulation",
    stars: 0,
    topics: [
      "java"
    ],
    header: (
      <ProjectImage 
        src="/assets/HanoiSolver.png"
        alt="Hanoi Tower Solver"
      />
    ),
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
    header: (
      <ProjectImage 
        src="/assets/cpp.png"
        alt="HTTP Library in C"
      />
    ),
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
    header: (
      <ProjectImage 
        src="/assets/weather.png"
        alt="iOS Weather App"
      />
    ),
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
    header: (
      <ProjectImage 
        src="/assets/linus_list.png"
        alt="Linked List with Good Taste"
      />
    ),
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
    name: "Maru Iyagi Restaurant",
    description: "Website for local sushi restaurant",
    url: "https://github.com/ThisIsNotJustin/MaruIyagi-Website",
    stars: 2,
    topics: [
      "tailwindcss",
      "react",
      "javascript",
      "web-development"
    ],
    header: (
      <ProjectImage 
        src="/assets/maruwebsite.png"
        alt="Sushi Restaurant Website"
      />
    ),
    className: "md:col-span-2",
    icon: <IoArrowUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    name: "DigitRecognizer",
    description: "MNIST digit classifier utilizing only Python and NumPy",
    url: "https://github.com/ThisIsNotJustin/MNIST_DigitRecognizer",
    stars: 1,
    topics: [
      "ai-ml",
      "python"
    ],
    header: (
      <ProjectImage 
        src="/assets/mnist.png"
        alt="MNIST Digit Classifier"
      />
    ),
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
    header: (
      <ProjectImage 
        src="/assets/retroweather.png"
        alt="Simple Weather App"
      />
    ),
    className: "md:col-span-2",
    icon: <IoArrowUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    name: "ThisIsNotJustin.github.io",
    description: "This Portfolio Site!",
    url: "https://github.com/ThisIsNotJustin/ThisIsNotJustin.github.io",
    stars: 2,
    topics: [
      "go",
      "typescript",
      "web-development",
      "nextjs",
      "tailwindcss",
    ],
    header: (
      <ProjectImage 
        src="/assets/portfolio.png"
        alt="Justin's Portfolio"
      />
    ),
    className: "md:col-span-2",
    icon: <IoArrowUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    name: "Neural Network Library",
    description: "Neural Network library for Feed-Forward, Transformer, and Convolutional Neural Networks, written in C",
    url: "https://github.com/ThisIsNotJustin/nn_lib",
    stars: 3,
    topics: [
      "ai-ml",
      "c",
      "neural-network",
      "software-engineering"
    ],
    header: (
      <ProjectImage 
        src="/assets/nnlib.png"
        alt="NN Library"
      />
    ),
    className: "md:col-span-2",
    icon: <IoArrowUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    name: "Old Portfolio",
    description: "My old personal portfolio website",
    url: "https://github.com/ThisIsNotJustin/old-portfolio",
    stars: 1,
    topics: [
      "react",
      "tailwindcss",
      "javascript",
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
    header: (
      <ProjectImage 
        src="/assets/particledemo.png"
        alt="Particle Simulator in C++"
      />
    ),
    className: "md:col-span-1",
    icon: <IoArrowUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    name: "Spotify Pi Thing",
    description: "Complete recreation of the Spotify Car Thing using a Pi",
    url: "https://github.com/ThisIsNotJustin/pi_thing",
    stars: 2,
    topics: [
      "embedded-systems",
      "c"
    ],
    header: (
      <ProjectImage 
        src="/assets/pi_thing.png"
        alt="Replication of the Spotify Car Thing"
      />
    ),
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
    header: (
      <ProjectImage 
        src="/assets/embedded.png"
        alt="Ping Pong Terminal based mutex"
      />
    ),
    className: "md:col-span-1",
    icon: <IoArrowUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    name: "randomdigit",
    description: "Random number 1-6 on button press, 7 segment display dice!",
    url: "https://github.com/ThisIsNotJustin/randomdigit",
    stars: 1,
    topics: [
      "c",
      "embedded-systems"
    ],
    header: (
      <ProjectImage 
        src="/assets/embedded.png"
        alt="Random Digit on 7 Segment Display"
      />
    ),
    className: "md:col-span-2",
    icon: <IoArrowUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    name: "reflexpi",
    description: "Reaction time tester with a 7 segment display, LED, and button!",
    url: "https://github.com/ThisIsNotJustin/reflexpi",
    stars: 2,
    topics: [
      "c",
      "embedded-systems"
    ],
    header: (
      <ProjectImage 
        src="/assets/rttest.png"
        alt="Reaction Time Tester"
      />
    ),
    className: "md:col-span-2",
    icon: <IoArrowUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    name: "snake-game",
    description: "",
    url: "https://github.com/ThisIsNotJustin/snake-game",
    stars: 0,
    topics: [
      "java",
    ],
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IoArrowUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    name: "Study Timer",
    description: "Study Timer with 5 minute intervals, for 10 second breaks",
    url: "https://github.com/ThisIsNotJustin/StudyTimerGUI",
    stars: 0,
    topics: [
      "java",
      "javaswing"
    ],
    header: (
      <ProjectImage 
        src="/assets/StudyTimer.png"
        alt="Study Timer"
      />
    ),
    className: "md:col-span-1",
    icon: <IoArrowUp className="h-4 w-4 text-neutral-500" />,
  }
];

export default repositories;