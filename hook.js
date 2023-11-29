
import React, { useState } from "react";

function UseState() {
  const [count, setCount] = useState("red"); 

  const handleBlue = () => {
    setCount("blue");
  };

  const handleRed = () => {
    setCount("red");
  };

  return (
    <div>
      <h2>current color:{count}</h2>
      <button onClick={handleRed}>Set to Red</button>
      <button onClick={handleBlue}>Set to Blue</button>
   
    </div>
  );
}

export default UseState;
