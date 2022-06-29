import { useState, useEffect } from "react";

// Course
// JSX
// Components
// Props

// State
// Hooks
// Events
// Effect

const Person = (props) =>{
  return(
    <>
    <h2>Person Component</h2>
    <span>{props.name}</span>
    </>
  )
}

function App() {
  const name = "panos";
  const address = null;

  // Hook
  // never modify state manually
  const [counter, setCounter] = useState(0);

  // useEffect - when to run code
  // call code whenever something happens
  useEffect(()=>{
    alert("You changed the counter")
  }, [counter] )

  return (
    <div>
      {/* Simple counter
      <button onClick={()=>{setCounter(counter-1)}} className="btn btn-primary m-2">-</button>
      <h2>{counter}</h2>
      <button onClick={()=>{setCounter(counter+1)}} className="btn btn-primary m-2">+</button> */}
    </div>
  );
}

export default App;
