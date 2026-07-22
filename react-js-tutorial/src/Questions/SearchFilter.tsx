import { useState } from "react";

function SearchFilter(){
    const fruits = ["apple", "orange", "kiwi", "banana", "strawberry"];
    const [search, setSearch] = useState();
    
    const SearchResult = ()=>{

    }

    return <div>
        <input type="text" placeholder="search..." />
        <button onClick={SearchResult}>Submit</button>
    </div>
}


export default SearchFilter