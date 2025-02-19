import { useState } from "react";

function About() {
  var stateVar = 0;
  var [num, setNum] = useState(stateVar);
  function handleDecrement() {
    setNum(num - 1);
  }

  return (
    <div>
      <h1>About page</h1>
      <h2>State intial value is {stateVar}</h2>
      <button onClick={handleDecrement}>-</button>
      <h3>Updating State:{num}</h3>
      <button
        onClick={() => {
          setNum(num + 1);
        }}
      >
        +
      </button>
      <hr />
      <button onClick={()=>{setNum(num=0);}}>Reset</button>
    </div>
  );
}
export default About;
