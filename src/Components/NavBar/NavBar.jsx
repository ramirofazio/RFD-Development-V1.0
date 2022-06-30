import React, { useState, useEffect } from "react";
import { scrollLinks } from "./scrollLinks.js";
import { useScrollDirection } from "../../hooks/index";
import logo from "../../Assets/LOGO_FINAL1.png";
import styled, { css } from "styled-components";

const NavBarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: var(--baseColor);
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
      transition: transform 1s ease;

      border
    `};

  ${(props) =>
    props.scrollDirection === "down" &&
    !props.scrolledToTop &&
    css`
      height: var(--nav-scroll-height);
      transform: translateY(-6rem);
      transition: transform 1s ease;
    `};
`;

const Logo = styled.img`
  height: 4rem;

  &:hover {
    cursor: default;
  }
`;

const HomeLinks = styled.a`
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--primaryDarkColor);

  transition: all 0.3s ease;

  &:hover {
    color: var(--secondaryColor);
    border-bottom: 2px solid var(--secondaryColor);
  }
`;

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
      <Logo src={logo} alt="" />
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
