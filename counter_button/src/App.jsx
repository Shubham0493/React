import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0);
  const addValue = () =>{
    //counter +=1;
   // if (counter >=20)
    //return alert("You can not count more than 20");
    setCounter(counter+1);
  }
  //const removeValue = ()=>{
    //if (counter > 0) {
    //setCounter(counter-1);
  //}
  //else(alert("You Can't go towards Negative"));
    
 // };
  
  return (
    <>
      <h1>Thor</h1>
      <h2>Counter Button</h2>
      <h2>{counter}</h2>
      <button onClick={addValue}>Add value</button>
      
    </>
  )
}

export default App
