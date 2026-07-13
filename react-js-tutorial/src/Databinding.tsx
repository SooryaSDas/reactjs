function DataBinding(){
    const heading = "data binding";
    const value = "mh";
    
    return <div>
        <p>Heading : {heading}</p>
        <select value={value}>
            <option value="mh">Maha</option>
            <option value="gu">Gujarath</option>
            <option value="kerala">Kerala</option>
            <option value="tamil">Tamil Nadu</option>
        </select>
    </div>
}

export default DataBinding;