import React from "react";
import {myProjects} from '../../assets/constants/constants';

import { 
    Container, 
    ContentWrapper, 
    Content, 
    HeaderContainer, 
    Header, 
} from "./styles";
import ProjectCard from "../../components/ProjectCard";

const ProjectsList = () => {
  
  function renderProjects() {
    return (
      <Content>
        {myProjects.map((project) => 
        <ProjectCard 
          projectImage={project.projectImage}
          projectName={project.projectName}
          projectDate={project.projectDate}
          description={project.description}
          techStack={project.techStack}
        />)}
      </Content>
    );
  }

  return (
    <Container>
        <HeaderContainer>
            <Header>
                Projects
            </Header>
        </HeaderContainer>
        <ContentWrapper>
            {renderProjects()}
        </ContentWrapper>
    </Container>
  );
};

export default ProjectsList;
