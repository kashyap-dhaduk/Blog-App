import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    !!localStorage.getItem("currentUser")
  );
  const [currentUser, setCurrentUser] = useState("");

  useEffect(() => {
    const user = localStorage.getItem("currentUser");
    if (user) {
      setCurrentUser(user);
    }
  }, [isLoggedIn]);

  const logoutUser = () => {
    localStorage.removeItem("currentUser");
    setIsLoggedIn(false);
  };
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <Link to='/' class="navbar-brand">Navbar</Link>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link to='/' class="nav-link active" aria-current="page">Home</Link>
            </li>

            {
              isLoggedIn ? (
                <>
                  <li class="nav-item">
                    <Link to="/add" className="nav-link" >Add Blog</Link>
                  </li>
                  <li class="nav-item">
                    <button className='nav-link' onClick={logoutUser}>Logout</button>
                  </li>
                  <li class="nav-item">
                    <p className="nav-link">{currentUser}</p>
                  </li>
                </>

              ) : (

                <>
                  <li class="nav-item">
                    <Link to='/Login' class="nav-link">Login</Link>
                  </li>
                  <li class="nav-item">
                    <Link to='/Signup' class="nav-link">SignUp</Link>
                  </li>
                </>
              )
            }

            <li class="nav-item">
              <Link to='/About' class="nav-link">About</Link>
            </li>

          </ul>

        </div>
      </div>
    </nav>
  )
}

export default Navbar