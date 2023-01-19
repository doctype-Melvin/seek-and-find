import { useState, useEffect } from "react";
import React from "react";

export default function Timer(props) {
    
    const [elapsedTime, setElapsedTime] = useState(0);
    
    let intervalId;
  
    useEffect(() => {
      if (props.isRunning) {
        intervalId = setInterval(() => {
          setElapsedTime(elapsedTime => elapsedTime + 1);
        }, 1000);
      } else {
        clearInterval(intervalId);
      }
      return () => clearInterval(intervalId);
    }, [props.isRunning]);
  
    
    return (
        <div className="timer">
            <span className="time">{elapsedTime} seconds</span>
        </div>
    )
}