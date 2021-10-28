import netflixLogo from "../blogImage/netflixLogo.png";
import thoughts from "../blogImage/thoughtsImage.jpg";

export const blogInfo = {
    author: "Hansa Halim",
    blogTitle: "Hansa's Thoughts",
};

export const netflixBlog = {
  blogTitle: "Watching too much Netflix? It might not be you, it’s them",
}

export const howBlog = {
  blogTitle: "How did I make this blog?",
}

export const blogContents = [
  {
    image: netflixLogo,
    blogLink: "/netflix-blog",
    blogTitle: "Watching too much Netflix? It might not be you, it’s them",
    date: "October 27, 2021 - Hansa Halim",
    description:
      "So, I’ve been having way too much free time lately and I’m watching Netflix more than I want to admit. Most recently, I’ve watched Squid Game and You season 3. It got me wondering...",
  },
  {
    image: thoughts,
    blogLink: "/how-blog",
    blogTitle: "How did I make this Blog?",
    date: "October 27, 2021 - Hansa Halim",
    description:
      "I used React and Typescript to build this blog from scratch and incorporate it to my existing personal website. I followed a Medium blog style which is pretty common for Data Science, Machine Learning and Software Engineering topics...",
  },
];