import { useState } from "react"

function ShowPassword() {
    const [display, setDisplay] = useState(false)
    return <div>
       { <input 
        type={`${display ? 'text' : 'password'}`}
       placeholder="password" />}
        <button onClick={()=>setDisplay(true)}>diplay/hide password</button>
    </div>
}

export default ShowPassword