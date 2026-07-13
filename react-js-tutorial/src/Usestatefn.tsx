"use client";
import { useState } from "react";

function Usestatefn() {
  const [count, setcount] = useState(0);
  const [display, setDispaly] = useState(true);
  return (
    <div>
      {/* counter */}
      <div>
        <p>Count : {count}</p>

        <button onClick={() => setcount(count + 1)}>increment the count</button>

        <button onClick={() => setcount(count - 1)}>Decrement the count</button>
      </div>
      {/* Toggle Button */}
      <div>
        {display ? <p>Hello</p> : ""}
        <button onClick={() => setDispaly(!display)}>click here</button>
      </div>
    </div>
  );
}

export default Usestatefn;
