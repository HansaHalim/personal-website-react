import React from "react";

import {
  Card,
  InfoContainer,
  BlogDetails,
  BlogTitle,
  Date,
  Description,
  ContainerLink,
} from "./styles";

interface BlogProps {
  image: any;
  blogLink: string;
  blogTitle: string;
  date: string;
  description: string;
}

class BlogItem extends React.Component<BlogProps, {}> {
  render() {
    return (
      <ContainerLink href={this.props.blogLink}>
        <Card>
          <InfoContainer>
            <img src={this.props.image} alt={this.props.image + " Logo"} />
          </InfoContainer>
          <BlogDetails>
            <BlogTitle>
              {this.props.blogTitle}
              <Date>{this.props.date}</Date>
            </BlogTitle>
            <Description>{this.props.description}</Description>
          </BlogDetails>
        </Card>
      </ContainerLink>
    );
  }
}

export default BlogItem;
