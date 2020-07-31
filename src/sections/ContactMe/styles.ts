import styled from "styled-components";

export const Container = styled.nav`
  background-color: rgb(250, 250, 250);

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContentWrapper = styled.div`
    width: 100%;
    margin: 0px 0px;
    display: block;

    button {
        flex: 1;
        padding: 0.7rem 2.4rem;
        background-color: #1577fe;
        border: none;
        border-radius: 5px;
        text-transform: uppercase;
        width: 100%;
        margin-top: 0.5rem;
        margin-bottom: 3rem;
        font-size: 17px;
        font-weight: bold;

        cursor: pointer;
        color: #ffffff;

        @media screen and (max-width: 768px) {
            margin-bottom: 2rem;
        }
    }

    @media screen and (max-width: 768px) {
        width: 90%;
    }
`;

export const Content = styled.div`
    width: 54%;
    border-radius: 10px;
    background-color: rgb(255, 255, 255);
    padding: 55px 150px 20px;
    box-shadow: 0 1px 2px 0 rgba(34,36,38,.15);
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width: 768px) {
        width: 90%;
        padding: 30px 0px 10px;
    }
`;

export const HeaderContainer = styled.div`
    padding: 0;
    margin: 25px 0px;

    @media screen and (max-width: 768px) {
        width: 90%;
    }

    p {
        /* font-family: "Montserrat"; */
        font-weight: 400;
        font-size: 17px;
    }
`;

export const Header = styled.h2`
    text-align: center;
    font-weight: 400;
    font-size: 35px;
    font-family: "Montserrat";
`;

export const Label = styled.label`
    font-size: 16px;
    font-family: "Montserrat";
    font-weight: 500;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 48.5%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }

  input {
    font-family: "Calibri";
    margin-top: 10px;
    padding: 0.8rem 0.8rem;
    margin-bottom: 0.8rem;

    background: #ffffff;
    border: 1px solid rgb(110, 125, 151, 0.3);
    opacity: 1;

    box-sizing: border-box;
    border-radius: 6px;
  }
`;

export const NameEmail = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`;

export const MessageFormGroup = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const MessageInput = styled.textarea`
    margin: 10px 0px 20px;
    background: #ffffff;
    padding: 0.8rem 0.8rem;
    border: 1px solid rgb(110, 125, 151, 0.3);
    opacity: 1;
    font-size: 20px;
    font-family: "Calibri";

    box-sizing: border-box;
    border-radius: 6px;
`;

export const ContactItemContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: center;
    width: 100%;
    @media screen and (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const ContactItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;

    img {
        width: 10%;
        @media screen and (max-width: 768px) {
            width: 20%;
            margin-top: 10px;
        }
    }

    a:link {
        text-decoration: none;
        color: black;
    }

    p {
        margin-top: 7px;
        font-size: 18px;
    }
`;