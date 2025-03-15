import { CloseRounded, GitHub, LinkedIn } from '@mui/icons-material';
import { Modal } from '@mui/material';
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #000000a7;
  display: flex;
  align-items: top;
  justify-content: center;
  overflow-y: scroll;
  transition: all 0.5s ease;
`;

const Wrapper = styled.div`
  max-width: 800px;
  width: 100%;
  border-radius: 16px;
  margin: 50px 12px;
  height: min-content;
  background-color: #E2CED4;
  padding: 20px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Title = styled.div`
  font-size: 28px;
  font-weight: 600;
  margin: 8px 6px 0px 6px;
  @media only screen and (max-width: 600px) {
      font-size: 24px;
      margin: 6px 6px 0px 6px;
  }
`;

const Date = styled.div`
    font-size: 16px;
    margin: 2px 6px;
    font-weight: 400;
    color: #4E3B7A;
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`

const Desc = styled.div`
    font-size: 16px;
    font-weight: 400;
    color: #4E3B7A;
    margin: 8px 6px;
    @media only screen and (max-width: 600px) {
        font-size: 14px;
        margin: 6px 6px;
    }
`;

const Image = styled.img`
    width: 100%;
    border-radius: 12px;
    margin-top: 25px;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.3);
`;

const Tags = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 8px 0px;
    @media only screen and (max-width: 600px) {
        margin: 4px 0px;
    }
`;

const Tag = styled.div`
    font-size: 14px;
    font-weight: 400;
    margin: 4px;
    padding: 4px 8px;
    border-radius: 8px;
    background-color: #E8F4DF;
    @media only screen and (max-width: 600px) {
        font-size: 12px;
    }
`;


const ButtonGroup = styled.div`
    display: flex;
    justify-content: center;
    margin: 12px 0px;
    gap: 12px;
`;

const Button = styled.a`
    width: 15%;
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    color: #230B59;
    padding: 12px 16px;
    border-radius: 8px;
    background-color: #E8F4DF;
    opacity: 0.8;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.5s ease;
    &:hover {
        background-color: #A2AA9C;
    }
    @media only screen and (max-width: 600px) {
        font-size: 12px;
    }
`;


const ProjectDetail = ({ openModal, setOpenModal }) => {
    const project = openModal?.project;
  
    return (
      <Modal open={openModal?.state || false} onClose={() => {
        setOpenModal({ state: false, project: null });
      }}
      aria-labelledby="project-title"
      aria-describedby="project-description"
      >
        <Container>
          <Wrapper>
            <CloseRounded
              style={{
                position: "absolute",
                top: "10px",
                right: "20px",
                cursor: "pointer",
              }}
              onClick={() => {
                setOpenModal({ state: false, project: null });
              }}
            />
            <Image src={project?.image} alt={`Image for project titled ${project.title} - by Sibi Siddharth S`}/>
            <Title>{project?.title}</Title>
            <Date>{project.date}</Date>
            <Tags>
              {project?.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </Tags>
            <Desc>{project?.description}</Desc>
            {/* {project.member && (
              <>
                <Label>Team</Label>
                <Members>
                  {project?.member.map((member) => (
                    <Member key={member.name}>
                      <MemberImage src={member.img} alt={`Profile of ${member.name}`} />
                      <MemberName>{member.name}</MemberName>
                      <a href={member.github} target="_blank" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <GitHub />
                      </a>
                      <a href={member.linkedin} target="_blank" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <LinkedIn />
                      </a>
                    </Member>
                  ))}
                </Members>
              </>
            )} */}
            <ButtonGroup>
              {project?.github && (
                <Button href={project?.github} target="_blank">View Code</Button>)}
            </ButtonGroup>
          </Wrapper>
        </Container>
      </Modal>
    )
  }
  
  export default ProjectDetail;