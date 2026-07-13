"use client";
import { useState } from "react";

function Usestatefn(){
    const [count, setcount] = useState(0);
    return <div>
        <p>Count : {count}</p>

        <button onClick={()=>setcount(count+1)}>increment the count</button>

        <button onClick={()=>setcount(count-1)}>Decrement the count</button>
    </div>
}

export default Usestatefn