import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);
  // let counter=6;

  let addValue = function () {
    if (counter < 20) {
      counter = counter + 1;

      console.log("After adding 1 value : ", counter);
      setCounter(counter);
    }
  };

  let subValue = function () {
    if (!counter == 0) {
      counter = counter - 1;
      console.log("After Subtraction 1 value : ", counter);
      setCounter(counter);
    }
    // return;
  };

  return (
    <>
      <h1> chai aur react</h1>
      <h2>counter value : {counter}</h2>
      <button onClick={addValue}>Increase Value {counter}</button> <br />
      <br />
      <button onClick={subValue}>Decrease Value {counter}</button>
    </>
  );
}

export default App;
