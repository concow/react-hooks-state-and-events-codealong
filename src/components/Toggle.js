import React, { useState } from "react";

function Toggle() {
  //To create a state variable in our component, we need to call useState and provide an initial value:
  
  const [isOn, setIsOn] = useState(false);
  //conditional rendering

  //cb function / update state / call the setter
  function handleClick() {
    setIsOn((setIsOn) => !isOn);
  }
  const color = isOn ? "red" : "white";
  return (
    <button style={{ background: color }} onClick={handleClick}>
      {isOn ? "ON" : "OFF"}</button>
  );
}

export default Toggle;
