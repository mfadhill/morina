import React, { useState } from "react";
import logo from "../assets/logo.png";

const About = () => {
  const [readMore, setReadMore] = useState(false);

  const toggleReadMore = () => {
    setReadMore((prev) => !prev);
  };

  return (
    <div>
      {/* ABOUT Section */}
      <div className="w-full lg:h-screen h-full m-auto flex items-center justify-center py-20 bg-gray-700">
        <div className="w-full h-full flex flex-col justify-center items-center sm:px-4 px-2">
          <div className="lg:w-[90%] w-full mx-auto flex flex-col lg:gap-6 lg:flex-row items-center justify-center">
            <div className="relative">
              {/* Main Img */}
              <img
                className="rounded-full relative object-cover right-0 lg:w-[30rem] lg:h-[30rem] sm:w-[25rem] sm:h-[25rem] w-[12rem] h-[12rem] outline sm:outline-offset-[.77em] outline-offset-[.37em] outline-green-500"
                src={logo}
                alt="About us"
              />
            </div>

            <div className="lg:w-[60%] p-4 w-full h-full shadow-xl shadow-green-300/40 flex flex-col justify-center items-center sm:px-6 px-4 rounded-xl">
              <h2 className="text-4xl text-center text-green-600 dark:text-green-400 font-bold px-4 py-1 md:mt-0 mt-10">
                About Us
              </h2>
              <p className="md:text-3xl text-2xl text-center text-gray-800 dark:text-gray-200 font-bold my-5">
                We are Petal Haven S.C.
              </p>
              <p className="md:text-xl sm:text-lg text-base mt-2 text-justify sm:px-2 dark:text-gray-300">
                At Petal Haven, we believe in the transformative power of
                flowers. Our blooms are not just arrangements; they are
                expressions of beauty, joy, and emotion. From elegant bouquets
                to enchanting floral designs, we curate every creation with
                precision and care.
              </p>

              {readMore && (
                <p className="md:text-xl sm:text-lg text-base mt-4 text-justify sm:px-2 dark:text-gray-300 transition-all duration-300 ease-in-out">
                  Whether it's a celebration, a gesture of love, or a moment of
                  solace, Petal Haven's exquisite flowers speak a language of
                  their own, bringing nature's beauty to your doorstep.
                  Experience the enchantment of Petal Haven and let flowers tell
                  your story. Every petal is a promise of quality and elegance.
                </p>
              )}

              {/* button */}
              <button
                onClick={toggleReadMore}
                className="lg:mt-10 mt-6 lg:px-6 px-4 lg:py-4 py-2 bg-green-600 rounded-sm lg:text-xl text-lg text-white font-semibold"
              >
                {readMore ? "Read Less" : "Read More"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
