// import DefaultProps from './component/defaultProps.jsx';
// import GreetingClass from './component/ITC.jsx';
// import PropExample from './component/prop_example.jsx';
// import UserCard1 from './component/usercardcomp.jsx';
// function App() {
//   const customfunction=()=>{
//     console.log("Custom onClick executed.");
//   }
//   return (
//     <>
//       {/* <GreetingClass /> */}
//       <UserCard1 />
//       <PropExample
//       img_url="https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/2ac41f74056361.5c1faf697fd88.jpg"
//       button_txt="Save" data="Gautam Bro"/>
//       <PropExample
//       img_url="https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/2ac41f74056361.5c1faf697fd88.jpg"
//       button_txt="Save" data="Gautam Bro"/>
//       <DefaultProps/>
//       <DefaultProps onclick={customfunction}/>
//       <DefaultProps text="Press Here "/>
//       <DefaultProps
//       text="Press Here "
//       onclick={customfunction}/>
//     </>
//   );
// }

// import Clock from "./room11_pre/Clock";

// import Hook1 from "./CEC23012026/Hook";
// import Collage from "./room10_pre/Collage";

// export default App;

// ye hai contact list ka app js file

// import React from 'react';
// import ContactList from './C5012026/ContactList.jsx';

// const App =()=>{
//   return(
//     <>
//     <div>
//       <ContactList/>
//     </div>
//     </>
//   );
// };

// export default App;
// import React from "react";
// import NavBar from "./header_prectice/nav_bar";

// import { Routes, Route, Navigate } from "react-router-dom";
// import Collage from "./header_prectice/Collage";
// import Login from "./header_prectice/Login";
// import Contact from "./header_prectice/Contact";
// import About from "./header_prectice/About";
// import Home from "./header_prectice/Home";
// import Student from "./header_prectice/Studen";
// import Details from "./header_prectice/Details";
// import Departement from "./header_prectice/Departments";

// const App = () => {
//   return (
//     <>
//       {/*<NavBar />*/}
//       <Routes>
//         <Route element={<NavBar />}>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/login" element={<Login />} />

//           <Route></Route>
//         </Route>

//         {/* Collage with nested routes */}
//         <Route path="/collage" element={<Collage />}>
//           <Route index element={<Student />} />
//           <Route path="department" element={<Departement />} />
//           <Route path="details" element={<Details />} />
//         </Route>

//         <Route path="*" element={<Navigate to="/login" />} />
//       </Routes>
//     </>
//   );
// };

// export default App;

//=====05/01/26=========Room Pre========================
// import Login ,{Logout}from "./room_pre/Login.jsx";

// function App(){
//   return(
//     <div>
//       <h1> Welcome to the App Component</h1>
//       <Login/>
//       <Logout/>
//     </div>
//   )
// }
//  export default App;




 //==============Room========================
// import Ami from './ami.jsx';
// function App(){
//   return(
//     <div>
//       <Ami/>
//     </div>
//   )
// }
// export default App;



// =============08/01/26 Room Pre========================
// import { useState } from "react";
// import { User } from "./room_pre2/User";
// import  Admin  from "./room_pre2/User";


// function App() {
//   const [display, setDisplay] = useState(true);
//   const [count,setCount]=useState(0);

//   return (
//     <>
//       <h1>Toggle in React JS</h1>
//       <button onClick={()=>setCount(count+1)}>Count {count}</button>{
//         count==0?<h1>Condition 0</h1>
//         :count==1?<h1>Condition 1</h1>
//         :count==2?<h1>Condition 2</h1>
//         :count==3?<h1>Condition 3</h1>
//         :null
//       }

      
      

      

//       <button onClick={() => setDisplay(!display)}>Toggle</button>
//         {
//         display ? <User/> : null
//         }

// < div>
//         <h1>Props in React js</h1>
//         <User name="Raj Vardhan Singh" age={22} city="Lucknow"/>
//         <Admin/>
//       </div>
        
        

     
//     </>
//   );
// }

// export default App;

//======================12/01/2026============================



// import Calculator from "./CE12012026/Calculator";

// function App() {
//   return (<Calculator />)
  
// }

// export default App;





// ==================Contact List App 13/01/26=======================
// import Wrapper from "./room_pre3/Wrapper.jsx";
// import User from "./room_pre3/user.jsx";
// function App(){
//   return(
//     <div>
//       <h1>Prop in react js</h1>
//       <Wrapper color="orange">
//         <h1>Hellow every one</h1>
//       </Wrapper>
//       <Wrapper color={"blue"}>

      
//         <h1>Hii, Raj</h1>
//         <h2 style={{color:'red'}}>Please Login</h2>
//       </Wrapper>
//       <Wrapper color="purple"></Wrapper>
//       <User/>
//     </div>
//   )
// }
// export default App;
// ====================13/01/26=======room_pre4===================
// import User from "./room_pre4/user.jsx";
// import { useState } from "react";
// function App(){
//   const [val,setVal]=useState("Raj vardhan singh")
//   return(
//     <div>
//       <h1> Get input from here</h1>
//       <input type ="text" value={val} onChange={(event)=> setVal(event.target.value) }placeholder="Enter"/>
//       <h2>{val}</h2>
//       <User/>
//       <button onClick={()=> setVal("")}>Clear Value</button>
//     </div>
//   )
// }
// export default App;

// ====================14/01/26=======room_pre5===================
// import { useState } from "react";
// import User from "./room_pre3/user";

// function App() {
//   const [name, setName] = useState("");
//   const [password, setPassword] = useState("");
//   const [address, setAddress] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault(); // page reload stop
//     console.log(name, password, address);
//   };

//   const handleClear = () => {
//     setName("");
//     setPassword("");
//     setAddress("");
//   };

//   return (
//     <div>
//       <h1>Controlled Component</h1>

//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           placeholder="Enter your name"
//         />
//         <br /><br />

//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           placeholder="Enter password"
//         />
//         <br /><br />

//         <input
//           type="text"
//           value={address}
//           onChange={(e) => setAddress(e.target.value)}
//           placeholder="Enter your address"
//         />
//         <br /><br />

//         <button type="submit">Submit</button>
//         <button type="button" onClick={handleClear}>
//           Clear
//         </button>
//       </form>

//       <h2>Name: {name}</h2>
//       <h2>Password: {password}</h2>
//       <h2>Address: {address}</h2>

//       <User />
//     </div>
//   );
// }

// export default App;
//====================13/01/2026 [room_pre6]=========================
// import Skills from "./room_pre6/Skills"
// function App(){
//   return(
//     <div>
//       <h1> Hello from App component</h1>
//       <Skills/>
//     </div>
//   )
// }
// export default App;
// ===============14/01/26======Room_pre7=====================
// import { useState } from "react";
// import Radio from "./room_pre7/radio.jsx"
// function App(){
//   const[gender,setGender]=useState('female');
//   const[city,setCity]=useState('lucknow');
//   return(
//     <div>
//       <h1> Handale Radio Dropdown</h1>
//       <h4>Select gender</h4>
//       <input type="radio" onChange={(event)=>setGender(event.target.value)} name="geneder" value={"male"} checked={gender=="male"} id="male"/>
//       <label htmlFor="male">Male</label>
//       <input type="radio"onChange={(event)=>setGender(event.target.value)} name="geneder" value={"female"} checked={gender=='female'} id="female"/>
//       <label htmlFor="female">Female</label>
//       <h2>Select Gender:{gender}</h2>

//       <br/><br/><br/>
//       <h4>Select City</h4>
//       <select onChange={(event)=>setCity(event.target.value)} defaultValue={"lucknow"}>
//         <option value="noida">Noida</option>
//         <option value="delhi">Delhi</option>
//         <option value="lucknow">Lucknow</option>
//         <option value="mumbai">Mumbai</option>
//         <option value="bihar">Bihar</option>
//       </select>
//       <h2>Selected City:{city}</h2>
      
//     </div>
//   )
// }
// export default App;

// ==================14/01/26 Room_pre8=========================

// function App() {

//   const userData = [
//     { name: 'anil', age: 22, city: "Lucknow" },
//     { name: "sam", age: 25, city: "Delhi" },
//     { name: "rohit", age: 30, city: "Mumbai" },
//     { name: "rahul", age: 28, city: "Chennai" },
//     { name: "sachin", age: 35, city: "Kolkata" }
//   ];

//   return (
//     <div>
//       <h1>Loop in JSX with map function</h1> 

//       <table border="1" cellPadding={10} cellSpacing={0}>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Age</th>
//             <th>City</th>
//           </tr>
//         </thead>

//         <tbody>
//           {userData.map((user, index) => (
//             <tr key={index}>
//               <td>{user.name}</td>
//               <td>{user.age}</td>
//               <td>{user.city}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <h1>Dummy data</h1>

//       <table border="1" cellPadding={10} cellSpacing={0}>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Age</th>
//             <th>City</th>
//           </tr>
//         </thead>

//         <tbody>
//           <tr>
//             <td>anil</td>
//             <td>22</td>
//             <td>Lucknow</td>
//           </tr>
//           <tr>
//             <td>sam</td>
//             <td>25</td>
//             <td>Delhi</td>
//           </tr>
//           <tr>
//             <td>rohit</td>
//             <td>30</td>
//             <td>Mumbai</td>
//           </tr>
//           <tr>
//             <td>rahul</td>
//             <td>28</td>
//             <td>Chennai</td>
//           </tr>
//           <tr>
//             <td>sachin</td>
//             <td>35</td>
//             <td>Kolkata</td>
//           </tr>
//         </tbody>
//       </table>

//     </div>
//   );
// }

// export default App;
// ======================Resuse cpmponents in loop======room_pre9=====14/01/26====


// import User from "./room_pre8/user.jsx";
// function App() {

//   const userData = [
//     { name: 'anil', age: 22, city: "Lucknow" },
//     { name: "sam", age: 25, city: "Delhi" },
//     { name: "rohit", age: 30, city: "Mumbai" },
//     { name: "rahul", age: 28, city: "Chennai" },
//     { name: "sachin", age: 35, city: "Kolkata" }
//   ];

//   return (
//     <div>
//       <h1>Loop in JSX with map function</h1> 
//       {
//         userData.map((user,index)=>(
//          <div key ={index}><User user={user}/></div>
//       ))}

     
//     </div>
//   );
// }

// export default App;

// ================================19/01/26=========Stopwatch / Timer App=========================================================

// import React, { useState, useEffect } from "react";

// function App() {
//   const [time, setTime] = useState(0);
//   const [isRunning, setIsRunning] = useState(false);
//   const [laps, setLaps] = useState([]);

//   useEffect(() => {
//     let interval;

//     if (isRunning) {
//       interval = setInterval(() => {
//         setTime((prev) => prev + 10);
//       }, 10);
//     }

//     return () => clearInterval(interval);
//   }, [isRunning]);

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h1>⏱️ Stopwatch</h1>

//       <h2>
//         {("0" + Math.floor((time / 60000) % 60)).slice(-2)} :
//         {("0" + Math.floor((time / 1000) % 60)).slice(-2)} :
//         {("0" + ((time / 10) % 100)).slice(-2)}
//       </h2>

//       <button onClick={() => setIsRunning(true)}>Start</button>
//       <button onClick={() => setIsRunning(false)}>Stop</button>
//       <button onClick={() => {
//         setTime(0);
//         setLaps([]);
//         setIsRunning(false);
//       }}>
//         Reset
//       </button>
//       <button onClick={() => isRunning && setLaps([...laps, time])}>
//         Lap
//       </button>

//       <h3>Laps</h3>
//       <ul>
//         {laps.map((lap, index) => (
//           <li key={index}>
//             Lap {index + 1} :
//             {("0" + Math.floor((lap / 60000) % 60)).slice(-2)} :
//             {("0" + Math.floor((lap / 1000) % 60)).slice(-2)} :
//             {("0" + ((lap / 10) % 100)).slice(-2)}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;


//  ========================19/01/26=========Counter App=========================================================
// import { useState } from "react";

// function App() {
//   const totalTexts = 50;
//   const [current, setCurrent] = useState(1);

//   const handleNext = () => {
//     if (current < totalTexts) {
//       setCurrent(current + 1);
//     }
//   };

//   const handleBack = () => {
//     if (current > 1) {
//       setCurrent(current - 1);
//     }
//   };

//   const handleInputChange = (e) => {
//     const value = Number(e.target.value);
//     if (value >= 1 && value <= totalTexts) {
//       setCurrent(value);
//     }
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <ul>
//         {Array.from({ length: current }, (_, index) => (
//           <li key={index}>
//             <h1>Text {index + 1}</h1>
//           </li>
//         ))}
//       </ul>

//       <input
//         type="number"
//         value={current}
//         min="1"
//         max={totalTexts}
//         onChange={handleInputChange}
//       />

//       <br /><br />

//       <button onClick={handleBack}>Back</button>
//       <button onClick={handleNext} style={{ marginLeft: "10px" }}>
//         Next
//       </button>
//     </div>
//   );
// }

// export default App;

// ========================20/01/26=========Form Validation App=========================================================
// import User from "./room_pre8/user.jsx";
// function App() {

//   const userData = [
//     { name: 'anil', age: 22, city: "Lucknow" },
//     { name: "sam", age: 25, city: "Delhi" },
//     { name: "rohit", age: 30, city: "Mumbai" },
//     { name: "rahul", age: 28, city: "Chennai" },
//     { name: "sachin", age: 35, city: "Kolkata" }
//   ];

//   return (
//     <div>
//       <h1>Loop in JSX with map function</h1> 
//       {
//         userData.map((user,index)=>(
//          <div key ={index}><User user={user}/></div>
//       ))}

     
//     </div>
//   );
// }
// export default App;
// =======================20/01/26=========Clock=========================================================
// import Clock from "./room_clock/clock.jsx";
// import { useState } from "react";
// function App(){
//   const[time,setTime]=useState(0);
//   return(
//     <div>
//       <h1> Digital Clock in React JS</h1>
//       <Clock/>
//     </div>
//   )
// }
// export default App;

//   ==============================22/01/26==================================================================

// function App() {

//   const collageData = [
//     {
//       name: "ITC",
//       address: "Lucknow",
//       website: "www.itc.edu.in",
//       student: [
//         { name: "Anil", age: 22 },
//         { name: "Rohit", age: 24 },
//         { name: "Suman", age: 23 },
//       ],
//     },
//     {
//       name: "IIT",
//       address: "Delhi",
//       website: "www.iit.edu.in",
//       student: [
//         { name: "Raj", age: 25 },
//         { name: "Simran", age: 22 },
//         { name: "Amit", age: 24 },
//       ],
//     },
//     {
//       name: "NIT",
//       address: "Noida",
//       website: "www.nit.edu.in",
//       student: [
//         { name: "Vikram", age: 23 },
//         { name: "Neha", age: 21 },
//         { name: "Karan", age: 26 },
//       ],
//     }
//   ];

//   return (
//     <div>
//       <h1>Nested looping with component</h1>

//       {collageData.map((collage) => (
//         <Collage key={collage.name} collage={collage} />
//       ))}

//     </div>
//   );
// }

// export default App;
// =============================24/01/26==================================================================
// import Hook1 from "./CEC23012026/Hook";
// import Hook2 from "./CEC23012026/Hook2";
// import  Hook3 from "./CEC23012026/Hook3";
// function App() {
//   return (
//     <div>
//       <h1> Hello from App component</h1>
//       {/* <Hook1/> */}
//       {/* <Hook2/> */}
//       <Hook3/>
//     </div>
//   )
// }
// export default App; 

// =============================28/01/26==================================================================
import { useState } from "react";
import Clock from "./room11_pre/Clock.jsx";
function App(){
  const[color, setColor]=useState("red");

  return(
    <div>
      <h1>
        <h1>Digital Clock in React js React Js</h1>
        <select onChange={(e) =>setColor(e.target.value)} >
          <option value={"red"}>Red</option>
          <option value={"green"}>Green</option>
          <option value={"blue"}>Blue</option>
          <option value={"yellow"}>Yellow</option>
        </select>
        <Clock color={color}/>
      </h1>
    </div>
  )
}
export default App;