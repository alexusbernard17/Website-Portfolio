import React from 'react';
import Tilt from 'react-parallax-tilt';
import Avatar from '../images/portrait.JPG';

const About = () => {
    return (
        <div className='AboutPage'>
            <div className='AboutText'>
            <h1 className='AboutTextHeading'>About Me!</h1>
            <p>
                My name is Alexus Brooklyn, and I currently reside in Atlanta, Georgia. I am a highly motivated and results-driven Software Engineer with a strong background in <b>full-stack development</b>, API integration, and analytics dashboard creation. <br /> <br />
                Over the years, I have gained extensive experience working with various programming languages and frameworks, including <b>Java, Python, JavaScript, React, Angular, .NET, and SQL</b>, allowing me to create robust, scalable, and efficient applications. <br /> <br />
                I thrive in collaborative environments, working closely with cross-functional teams to develop high-quality software solutions that meet business needs. With a keen eye for detail and a passion for problem-solving, I excel in fast-paced, <b>agile settings</b> where adaptability is essential. <br /> <br />
                Outside of work, I often play basketball with my friends and do a lot of running. I mostly spend my free time watching CFB, NFL, and NBA. A huge fan of the Seahawks and LeBron James. Thanks for visiting my page, and please feel free to reach out or connect with me anytime!
            </p>
            </div>
            <Tilt>
                <img className='Avatar' src={Avatar} alt="" />
            </Tilt>
        </div>
    )
}

export default About