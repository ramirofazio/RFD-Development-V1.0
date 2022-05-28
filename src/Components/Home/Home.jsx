import React from "react";
import { StyledContainer } from "../../styles/globalStyles.js";
import styles from "./Home.module.css";
//import Spline from "@splinetool/react-spline";

function Home() {
  return (
    <StyledContainer>
      <div>
        <div>
          <h1 className={styles.h1}>Hello, im</h1>
          <h1 className={styles.p}>Ramiro Fazio Dattoli</h1>
        </div>
        <h1 className={styles.h1}>im a Full stack web developer</h1>
      </div>
    </StyledContainer>
  );
}

export default Home;
