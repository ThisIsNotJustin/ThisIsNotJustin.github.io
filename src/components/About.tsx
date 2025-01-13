export default function About() {
  return (
    <section className="relative py-24">
      <div className="container mx-auto mb-48">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-5xl sm:text-heading-2 font-semibold uppercase text-secondary-700 mb-10">
            About Me
          </h2>
          <div className="flex gap-8 md:flex-row lg:gap-10">
            <div className="mx-auto sm:sticky md:top-28 lg:top-32 md:w-1/2">
              <div className="space-y-4 2xl:space-y-10">
                <p className="text-accent-400 text-body-1 font-medium 2xl:text-4xl text-center">
                  I am a Computer Science student at Tennessee Technological University with a passion for development and design.
                  <br></br>
                  <br></br>
                  I am deeply interested in a wide array of Computer Science topics including Embedded Systems, Machine Learning, IoT, Software Development, and Web Development.
                  <br></br>
                  <br></br>
                  Outside of developing and school, I enjoy powerlifting and playing with my dog!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};