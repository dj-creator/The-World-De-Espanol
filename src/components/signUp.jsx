import React, { useState } from "react";
import "../styles/signUp.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"

const SignUp = ({setUser}) => {
  // Holds the user inputed info
  const [userForm, setUserForm] = useState({
    pfp: "./daddy.jpg",
    username: "",
    password: "",
    email: "",
    dob:"",
    country:"",
  });

  let navigate = useNavigate()
  // update the state
  const handleChange = (event) => {
    
    setUserForm((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault()
    await axios.post("http://localhost:3000/user/create-user", userForm).then(res => {
      setUser(res.data.user);
      navigate("/profile")
    })

  }

  return (
    <div className="daddy">
      <form onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={handleChange}
          required
        />
            <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={handleChange}
          required
        />

        <label htmlFor="dob">Date Of Birth:</label>
        <input
          type="date"
          id="dob"
          name="dob"
          onChange={handleChange}
          required
        />

    <label htmlFor="text">Country Of Orgin:</label>
        <input
          type="text"
          id="country"
          name="country"
          onChange={handleChange}
          required
        />
        <button type="submit">Sign Up</button>
        <p>
          <Link className="link" to="/login">Already Have An Account?</Link>
        </p> 
      </form>
    </div>
  );
};

export default SignUp;
