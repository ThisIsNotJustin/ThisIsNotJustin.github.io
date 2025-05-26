export default function Skills() {
  return (
    <section className="py-24 pb-52">
      <div className="container mx-auto relative">
        <div className="flex flex-col items-center justify-center mb-4 md:mb-8">
          <h2 className="text-5xl sm:text-heading-2 font-semibold uppercase text-secondary-700">
            Skills
          </h2>
        </div>

        {/* Skill Categories */}
        <div className="space-y-16">
          {/* Programming Languages */}
          <hr className="border-t border-secondary-300 my-1" />
          <div className="relative flex flex-col md:flex-row items-start gap-16 md:gap-24 p-1">
            <h3 className="absolute top-0 left-0 text-works-title-large md:text-heading-3 font-bold text-secondary-700">
              Programming Languages
            </h3>
            <div className="md:w-1/3 mt-6 md:mt-12">
              <p className="text-body-1 text-primary-400 mt-8">
                Languages I commonly use to build full stack software.
              </p>
            </div>
            <ul className="text-secondary-500 md:w-2/3 grid grid-cols-2 font-bold gap-4 gap-x-16 text-heading-3 mt-0 pt-0 lg:pt-20">
              <li>C/C++</li>
              <li>Go</li>
              <li>TypeScript</li>
              <li>Python</li>
              <li>Swift</li>
              <li>JavaScript</li>
              <li>C#</li>
              <li>Assembly</li>
            </ul>
          </div>
          <hr className="border-t border-secondary-300 my-1" />

          {/* Tools */}
          <div className="flex flex-col md:flex-row items-start gap-16 md:gap-24 p-1">
            <div className="md:w-1/3">
              <h3 className="text-heading-3 font-bold text-secondary-700 mb-6 md:mb-8">
                Tools
              </h3>
              <p className="text-body-1 text-primary-400">
                Essential tools that I use in my tech stack to streamline development.
              </p>
            </div>
            <ul className="text-secondary-500 md:w-2/3 grid grid-cols-2 font-bold gap-4 gap-x-16 text-heading-3 mt-0 pt-0 lg:pt-20">
              <li>Git</li>
              <li>Docker</li>
              <li>PostgreSQL</li>
              <li>Unix</li>
              <li>Node.js</li>
              <li>AWS</li>
              <li>GCP</li>
              <li>Firebase</li>
              <li>Redis</li>
              <li>MongoDB</li>
            </ul>
          </div>
          <hr className="border-t border-secondary-300 my-1" />

          {/* Frameworks / Libraries */}
          <div className="relative flex flex-col md:flex-row items-start gap-16 md:gap-24 p-1">
            <h3 className="absolute top-0 left-0 text-heading-3 font-bold text-secondary-700">
              Libraries & Frameworks 
            </h3>
            <div className="md:w-1/3 mt-6 md:mt-12">
              <p className="text-body-1 text-primary-400 mt-8">
                Powerful frameworks and libraries I use to create scalable, high-quality applications.
              </p>
            </div>
            <ul className="text-secondary-500 md:w-2/3 grid grid-cols-2 font-bold gap-4 gap-x-16 text-heading-3 mt-0 pt-0 lg:pt-20">
              <li>NextJS</li>
              <li>Motion</li>
              <li>Native</li>
              <li>Express</li>
              <li>Tensorflow</li>
              <li>React</li>
              <li>PyTorch</li>
              <li>SwiftUI</li>
              <li>FreeRTOS</li>
              <li>Unity</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};