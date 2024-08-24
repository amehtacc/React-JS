import Coffee from "./coffee.jsx";

function App() {
  const username = "My first React code"
  
  return (
    <>
    <h1>Hello React with Vite | Aryan Mehta</h1>
    <h2>{username}</h2>
    <Coffee/>
    <p>taste your coffee</p>
    </>  
  )
}

export default App