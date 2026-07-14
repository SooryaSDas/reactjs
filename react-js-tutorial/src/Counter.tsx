import { useState } from "react";

function Counter () {
    const [value, setValue] = useState(0)
    return <div>
        <button onClick={()=>setValue(value+1)}>Increment</button>
        <h2>Counter : {value} </h2>
        <button onClick={()=>setValue(value-1)}>Decrement</button>
        <button onClick={()=>setValue(0)}>Reset</button>
    </div>
}

export default Counter;