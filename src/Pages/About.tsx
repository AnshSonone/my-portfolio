import { useEffect } from "react";
import TechLogos from "../component/TechLogos";

const basic: string[] = ["https://res.cloudinary.com/da25rozpm/image/upload/v1745148238/HTML5_ozxqoz.png", "https://res.cloudinary.com/da25rozpm/image/upload/v1745148237/CSS3_b8rrzn.png"];
const Languages: string[] = ["https://res.cloudinary.com/da25rozpm/image/upload/v1745148242/JavaScript_cld4ji.png", "https://res.cloudinary.com/da25rozpm/image/upload/v1745148248/Python_c9w9cp.png"];
const frameworks: string[] = ["https://res.cloudinary.com/da25rozpm/image/upload/v1745148250/React_k6sdd1.png", "https://res.cloudinary.com/da25rozpm/image/upload/v1745148239/icons8-next.js-144_nyyvuu.png"];
const backends: string[] = ["https://res.cloudinary.com/da25rozpm/image/upload/v1745148237/Django_vhushw.png", "https://res.cloudinary.com/da25rozpm/image/upload/v1745148246/Node.js_o3hql8.png"];
const databases: string[] = ["https://res.cloudinary.com/da25rozpm/image/upload/v1745148244/MySQL_xqowk5.png", "https://res.cloudinary.com/da25rozpm/image/upload/v1745148243/MongoDB_v5c0pq.png"];

function About() {
  useEffect(() => {
    document.title = "Ansh sonone | About";
  }, []);

  return (
    <div className="text-white md:mx-8 mt-18 animate-fade-down animate-once">
      <div className="xl:flex justify-center items-center text-center">
        <div className=" space-y-2">
          <h2 className="text-4xl font-bold">Hey, I am</h2>
          <h2 className="text-4xl font-bold text-blue-300">Ansh Sonone</h2>
          <p className="text-4xl font-bold">an aspiring Full Stack Developer</p>
        </div>
      </div>

      <div className="my-10 lg:flex justify-evenly items-center lg:text-start">
        <div className="text-white">
          <p className="font-bold text-xl">
            Hi, I’m Ansh Sonone, a passionate MERN + Django Developer and
            technology enthusiast. <br />I thrive on solving challenges and
            transforming ideas into impactful digital experiences.
          </p>
        <div className="my-4">
          <h2 className="text-2xl font-bold ">🌟 My Vision</h2>
          <p className=" font-bold text-xl">
            I aim to make web development more accessible to everyone, breaking
            down complex concepts into <br />
            actionable steps. I remember how daunting it felt when I first
            started exploring code, <br /> which fuels my commitment to helping
            others navigate this exciting field.
          </p>
        </div>
        </div>

        <div className="flex  justify-center my-8">
          <img
            className="w-[40vh] sm:w-[50vw] lg:w-[30vw] xl:w-[20vw] rounded-md"
            src="https://i.pinimg.com/736x/07/f6/df/07f6df70100683f9a2c3798066401cc8.jpg"
          />
        </div>
      </div>

      <div>
        <div className="my-4">
          <h2 className="text-2xl font-bold py-2">💡 My Journey</h2>
          <p className=" font-bold text-xl">
            I’ve dived deep into the MERN stack
            <br />
            (React.js, Next.js, Express.js, Node.js, Django, MySQL, MongoDB,)
            <br />
            creating full-stack applications that are both scalable and
            efficient.
          </p>
        </div>

        <div className="my-10">
          <strong className="text-2xl font-bold py-4">
            📚 Why I Do What I Do
          </strong>
          <p className="text-xl font-bold">
            I believe technology is a powerful tool for change, and I’m eager to
            leverage my expertise to contribute to meaningful projects.
          </p>
        </div>
      </div>

      <div className="py-10">
        <strong className="text-3xl text-blue-300">
          Technologies & Languages I Use
        </strong>

        <div className="sm:grid sm:grid-cols-2 md:grid-cols-3">
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
