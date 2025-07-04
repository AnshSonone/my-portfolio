import { useState, useEffect, useCallback, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";


const TYPING_SPEED = 100;
const ERASING_SPEED = 50;
const PAUSE_DURATION = 2000;
const WORDS = ["Computer Applicaton Student.", "Tech Enthusiast", "Web Developer", "Software Developer"];

function Introduction() {

  const introRef = useRef<HTMLDivElement>(null)
  const profileRef = useRef<HTMLDivElement>(null)
  const [text, setText] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)

  gsap.registerPlugin(useGSAP)

  useGSAP(() => {
    gsap.from(introRef.current, {
      x: -100,
      opacity: 0,
      duration: 2,
      ease: "power3.out",
    })
    gsap.to(introRef.current, {
      x: 0,
      opacity: 1,
      duration: 2,
      ease: "power3.out",
    })

    gsap.from(profileRef.current, {
      x: 100,
      opacity: 0,
      duration: 2,
      ease: "power3.out",
    })
    gsap.to(profileRef.current, {
      x: 0,
      opacity: 1,
      duration: 2,
      ease: "power3.out",
    })
  })

  const handleTyping = useCallback(() => {
    if (isTyping) {
      if (charIndex < WORDS[wordIndex].length) {
        setText(prev => prev + WORDS[wordIndex][charIndex]);
        setCharIndex(prev => prev + 1);
      } else {
        setTimeout(() => setIsTyping(false), PAUSE_DURATION);
      }
    } else {
      if (charIndex > 0) {
        setText(prev => prev.slice(0, -1));
        setCharIndex(prev => prev - 1);
      } else {
        setWordIndex(prev => (prev + 1) % WORDS.length);
        setIsTyping(true);
      }
    }
  }, [charIndex, isTyping, wordIndex]);

  useEffect(() => {
    const timeout = setTimeout(
      handleTyping,
      isTyping ? TYPING_SPEED : ERASING_SPEED
    );
    return () => clearTimeout(timeout);
  }, [handleTyping]);

  return (
    <div className=" lg:flex justify-around items-center">
      <div ref={introRef} className="text-center lg:text-start ">
        <div className="space-y-4">
          <h2 className="text-blue-300 font-bold text-4xl lg:text-5xl">Frontend & Backend Developer</h2>
          <span className="text-white text-2xl my-4 font-bold">
            Hey, This Is Ansh Sonone
          </span>
          <div className="h-8 flex items-center justify-center lg:justify-start" data-aos="fade-up" data-aos-delay="800">
            <span className="text-xl md:text-2xl bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent font-light">
              {text}
            </span>
            <span className="w-[3px] h-6 bg-gradient-to-t from-[#6366f1] to-[#a855f7] ml-1 animate-blink"></span>
          </div>
        </div>
        <div className="text-white text-xl my-4 text-center lg:text-start">
          <p className="">
            Aspiring full-stack developer with a passion for building scalable,
          </p>
          <p className="">
            efficient web applications. Driven by curiosity and a love for
            technology,
          </p>
          <p className="">
            Ansh is honing his expertise in JavaScript frameworks and modern
            development practices.
          </p>
        </div>
        <div className=" space-y-4 space-x-4 align-middle text-white">
          <button className=" font-bold bg-linear-to-tl from-gray-600 to-zinc-900 py-2 px-3 rounded-2xl ">ReactJS</button>
          <button className=" font-bold bg-linear-to-tl from-gray-600 to-zinc-900 py-2 px-3 rounded-2xl ">Tailwind</button>
          <button className=" font-bold bg-linear-to-tl from-gray-600 to-zinc-900 py-2 px-3 rounded-2xl ">NodeJS</button>
          <button className="font-bold bg-linear-to-tl from-gray-600 to-zinc-900 py-2 px-3 rounded-2xl ">Django</button>
        </div>
      </div>

      <div ref={profileRef} className=" flex justify-center my-16">
        <img
          className="w-[40vh] lg:w-[15rem] lg:h-[16rem] rounded-full shadow-2xl shadow-teal-950"
          src="https://res.cloudinary.com/da25rozpm/image/upload/v1746957935/IMG_20240901_233727_lir5lh.jpg"
        />
      </div>
    </div>
  );
}

export default Introduction;
