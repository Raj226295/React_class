// function Counter ({ counter ,data}){
//     const getCounter = () =>{
//         console.log("call only");

//     }
//     getCounter()

//     return (
//         <div>
//             <h1>{counter}</h1>
//             <h1>{data}</h1>
//         </div>
//     )

// }
// export default Counter



import { useEffect } from "react";

const Counter = ({ counter, data }) => {


    useEffect(() => {
        console.log("mounting phase only");
    }, [])

    useEffect(() => {
        console.log("update phase only");
    }, [counter])

    return (
        <div>
            <h1>Counter value{counter}</h1>
            <h1>Data value{data}</h1>
        </div>
    )

}
export default Counter
