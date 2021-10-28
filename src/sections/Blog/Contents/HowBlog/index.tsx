import React from "react";

import { howBlog } from "../../../../assets/constants/blogConstants";

import {
  Container,
  BackgroundImage,
  ContentWrapper,
  Content,
  Date,
  BlogParagraph,
} from "./styles";

const Landing = () => {
  return (
    <Container>
      <BackgroundImage />
      <ContentWrapper>
        <Content>
          <h1>{howBlog.blogTitle}</h1>
          <Date>October 27, 2021 - Hansa Halim</Date>
          <BlogParagraph>
            I used React and Typescript to build this blog from scratch and
            incorporate it to my existing personal website. I followed a Medium
            blog style which is pretty common for Data Science, Machine Learning
            and Software Engineering topics. The blog name is an idea inspired
            by Creed's Thoughts from the famous tv show "The Office".
          </BlogParagraph>
          <BlogParagraph>
            The style used is also very minimalistic and pleasant to read with
            standard font, size and color. Easily delivers the message in a
            pleasant way without having too much color or unecessary
            decorations.
          </BlogParagraph>
          <BlogParagraph>
            The code is very modular and can be easily re-usable to allow me to
            create a new blog entry. Which means I have a platform to blog in
            the future if I ever want to write about anything. The source code
            for my blog can be found{" "}
            <a href="https://github.com/HansaHalim/personal-website-react">
              {" "}
              here.{" "}
            </a>
          </BlogParagraph>
        </Content>
      </ContentWrapper>
    </Container>
  );
};

export default Landing;
