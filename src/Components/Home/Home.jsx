import React from "react";
import styles from "./Home.module.css";
import Spline from "@splinetool/react-spline";

function Home() {
  return (
    <div className={styles.container}>
      <Spline scene="https://prod.spline.design/2AHCqNulxstC9agi/scene.splinecode" />
    </div>
  );
}

export default Home;
