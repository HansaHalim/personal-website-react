import styled from "styled-components";

export const Container = styled.nav`
  background-color: rgb(250, 250, 250);

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContentWrapper = styled.div`
    width: 75%;
    margin: 30px 0px;
    display: block;

    @media screen and (max-width: 768px) {
        width: 90%;
    }
`;