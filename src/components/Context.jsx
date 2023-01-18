import React from "react";

export default function Context(props) {

    // const style = props.coords.shift()
    let current = props.coords[props.coords.length-1]
    console.log(current)

    return (
        <div className="contextCt"
        style={{
            top: current.y + 30,
            left: current.x + 30
            }}
        >
            <ul className="contextMenu">
                <li>Ball</li>
                <li>Trophy</li>
                <li>Clips</li>
                <li>Dumbbell</li>
                <li>Boxing Gloves</li>
                <li>Expander</li>
            </ul>
        </div>
    )
}