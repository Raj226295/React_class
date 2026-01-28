import React ,{useState} from 'react';
export default function Hook2() {
    const [user,setUser]=useState({name:"",age:0,male:"Female" ,email:"", });

    return<>
    <h1>User information</h1>
    <h2>Name:{user.name}</h2>
    <h2>Age:{user.age}</h2>
    <h2>Email:{user.email}</h2>
    <h2>Gender:{user.male ? "Male" :"Female"}</h2>
    <br></br>
    <input type="text" placeholder='Name' onChange={(e)=>setUser({...user,name:e.target.value})}/><br></br>
    <input type="number" placeholder='Age' onChange={(e)=>setUser({...user,age:e.target.value})}/><br></br>
    <input type="email" placeholder='Email' onChange={(e)=>setUser({...user,email:e.target.value})}/><br></br>
    Gender<input type="checkbox" checked={user.male} onChange={() => setUser({ ...user, male: !user.male })}/>
    <br></br>

    <select>
        <option value="">Select city</option>
        <option value="New York">New York</option>
        <option value="Los Angeles">Los Angeles</option>
        <option value="Chicago">Chicago</option>
    </select>
    </>
};


