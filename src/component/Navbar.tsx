import { useRef } from "react";
import { GoHome } from "react-icons/go";
import { AiOutlineUser } from "react-icons/ai";
import { LuMessageSquareMore } from "react-icons/lu";
import { Link, useLocation } from "react-router";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { TfiLinkedin } from "react-icons/tfi";
import { FaGithub } from "react-icons/fa";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";


function Navbar() {

    const pageLocation = useLocation()

    gsap.registerPlugin(useGSAP)

    const instaRef = useRef<HTMLAnchorElement>(null)
    const xRef = useRef<HTMLAnchorElement>(null)
    const linkedinRef = useRef<HTMLAnchorElement>(null)
    const githubRef = useRef<HTMLAnchorElement>(null)

    useGSAP(() => {
        gsap.fromTo(
            instaRef.current,
            { x: -25, opacity: 0, },
            {
                x: 40,
                opacity: 1,
                duration: 2,
                ease: "power3.out",
            })

        gsap.fromTo(
            xRef.current,
            { x: -50, opacity: 0, },
            {
                x: 25,
                opacity: 1,
                duration: 2,
                ease: "power3.out",
                delay: 1,
            })

        gsap.fromTo(
            linkedinRef.current,
            { x: -100, opacity: 0, },
            {
                x: 10,
                opacity: 1,
                duration: 2,
                ease: "power3.out",
                delay: 2,
            })

        gsap.fromTo(
            githubRef.current,
            { x: -150, opacity: 0, },
            {
                x: -10,
                opacity: 1,
                duration: 3,
                ease: "power3.out",
                delay: 3,
            })
    }, [])

    return (
        <div className="py-6 backdrop-sepia-100 space-y-2 sm:flex justify-around items-center sticky top-[0%] z-50 bg-zinc-950 ">
            <ul className=" space-x-10 flex items-center justify-center">
                <Link to='/'><li className={`text-white  font-bold text-2xl cursor-pointer duration-300 ease-linear transition-all ${pageLocation.pathname === '/' && "delay-150 scale-110"}`}><GoHome size={25} /></li></Link>
                <Link to='/about'><li className={`text-white  font-bold text-2xl cursor-pointer duration-300 ease-linear transition-all ${pageLocation.pathname === '/about' && "delay-150 scale-110"}`}><AiOutlineUser size={25} /></li></Link>
                <Link to='/contact'><li className={`text-white  font-bold text-2xl cursor-pointer duration-300 ease-linear transition-all ${pageLocation.pathname === '/contact' && "delay-150 scale-110"}`}><LuMessageSquareMore size={25} /></li></Link>
            </ul>
            <ul className="hidden sm:flex space-x-8 justify-center items-center flex-wrap">
                <Link ref={instaRef} to='https://www.instagram.com/anshsonone_/?next=%2F' target='_blank'><li className=" text-white font-bold text-2xl cursor-pointer p-2 rounded-lg hover:bg-linear-to-t to-pink-700 from-violet-700 duration-200 ease-linear transition-all delay-100 hover:scale-110"><FaInstagram /></li></Link>
                <Link ref={xRef} to="https://x.com/anshsonone" target='_blank'><li className="text-white font-bold text-2xl cursor-pointer p-2 rounded-lg hover:bg-linear-to-t to-pink-700 from-violet-700 duration-200 ease-linear transition-all delay-100 hover:scale-110"><BsTwitterX /></li></Link>
                <Link ref={linkedinRef} to="https://in.linkedin.com/in/ansh-sonone-832730245" target='_blank'><li className="text-white font-bold text-2xl cursor-pointer p-2 rounded-lg hover:bg-linear-to-t to-pink-700 from-violet-700 duration-200 ease-linear transition-all delay-100 hover:scale-110"><TfiLinkedin /></li></Link>
                <Link ref={githubRef} to="https://github.com/AnshSonone/" target='_blank'><li className="text-white font-bold text-2xl cursor-pointer p-2 rounded-lg hover:bg-linear-to-t to-pink-700 from-violet-700 duration-200 ease-linear transition-all delay-100 hover:scale-110"><FaGithub /></li></Link>
            </ul>
        </div>
    )
};

export default Navbar;

/*

 */