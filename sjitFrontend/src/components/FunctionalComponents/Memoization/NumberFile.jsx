import React, { memo,useState } from "react";
const NumberFile = () => {
  const [number, setNumber] = useState("");

  return (
    <div><br/>
      <label>Enter Number: </label>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <p>The number is: {number}</p>
    </div>
  );
};

export default memo(NumberFile);