import React from 'react'

export const MainButton = (props) => {

  const sendToPage = e => {
    console.log("SEND", props.href);
    if (props.target) {
      window.open(props.href, props.target);
    }else{
      window.open(props.href, "_self");
    }
  }

  return ( 
  <button className="mainBtn" onClick={sendToPage}>
    {props.preico ? props.preico : null}
    {props.preicon ? <i className={props.preicon + " mainBtnIcon"}></i> : null }
    <span>
      {props.text}
      </span>
      {props.postico ? props.postico : null}
      {props.posticon ? <i className={props.posticon + " mainBtnIcon"}></i> : null }
    </button>)
}
