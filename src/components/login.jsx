import React, { useState } from "react";
import "../styles/signUp.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios"

const Login = ({setUser}) => {
  const [userForm, setUserForm] = useState({
    username: "",
    password: "",
  });

  let navigate = useNavigate();
  const handleChange = (event) => {
    setUserForm((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios
      .post("http://localhost:3000/user/login", userForm)
      .then((res) => {
        setUser(res.data.user);
        navigate("/profile");
      });
  };
  return (
    <div className="daddy">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
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

        <button type="submit">Login</button>
        <p>
          <Link className="link" to="/signUp">Dont Have An Account ?</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
