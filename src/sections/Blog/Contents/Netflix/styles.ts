import styled from "styled-components";
import background from "../../../../assets/img/background.jpg";

export const Container = styled.section`
  display: flex;
  align-items: center;
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
  /* background: url(${background}); */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  filter: blur(5px);
  z-index: 1;
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
  margin-top: 75px;
  margin-left: 75px;
  margin-right: 75px;
  h1 {
    font-size: 50px;
    color: black;
    font-weight: bold;
    line-height: 4.9rem;
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

export const Date = styled.p`
    font-size: 20px;
    color: grey;
    margin: 0rem;
`;

export const BlogParagraph = styled.p`
    font-size: 24px;
    color: black;
    line-height: 3rem;
    /* margin: 0rem; */

    a:link {
        text-decoration: none;
    }

    a {
        color: #2c87f0;
    }
`;

export const AdditionalImage = styled.img`
    width: 100%;
`;