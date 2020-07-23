import React from "react";
import tokopedia from "../../assets/companyLogo/tokopedia.png";

import { 
    Container, 
    ContentWrapper, 
    Content, 
    HeaderContainer, 
    Header, 
} from "./styles";
import ProjectCard from "../../components/ProjectCard";

const ProjectsList = () => {
    const toped = ['Go', 'REST API', 'JavaScript', 'SQL', 'React', 'NextJS'];

  return (
    <Container>
        <HeaderContainer>
            <Header>
                Projects
            </Header>
        </HeaderContainer>
        <ContentWrapper>
            <Content>
                <ProjectCard 
                  companyLogo={tokopedia}
                  companyName={"Tokopedia"}
                  location={"Jakarta, Indonesia"}
                  jobTitle={"Software Engineer Intern"}
                  jobDate={"May 2019 - Aug. 2020"}
                  description={"Lorem Ipsum Tokopedia is a very good company makes lots of money is a good e-commerce company"}
                  techStack={toped}
                />
                <ProjectCard 
                  companyLogo={tokopedia}
                  companyName={"Tokopedia"}
                  location={"Jakarta, Indonesia"}
                  jobTitle={"Software Engineer Intern"}
                  jobDate={"May 2019 - Aug. 2020"}
                  description={"Lorem Ipsum Tokopedia is a very good company makes lots of money is a good e-commerce company"}
                  techStack={toped}
                />
                <ProjectCard 
                  companyLogo={tokopedia}
                  companyName={"Tokopedia"}
                  location={"Jakarta, Indonesia"}
                  jobTitle={"Software Engineer Intern"}
                  jobDate={"May 2019 - Aug. 2020"}
                  description={"Lorem Ipsum Tokopedia is a very good company makes lots of money is a good e-commerce company"}
                  techStack={toped}
                />
                <ProjectCard 
                  companyLogo={tokopedia}
                  companyName={"Tokopedia"}
                  location={"Jakarta, Indonesia"}
                  jobTitle={"Software Engineer Intern"}
                  jobDate={"May 2019 - Aug. 2020"}
                  description={"Lorem Ipsum Tokopedia is a very good company makes lots of money is a good e-commerce company"}
                  techStack={toped}
                />
                <ProjectCard 
                  companyLogo={tokopedia}
                  companyName={"Tokopedia"}
                  location={"Jakarta, Indonesia"}
                  jobTitle={"Software Engineer Intern"}
                  jobDate={"May 2019 - Aug. 2020"}
                  description={"Lorem Ipsum Tokopedia is a very good company makes lots of money is a good e-commerce company"}
                  techStack={toped}
                />
                <ProjectCard 
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

export default ProjectsList;
