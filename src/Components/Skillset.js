import React from 'react'
import { SkillComp } from './SkillComp'
import skills from '../db/skills.json';

export const Skillset = () => {
  return (
    <div className="skillset" id="skillset">
      <h3>Skillset</h3>
      <p>I believe in the T-model. That is, having one strong skill and other smaller skills. This helps you be more well-rounded and diversed, but also makes it easier to communicate with other members of a project who have a different role.</p>
      <div className="skills__container">
        {
          skills.map((item, i) => {
            return (
              <SkillComp key={i} icon={item.icon} title={item.title}>{item.desc}</SkillComp>
            )  
          })
        }
      </div>
    </div>
  )
}
