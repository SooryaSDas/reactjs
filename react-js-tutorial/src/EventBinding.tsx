function EventBinding(){
   const sayHello = ()=>{
        alert("Hi... Helloo")
    }

    const OnmouseEnter = ()=>{
        console.log("mouse entered into the div");
    }

    const OnMouseOut = ()=>{
        console.log("mouse out from the div");
    }
    return <div>
            <button onClick={sayHello}>Click me</button>
            <div onMouseEnter={OnmouseEnter} onMouseOut={OnMouseOut}>
                <h2>this is a div</h2>
            </div>
    </div>
}

export default EventBinding