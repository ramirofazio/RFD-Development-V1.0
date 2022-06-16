import React from "react";
import styled from "styled-components";
import { StyledContainer } from "../../styles/globalStyles";
import { scrollLinks } from "./scrollLinks.js";
import logo from "../../Assets/LOGO_FINAL1.png";

function NavBar() {
  return (
    <ThisStyledContainer>
      <a href="#home">
        <Logo src={logo} alt="" />
      </a>
      {scrollLinks.map((link) => {
        return (
          <HomeLinks href={link.url} key={link.id}>
            {link.text}
          </HomeLinks>
        );
      })}
    </ThisStyledContainer>
  );
}

export default NavBar;

const ThisStyledContainer = styled(StyledContainer)`
  position: fixed;
  justify-content: space-around;

  height: 10vh;

  background-color: var(--baseColor);
`;

const Logo = styled.img`
  height: 5rem;
  width: 5rem;

  transition: all 0.5s;

  &:hover {
    opacity: 70%;
  }
`;

const HomeLinks = styled.a`
  text-decoration: none;
  font-size: 2rem;
  color: var(--primaryColor);

  transition: all 0.5s;

  &:hover {
    opacity: 70%;
    color: var(--secondaryColor);
  }
`;
