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

    const handleCounter = () => {
        console.log("handleCounter called");
    };
    const handleData = () => {
        console.log("handleData called");
    };

    useEffect(() => {
        handleCounter();
    }, [counter, data]);

    handleData();
    return (
        <div>
            <h1>Counter component {counter}</h1>
        </div>
    );
};

export default Counter;


