import React ,{useState} from 'react';
export default function Hook1() {

    const [count,setCount]=useState(0);
    const [name,setName]=useState("");
    const [selected,setSelected]=useState(false);

    return (
        <>
       
            <h1>Count:{count}</h1>
            <br/>
            <h2>Name:{name}</h2>
            

            <button onClick={()=>setCount(count+1)}>Increment</button>
            <button onClick={()=>setCount(count-1)}>Decrement</button>
            <br/><br/>
            <input type="text" placeholder="Enter Name" onChange={(e)=>setName(e.target.value)}/>
            <br/><br/>
            <input type="text" placeholder='Name' onChange={(e)=>setSelected(e.target.value)}/>
            <br/><br/>
            {"Selected value"}:{selected ? "True":"False"}
            <input type="checkbox" onChange={(e)=>setSelected(e.target.checked)}/>

      
        </>
    )
}
