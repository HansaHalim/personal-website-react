import React from "react";

import { 
    Container, 
    ContentWrapper, 
} from "./styles";

const Footer = () => {

  return (
    <Container>
        <ContentWrapper>
            <p>Copyright © Hansa Halim 2020</p>
            <p>Website created using React and Typescript, pre-rendered with React-Snap.</p>
        </ContentWrapper>
    </Container>
  );
};

export default Footer;
