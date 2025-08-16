import { useEffect, useState } from "react";
import Nav from './Components/Navbar';
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import About from "./Components/About";
import HashLoader from "react-spinners/HashLoader";
import Education from "./Components/Education";
import Experience from "./Components/Experience";
import Skills from "./Components/Skills";
import Certificate from "./Components/Certificate";
import Projects from "./Components/Projects";
import educationData from "./data/education.json";
import experienceData from "./data/experience.json";
import certificateData from "./data/certificate.json";
import skillsData from "./data/skill.json";
import projectData from "./data/project.json";


function App() {
    const[Loading,SetLoading] = useState(true);
    useEffect(() => {
        SetLoading(true)
        setTimeout(() => {SetLoading(false)}, 1900)
    },[])
  
    return (
        <>
            {Loading ? (
                <div className="loader"> 
                    <HashLoader
                    color={'#4840BB'}
                    loading={true}
                    size={100}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                    />
                </div>
                ):(
                <div>
                    <Nav/>
                    <section id="home">
                        <Home />
                    </section>
                    <section id="about">
                        <About />
                    </section>
                    <section id="education">
                        <Education education={educationData.education} />
                    </section>
                    <section id="projects">
                        <Projects project={projectData.project} />
                    </section>
                    <section id="experience">
                        <Experience experience={experienceData.experience} />
                    </section>
                    <section id="skills">
                        <Skills skill={skillsData.skill} />
                    </section>
                    <section id="certificate">
                        <Certificate certificate={certificateData.certificate} />
                    </section>
                    <Footer />
                </div> )
            }  
        </>
    );
}

export default App;
