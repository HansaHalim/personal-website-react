import styled from "styled-components";

export const Card = styled.div`
  margin-top: 10px;
  text-align: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: stretch;
  padding: 0;

  @media screen and (max-width: 950px) {
    flex-direction: column;
  }
`;

export const CompanyInfoContainer = styled.div`
  width: 50%;
  padding-top: 1rem;
  padding-bottom: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 90%;
  }

  a:link {
    text-decoration: none;
  }

  @media screen and (max-width: 950px) {
    width: 100%;
  }
`;

export const CompanyTitleContainer = styled.div`
  h3 {
    font-size: 18px;
    color: #32527b;
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
  margin-top: 3%;
  text-align: left;

  @media screen and (max-width: 950px) {
    width: 100%;
    text-align: center;
    margin-top: -1.75rem;
  }
`;

export const JobTitle = styled.h3`
  font-size: 18px;
  color: #32527b;
  margin: 0px;
  font-weight: normal;
`;

export const Date = styled.p`
  font-size: 15px;
  color: rgba(0, 0, 0, 0.4);
  margin: 0px;
`;

export const Description = styled.p`
  margin-top: 10px;
  font-size: 15px;
  line-height: 20px;
  color: rgba(0, 0, 0, 0.68);
`;

export const TechStackContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  white-space: nowrap;

  @media screen and (max-width: 950px) {
    justify-content: space-evenly;
  }
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
  border-color: #32527b;
  margin: 0px 5px 5px 0px;
  padding: 5px 10px;
`;
