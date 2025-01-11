export default function Intro() {
  return (
    <section id="intro" className="relative flex w-full h-screen select-none items-center justify-center">
      <div className="z-10 flex flex-col w-full items-center text-title 2xl:text-[10vw] 2xl:space-y-16 font-black uppercase text-accent-300">
        <div className="title 2xl:py-16">
          <h1 className="-translate-y-54 overflow-visible">
            Hey, I&apos;m Justin
          </h1>
        </div>
        <div className=" 2xl:py-16">
          <h1 className="-translate-y-54 overflow-visible transform scale-y-[-1] opacity-50">
            Hey, I&apos;m Justin
          </h1>
        </div>
      </div>
    </section>
  );
}