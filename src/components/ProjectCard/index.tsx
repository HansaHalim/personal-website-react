import React from "react";

import { 
    Card, 
    ImageContainer,
    TextContainer,
    Name,
    Date,
    Description,
    TechStackContainer,
    TechStack,
} from "./styles";

interface ProjectProps {
    projectImage: any;
    projectName: string;
    projectDate: string;
    description: string;
    techStack: Array<string>;
}
  
class ProjectCard extends React.Component<ProjectProps, {}> {

    renderTechStack() {
        return (
            <TechStackContainer>
                {this.props.techStack.map((skill) => <TechStack>{skill}</TechStack>)}
            </TechStackContainer>
        );
    }

    render() {
      return (
        <Card>
            <ImageContainer>
                <img src={this.props.projectImage} alt={this.props.projectName} />
            </ImageContainer>
            <TextContainer>
                <Name>{this.props.projectName}</Name>
                <Date>{this.props.projectDate}</Date>
                <Description>{this.props.description}</Description>
                {this.renderTechStack()}
            </TextContainer>
        </Card>
      );
    }
};

export default ProjectCard;
