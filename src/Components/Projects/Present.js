import React from 'react'

export const Present = (props) => {
  
  return (
    <div className="project__present__container">
      <div className="present__left">
        <button onClick={() => props.setNewCurImage(-1)}>{"<-"}</button>
        <div className="present__preview__holder">
          <img className="present__preview__img" src={props.cp.pics[props.curImage]} alt={props.cp.title + " image " + props.curImage}/>
        </div>
      </div>
      <div className="present__right">
        <h4>{props.cp.title}</h4>
      </div>
    </div>
  )
}
