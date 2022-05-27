import React from "react";
import styles from "./NavBar.module.css";
import styled from "styled-components";
import { StyledContainer } from "../../styles/globalStyles";
import { scrollLinks } from "./scrollLinks.js";
import logo from "../../Assets/LOGO_FINAL1.png";

function NavBar() {
  return (
    <ThisStyledContainer>
      <a href="#home">
        <img src={logo} alt="" className={styles.logo} />
      </a>
      {scrollLinks.map((link) => {
        return (
          <a href={link.url} key={link.id} className={styles.homeLinks}>
            {link.text}
          </a>
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

  background-color: var(--primaryColor);
`;
