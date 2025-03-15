import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Nav from './Components/Navbar';
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Lottie from  "lottie-react";
import nightsky from "./LottieFiles/night-sky.json";
import HashLoader from "react-spinners/HashLoader";
import Education from "./Components/Education";
import Experience from "./Components/Experience";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import educationData from "./data/education.json";
import experienceData from "./data/experience.json";
import skillsData from "./data/skill.json";
import projectData from "./data/project.json";


function App() {
    const[Loading,SetLoading] = useState(true);
    useEffect(() => {
        SetLoading(true)
        setTimeout(() => {SetLoading(false)}, 1900)
    },[])
    const [openModal, setOpenModal] = useState({ state: false, project: null });
  
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
                    {/* <Lottie className="bg" anim
                    " animationData={nightsky} loop={true} />  */}
                    <Nav/>
                    <section id="home">
                        <Home />
                    </section>
                    <section id="education">
                        <Education education={educationData.education} />
                    </section>
                    <section id="experience">
                        <Experience experience={experienceData.experience} />
                    </section>
                    <section id="projects">
                        <Projects project={projectData.project} />
                    </section>
                    <section id="skills">
                        <Skills skill={skillsData.skill} />
                    </section>
                    <Footer />
                </div> )
            }  
        </>
    );
}

export default App;
