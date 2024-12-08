import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="headerContent">
        <h2>Order your favorite food here</h2>
        <p className="desc">
          Choose from a diverse menu featuring a delectable array of dishes
          crafted with the finest ingredients and culinary expertise. Our
          mission is to satisfy your cravings and elevate your dining
          experience, one delicious meal at a time.
        </p>
        <button>View menu</button>
      </div>
    </div>
  );
};

export default Header;
