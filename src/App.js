import React from 'react';
import NavBar from './components/NavBar';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Expertise from './components/Expertise';

const App = () => {
  return (
    <div>
      <NavBar />
      <Header/>
      <About />
      <Expertise/>
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
