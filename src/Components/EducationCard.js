import React from 'react';
import styled from 'styled-components';

const Document = styled.img`
    display: none;
    height: 70px;
    width: fit-content;
    background-color: #000;
    border-radius: 10px;
    &:hover {
        cursor: pointer;
        opacity: 0.8;
    }
`;

const Span = styled.span`
    overflow: hidden;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
`;

const Card = styled.article`
    width: 650px;
    border-radius: 10px;
    box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
    padding: 12px 16px;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 12px;
    transition: all 0.3s ease-in-out;
    font-family: 'Raleway', sans-serif;
    &:hover {
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
        transform: translateY(-5px);
    }
    @media only screen and (max-width: 768px) {
        padding: 10px;
        gap: 8px;
        width: 300px;
    }
    &:hover ${Document} {
        display: flex;
    }
    &:hover ${Span} {
        overflow: visible;
        -webkit-line-clamp: unset;
    }
    border: 0.1px solid #4840BB;
`;

const Top = styled.div`
    width: 100%;
    display: flex;
    gap: 12px;
`;

const Image = styled.img`
    height: 100px;
    border-radius: 10px;
    margin-top: 4px;
    @media only screen and (max-width: 768px) {
        height: 70px;
    }
`;

const Body = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const Name = styled.h2`
    font-size: 21px;
    font-weight: 600;
    margin-bottom: -3px;
    color: ${({ theme }) => theme.text_primary + 99};
    @media only screen and (max-width: 768px) {
        font-size: 14px;
    }
`;

const Location = styled.p`
    font-size: 15px;
    font-weight: 500;
    color: ${({ theme }) => theme.text_secondary + 99};
    @media only screen and (max-width: 768px) {
        font-size: 10px;
    }
`;

const Degree = styled.p`
    font-size: 16px;
    font-weight: 500;
    font-style: italic;
    margin-top: 3%;
    margin-bottom: -3px;
    color: ${({ theme }) => theme.text_secondary + 99};
    @media only screen and (max-width: 768px) {
        font-size: 12px;
        line-height: 15px;
    }
`;

const Date = styled.p`
    font-size: 15px;
    font-weight: 500;
    color: ${({ theme }) => theme.text_secondary + 80};
    @media only screen and (max-width: 768px) {
        font-size: 10px;
    }
`;

const EducationCard = ({ education }) => {
    return (
        <Card aria-labelledby={`education-card-${education.id}`} tabIndex="0">
            <Top>
                <Image 
                    src={process.env.PUBLIC_URL + education.img} alt="image"
                />
                <Body>
                    <Name>{education.school}</Name>
                    <Location>{education.location}</Location>
                    <Degree>{education.degree}</Degree>
                    <Date>{education.date}</Date>
                </Body>
            </Top>
        </Card>
    );
};

export default EducationCard;