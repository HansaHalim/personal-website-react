import styled from "styled-components";

export const Container = styled.nav`
  background-color: rgb(250, 250, 250);

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContentWrapper = styled.div`
  width: 75%;
  margin: 0px 0px;
  display: block;

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

export const Content = styled.div`
  border-radius: 10px;
  background-color: rgb(255, 255, 255);
  padding: 20px 150px 30px;
  box-shadow: 0 1px 2px 0 rgba(34, 36, 38, 0.15);

  @media screen and (max-width: 768px) {
    padding: 30px 30px;
  }
`;

export const HeaderContainer = styled.div`
  padding: 0;
  margin: 25px 0px;
`;

export const Header = styled.h2`
  text-align: center;
  font-weight: 400;
  font-size: 35px;
  font-family: "Montserrat";
`;
