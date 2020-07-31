import React from "react";
import githubIcon from '../../assets/icons/github_icon.png';

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
    projectWebsite: string;
    githubLink: string;
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
            <a href={this.props.projectWebsite} target="_blank" rel="noopener noreferrer">
                <ImageContainer>
                    <img src={this.props.projectImage} alt={this.props.projectName} />
                </ImageContainer>
            </a>
            <TextContainer>
                    <Name>
                        <a href={this.props.projectWebsite} target="_blank" rel="noopener noreferrer">
                            {this.props.projectName}
                        </a> 
                        <a href={this.props.githubLink} target="_blank" rel="noopener noreferrer">
                            <img src={githubIcon} alt="Github Icon"/>
                        </a>
                    </Name>
                <Date>{this.props.projectDate}</Date>
                <Description>{this.props.description}</Description>
                {this.renderTechStack()}
            </TextContainer>
        </Card>
      );
    }
};

export default ProjectCard;
