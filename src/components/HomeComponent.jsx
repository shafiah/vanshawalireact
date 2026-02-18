import React from "react";
import "../styles/Home.css";

const HomeComponent = () => {
    

  return (
    <div className="home-container">
      <div className="home-content">
        <h1>
          Build a <br /> family tree
        </h1>

        <p>
          Curious about your heritage? Jumpstart your ancestry search
          for FREE in the worldwide community family tree.
          Connect now—we may already have details about your family.
        </p>

        <div className="auth-buttons">
          <button className="social-btn google">Google</button>
          <button className="social-btn facebook">Facebook</button>
          <button className="social-btn apple">Apple</button>
        </div>
      </div>

      <div className="home-image">
        <img
          src="https://images.unsplash.com/photo-1609220136736-443140cffec6"
          alt="family"
        />
      </div>
    </div>
  )
}

export default HomeComponent
