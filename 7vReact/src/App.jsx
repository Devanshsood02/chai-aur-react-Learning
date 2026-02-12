import React from "react";
import Card from "./components/Card";

const App = () => {
  let obj = {
    name: "dev",
    age: 23,
  };

  return (
    <>
      <h1 className="text-4xl font-bold ml-5 mt-20 bg-green-400 w-fit px-4 py-2">
        App
      </h1>

      <Card username="chai aur react"  someobj={obj} price={500}/>

      <Card  username="nero" price={700}/>
    </>
  );
};

export default App;
