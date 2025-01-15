"use client";

import Header from "../components/Header"
import Intro from "../components/Intro";
import About from "../components/About";
import Skills from "../components/Skills";
import Footer from "../components/Footer";
import ScrollWrapper from "../components/ui/scrollwrapper";
import Contact from "../components/Contact"
import Projects from "../components/Projects"
import { BackGroundColorProvider, useBackGroundColor } from "../components/ui/background";

const BackGroundWrapper = ({ children }: { children: React.ReactNode }) => {
  const { bgColor } = useBackGroundColor();

  return (
    <div style={{ backgroundColor: bgColor }} className="transition-colors duration-500">
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
            <ScrollWrapper bgColor="#0a0a0a" thresholdVal={0.2}>
              <Skills />
            </ScrollWrapper>
            <ScrollWrapper bgColor="#0a0a0a" thresholdVal={0.2}>
              <Projects />
            </ScrollWrapper>
            <ScrollWrapper bgColor="#D1D1C7" thresholdVal={0.45}>
              <Contact />
            </ScrollWrapper>
          </main>
        <ScrollWrapper bgColor="#0a0a0a" thresholdVal={0.75}>
          <Footer />
        </ScrollWrapper>
      </BackGroundWrapper>
    </BackGroundColorProvider>
  );
};
