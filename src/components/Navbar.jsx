import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/navbar.css";
import { Link } from "react-router-dom";

const Navbar = ({ user }) => {
  const Navigate = useNavigate()
  return (
    <ul>
      <h1>The World De Espanol</h1>
      <div className="fatherNav">
          {/* <button className="night">
            darkmode
          </button> */}
        <li className="hover-underline-animation">
          <Link to="/">Home</Link>
        </li>
        { !user && <li className="hover-underline-animation">
          < Link to="/signUp">Signup/Login</Link>
        </li>}
        {user && <li className="hover-underline-animation">
          <Link to="/profile">My Profile</Link>
        </li>}
        {user && <li className="hover-underline-animation">
          <Link to="/create"> Create Blog +</Link>
        </li>}
        {user && <li className="hover-underline-animation">
          <Link onClick={()=> {
            localStorage.removeItem("user")
            window.location.reload()
            return Navigate('/')
            }}> Logout </Link>
        </li>}
      </div>
    </ul>
  );
};

export default Navbar;
