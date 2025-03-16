import React from 'react';
import Lottie from  "lottie-react";
import SpaceBoy from "../LottieFiles/SpaceBoy.json";
import Typed from "./Typed.js";
import {FaGithub, FaLinkedin, FaInstagram} from "react-icons/fa";
import { IoMail } from "react-icons/io5";

const Home = () => {
    return (
        <div >
            <div className='HomePage'>
                <div className='HomeText'>
                    <h1>Hello World 👋,</h1>
                    <h1>I'm <b>Alexus Brooklyn</b></h1>
                    <Typed/>

                    <div className='headerLinks'>
                        <a href="https://github.com/alexusbernard17/" target='_blank' rel="noopener noreferrer"><FaGithub/></a>
                        <a href="https://linkedin.com/in/alexusbrooklyn/" target='_blank' rel="noopener noreferrer"><FaLinkedin/></a>
                        <a href='mailTo:alexusbernardbrooklyn@gmail.com' target='_blank' rel="noopener noreferrer"><IoMail/></a>
                        <a href='https://instagram.com/alexusbrooklyn/' target='_blank' rel="noopener noreferrer"><FaInstagram/></a>
                    </div>
                </div>

                <Lottie 
                    className="illustration" 
                    animationData={SpaceBoy} 
                    loop={true} 
                />
            </div>
        </div>
    )
}

export default Home