import React from 'react'

export const Selector = (props) => {
  return (
    <div className="project__selector__obj" onClick={props.clicky} value={props.projid}>
      <img className="project__selector__img" src={props.src} alt={props.alt} value={props.projid}/>
    </div>
  )
}
