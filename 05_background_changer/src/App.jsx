import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("grey")

  return (
    <div className="divOne" style={{ backgroundColor: color}}>
      <div id='btn-container'>
        <button className="btn" id="red" onClick={() => setColor('red')}>Red</button>
        <button className="btn" id="green" onClick={() => setColor('rgb(0, 223, 0)')}>Green</button>
        <button className="btn" id="blue" onClick={() => setColor('blue')}>Blue</button>
        <button className="btn" id="dark" onClick={() => setColor('#131417')}>Dark</button>
      </div>
    </div>
  )
}

export default App
