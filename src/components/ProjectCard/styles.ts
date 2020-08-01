import styled from "styled-components";

export const Card = styled.div`
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  text-align: left;
  margin: 13px;
  box-shadow: 0 1px 2px 0 rgba(34, 36, 38, 0.15);
  width: 27.3%;
  min-width: 200px;
  flex-grow: 1;
`;

export const ImageContainer = styled.div`
  padding: 0;

  img {
    width: 100%;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem 1rem;
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
  border-color: #32527b;
  margin: 0px 5px 5px 0px;
  padding: 5px 10px;

  @media screen and (max-width: 768px) {
    padding: 3px 6px;
  }
`;

export const Name = styled.h3`
  font-size: 18px;
  margin: 5px 0px;

  img {
    width: 11%;
    margin-left: 8px;
    margin-bottom: -8px;
  }

  a:link {
    text-decoration: none;
    color: #32527b;
  }
  a:visited {
    text-decoration: none;
    color: #32527b;
  }
`;

export const Date = styled.p`
  font-size: 15px;
  color: rgba(0, 0, 0, 0.4);
  margin: 0px;
`;

export const Description = styled.p`
  margin-top: 5px;
  font-size: 15px;
  line-height: 18px;
  color: rgba(0, 0, 0, 0.68);
`;
