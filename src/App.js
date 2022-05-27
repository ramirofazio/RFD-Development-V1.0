import React from "react";
import './App.css';
import NavBar from './Components/NavBar/NavBar.jsx';
import Home from './Components/Home/Home.jsx';
import About from './Components/About/About.jsx';
import Projects from './Components/Projects/Projects.jsx';
import Contact from './Components/Contact/Contact.jsx';
import { StyledContainer } from './styles/globalStyles'

function App() {

  return (
    <main id="home">
      <NavBar />
      <StyledContainer className='home'>
        <Home />
      </StyledContainer>
      <StyledContainer className='about' id='about'>
        <About />
      </StyledContainer>
      <StyledContainer className='projects' id='projects'>
        <Projects />
      </StyledContainer>
      <StyledContainer className='contact' id='contact'>
        <Contact />
      </StyledContainer>
    </main>
  );
}

export default App;
