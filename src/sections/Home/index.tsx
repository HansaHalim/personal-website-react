import React from "react";
import WorkExperience from "../WorkExperience";
import ProjectsList from "../ProjectsList";
import ContactMe from "../ContactMe";
import Footer from "../Footer";
import Landing from "../Landing";

const Home = () => {
  return (
    <div>
      <Landing />
      <WorkExperience />
      <ProjectsList />
      <ContactMe />
      <Footer />
    </div>
  );
};

export default Home;
