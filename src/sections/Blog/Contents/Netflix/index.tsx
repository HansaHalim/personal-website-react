import React from "react";

import { netflixBlog } from "../../../../assets/constants/blogConstants";
import netflixLogo from "../../../../assets/blogImage/netflixLogo.png";
import dvdService from "../../../../assets/blogImage/dvdService.png";
import mathEquations from "../../../../assets/blogImage/mathEquations.jpg";
import citations from "../../../../assets/blogImage/citations.png";

import {
  Container,
  BackgroundImage,
  ContentWrapper,
  Content,
  Date,
  BlogParagraph,
  AdditionalImage,
} from "./styles";

const Landing = () => {
  return (
    <Container>
      <BackgroundImage />
      <ContentWrapper>
        <Content>
          <h1>{netflixBlog.blogTitle}</h1>
          <Date>October 27, 2021 - Hansa Halim</Date>
          <BlogParagraph>
            So, I’ve been having way too much free time lately and I’m watching
            Netflix more than I want to admit. Most recently, I’ve watched
            <a href="https://www.netflix.com/title/81040344">
              {" "}
              Squid Game{" "}
            </a>{" "}
            and
            <a href="https://www.netflix.com/title/80211991"> You season 3</a>.
            It got me wondering, how did these two Netflix series got so
            popular? why did it get so viral and get so much attention making
            both worldwide top hits? In a first thought, it could just be good
            marketing strategy, creative people, thinking outside the box,
            original plots and whatever it is. But the more I think about it,
            more evidence points towards data-driven decisions.
          </BlogParagraph>
          <AdditionalImage src={netflixLogo}></AdditionalImage>
          <BlogParagraph>
            Netflix has the biggest number of customer subscription for
            streaming platforms, which means they have the biggest amount of
            data to experiment and find out what people want to watch.{" "}
            <a href="https://www.businessmodelsinc.com/exponential-business-model/netflix/">
              Netflix originally started as a DVD sharing service{" "}
            </a>{" "}
            and pivoted to a streaming platform. Even as a streaming platform,
            they were not super popular. Netflix only got big after they started
            hiring a ton of Machine Learning Engineers and Data Scientists. They
            leveraged predictive technology to{" "}
            <a href="https://becominghuman.ai/how-netflix-uses-ai-and-machine-learning-a087614630fe">
              {" "}
              figure out what you want to watch{" "}
            </a>
            and how to make you click on that show. They probably found an
            algorithm to keep you watching more than you should. Netflix knows
            what people want to watch using big data, and they stay ahead of
            their competitors by creating such content before anyone else knows.
          </BlogParagraph>
          <AdditionalImage src={dvdService}></AdditionalImage>
          <BlogParagraph> Think that sounds cool? Read on. </BlogParagraph>
          <BlogParagraph>
            {" "}
            If you are like me, you watch Netflix, listen to music on Spotify,
            buy stuffs on Amazon. Do you ever wonder how does Netflix know what
            you want to watch? How does Spotify know your taste in music? How
            does Amazon know what you need? They know you so well, and at times
            their predictions are over 95% accurate. This is called Machine
            Learning, it’s basically Math that you didn’t learn in high school.
            It’s Math that predicts the future, and they are incredibly
            accurate.{" "}
          </BlogParagraph>
          <AdditionalImage src={mathEquations}></AdditionalImage>
          <BlogParagraph>
            {" "}
            Why should you consider a degree in Mathematics?{" "}
          </BlogParagraph>
          <BlogParagraph>
            {" "}
            You probably didn’t notice in the first half that this post is going
            to be about promoting students to major in math. But like me, I
            didn’t know what I wanted to major in back then, but I thought I was
            good at math in high school, so I picked this major. The thing is,
            it turns out I was really bad at math, and I barely survived
            first-year mathematics in university. Over time, I got better,
            learned better, and now I am really good at doing math. I realized
            that I have the capacity to learn anything I want as long as I put
            in the time and effort to learn it. The best part? It applies to
            everyone, including you. I don’t believe anyone is natural at a
            skill, anything can be learned, and you can put in the effort to be
            good at it. So, if you’re undecided on what program to pick, please
            give mathematics a thought and think about the possibilities you can
            do with it.{" "}
          </BlogParagraph>
          <br />
          <br />
          <BlogParagraph>Works Cited</BlogParagraph>
          <AdditionalImage src={citations}></AdditionalImage>
        </Content>
      </ContentWrapper>
    </Container>
  );
};

export default Landing;
