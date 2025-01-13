export default function Skills() {
  return (
    <section className="relative py-24">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center mb-16">
          <h2 className="text-5xl sm:text-heading-2 font-medium uppercase text-secondary-700">
            Skills
          </h2>
        </div>

        {/* Skill Categories */}
        <div className="space-y-16">
          {/* Programming Languages */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-24">
            <div className="md:w-1/3">
              <h3 className="text-heading-3 font-bold text-secondary-700 mb-3">
                Programming Languages
              </h3>
              <p className="text-body-1 text-primary-400">
                Languages I commonly use to build and deliver full stack software.
              </p>
            </div>
            <ul className="text-secondary-500 md:w-2/3 grid grid-cols-2 gap-4 font-bold text-heading-3">
              <li>C</li>
              <li>Go</li>
              <li>TypeScript</li>
              <li>Python</li>
              <li>Swift</li>
              <li>C++</li>
              <li>JavaScript</li>
              <li>C#</li>
              <li>Rust</li>
              <li>ARM Assembly</li>
            </ul>
          </div>

          {/* Tools */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-24">
            <div className="md:w-1/3">
              <h3 className="text-heading-3 font-bold text-secondary-700 mb-3">
                Tools
              </h3>
              <p className="text-body-1 text-primary-400">
                Essential tools that I use in my tech stack to streamline development.
              </p>
            </div>
            <ul className="text-secondary-500 md:w-2/3 grid grid-cols-2 font-bold gap-4 text-heading-3">
              <li>Git</li>
              <li>Docker</li>
              <li>PostgreSQL</li>
              <li>Unix</li>
              <li>AWS</li>
              <li>GCP</li>
              <li>Firebase</li>
              <li>Redis</li>
              <li>MongoDB</li>
              <li>Unity</li>
            </ul>
          </div>

          {/* Frameworks / Libraries */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-24">
            <div className="md:w-1/3">
              <h3 className="text-heading-3 font-bold text-secondary-700 mb-3">
                Frameworks / Libraries
              </h3>
              <p className="text-body-1 text-primary-400">
                Powerful frameworks and libraries I use to create scalable, high-quality applications.
              </p>
            </div>
            <ul className="text-secondary-500 md:w-2/3 grid grid-cols-2 font-bold gap-4 text-heading-3">
              <li>NextJS</li>
              <li>React Native</li>
              <li>Node.js</li>
              <li>Express</li>
              <li>Tensorflow</li>
              <li>React</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};