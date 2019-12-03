import React, {useState, useEffect} from 'react'
import { SkillComp } from './SkillComp'
import config from '../config.json';

export const Skillset = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch(`${config.dburl}skills.json`, {mode: 'cors', header: {'Access-Control-Allow-Origin':'*'}})
      .then(res => {return res.json()})
      .then(stuff => setSkills(stuff))
      .catch(err => {
        console.log(err);
      })
  }, );

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
