import React from "react";
import tokopedia from "../../assets/companyLogo/tokopedia.png";

import { 
    Container, 
    ContentWrapper, 
    Content, 
    HeaderContainer, 
    Header, 
} from "./styles";
import Experience from "../../components/Experience";

const WorkExperience = () => {
    const toped = ['Go', 'REST API', 'JavaScript', 'SQL'];

  return (
    <Container>
        <HeaderContainer>
            <Header>
                Work Experience
            </Header>
        </HeaderContainer>
        <ContentWrapper>
            <Content>
                <Experience 
                  companyLogo={tokopedia}
                  companyName={"Tokopedia"}
                  location={"Jakarta, Indonesia"}
                  jobTitle={"Software Engineer Intern"}
                  jobDate={"May 2019 - Aug. 2020"}
                  description={"Lorem Ipsum Tokopedia is a very good company makes lots of money is a good e-commerce company"}
                  techStack={toped}
                />
                <Experience 
                  companyLogo={tokopedia}
                  companyName={"Tokopedia"}
                  location={"Jakarta, Indonesia"}
                  jobTitle={"Software Engineer Intern"}
                  jobDate={"May 2019 - Aug. 2020"}
                  description={"Lorem Ipsum Tokopedia is a very good company makes lots of money is a good e-commerce company"}
                  techStack={toped}
                />
            </Content>
        </ContentWrapper>
    </Container>
  );
};

export default WorkExperience;