import React from "react";

import { Container } from "./styles";

interface NavItemProps {
  target: string;
  name: string;
}

class NavItem extends React.Component<NavItemProps, {}> {
  scrolltoID() {
    const target = document.getElementById(this.props.target);
    if (target !== null) {
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  }

  render() {
    return (
      <Container>
        <button onClick={() => this.scrolltoID()}>
          <h3>{this.props.name}</h3>
        </button>
      </Container>
    );
  }
}

export default NavItem;
