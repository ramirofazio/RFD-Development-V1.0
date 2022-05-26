import React from "react";
import { Container } from "../../styles/globalStyles.js";
import styles from "./Home.module.css";
//import Spline from "@splinetool/react-spline";

function Home() {
  return (
    <Container>
      <div>
        <h1 className={styles.h1}>
          Hello, im
          <p className={styles.p}>Ramiro Fazio Dattoli</p>
          im a Full stack web developer
        </h1>
      </div>
    </Container>
  );
}

export default Home;
