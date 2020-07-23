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
                <img src={this.props.companyLogo} alt="Tokopedia Logo"/>
                <CompanyTitleContainer>
                    <h3>{this.props.companyName}</h3>
                    <p> {this.props.location}</p>
                </CompanyTitleContainer>
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
