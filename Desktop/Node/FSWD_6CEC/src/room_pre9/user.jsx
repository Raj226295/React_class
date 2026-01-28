const User=({data})=>{
    return(
        <div style={{
            border:"1px solid green",
            padding:"10px",
            margin:"10px",
            width:"250px",
            borderRadius:"10px"
        }}>
            <h2>Name:<span style={{color:"blue"}}>{data.name}</span></h2>
            <h3>Age:<span style={{color:"red"}}>{data.age}</span></h3>
            <h3>City:<span style={{color:"purple"}}>{data.city}</span></h3>
        </div>
    )
}
export default User;