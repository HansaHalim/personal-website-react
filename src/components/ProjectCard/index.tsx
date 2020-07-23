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
    companyLogo: any;
    companyName: string;
    location: string;
    jobTitle: string;
    jobDate: string;
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
                <img src={this.props.companyLogo} alt={this.props.companyName} />
            </ImageContainer>
            <TextContainer>
                <Name>{this.props.companyName}</Name>
                <Date>2020</Date>
                <Description>Very good project deserve big award good stuff man thanks</Description>
                {this.renderTechStack()}
            </TextContainer>
        </Card>
      );
    }
};

export default ProjectCard;
