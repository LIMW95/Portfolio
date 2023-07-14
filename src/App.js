import React from 'react';
import NavBar from './components/NavBar';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Work from './components/Work';
import Expertise from './components/Expertise';

const App = () => {
  return (
    <div>
      <NavBar />
      <Header/>
      <About />
      <Expertise/>
      <Work />
      <Contact />
    </div>
  );
}

export default App;
