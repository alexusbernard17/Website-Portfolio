import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectDetail from './ProjectDetail';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
`;

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    padding: 10px 0px 100px 0;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`;

const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
  }
`;

const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 28px;
    flex-wrap: wrap;
`;

const Projects = ({ project }) => {
    const [openModal, setOpenModal] = useState({ state: false, project: null });

    return (
    <Container id="projects">
        <Wrapper>
            <Title>Projects</Title>
            <CardContainer>
                {project.map((proj) => (
                    <ProjectCard key={proj.id} project={proj} setOpenModal={setOpenModal} />
                ))}
                {openModal.state && (
                    <ProjectDetail 
                    project={project.project} 
                    openModal={openModal} 
                    setOpenModal={setOpenModal} 
                    />
                )}
            </CardContainer>
        </Wrapper>
    </Container>
    );
};

export default Projects;