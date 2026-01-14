import {Link, NavLink, Outlet } from "react-router-dom";

export default function Collage() {
  return (
    <div className="collage" style={{ textAlign: "center" }}>
      <h1>Collage Page</h1>
      <h3><Link to="/" >Go Back To Home</Link></h3>
      <NavLink className="link" to="">Student</NavLink>
      <NavLink className="link" to="department">Departement</NavLink>
      <NavLink className="link" to="details">Collage Details</NavLink>
      <Outlet />
    </div>
  );
}
