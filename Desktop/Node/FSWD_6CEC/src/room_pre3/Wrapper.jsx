function Wrapper({ children, color }) {
    return (
      <div
        style={{
          color: color || "pink",
          border: "5px solid green",
          width: "300px",
          margin: "10px"
        }}
      >
        {children}
      </div>
    );
  }
  
  export default Wrapper;
  