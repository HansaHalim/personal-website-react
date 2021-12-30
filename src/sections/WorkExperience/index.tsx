import React from "react";
import { workExperience } from "../../assets/constants/constants";

import {
  Container,
  ContentWrapper,
  Content,
  HeaderContainer,
  Header,
  Shading,
} from "./styles";
import ExperienceCard from "../../components/ExperienceCard";

const WorkExperience = () => {
  function renderExperiences() {
    return (
      <Content>
        {workExperience.map((company) => (
          <ExperienceCard
            companyLogo={company.companyLogo}
            companyName={company.companyName}
            companyWebsite={company.companyWebsite}
            location={company.location}
            jobTitle={company.jobTitle}
            jobDate={company.jobDate}
            description={company.description}
            techStack={company.techStack}
          />
        ))}
      </Content>
    );
  }

  return (
    <Container id="experience">
      <HeaderContainer>
        <Header>Work Experience</Header>
        <Shading
          src="https://imageshare.best/gradient.php?color=X3B2Z6"
          alt="gradient shading"
        ></Shading>
      </HeaderContainer>
      <ContentWrapper>{renderExperiences()}</ContentWrapper>
    </Container>
  );
};

export default WorkExperience;
