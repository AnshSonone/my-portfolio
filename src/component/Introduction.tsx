import React from "react";
import { motion } from "motion/react";

function Introduction() {
  return (
    <div className="my-18 sm:flex justify-evenly items-center animate-fade-down">
      <div className="text-center sm:text-start ">
        <div className="">
          <h2 className="text-blue-300 font-bold text-4xl">Hey,</h2>
          <span className="text-white text-3xl my-4 font-bold">
            This is Ansh Sonone
          </span>
        </div>
        <div className="text-white my-4 space-y-2 text-start">
          <p className="text-2xl">
            Aspiring full-stack developer with a passion for building scalable,{" "}
          </p>
          <p className="text-2xl">
            efficient web applications. Driven by curiosity and a love for
            technology,{" "}
          </p>
          <p className="text-2xl">
            Ansh is honing his expertise in JavaScript frameworks and modern
            development practices.
          </p>
        </div>
      </div>

      <div className="text-white flex justify-center">
        <img
          className="w-[20rem] rounded-md"
          src="https://i.pinimg.com/736x/07/f6/df/07f6df70100683f9a2c3798066401cc8.jpg"
        />
      </div>
    </div>
  );
}

export default Introduction;
