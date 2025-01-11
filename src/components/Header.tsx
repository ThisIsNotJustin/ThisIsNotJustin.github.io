export default function Header() {
  return (
    <header className="fixed top-0 z-50 flex w-full translate-y-full items-center justify-between px-5 py-0">
      <nav className="flex items-center space-x-7 font-grotesk text-works-title font-black sm:block">
        <a href="#intro" className="z-50">
          <span>By Justin</span>
          <span className="absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
        </a>
      </nav>
      <nav className="flex items-center space-x-7 font-grotesk text-body-3 sm:block">
        <a href="#about" className="group relative hidden md:inline-block">
          <span>About</span>
          <span className="absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
        </a>
        <a href="#projects" className="group relative hidden md:inline-block">
          <span>Projects</span>
          <span className="absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
        </a>
        <a href="#contact" className="bg-accent-200 px-8 py-3 rounded-full group relative hover:bg-accent-300">
          <span className="relative w-fit">
            <span className="absolute bottom-0 h-[0.125em] w-0 bg-secondary-700 opacity-90 duration-300 ease-out group-hover:w-full"></span>
            <span>Contact Me.</span>
          </span>
        </a>
      </nav>
    </header>
  );
}