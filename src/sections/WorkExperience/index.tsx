import React from "react";
import {workExperience} from '../../assets/constants/constants';

import { 
    Container, 
    ContentWrapper, 
    Content, 
    HeaderContainer, 
    Header, 
} from "./styles";
import ExperienceCard from "../../components/ExperienceCard";

const WorkExperience = () => {

    function renderExperiences() {
      return (
        <Content>
          {workExperience.map((company) => 
            <ExperienceCard 
              companyLogo={company.companyLogo} 
              companyName={company.companyName}
              companyWebsite={company.companyWebsite}
              location={company.location}
              jobTitle={company.jobTitle}
              jobDate={company.jobDate}
              description={company.description}
              techStack={company.techStack}
              />)}
        </Content>
      );
    }

  return (
    <Container>
        <HeaderContainer>
            <Header>
                Work Experience
            </Header>
        </HeaderContainer>
        <ContentWrapper>
            {renderExperiences()}
        </ContentWrapper>
    </Container>
  );
};

export default WorkExperience;
