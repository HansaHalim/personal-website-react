import React from "react";
import NavBar from "../../components/NavBar/index";
import linkedin from "../../assets/icons/linkedin.png";
import github from "../../assets/icons/github_icon.png";
import down from "../../assets/icons/down_icon.svg";

import { landingInfo } from "../../assets/constants/constants";

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
  function scrolltoID() {
    if (window.innerWidth < 768) return;
    const target = document.getElementById("experience");
    if (target !== null) {
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  }

  function renderSubtitles() {
    return (
      <SubtitleContainer>
        {landingInfo.subtitles.map((subtitle) => (
          <Subtitle>{subtitle}</Subtitle>
        ))}
      </SubtitleContainer>
    );
  }

  return (
    <Container>
      <NavBar />
      <BackgroundImage />
      <ContentWrapper>
        <MyImage>
          <img src={landingInfo.image} alt={landingInfo.nameTitle}></img>
        </MyImage>
        <Content>
          <h1>{landingInfo.nameTitle}</h1>
          {renderSubtitles()}
          <ButtonsRow>
            <IconContainer
              href={landingInfo.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon src={linkedin} />
            </IconContainer>
            <IconContainer
              href={landingInfo.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon src={github} />
            </IconContainer>
            <Button href={landingInfo.resume}>View&nbsp;Resume</Button>
          </ButtonsRow>
        </Content>
      </ContentWrapper>
      <DownIcon src={down} alt="down icon" onClick={() => scrolltoID()} />
      <Blur />
    </Container>
  );
};

export default Landing;
