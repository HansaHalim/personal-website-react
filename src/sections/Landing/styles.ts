import styled from "styled-components";
import background from "../../assets/img/background.jpg";

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  flex-direction: column;

  width: 100%;
  min-height: 100vh;
`;

export const BackgroundImage = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  height: 99%;
  background: url(${background});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  filter: blur(5px);
  z-index: 1;
`;

export const Blur = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(16, 99, 168, 0.75);
  z-index: 2;
`;

export const ContentWrapper = styled.div`
  display: flex;
  width: 75%;
  flex-direction: row;
  z-index: 3;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 80%;
  }
`;

export const Content = styled.div`
  text-align: left;
  flex: 2;
  margin-left: 75px;
  h1 {
    font-size: 68px;
    color: white;
    font-weight: bold;
    line-height: 5.9rem;
    margin: 0rem;

    @media screen and (max-width: 1028px) {
      font-size: 58px;
      line-height: 3.9rem;
    }
  }

  @media screen and (max-width: 1028px) {
    margin-left: 25px;
  }

  @media screen and (max-width: 768px) {
    margin-left: 15px;
    margin-top: -62%;
  }
`;

export const SubtitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0px;
`;

export const Subtitle = styled.p`
  color: white;
  font-size: 30px;
  margin: 0px;

  @media screen and (max-width: 1028px) {
    font-size: 23px;
  }

  @media screen and (max-width: 768px) {
    font-size: 17px;
  }
`;

export const ButtonsRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  height: 3.2rem;
`;

export const MyImage = styled.div`
  flex: 1;

  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    display: none;
  }

  img {
    width: 70%;
    object-fit: contain;
    border-radius: 50%;
  }
`;

export const IconContainer = styled.a`
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3.2rem;
  width: 3.2rem;
  border-radius: 5px;
  margin-right: 12px;

  @media screen and (max-width: 375px) {
    height: 2.66rem;
  }
`;

export const Icon = styled.img`
  width: 55%;
  height: 55%;
`;

export const Button = styled.a`
  background-color: white;
  border-radius: 5px;
  text-transform: uppercase;
  padding: 0 2rem;

  height: 3.2rem;
  font-weight: bold;
  text-decoration: none;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  color: rgba(16, 99, 168);

  @media screen and (max-width: 1028px) {
    font-size: 1rem;
  }

  @media screen and (max-width: 375px) {
    height: 2.66rem;
  }
`;

export const DownIcon = styled.img`
  position: absolute;
  z-index: 3;
  width: 4%;
  bottom: 0;
  margin-bottom: 1.5rem;
  filter: invert(1);

  :hover {
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    width: 10%;
    margin-bottom: 35%;
  }
  @media screen and (max-height: 450px) {
    margin-bottom: 15px;
    width: 7%;
  }
`;
