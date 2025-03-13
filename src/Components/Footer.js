import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import { IoMail } from "react-icons/io5";

const Footer = () => {
  return (
    <footer>
      <h4>Copyright &copy; Alexus Brooklyn 2025</h4>
      <div className='footerLinks'>
        <a href="https://github.com/alexusbernard17/" target='_blank' rel="noopener noreferrer"> <FaGithub/></a>
        <a href="https://www.linkedin.com/in/alexusbrooklyn/" target='_blank' rel="noopener noreferrer"><FaLinkedin/></a>
        <a href='mailTo:alexusbernardbrooklyn@gmail.com' target='_blank' rel="noopener noreferrer"><IoMail/></a>
      </div>
    </footer>
  )
}

export default Footer