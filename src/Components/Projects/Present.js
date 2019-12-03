import React from 'react'

export const Present = (props) => {
  
  return (
    <div className="project__present__container">
      <div className="present__left">
        <button disabled={props.curImage === 0} onClick={() => props.setNewCurImage(-1)}>{"<-"}</button>
        <div className="present__preview__holder">
          <img className="present__preview__img" src={props.cp.pics[props.curImage]} alt={props.cp.title + " image " + props.curImage}/>
        </div>
        <button disabled={props.curImage === props.cp.pics.length-1} onClick={() => props.setNewCurImage(1)}>{"->"}</button>
      </div>
      <div className="present__right">
        <h4>{props.cp.title}</h4>
        <p>{props.cp.about}</p>
        <span>Tech used: {props.cp.tech}</span>
        <div className="present__right__links">
          {
            props.cp.links.map((item,i) => {
              return <React.Fragment key={i}><a href={item.url} rel="noopener noreferrer" target="_blank">{item.title}</a><span>|</span></React.Fragment>
            })
          }
          {/* <a href={props.cp.liveurl} target="_blank">Live View</a><span>|</span><a href={props.cp.designurl} target="_blank">Design</a> */}
        </div>
      </div>
    </div>
  )
}
