import React, { useState, useEffect } from "react";
import { scrollLinks } from "./scrollLinks.js";
import { useScrollDirection } from "../../hooks/index";
import logo from "../../Assets/LOGO_FINAL1.png";
import styled, { css } from "styled-components";

const NavBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100vw;
  height: 8%;
  background-color: var(--baseColor);
  position: fixed;
  transition: all 1s ease;
  background: var(--baseTransparentColor);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  animation: fadeIn 1s ease-in;

  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(-5px);
    }
    25% {
      opacity: 0.25;
      transform: translateY(-2.5px);
    }
    50% {
      opacity: 0.5;
      transform: translateY(-1.8px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }

  ${(props) =>
    props.scrollDirection === "up" &&
    !props.scrolledToTop &&
    css`
      transform: translateY(0px);
      transition: transform 1s ease;
    `};

  ${(props) =>
    props.scrollDirection === "down" &&
    !props.scrolledToTop &&
    css`
      transform: translateY(-4.5rem);
      height: 10%;
      background-color: transparent;
      transition: all 1s ease;
    `};
  &:hover {
    transform: translateY(0px);
    height: 8%;
    background-color: var(--baseColor);
  }
`;

const StyledLogo = styled.img`
  height: 4rem;
  &:hover {
    cursor: default;
  }

  @media (max-width: 500px) {
    height: 2.5rem;
  }
`;

const HomeLinks = styled.a`
  text-decoration: none;
  font-size: 1.4rem;
  font-weight: 500;
  color: var(--primaryDarkColor);

  transition: all 0.3s ease;

  &:hover,
  &:focus {
    color: var(--secondaryColor);
    border-bottom: 2px solid var(--secondaryColor);
  }
  @media (max-width: 500px) {
    font-size: 1rem;
    font-weight: 400;
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
      <a href="#home">
        <StyledLogo src={logo} alt="" />
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
