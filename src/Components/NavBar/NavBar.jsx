import React from "react";
import styles from "./NavBar.module.css";

import { scrollLinks } from "./scrollLinks.js";
import logo from '../../Assets/LOGO_FINAL1.png'

function NavBar() {
  return (
    <div className={styles.container}>
      <a href="#home">
      <img src={logo} alt='' className={styles.logo} />
      </a>
      {scrollLinks.map((link) => {
        return (
          <a href={link.url} key={link.id}>
            {link.text}
          </a>
        );
      })}
    </div>
  );
}

export default NavBar;
