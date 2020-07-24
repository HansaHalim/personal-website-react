import React from "react";

import { 
    Card, 
    CompanyInfoContainer, 
    CompanyTitleContainer,
    ExperienceDetails,
    JobTitle,
    Date,
    Description,
    TechStackContainer,
    TechStack,
} from "./styles";

interface ExperienceProps {
    companyLogo: any;
    companyName: string;
    companyWebsite: string;
    location: string;
    jobTitle: string;
    jobDate: string;
    description: string;
    techStack: Array<string>;
}
  
class ExperienceCard extends React.Component<ExperienceProps, {}> {

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
            <CompanyInfoContainer>
                <a href={this.props.companyWebsite} target="_blank" rel="noopener noreferrer">
                <img src={this.props.companyLogo} alt={this.props.companyName + " Logo"}/>
                <CompanyTitleContainer>
                    <h3>{this.props.companyName}</h3>
                    <p> {this.props.location}</p>
                </CompanyTitleContainer>
                </a>
            </CompanyInfoContainer>
            <ExperienceDetails>
                <JobTitle>
                    {this.props.jobTitle}
                    <Date>{this.props.jobDate}</Date>
                </JobTitle>
                <Description>{this.props.description}</Description>
                {this.renderTechStack()}
            </ExperienceDetails>
        </Card>
      );
    }
};

export default ExperienceCard;
