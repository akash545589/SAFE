import React from "react";
import Logo from "../../assets/images/image-safe-logo.png";
import Mountain from "../../assets/images/image-mountain.png";
import "./Sidebar.css";
const Sidebar = () => {
  return (
    <div className="onboarding-left">
      <div className="inner-content">
        <div className="logo-image">
          <img src={Logo} alt="SAFE" />
        </div>

        <h6>Welcome to SAFE!</h6>
        <p>We’re really glad you’ve joined us.</p>
        <p>
          SAFE is here to help you clean, understand, and manage your data
          better — with less hassle and more clarity.
        </p>
        <p>
          Just one step to go — import your data to unlock full access to SAFE.
        </p>
        <p>Let’s get started!</p>
      </div>
      <img src={Mountain} alt="Mountain" className="mountain-image" />
    </div>
  );
};

export default Sidebar;
