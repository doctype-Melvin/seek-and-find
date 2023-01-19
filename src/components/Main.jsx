import React from "react";
import Context from "./Context";

export default function Main(props) {
// console.log(props.coords)

    return (
        <div className="imgContainer">
            <div className='info'><span>{props.objects}</span></div>
            <img 
            src="/img1.jpg"
            onClick={props.clickHandler}
            />
            <div className="ball"></div>
            <div className="grips"></div>
            <div className="dumbbell"></div>
            <div className="gloves"></div>
            <div className="expander"></div>
            <div className="trophy"></div>
            {!props.context ?
            <Context
            setContext={props.setContext}
            coords={props.coords} 
            context={props.context}
            level={props.level}
            setCounter={props.setCounter}
            counter={props.counter}
            /> : null}
        </div>
    )
}