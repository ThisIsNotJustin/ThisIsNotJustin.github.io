"use client";

import Image from "next/image";
import Header from "../components/Header"
import Intro from "../components/Intro";
import About from "../components/About";
import Content from "../components/content";
import Skills from "../components/Skills";
import Footer from "../components/Footer";
import ScrollWrapper from "../components/ui/scrollwrapper";
import { BackGroundColorProvider, useBackGroundColor } from "../components/ui/background";

const BackGroundWrapper = ({ children }: { children: React.ReactNode }) => {
  const { bgColor } = useBackGroundColor();

  return (
    <div style={{ backgroundColor: bgColor }} className="transition-colors duration-500 min-h-screen">
      {children}
    </div>
  );
};

export default function Home() {
  return (
    <BackGroundColorProvider>
      <BackGroundWrapper>
        <Header />
          <ScrollWrapper bgColor="#0a0a0a" thresholdVal={0.6}>
            <Intro />
          </ScrollWrapper>
          <main className = "px-5 md:px-10 xl:px-20 2xl:px-28">
            <ScrollWrapper bgColor="#D1D1C7" thresholdVal={0.6}>
              <About />
            </ScrollWrapper>
            <ScrollWrapper bgColor="#0a0a0a" thresholdVal={0.35}>
              <Skills />
            </ScrollWrapper>
          </main>
        <Footer />
      </BackGroundWrapper>
    </BackGroundColorProvider>
  );
};
