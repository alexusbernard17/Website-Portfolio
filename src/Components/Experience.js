import styled from 'styled-components';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import ExperienceCard from './ExperienceCard';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px 25px 25px;
  position: relative;
  z-index: 1;
  @media (max-width: 960px) {
    padding: 0;
    padding-top: 40px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1350px;
  padding: 40px 0 0;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.h2`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const TimelineSection = styled.div`
  width: 100%;
  max-width: 1000px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  @media (max-width: 400px) {
    align-items: flex-end;
  }
`;

const Experience = ({ experience }) => {
  return (
    <Container id="experience">
      <Wrapper>
        <Title>Experience</Title>
        <TimelineSection>
            {experience.map((exp, index) => (
              <TimelineItem key={exp.id} aria-label={`Experience item ${index + 1}`} >
                <TimelineSeparator>
                  <TimelineDot variant="outlined" color="secondary" />
                  {index < experience.length - 1 && (
                    <TimelineConnector style={{ background: '#854CE6' }} />
                  )}
                </TimelineSeparator>
                <TimelineContent>
                  <ExperienceCard experience={exp} />
                </TimelineContent>
              </TimelineItem>
            ))}
        </TimelineSection>
      </Wrapper>
    </Container>
  );
};

export default Experience;