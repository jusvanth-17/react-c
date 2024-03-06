import react from 'react';
import {useState} from 'react';
function Counter() {
    const[count,setcount] = useState(0);
    let handleIncrement = ()=>{setcount(count=>count+1)}
    return (
        <div>
        <h1>Count--{count}</h1>
        <br></br>
        <button onclick={()=>setcount(prev=>prev+1)}>Increment</button>
    </div>
  )
}

export default Counter;