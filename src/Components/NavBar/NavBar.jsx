import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { StyledContainer } from "../../styles/globalStyles";
import { scrollLinks } from "./scrollLinks.js";
import logo from "../../Assets/LOGO_FINAL1.png";
import { useScrollDirection } from "../../hooks/index";

function NavBar() {
  const scrollDirection = useScrollDirection("down");
  const [scrolledToTop, setScrolledToTop] = useState(true);

  const handleScroll = () => {
    setScrolledToTop(window.pageYOffset < 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <NavBarContainer
      scrollDirection={scrollDirection}
      scrolledToTop={scrolledToTop}
    >
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
  position: fixed;
  justify-content: space-around;

  height: 4rem;

  background-color: var(--baseColor);

  ${(props) =>
    props.scrollDirection === "up" &&
    !props.scrolledToTop &&
    css`
      height: 4rem;
      transform: translateY(0px);
      transition: transform 0.5s ease;

      border
    `};

  ${(props) =>
    props.scrollDirection === "down" &&
    !props.scrolledToTop &&
    css`
      height: var(--nav-scroll-height);
      transform: translateY(-4rem);
      transition: transform 0.5s ease;
    `};
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
