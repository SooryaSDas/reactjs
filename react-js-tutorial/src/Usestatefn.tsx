"use client";
import { useState } from "react";

function Usestatefn() {
  const [count, setcount] = useState(0);
  const [display, setDispaly] = useState(true);

  const [name, setName] = useState("");
  const [submitname, setSubmitname] = useState("");

  const displaydata = (e) => {
    e.preventDefault();
    setSubmitname(name);
  };

  
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

      {/* Input Field */}
      <div>
        <form onSubmit={displaydata}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit">submit</button>
        </form>
        <br />
        <p>Name: {submitname} </p>
        <p>count : {submitname.length}</p>
      </div>

      {/* checking */}
      <div>
        
      </div>
    </div>
  );
}

export default Usestatefn;
