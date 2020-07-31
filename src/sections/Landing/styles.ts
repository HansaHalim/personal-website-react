import styled from "styled-components";
import background from '../../assets/img/background.jpg';

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  width: 100%;
  min-height: 100vh;

  @media screen and (max-width: 768px) {
    padding-top: 15vh;
  }
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
    position:absolute;
    height:100%;
    width:100%;
    top:0;
    right:0;
    bottom:0;
    left:0;
    background: rgba(33,125,187,0.75);
    z-index:2;
`;

export const ContentWrapper = styled.div`
  display: flex;
  width: 75%;
  flex-direction: row;
  z-index: 3;
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
`;

export const ButtonsRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

export const HeroImage = styled.div`
  flex: 1;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 70%;
    object-fit: contain;
    border-radius: 50%;
  }
`;

export const IconContainer = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 7.5%;
  width: 7.5%;
  border-radius: 5px;
  margin-right: 12px;
  border: solid 1px rgba(33,125,187, 0.75);
`;

export const Icon = styled.img`
  width: 55%;
  padding: 0.67rem 0.67rem;
  height: 55%;
`;

export const Button = styled.button`
        background-color: white;
        border: solid 1px rgba(33,125,187, 0.75);
        border-radius: 5px;
        text-transform: uppercase;
        width: 30%;
        font-size: 17px;
        font-weight: bold;

        cursor: pointer;
        color: rgba(33,125,187);

        @media screen and (max-width: 768px) {
            margin-bottom: 2rem;
        }
`;