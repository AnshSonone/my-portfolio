import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { TfiLinkedin } from "react-icons/tfi";
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <div className='text-white my-10'>
      <div className='flex justify-center space-x-4 items-center flex-wrap'>
        <h4 className="text-xl">Ansh Sonone</h4>
        <span>|</span>
        <h4 className="text-xl">Sononeansh@gmail.com</h4>
      </div>
      <ul className="sm:hidden flex space-x-8 justify-center items-center my-8 flex-wrap">
        <Link to='https://www.instagram.com/anshsonone_/?next=%2F' target='_blank'><li className="text-white font-bold text-2xl cursor-pointer "><FaInstagram /></li></Link>
        <Link to="https://x.com/anshsonone" target='_blank'><li className="text-white font-bold text-2xl cursor-pointer "><BsTwitterX /></li></Link>
        <Link to="https://in.linkedin.com/in/ansh-sonone-832730245" target='_blank'><li className="text-white font-bold text-2xl cursor-pointer "><TfiLinkedin /></li></Link>
        <Link to="https://github.com/AnshSonone/" target='_blank'><li className="text-white font-bold text-2xl cursor-pointer "><FaGithub /></li></Link>
      </ul>
    </div>
  )
}

export default Footer