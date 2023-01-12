import React from "react";
import Context from "./Context";

export default function Main(props) {
  
    return (
        <div className="imgContainer">
            <img 
            src="/img1.jpg"
            onClick={props.clickHandler}
            />
            {props.context ? <Context /> : null}
        </div>
    )
}