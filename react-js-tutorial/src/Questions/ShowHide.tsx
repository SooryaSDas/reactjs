import { useState } from "react";

function ShowHide(){
    const [show,setShow] = useState(false)
    return <div>
        <input type={`${show === true ? 'text' : 'password'}`} placeholder="Password" />
        <button onClick={()=>setShow(!show)}>Show/Hide</button>
    </div>
}

export default ShowHide;