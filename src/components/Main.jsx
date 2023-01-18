import React from "react";
import Context from "./Context";

export default function Main(props) {
// console.log(props.coords)
    return (
        <div className="imgContainer">
            <img 
            src="/img1.jpg"
            onClick={props.clickHandler}
            />
            {!props.context ?
            <Context
            setContext={props.setContext}
            coords={props.coords} 
            context={props.context}
            /> : null}
        </div>
    )
}