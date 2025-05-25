import React from "react";
import { GoHome } from "react-icons/go";
import { AiOutlineUser } from "react-icons/ai";
import { LuMessageSquareMore } from "react-icons/lu";
import { Link, useLocation } from "react-router";
import { GiGearHammer } from "react-icons/gi";


function Navbar() {

    const pageLocation = useLocation()

    return (
        <div className="py-2 sticky top-[0%] z-50 bg-zinc-950 ">
            <ul className=" space-x-8 flex items-center justify-center">
                <Link to='/'><li className={`text-white  font-bold text-2xl cursor-pointer duration-300 ease-linear transition-all ${pageLocation.pathname === '/' && "delay-150 translate-y-[-5px] scale-90"}`}><GoHome size={24}/></li></Link>
                <Link to='/about'><li className={`text-white  font-bold text-2xl cursor-pointer duration-300 ease-linear transition-all ${pageLocation.pathname === '/about' && "delay-150 translate-y-[-5px] scale-95"}`}><AiOutlineUser size={24}/></li></Link>
                <Link to='/projects'><li className={`text-white  font-bold text-2xl cursor-pointer duration-300 ease-linear transition-all ${pageLocation.pathname === '/projects' && "delay-150 translate-y-[-5px] scale-95"}`}><GiGearHammer size={24}/></li></Link>
                <Link to='/contact'><li className={`text-white  font-bold text-2xl cursor-pointer duration-300 ease-linear transition-all ${pageLocation.pathname === '/contact' && "delay-150 translate-y-[-5px] scale-95"}`}><LuMessageSquareMore size={24}/></li></Link>
            </ul>
        </div>
    )
};

export default Navbar;