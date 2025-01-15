import React from "react";

import { MdOutlineArrowOutward } from "react-icons/md";
import { useState } from "react";
import ContactModal from "./ui/contact-modal";

export default function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    

    
    <section id="contact" className="flex items-center justify-center h-screen px-4">
      {!isModalOpen ? (
        <div className="bg-secondary-700 rounded-xl flex shadow-lg text-center h-5/6 w-full max-w-screen-lg flex-col justify-center">
          {/* Container for Heading and Arrow */}
          <div className="relative flex items-center justify-center h-full">
              {/* Heading */}
              <h1 className="text-secondary-500 text-heading-1 uppercase font-semibold flex items-center justify-center">
                CONTACT ME
                {/* Arrow */}
                <span className="pb-16 lg:pb-32 text-heading-1 text-secondary-400 duration-300 hover:scale-90"
                  onClick={() => setIsModalOpen(true)}
                >
                  <MdOutlineArrowOutward />
                </span>
              </h1>
          </div>
        </div>
      ) : (
        <div className="bg-secondary-700 rounded-xl flex shadow-lg mx-auto text-center h-5/6 w-full max-w-screen-lg flex-col justify-center">
          {/* Container for Heading and Arrow */}
          <div className="relative flex items-center justify-center h-full">
            <ContactModal 
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
            />
          </div>
        </div>
      )}
    </section>
  );
};
