import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { StyledContainer } from "../../styles/globalStyles";
import { scrollLinks } from "./scrollLinks.js";
import logo from "../../Assets/LOGO_FINAL1.png";

function NavBar() {
  const [show, setShow] = useState(null);

  const controlNavbar = () => {
    if (window.scrollY > 150) {
      setShow("hide");
    } else {
      setShow(null);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  return (
    <NavBarContainer show={show}>
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
    </NavBarContainer>
  );
}

export default NavBar;

const NavBarContainer = styled(StyledContainer)`
  ${(props) => {
    switch (props.show) {
      case "hide":
        return css`
          position: fixed;
          justify-content: space-around;

          height: 4rem;

          background-color: var(--baseColor);
          transform: translateY(-4rem);
          transition: transform 1s ease;
        `;
      default:
        return css`
          position: fixed;
          justify-content: space-around;

          height: 4rem;

          background-color: var(--baseColor);

          transition: all 1s ease;
        `;
    }
  }}
`;

const Logo = styled.img`
  height: 3rem;
  width: 3rem;

  transition: all 0.5s;

  &:hover {
    opacity: 70%;
  }
`;

const HomeLinks = styled.a`
  text-decoration: none;
  font-size: 1.5rem;
  color: var(--primaryColor);

  transition: all 0.5s;

  &:hover {
    opacity: 70%;
    color: var(--secondaryColor);
  }
`;
