import React from "react";

export default function Context(props) {

    let current = props.coords[props.coords.length-1]
    const choice = (e) => {
        props.setContext(prevState => !prevState)
        console.log(e.target.textContent, props.coords)
    }
    

    return (
        <div className="contextCt"
        style={{
            top: current.y + 30,
            left: current.x + 30
            }}
        >
            <ul className="contextMenu">
                <li 
                className="choice"
                onClick={choice}
                >Ball</li>
                <li 
                className="choice"
                onClick={choice}
                >Trophy</li>
                <li 
                className="choice"
                onClick={choice}
                >Clips</li>
                <li 
                className="choice"
                onClick={choice}
                >Dumbbell</li>
                <li 
                className="choice"
                onClick={choice}
                >Boxing Gloves</li>
                <li 
                className="choice"
                onClick={choice}
                >Expander</li>
            </ul>
        </div>
    )
}