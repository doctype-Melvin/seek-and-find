import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import { db } from './firebaseConfig'

function App() {

  const [context, setContext] = useState(true)
  const [coords, setCoords] = useState([])
  const [level, setLevel] = useState(1)
  const [counter, setCounter] = useState(0)
  const [isRunning, setIsRunning] = useState(false);

  const clickHandler = (e) => {
    let space = e.target.getBoundingClientRect()
    let x = Math.round(e.clientX - space.left) 
    let y = Math.round(e.clientY - space.top)
    setContext(prevState => !prevState)
    context ? setCoords(prevState => [...prevState, {x, y}]) :
    setCoords(prevState => [...prevState])
  }

  function start() {
    setIsRunning(true);
  }

  function stop() {
    setIsRunning(false);
  }

  window.onload = () => start()

  return (
    <div className="App">
      <Header />
      <Main 
      clickHandler={clickHandler}
      context={context}
      coords={coords}
      setContext={setContext}
      level={level}
      counter={counter}
      setCounter={setCounter}
      isRunning={isRunning}
      setIsRunning={setIsRunning}
      stop={stop}
      />
    </div>
  )
}

export default App
