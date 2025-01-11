import Image from "next/image";
import Header from "../components/Header"
import Intro from "../components/Intro";
import About from "../components/About";
import Content from "../components/content"
import SkillsSection from "../components/SkillsSection"

export default function Home() {
  return (
    <div className = "">
      <Header />
      <Intro />
      <main className = "px-5 md:px-10 xl:px-20 2xl:px-28">
        <Content />
        <About />
        <SkillsSection />
      </main>
    </div>
  );
}
