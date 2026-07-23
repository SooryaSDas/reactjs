import { useEffect, useState } from "react"

function FetchData(){
    const [data,setData] = useState([]);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts").then(res=>res.json()).then(data=>setData(data))
    })

    return (
        <div>
        {data.slice(0,5).map((data,index)=>(
            <h4 key={index}>
                {data.title}
            </h4>
        ))}
    </div>
    )
}

export default FetchData