import { useState } from "react"

function SearchFilter(){

    const fruits = ["apple", "orange", "mango", "bananan", "kiwi"];

    const [search, setSearch] = useState("")

    const filteredvalue = fruits.filter((fruits)=> fruits.includes(search.toLowerCase()))

    return <div>
        <input type="text" placeholder="search..." onChange={(e)=>setSearch(e.target.value)} />

        {filteredvalue.map((fruits, index)=> (
            <p key={index}>{fruits} </p>
        ))}
    </div>
}

export default SearchFilter
