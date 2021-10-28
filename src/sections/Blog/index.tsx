import React from "react";
import { blogContents } from "../../assets/constants/blogConstants";

import {
  Container,
  ContentWrapper,
  Content,
  HeaderContainer,
  Header,
} from "./styles";

import BlogItem from "../../components/BlogItem";
import Footer from "../Footer";

const BlogList = () => {
  function renderExperiences() {
    return (
      <Content>
        {blogContents.map((blogItem) => (
          <BlogItem
            image={blogItem.image}
            blogLink={blogItem.blogLink}
            blogTitle={blogItem.blogTitle}
            date={blogItem.date}
            description={blogItem.description}
          />
        ))}
      </Content>
    );
  }

  return (
    <Container id="experience">
      <HeaderContainer>
        <Header>Hansa's Thoughts</Header>
      </HeaderContainer>
      <ContentWrapper>{renderExperiences()}</ContentWrapper>
      <Footer />
    </Container>
  );
};

export default BlogList;
