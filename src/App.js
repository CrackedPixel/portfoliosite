import React from 'react';
import { WelcomePage } from './Components/WelcomePage';
import { HeaderNav } from './Components/HeaderNav';
import { AboutMe } from './Components/AboutMe';
import { Skillset } from './Components/Skillset';
import { Projects } from './Components/Projects';
import { Contact } from './Components/Contact';

import './css/main.css';
import { Footer } from './Components/Footer';

function App() {

  console.log("RENDER");
  return (
    <div className="App">
      <HeaderNav />
      <div className="pagesList">
        <WelcomePage />
        <AboutMe />
        <Skillset />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
