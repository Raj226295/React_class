const User = ({user}) => {
    return (
        <div style={{border:'2px solid black', width:'300px', margin:'10px', padding:'10px'}}>
            <h1>Name:<span style={{color:'green'}}>{user.name}</span></h1>
            <h2>Age:<span style={{color:'blue'}}>{user.age}</span></h2>
            <h3>City:<span style={{color:'red'}}>{user.city}</span></h3>
        </div>
    )
}
export default User;