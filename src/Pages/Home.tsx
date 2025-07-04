import { useEffect, useRef } from "react";
import Introduction from "../component/Introduction";
import Certificate from "../component/Certificate";
import Project from "../component/Project";
import Contact from "./Contact";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const projects = [
  {
    projectName: "Wide",
    project:
      "https://res.cloudinary.com/da25rozpm/image/upload/v1745146760/wide_rbqi0v.png",
    description:
      "A discussion platfrom where everyone share their question",
    link: "https://wide-frontend.vercel.app/",
  },
  {
    projectName: "Wordle",
    project:
      "https://res.cloudinary.com/da25rozpm/image/upload/v1745146760/wordle_zc2jvl.png",
    description: "A challenging game where you have to guess correct word ",
    link: "https://wordle-nu-mauve.vercel.app/",
  },
  {
    projectName: "Balance Game",
    project:
      "https://res.cloudinary.com/da25rozpm/image/upload/v1745146757/balance_game_cnsrd8.png",
    description:
      "A challenging game where you have to guess number closet to average ",
    link: "https://balance-game-three.vercel.app/",
  },
  {
    projectName: "Portfolio website", project: "https://res.cloudinary.com/da25rozpm/image/upload/v1746958698/Screenshot_10_maqva8.png", description: "My personal portfolio website which give idea about my work.", link: " https://my-portfolio-eosin-pi-21.vercel.app/"
  },
  {
    projectName: "Facebook Clone",
    project:
      "https://res.cloudinary.com/da25rozpm/image/upload/v1745146761/facebook_jsuegp.png",
    description:
      "A facebook clone which have some functionalites like facebook",
    link: "https://facebook-clone-five-phi.vercel.app/",
  },
  {
    projectName: "Linkedin Clone",
    project:
      "https://res.cloudinary.com/da25rozpm/image/upload/v1745146759/linkedin_sduux7.png",
    description:
      "A linkedin clone which have some functionalities like likedin",
    link: "https://linked-clone-five.vercel.app/",
  },
];

const certificate = [
  {
    certifcateName: "Meta frontend web developer",
    certificate:
      "https://res.cloudinary.com/da25rozpm/image/upload/v1746955160/Metaweb_iarr7d.jpg",
    description: "Completion certificate from meta frontend web developer",
  },
  {
    certifcateName: "Havard cs50 web",
    certificate:
      "https://res.cloudinary.com/da25rozpm/image/upload/v1746955161/CS50web_rzmttr.jpg",
    description: "Completion certificate from havard cs50 fulstack development",
  },
];

function Home() {

  useEffect(() => {
    document.title = "Ansh sonone | Home";
  }, []);

  const projectRef = useRef<HTMLDivElement>(null);
  const certificateRef = useRef<HTMLDivElement>(null);
  const qouteRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  gsap.registerPlugin(useGSAP, ScrollTrigger);

  useGSAP(() => {
    gsap.fromTo(
      projectRef.current,
      { y: 200, opacity: 0, },
      {
        scrollTrigger: {
          trigger: projectRef.current,
          toggleActions: "play none none reverse",
          start: "top bottom",
          end: "bottom",
        },
        y: 0,
        opacity: 1,
        duration: 2,
        ease: "power3.out",
      })

    gsap.fromTo(
      certificateRef.current,
      { y: 200, opacity: 0, },
      {
        scrollTrigger: {
          trigger: certificateRef.current,
          toggleActions: "play none none none",
          start: "top bottom",
          end: "bottom",
        },
        y: 0,
        opacity: 1,
        duration: 2,
        ease: "power3.out",
      })

    gsap.fromTo(
      qouteRef.current,
      { x: -200, opacity: 0, },
      {
        scrollTrigger: {
          trigger: qouteRef.current,
          toggleActions: "play none none none",
          start: "top bottom",
          end: "bottom",
        },
        x: 0,
        opacity: 1,
        duration: 2,
        ease: "power3.out",
      })

    gsap.fromTo(
      contactRef.current,
      { x: 200, opacity: 0, },
      {
        scrollTrigger: {
          trigger: contactRef.current,
          toggleActions: "play none none none",
          start: "top bottom",
          end: "bottom",
        },
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
      })
  })


  return (
    <div className="my-10 px-4">
      <Introduction />
      <div ref={projectRef} className="my-8 mx-2">
        <div className="text-white my-4">
          <h2 className="font-bold text-4xl">
            <span className="text-blue-300 font-bold text-4xl">My</span>{" "}
            Projects
          </h2>
        </div>
        <div className="md:grid lg:grid-cols-3 gap-5 justify-items-center" >
          {projects.map((element, index) => (
            <div key={index}>
              <Project element={element} />
            </div>
          ))}
        </div>
      </div>
      <div ref={certificateRef} className="">
        <div className="text-white my-2">
          <h2 className="font-bold text-4xl">
            <span className="text-blue-300 font-bold text-4xl">My</span>{" "}
            certificate
          </h2>
        </div>
        <div className="grid md:grid-cols-2 justify-items-center mx-2 space-y-4">
          {certificate.map((element, index) => (
            <div key={index}>
              <Certificate element={element} />
            </div>
          ))}
        </div>
      </div>

      <div className="my-8 grid md:grid-cols-2">
        <div ref={qouteRef} className="text-center text-white space-y-2 my-4">
          <div className="flex flex-col justify-center md:h-full">
            <p className="text-2xl lg:text-4xl text-zinc-400 p-0"><span className="text-3xl">❝</span>	You know the bussiness and I know the development i'm thinking may be you and i could partner up <span className="text-3xl">❞</span></p>
            <h4 className="text-end text-zinc-400 mx-4"><span className="text-3xl">-{" "}</span>Walter White</h4>
          </div>
        </div>
        <div ref={contactRef} className="">
          <h2 className=" text-white text-3xl font-bold">Let's Work!</h2>
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default Home;
