import React from 'react';

function Contact() {
   return (
        <div className = "flex flex-col mb-10 mx-auto">
            <div className = "flex justify-center items-center">
                <form
                action = "https://getform.io/f/e3b24398-d7a6-4fc2-9581-b43f013e6766"
                method = "POST"
                target = "_blank"
                className="flex flex-col w-full md:w-7/12"
                >
                <div>
                    <h1 className = "py-2 mx-auto flex flex-row justify-center font-semibold text-3xl md:text-4xl lg:text-5xl">
                        Contact&nbsp; <span className = "text-teal-400 font-bold">Me!</span>
                    </h1>
                </div>
                <input
                    type = "text"
                    name = "name"
                    placeholder = "Name"
                    className = "dark:text-black-800 p-2 bg-transparent border-2 rounded-md focus:outline-none"
                />
                <input
                    type = "text"
                    name = "email"
                    placeholder = "Email"
                    className = "dark:text-black-800 my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none"
                />
                <textarea
                    name = "message"
                    placeholder = "Message"
                    rows = "10"
                    className = "dark:text-black-800 p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none"
                />
                <button
                    type = "submit"
                    className = "mx-auto flex flex-row justify-center items-center px-20 py-3 w-max text-md md:text-lg lg:text-xl font-medium rounded-md text-white bg-orange-400"
                >
                    Submit
                </button>
                </form>
            </div>
        </div>
   )
}

export default Contact;
