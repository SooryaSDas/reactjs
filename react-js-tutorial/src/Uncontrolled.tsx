"use client";
import { useRef } from "react";

function Uncontrolled() {
  const emailRef = useRef();
  const submitbtn = (e) => {
    e.preventDefault();
    console.log(emailRef.current.value);
  };
  return (
   <div>
      <form onSubmit={submitbtn}>
        <input
          type="email"
          ref={emailRef}
        />

        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Uncontrolled;
