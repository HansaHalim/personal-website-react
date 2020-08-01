import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 10px;

  @media screen and (max-width: 768px) {
    display: none;
  }

  button {
    background-color: transparent;
    text-transform: uppercase;
    border: none;
    cursor: pointer;
  }

  button.active.focus,
  button.active:focus,
  button.focus,
  button:active.focus,
  button:active:focus,
  button:focus {
    outline: none;
    box-shadow: none;
  }

  h3 {
    font-size: 17px;
    color: white;
  }
`;
