import { MdOutlineArrowOutward } from "react-icons/md";

export default function Contact() {
  return (
    <section id="contact" className="flex items-center justify-center px-4 pt-32">
      <div className="bg-secondary-700 rounded-xl p-80 flex shadow-lg mx-auto text-center pb-96 pt-80">
        {/* Container for Heading and Arrow */}
        <div className="relative flex items-center justify-center pt-52 pb-52">
          {/* Heading */}
          <h1 className="text-secondary-500 text-heading-1 uppercase font-semibold flex items-center">
            CONTACT ME
            {/* Arrow */}
            <div className="absolute top-32 right-[-64] text-heading-1 text-secondary-400 transform duration-300 hover:scale-90">
              <MdOutlineArrowOutward />
            </div>
          </h1>
        </div>
      </div>
    </section>
  );
}
