import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { TfiLinkedin } from "react-icons/tfi";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


function Footer() {
  return (
    <div className='text-white'>
        <div className='my-8'>
            <h4>Ansh Sonone</h4>
        </div>
        <ul className="flex space-x-8 justify-center items-center my-8">
          <li className="text-white font-bold text-2xl cursor-pointer "><FaInstagram /></li>
          <li className="text-white font-bold text-2xl cursor-pointer "><BsTwitterX /></li>
          <li className="text-white font-bold text-2xl cursor-pointer "><TfiLinkedin /></li>
          <li className="text-white font-bold text-2xl cursor-pointer "><FaWhatsapp /></li>
          <li className="text-white font-bold text-2xl cursor-pointer "><FaGithub /></li>
        </ul>
    </div>
  )
}

export default Footer