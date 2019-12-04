import React from 'react'
import { MainButton } from './MainButton';

export const WelcomePage = () => {
  return (
    <div className="page welcome" id="welcome">
      <h1><span className="col1">A</span><span className="col2">nthony</span>&nbsp;<span className="col1">Carb</span><span className="col2">ajal</span></h1>
      <p>Just another <a href="https://lambdaschool.com/" target="_blank" rel="noopener noreferrer">Lambda School</a> student.<br />Feel free to browse, there's no fee until you hire me.</p>
      <MainButton href="#aboutme" posticon="far fa-chevron-right" text="about me"/>
    </div>
  )
}
 