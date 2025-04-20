import React from "react";
import { GoHome } from "react-icons/go";
import { AiOutlineUser } from "react-icons/ai";
import { LuMessageSquareMore } from "react-icons/lu";
import { Link, useLocation } from "react-router";

function Navbar() {

    const pageLocation = useLocation()

    return (
        <div className="py-2">
            <ul className="flex space-x-8 justify-center items-center">
                <Link to='/'><li className={`text-white  font-bold text-2xl cursor-pointer duration-300 ease-linear transition-all ${pageLocation.pathname === '/' && "delay-150 translate-y-[-5px] scale-90"}`}><GoHome /></li></Link>
                <Link to='/about'><li className={`text-white  font-bold text-2xl cursor-pointer duration-300 ease-linear transition-all ${pageLocation.pathname === '/about' && "delay-150 translate-y-[-5px] scale-95"}`}><AiOutlineUser /></li></Link>
                <Link to='/contact'><li className={`text-white  font-bold text-2xl cursor-pointer duration-300 ease-linear transition-all ${pageLocation.pathname === '/contact' && "delay-150 translate-y-[-5px] scale-95"}`}><LuMessageSquareMore /></li></Link>
            </ul>
        </div>
    )
};

export default Navbar;