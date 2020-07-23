import styled from "styled-components";

export const Card = styled.div`
    margin-top: 10px;
    text-align: center;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: stretch;
    padding: 0;
`;

export const CompanyInfoContainer = styled.div`
    width: 50%;
    padding-top: 1rem;
    padding-bottom: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    img {
        width: 350px;
    }
`;

export const CompanyTitleContainer = styled.div`
    h3 {
        font-size: 18px;
        color: rgb(191, 155, 189);
        margin: 0px 0px;
    }
    
    p {
        font-size: 15px;
        margin-top: 0px;
        color: rgba(0, 0, 0, 0.6);
    }
`;

export const ExperienceDetails = styled.div`
    padding-top: 1rem;
    padding-bottom: 1rem;
    width: 50%;
    margin-top: 30px;
`;

export const JobTitle = styled.h3`
    font-size: 18px;
    color: rgb(191, 155, 189);
    margin: 0px;
    font-weight: normal;
    text-align: left;
`;

export const Date = styled.p`
    font-size: 15px;
    color: rgba(0, 0, 0, 0.4);
    margin: 0px;
`;

export const Description = styled.p`
    margin-top: 10px;
    font-size: 15px;
    color: rgba(0, 0, 0, 0.68);
    text-align: left;
`;

export const TechStackContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

export const TechStack = styled.div`
    background-color: rgb(255, 255, 255);
    color: rgba(0, 0, 0, 0.68);
    font-family: Verdana;
    font-size: 12px;
    font-weight: normal;
    border-radius: 5px;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(191, 155, 189);
    margin: 0px 5px 5px 0px;
    padding: 5px 10px;
`;
