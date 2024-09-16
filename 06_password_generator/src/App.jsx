import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  // useState hook
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')
  const [btnBgColor, setBtnBgColor] = useState("blue")


  // useRef hook
  const passwordRef = useRef(null)
  /*
  by using useRef we can take the reference of any element on web page and then we can manipulate that element
  like here we take the reference of input value 
  */


  // useCallback hook
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "~!@#$%^&*_+-={}[]"

    for (let i = 1; i <= length; i++) {
      let charIndex = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(charIndex)
    }

    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword])


  const copyPasswordToClipboard = useCallback(() => {
    setBtnBgColor("rgb(0, 0, 200)")
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password, btnBgColor])


  // useEffect hook
  useEffect(() => {
    passwordGenerator(setBtnBgColor("blue"))
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
      <div id='container'>
        <h1>Password Generator</h1>
        <div id='top'>
          <input
            className="text"
            type="text"
            placeholder='password'
            value={password}
            ref={passwordRef}  // this will pass the reference of input value to the useRef
            readOnly
          />
          <button onClick={copyPasswordToClipboard} style={{backgroundColor: btnBgColor}}>copy</button>
        </div>

        <div id='bottom'>

          <div className='range'>
            <input
              className="range-slider"
              type="range"
              min={8}
              max={21}
              value={length}
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label>Length: {length}</label>
          </div>

          <div>
            <input
              className="checkbox"
              type="checkbox"
              defaultChecked={numberAllowed}
              onChange={() => { setNumberAllowed((prev) => !prev) }}
            />
            <label>Numbers</label>
          </div>

          <div>
            <input
              className="checkbox"
              type="checkbox"
              defaultChecked={charAllowed}
              onChange={() => { setCharAllowed((prev) => !prev) }}
            />
            <label>Characters</label>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
