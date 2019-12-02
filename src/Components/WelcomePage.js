import React from 'react'
import { MainButton } from './MainButton';

export const WelcomePage = () => {
  return (
    <div className="page welcome" id="welcome">
      <h2>Welcome</h2>
      <p>Just another <a href="https://lambdaschool.com/">Lambda School</a> student.<br />Feel free to browse, there's no fee until you hire me.</p>
      <MainButton href="#aboutme" posticon="fa fa-chevron-right" text="about me"/>
    </div>
  )
}
 