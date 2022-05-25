import React from "react";
import './App.css';
import NavBar from './Components/NavBar/NavBar.jsx';
import Home from './Components/Home/Home.jsx';
import About from './Components/About/About.jsx';
import Projects from './Components/Projects/Projects.jsx';
import Contact from './Components/Contact/Contact.jsx';


function App() {

  return (
    <div>
      <main id="home">
        <NavBar />
        <section className='home'>
          <Home />
        </section>
        <section className='about' id='about'>
          <About />
        </section>
        <section className='projects' id='projects'>
          <Projects />
        </section>
        <section className='contact' id='contact'>
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;
