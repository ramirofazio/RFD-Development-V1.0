import React, { useEffect, Suspense, lazy } from "react";
import styled from "styled-components";
import mixins from "./styles/mixins.js";
import LoadingPage from "./Components/LoadingPage/LoadingPage.jsx";
const NavBar = lazy(() => import("./Components/NavBar/NavBar.jsx"));
const Home = lazy(() => import("./Components/Home/Home.jsx"));
const About = lazy(() => import("./Components/About/About.jsx"));
const Experience = lazy(() =>
  import("./Components/Experiences/Experiences.jsx"),
);
const Contact = lazy(() => import("./Components/Contact/Contact.jsx"));
const Side = lazy(() => import("./Components/Side/Side.jsx"));
const MobileSide = lazy(() => import("./Components/Side/MobileSide.jsx"));
import AOS from "aos";
import "aos/dist/aos.css";

const StyledContainer = styled.div`
  ${mixins.principalContainer}

  &#home, &#about, &#contact {
    height: 100vh;
  }
`;
function App() {
  useEffect(() => {
    AOS.init({ delay: 0.5, duration: 1100 });
    AOS.refresh();
  }, []);
  const screenSize = window.innerWidth;

  return (
    <main id="home">
      <Suspense fallback={<LoadingPage />}>
        <NavBar />
        {screenSize > 900 ? <Side /> : null}
        <StyledContainer id="home">
          <Home />
        </StyledContainer>
        <StyledContainer id="about">
          <About />
        </StyledContainer>
        <StyledContainer id="experience">
          <Experience />
        </StyledContainer>
        <StyledContainer id="contact">
          <Contact />
        </StyledContainer>
        {screenSize < 900 ? <MobileSide /> : null}
      </Suspense>
    </main>
  );
}

export default App;
