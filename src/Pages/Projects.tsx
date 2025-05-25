import React, {useEffect} from 'react'
import Project from '../component/Project'

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

function Projects() {

  useEffect(() => {
      document.title = "Ansh sonone | Projects";
    }, []);

  return (
    <div className='flex flex-col justify-center items-center animate-fade-down animate-once my-10'>
        <div className="mt-8 mb-8">
        <div className="text-white">
          <h2 className="font-bold text-4xl">
            <span className="text-blue-300 font-bold text-4xl">My</span>{" "}
            Projects
          </h2>
        </div>
      </div>
      <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center space-y-4">
        {projects.map((element, index) => (
          <div key={index}>
            <Project element={element} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects