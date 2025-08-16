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
                <br></br>I'm a Full-Stack Software Engineer with 2 years of experience building and deploying applications across US Federal Government and SaaS enterprise sectors. Versatile and skilled in multiple front-end and back-end frameworks including <b>TypeScript & JavaScript</b>, <b>React & Angular</b>, <b>.NET Microservices</b>, <b>Node.js & Express.js</b>, <b>Java Spring Boot</b>, <b>Python</b>, and <b>SQL</b>. Strong track record of collaborating with cross-functional teams in fast-paced SCRUM/ Kanban Agile environments to deliver secure, scalable, and accessible software solutions. Experienced in leveraging cloud platforms and containerized services to enhance system reliability and maintain robust CI/CD pipelines. <br></br>
                <br></br>I'm passionate about AI, with hands-on projects and coursework in <b>Artificial Intelligence</b>, <b>Machine Learning</b>, and <b>Computer Vision</b> through my BS in Computer Science at Georgia Tech. <br></br>
                <br></br>Outside of work, I’m usually on the basketball court with friends or out for a run. I’m a huge sports fan and love following College Football, the NFL, NBA, and F1. Thanks for checking my profile and please feel free to connect or reach out anytime
            </p>
            </div>
            <Tilt>
                <img className='Avatar' src={Avatar} alt="" />
            </Tilt>
        </div>
    )
}

export default About