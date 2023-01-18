import React from "react";

export default function Context(props) {
    let { relX, relY } = 0
    let current = props.coords[props.coords.length-1]
    const img = document.querySelector('.imgContainer')
    const choice = (e) => {
        props.setContext(prevState => !prevState)
        relX = Math.round((current.x / img.clientWidth)*100)
        relY = Math.round((current.y / img.clientHeight)*100)
        evalGuess()
    }
    const evalGuess = () => {
        console.log(relX, relY)
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