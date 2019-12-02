import React from 'react'
import { MainButton } from './MainButton'

export const AboutMe = () => {
  return (
    <div className="about" id="aboutme">
      <h3>About Me</h3>
      <p>My name is Anthony Carbajal, the codeist with the mostest. No laughs? Okay.</p>
      <p>I grew up on a mountain, in a small town near Portland, Oregon. I have a burning passion for technology and I'm always excited about new developments and ideas. I thrive in team-based environments with lots of collaboration, but am fully capable of tackling solo jobs as well. I am motivated by my passion for creation, learning, and bettering myself.</p>
      <p>I'm currently working as the lead programmer at a game studio, but I am always looking for new and exciting projects to work on.</p>
      <p>Please feel free to review my resume or contact me for more information</p>
      <MainButton href="https://google.com" target="_blank" preicon="fa fa-download" text="resume"/>
    </div>
  )
}
