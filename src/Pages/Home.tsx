import { useEffect } from "react";
import Introduction from "../component/Introduction";
import Project from "../component/Project";
import Certificate from "../component/Certificate";

const projects = [
  {
    projectName: "Wide",
    project:
      "https://res.cloudinary.com/da25rozpm/image/upload/v1745146760/wide_rbqi0v.png",
    description:
      "A discussion platfrom where everyone share their question to start discussion",
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
    projectName:"Portfolio website", project: "https://res.cloudinary.com/da25rozpm/image/upload/v1746958698/Screenshot_10_maqva8.png", description: "My personal portfolio website which give idea about my work.", link: " https://my-portfolio-eosin-pi-21.vercel.app/"
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
      "https://res.cloudinary.com/da25rozpm/image/upload/v1746955160/Metaweb_iarr7d.jpg",
    description: "Completion certificate from havard cs50 fulstack development",
  },
];

function Home() {
  useEffect(() => {
    document.title = "Ansh sonone | Home";
  }, []);

  return (
    <div className="my-10 animate-fade-down animate-once">
      <Introduction />
      <div className="my-10">
        <div className="text-white">
          <h2 className="font-bold text-4xl">
            <span className="text-blue-300 font-bold text-4xl">My</span> Journey
            so far
          </h2>
          <p className="text-xl my-4">
            Climbing the ladders of my life till i reach the top
          </p>
        </div>

        <div className="lg:flex justify-evenly my-18">
          <div className="my-20 lg:my-0">
            <div className="loader"></div>
          </div>
          <div className="text-white space-y-2">
            <h3 className="">
              Completed B.com with ( Computer Application ) in year ( 2024 )
            </h3>
            <h3 className="">Completed Class 12th in year (2021)</h3>
            <h3 className="">Completed Class 10th in year (2019)</h3>
          </div>
        </div>
      </div>
      <div className="text-white">
        <h2 className="font-bold text-4xl">
          <span className="text-blue-300 font-bold text-4xl">My</span>{" "}
          certificate
        </h2>
      </div>
      <div className="md:grid md:grid-cols-2 lg:grid-cols-3 justify-items-center">
        {certificate.map((element, index) => (
          <div key={index}>
            <Certificate element={element} />
          </div>
        ))}
      </div>
      <div className="mt-8 mb-8">
        <div className="text-white">
          <h2 className="font-bold text-4xl">
            <span className="text-blue-300 font-bold text-4xl">My</span>{" "}
            Projects
          </h2>
        </div>
      </div>
      <div className="md:grid md:grid-cols-2 lg:grid-cols-3 justify-items-center">
        {projects.map((element, index) => (
          <div key={index}>
            <Project element={element} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
