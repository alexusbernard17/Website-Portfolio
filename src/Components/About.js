import React from 'react';
import Tilt from 'react-parallax-tilt';
import Avatar from '../images/portrait.JPG';

const About = () => {
    return (
        <div className='AboutPage'>
            <div className='AboutText'>
            <h1 className='AboutTextHeading'>More About Me:</h1>
            <p>
                My name is Alexus Brooklyn, and I currently live in Atlanta, Georgia. I am a Software Engineer with a strong background in <b>full-stack development</b>, API integration, and analytics dashboard creation. Over the years, I have gained experience working with various programming languages and frameworks, including <b>Java, Python, JavaScript, React, Angular, .NET, and SQL</b>, allowing me to create robust, scalable, and efficient applications. <br /> <br />
                I thrive in collaborative environments, working closely with cross-functional teams to develop high-quality software solutions that meet business needs. With a keen eye for detail and a passion for problem-solving, I excel in fast-paced, <b>agile settings</b> where adaptability is essential. <br /> <br />
                When I’m not working, you’ll usually find me playing basketball with friends or going for a run. I’m a HUGE sports fan and love watching college football, the NFL, NBA, and F1. Huge Seahawks supporter and a big LeBron fan! Thanks for visiting my page, and please feel free to reach out or connect anytime!
            </p>
            </div>
            <Tilt>
                <img className='Avatar' src={Avatar} alt="" />
            </Tilt>
        </div>
    )
}

export default About