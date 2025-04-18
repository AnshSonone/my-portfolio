import React from "react";
import html from "../../public/HTML5.png";
import css from "../../public/CSS3.png";
import js from "../../public/JavaScript.png";
import python from "../../public/Python.png";
import reactjs from "../../public/React.png";
import nextjs from "../../public/icons8-next.js-144.png"
import nodejs from "../../public/Node.js.png";
import django from "../../public/Django.png";
import DRF from "../../public/Django REST.png";
import mysql from "../../public/MySQL.png";
import mongo from "../../public/MongoDB.png";
import TechLogos from "../component/TechLogos";

const basic: string[] = [html, css];
const Languages: string[] = [js, python];
const frameworks: string[] = [reactjs, nextjs];
const backends: string[] = [django, nodejs];
const databases: string[] = [mysql, mongo];

const techStacks: string[] = [
  "MySQL",
  "MongoDB",
  "Express.js",
  "React.js",
  "Next.js",
  "Node.js",
  "Django",
];

function About() {
  document.title = "Ansh sonone | About";

  return (
    <div className="text-white my-10 mx-4 animate-fade-down animate-once">
        <div className="sm:flex justify-evenly items-center">
      <div className="text-center sm:text-start space-y-2">
        <h2 className="text-4xl font-bold">Hey, I am</h2>
        <h2 className="text-4xl font-bold text-blue-300">Ansh Sonone</h2>
        <p className="text-4xl font-bold">an aspiring Full Stack Developer</p>
      </div>

      <div className="text-center sm:text-start text-white my-10">
        <p className="text-xl font-bold">
          Hi, I’m Ansh Sonone, a passionate MERN Stack + Django Developer and
          technology enthusiast. <br />I thrive on solving challenges and
          transforming ideas into impactful digital experiences.
        </p>
      </div>
      </div>

      <div className="text-white text-center sm:flex justify-evenly items-center">
        <div>
          <h2 className="text-2xl font-bold">🌟 My Vision</h2>
          <p className="text-xl font-bold ">
            I aim to make web development more accessible to everyone, breaking
            down complex concepts into <br />
            actionable steps. I remember how daunting it felt when I first
            started exploring code, <br /> which fuels my commitment to helping
            others navigate this exciting field.
          </p>
        </div>

        <div className="flex justify-center my-8">
          <img
            className="w-[20rem] rounded-md"
            src="https://i.pinimg.com/736x/07/f6/df/07f6df70100683f9a2c3798066401cc8.jpg"
          />
        </div>
      </div>

      <div>
        <div className="py-10">
          <h2 className="text-2xl font-bold py-2">💡 My Journey</h2>
          <p className="text-xl font-bold flex-wrap">
            I’ve dived deep into the MERN stack{" "}
            <ul className="flex justify-center space-x-4">
              (
              {techStacks.map((element) => (
                <li key={element}>{element},</li>
              ))}
              )
            </ul>
            creating full-stack applications that are both scalable and
            efficient.
          </p>
        </div>

        <div>
          <strong className="text-2xl font-bold py-2">
            📚 Why I Do What I Do
          </strong>
          <p className="text-xl font-bold flex-wrap">
            I believe technology is a powerful tool for change, and I’m eager to
            leverage my expertise to contribute to meaningful projects.
          </p>
        </div>
      </div>

      <div className="py-10">
        <strong className="text-3xl text-blue-300">
          Technologies & Languages I Use
        </strong>

        <div className="sm:grid grid-cols-3">
          <div className="px-4 py-5 ">
            <h2 className="text-2xl">HTML & CSS</h2>
            <div className="flex items-center justify-evenly">
              {basic.map((element) => (
                <div key={element}>
                  <TechLogos element={element} />
                </div>
              ))}
            </div>
          </div>

          <div className="px-4 py-5 ">
            <h2 className="text-2xl">Programming Languages</h2>
            <div className="flex items-center justify-evenly">
              {Languages.map((element) => (
                <div key={element}>
                  <TechLogos element={element} />
                </div>
              ))}
            </div>
          </div>

          <div className="px-4 py-5 ">
            <h2 className="text-2xl">Web Frameworks</h2>
            <div className="flex items-center justify-evenly">
              {frameworks.map((element) => (
                <div key={element}>
                  <TechLogos element={element} />
                </div>
              ))}
            </div>
          </div>

          <div className="px-4 py-5 ">
            <h2 className="text-2xl">Backend</h2>
            <div className="py-4 flex items-center justify-evenly">
              {backends.map((element) => (
                <div key={element}>
                  <TechLogos element={element} />
                </div>
              ))}
            </div>
          </div>

          <div className="px-4 py-5 ">
            <h2 className="text-2xl">Databases</h2>
            <div className="flex items-center justify-evenly">
              {databases.map((element) => (
                <div key={element}>
                  <TechLogos element={element} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

{
  /* <h2 className='text-2xl'>HTML & CSS</h2>
                <div className='py-4 grid grid-cols-2 justify-items-center place-items-center'>
                    {basic.map(element => (
                        <img key={element} className='bg-transparent' src={element} width={'100vw'} height= {'100vh'}/>
                    ))}
                </div> */
}
