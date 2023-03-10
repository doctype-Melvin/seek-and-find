import React from "react";
import data from "../data"
import { celebrate, endGame } from "../Helper";

export default function Context(props) {
    let { relX, relY } = 0 // Variables to store relative position of click
    let object = '' // Chosen object
    
    let current = props.coords[props.coords.length-1] // Click position
    
    const img = document.querySelector('.imgContainer')
    
    const choice = (e) => {
        props.setContext(prevState => !prevState)
        relX = Math.round((current.x / img.clientWidth)*100)
        relY = Math.round((current.y / img.clientHeight)*100)
        object = e.target.textContent.toLowerCase()
        evalGuess(relX, relY, object, e.target)
    }

    const evalGuess = (x, y, obj) => {
        // Look up the current level and go through the objects in data
        let target = data.find(item => item.level === props.level)
        .objects.filter(item => item.name === obj)[0]
        
        let selector = `.${obj}` // Creates selector from choice to toggle 'X'
        
        if (target.xMin < x && target.xMax > x &&
            target.yMin < y && target.yMax > y) {
                let prop = target.name[0].toUpperCase() + target.name.slice(1)
                document.querySelector(selector).style.display = 'block'
                celebrate(true, prop)
                props.setCounter(prevState => prevState += 1)
                if (endGame(props.counter)) {
                    props.stop()
                }
            } else {
                celebrate(false)
            }
    }

    return (
        <div className="contextCt"
        style={{
            top: current.y + 20,
            left: current.x + 20
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