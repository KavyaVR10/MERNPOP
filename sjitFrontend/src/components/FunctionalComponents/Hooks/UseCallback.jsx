import { useState ,useCallback} from "react"
const UseCallback=()=>{
    var[number,setNumber]=useState(0);
    var[theme,setTheme]=useState(false);
    var styling={
        backgroundColor:theme?"black":"beige",
        color:theme?"beige":"black",
    };
   var numList=useCallback((mul)=>{
    return[number+mul*2,number+mul*4,number+mul*8]
   },[number])
    return(
        <div style={styling}>
            <h1>This is UseCallback example</h1>
            Number Box:{" "} <input type="number" value={number} onChange={(e)=> setNumber(e.target.value)}/>
            <h2>The Number List is </h2>
            {numList(10).map((val,index)=>(
                <h2 key={index}>{val}</h2>
            ))}
            <button onClick={()=>setTheme(!theme)}>Toggle Theme</button>
        </div>
    )
}
export default UseCallback;