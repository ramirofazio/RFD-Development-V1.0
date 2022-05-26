import React from "react";
import styles from "./Home.module.css";
import Spline from "@splinetool/react-spline";

function Home() {
  return (
    <div className={styles.container}>
      <Spline scene="https://draft.spline.design/MHHmJPTZaHMZgiZb/scene.splinecode" />
    </div>
  );
}

export default Home;
