import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'

function App() {

  const [context, setContext] = useState(false)
  const [coords, setCoords] = useState([])

  const clickHandler = (e) => {
    let space = e.target.getBoundingClientRect()
    let x = Math.round(e.clientX - space.left) 
    let y = Math.round(e.clientY - space.top)
    setContext(prevState => !prevState)
    setCoords(prevState => [...prevState, {x, y}])
    console.log(coords)
  }

  return (
    <div className="App">
      <Header />
      <Main 
      clickHandler={clickHandler}
      context={context}
      />
    </div>
  )
}

export default App
