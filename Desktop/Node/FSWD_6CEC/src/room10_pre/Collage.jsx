function Collage({ collage }) {
    return (
      <div style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
        <h3>{collage.name}</h3>
        <p>{collage.address}</p>
        <p>{collage.website}</p>
  
        <h4>Students:</h4>
        <ul>
          {collage.student.map((stu, index) => (
            <li key={index}>
              {stu.name} - {stu.age}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default Collage;
  