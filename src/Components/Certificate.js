import React from 'react';
import styled from 'styled-components';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import CertificateCard from './CertificateCard';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 150px 25px 25px;
  position: relative;
  z-index: 1;
  @media (max-width: 960px) {
    padding: 0;
    padding-top: 40px;
    padding-bottom: 40px;
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

const Title = styled.div`
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  @media (max-width: 660px) {
    align-items: flex-end;
  }
`;

const Certificate = ({ certificate }) => {
  return (
    <Container id="certificate">
      <Wrapper>
        <Title>Certificates</Title>
        <TimelineSection>
          <Timeline>
            {certificate.map((ctx, index) => (
              <TimelineItem key={ctx.id}>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                  <CertificateCard certificate={ctx} />
                </TimelineContent>
                <TimelineSeparator>
                  <TimelineDot variant="outlined" color="secondary" />
                  {index < certificate.length - 1 && (
                    <TimelineConnector style={{ background: '#4840BB' }} />
                  )}
                </TimelineSeparator>
              </TimelineItem>
            ))}
          </Timeline>
        </TimelineSection>
      </Wrapper>
    </Container>
  );
};

export default Certificate;