import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter]= useState(10)
  /*
  here counter is an variable and setCounter is an function which is reponsible for updating variable.
  In the useState() function we have to give an argument which the counter will take as an initial value. 
  It can be anything string, number, boolean, empty string. 
  */

  function addValue(){
    if(counter >= 21) {
      return
    }
    setCounter(counter + 1)
  }

  function removeValue() {
    if(counter === 0) {
      return
    }
    setCounter(counter - 1)
  }

  return (
    <>
    <h1>Counter</h1>
    <h2>Hello This is my first React program</h2>

    <p>Counter: {counter}</p>
    <button onClick={addValue}>Add value by 1</button>
    <br />
    <br />
    <button onClick={removeValue}>Remove value by 1</button>
    </>
  )
}

export default App
