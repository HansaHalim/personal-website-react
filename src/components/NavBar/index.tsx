import React from "react";

import NavItem from "../NavItem/index";

import { Container } from "./styles";

const NavBar = () => {
  return (
    <Container>
      <NavItem target="experience" name="Experience" />
      <NavItem target="projects" name="Projects" />
      <NavItem target="contact" name="Contact" />
    </Container>
  );
};

export default NavBar;
