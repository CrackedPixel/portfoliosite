import React from 'react'

export const SkillComp = (props) => {
  return (
    <div className="skill__object">
      <i className={props.icon + " skill__icon"}></i>
      <h4>{props.title}</h4>
      <p>{props.children}</p>
    </div>
  )
}
