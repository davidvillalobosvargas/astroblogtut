import { useState } from "react";
export function Counter(){
    const [count,setCount] = useState(0)
    return (
        <button className="bg-black text-white" onClick={()=>setCount(prev=>prev+1)}>{count}</button>    
    )
}
export default Counter