import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import { db } from './firebaseConfig'

function App() {

  const [context, setContext] = useState(true)
  const [coords, setCoords] = useState([])

  const clickHandler = (e) => {
    let space = e.target.getBoundingClientRect()
    let x = Math.round(e.clientX - space.left) 
    let y = Math.round(e.clientY - space.top)
    setContext(prevState => !prevState)
    context ? setCoords(prevState => [...prevState, {x, y}]) :
    setCoords(prevState => [...prevState])
  }

  return (
    <div className="App">
      <Header />
      <Main 
      clickHandler={clickHandler}
      context={context}
      coords={coords}
      />
    </div>
  )
}

export default App
