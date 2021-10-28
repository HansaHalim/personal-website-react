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

export const InfoContainer = styled.div`
  width: 50%;
  padding-top: 1rem;
  padding-bottom: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin-top: 25px;
    width: 70%;
  }

  a:link {
    text-decoration: none;
  }

  @media screen and (max-width: 950px) {
    width: 100%;
  }
`;

export const BlogDetails = styled.div`
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

export const BlogTitle = styled.h3`
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

export const ContainerLink = styled.a`
  text-decoration: none;
`;
