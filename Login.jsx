
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsLoggedIn }) => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find((u) =>
        u.username === formData.username && u.password === formData.password
    );

    if (user) {
      localStorage.setItem("currentUser", formData.username);
      setIsLoggedIn(true);
      navigate("/");
      // alert('Login successful');
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <div>
      <h2 style={{textAlign:'center'}}>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
          style={{marginBottom:'20px',marginLeft:'20px'}}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
