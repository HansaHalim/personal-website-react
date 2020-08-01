import React from "react";
import myPhoto from '../../assets/img/hansa_halim.jpg';
import linkedin from '../../assets/icons/linkedin.png';
import github from '../../assets/icons/github_icon.png';
import down from '../../assets/icons/down_icon.svg';

import { 
    Container, 
    BackgroundImage,
    Blur,
    ContentWrapper,
    Content,
    SubtitleContainer,
    Subtitle,
    ButtonsRow,
    MyImage, 
    IconContainer,
    Icon,
    Button,
    DownIcon,
} from "./styles";

const Landing = () => {
  return (
    <Container>
      <BackgroundImage />
    <ContentWrapper>
      <MyImage>
        <img src={myPhoto} alt="Hansa Halim"></img>
      </MyImage>
      <Content>
        <h1>Hansa Halim</h1>
        <SubtitleContainer>
          <Subtitle>
            University of Waterloo
          </Subtitle>
          <Subtitle>
            Junior Software Developer at Tauria
          </Subtitle>
        </SubtitleContainer>
        <ButtonsRow>
            <IconContainer href="https://linkedin.com/in/hansahalim" target="_blank" rel="noopener noreferrer">
              <Icon src={linkedin}/>
            </IconContainer>
            <IconContainer href="http://github.com/hansahalim" target="_blank" rel="noopener noreferrer">
              <Icon src={github} />
            </IconContainer>
            <Button href="resume.pdf">
              View&nbsp;Resume
            </Button>
        </ButtonsRow>
      </Content>
    </ContentWrapper>
    <DownIcon src={down} alt="down icon"/>
    <Blur />
  </Container>
  );
};

export default Landing;
