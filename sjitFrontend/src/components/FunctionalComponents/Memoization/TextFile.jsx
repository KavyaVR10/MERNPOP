import React, { memo,useState } from "react";
const TextFile = () => {
  const [text, setText] = useState("");

  return (
    <div><br/>
      <label>Enter Text: </label>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>You typed: {text}</p>
    </div>
  );
};

export default memo(TextFile);