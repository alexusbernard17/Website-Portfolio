import React from 'react';
import Tilt from 'react-parallax-tilt';
import Avatar from '../images/portrait.JPG';

const About = () => {
    return (
        <div className='AboutPage'>
            <div className='AboutText'>
            <h1 className='AboutTextHeading'>About Me</h1>
            <p>
                📍 Currently residing in <b>Atlanta, Georgia</b>. <br></br>
                <br></br>I'm a Full-Stack Software Engineer with 2 years of experience building and deploying applications across US Federal Government and SaaS enterprise sectors. Versatile and skilled in leveraging cloud infra platforms, system design architectures, database scaling practices, and working with multiple front-end and back-end frameworks. I have a strong track record of collaborating with cross-functional teams in fast-paced SCRUM/ Kanban Agile environments to deliver secure, scalable, and accessible software solutions. Also experienced in containerized services to enhance system reliability and maintain robust CI/CD pipelines. I'm passionate about AI, with hands-on projects and coursework in <b>Artificial Intelligence</b>, <b>Machine Learning</b>, and <b>Computer Vision</b> through my BS in Computer Science at Georgia Tech. <br></br>
                <br></br>Outside of work, I'm usually on the basketball court with friends or out for a run. I'm a huge sports fan and I relentlessly follow CFB, NFL, NBA, and F1. Also a big coffee nerd. <br></br>
                <br></br>Setting everything else aside, I truly believe there is no greater gift than the salvation Jesus Christ has offered, and I'm so grateful to be saved by His grace. If you want to talk more about our faith journey or in need of a prayer, I'm always open to chatting, connecting, or meeting new people, so please feel free to reach out anytime!
            </p>
            </div>
            <Tilt>
                <img className='Avatar' src={Avatar} alt="" />
            </Tilt>
        </div>
    )
}

export default About