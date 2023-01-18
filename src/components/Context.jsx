import React from "react";
import data from "../data"

export default function Context(props) {
    let { relX, relY } = 0
    let object = ''
    let current = props.coords[props.coords.length-1]
    const img = document.querySelector('.imgContainer')
    const choice = (e) => {
        props.setContext(prevState => !prevState)
        relX = Math.round((current.x / img.clientWidth)*100)
        relY = Math.round((current.y / img.clientHeight)*100)
        object = e.target.textContent.toLowerCase()
        evalGuess(relX, relY, object)
    }
    const evalGuess = (x, y, obj) => {
        let target = data.find((item) => {
            return item.name === obj
        })
        if (target.xMin < x && target.xMax > x &&
            target.yMin < y && target.yMax > y) {
                console.log('Correct guess')
            } else {
                console.log('Try again!')
            }
        // console.log(x, y, target)
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
                >Grips</li>
                <li 
                className="choice"
                onClick={choice}
                >Dumbbell</li>
                <li 
                className="choice"
                onClick={choice}
                >Gloves</li>
                <li 
                className="choice"
                onClick={choice}
                >Expander</li>
            </ul>
        </div>
    )
}