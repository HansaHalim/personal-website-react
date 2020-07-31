import React from "react";
import myPhoto from '../../assets/img/hansa_halim2.jpg';
import linkedin from '../../assets/icons/linkedin.png';
import github from '../../assets/icons/github_icon.png';

import { 
    Container, 
    ContentWrapper,
    Content,
    SubtitleContainer,
    Subtitle,
    ButtonsRow,
    HeroImage, 
    Blur,
    BackgroundImage,
    Icon,
    Button,
    IconContainer
} from "./styles";

const Landing = () => {
  return (
    <Container>
      <BackgroundImage />
    <ContentWrapper>
      <HeroImage>
        <img src={myPhoto} alt="Hansa Halim"></img>
      </HeroImage>
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
          <IconContainer>
            <Icon src={linkedin} />
          </IconContainer>
          <IconContainer>
            <Icon src={github} />
          </IconContainer>
          <Button>
            View&nbsp;Resume
          </Button>
        </ButtonsRow>
      </Content>
    </ContentWrapper>
    <Blur />
  </Container>
  );
};

export default Landing;
