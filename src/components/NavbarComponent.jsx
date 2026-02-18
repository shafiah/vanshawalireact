import React, { useEffect, useState } from "react";
import "../styles/Navbar.css";
import { useNavigate } from "react-router-dom";

const NavbarComponent = () => {

  const navigator = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUsername = localStorage.getItem("username");

    if (token && storedUsername) {
      setIsLoggedIn(true);
      setUsername(storedUsername);
    }
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    setUsername("");
    navigator("/loginuser");

    // OPTIONAL: full reload
    window.location.reload();
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <span className="logo-icon">🌳</span>
        FamilyTree
      </div>

      <ul className="nav-links">
        <li>Family Tree</li>
        <li>Search</li>
        <li>Memories</li>
        <li>Activities</li>
      </ul>

      <div className="nav-actions">
        {!isLoggedIn ? (
          <>
            <button
              className="btn-outline"
              onClick={() => navigator("/loginuser")}
            >
              Sign In
            </button>

            <button
              className="btn-primary"
              onClick={() => navigator("/signupuser")}
            >
              Sign Up
            </button>
          </>
        ) : (
          <>
            <span className="welcome-text">
              👋 Welcome, <strong>{username}</strong>
            </span>

            <button className="btn-primary" onClick={handleLogout}>
              Logout
            </button>
            <button
              className="btn-primary"
              onClick={() => navigator("/signupuser")}
            >
              Sign Up
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavbarComponent;