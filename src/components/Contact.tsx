import { MdOutlineArrowOutward } from "react-icons/md";

export default function Contact() {
  return (
    <section id="contact" className="flex items-center justify-center h-screen px-4">
      <div className="bg-secondary-700 rounded-xl flex shadow-lg mx-auto text-center h-5/6 w-full max-w-screen-lg flex-col justify-center">
        {/* Container for Heading and Arrow */}
        <div className="relative flex items-center justify-center h-full">
          {/* Heading */}
          <h1 className="text-secondary-500 text-heading-1 uppercase font-semibold flex items-center justify-center">
            CONTACT ME
            {/* Arrow */}
            <div className="absolute top-[35%] left-[77%] transform text-heading-1 text-secondary-400 duration-300 hover:scale-90">
              <MdOutlineArrowOutward />
            </div>
          </h1>
        </div>
      </div>
    </section>
  );
}
