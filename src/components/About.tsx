export default function About() {
  return (
    <section>
      <div className="flex translate-y-56 items-center justify-center space-x-[3%]">
        <h2 className = "w-fit text-5xl sm:text-heading-2 font-medium uppercase text-secondary-600">
          About Me
        </h2>
      </div>
      <div className = "mt-10 flex flex-col items-start gap-8 md:flex-row lg:gap-10">
        <div className = "top-20 sm:sticky md:top-28 lg:top-32 md:w-1/2">
          <div className = "w-full space-y-4 2xl:space-y-10">
            <h3 className = "translate-y-10 text-heading-3 2xl:text-7xl font-semibold leading-tight opacity-100">
              Who am I?
            </h3>
            <p className = "translate-y-10 text-body-1 2xl:text-4xl opacity-100">
              I am a Computer Science student at Tennessee Technological University with a passion for development and design.
              <br></br>
              <br></br>
              I am deeply interested in a wide array of Computer Science topics including Embedded Systems, Machine Learning, IoT, Software Development, and Web Development.
              <br></br>
              <br></br>
              Outside of developing and school, I enjoy powerlifting, and playing with my dog!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}