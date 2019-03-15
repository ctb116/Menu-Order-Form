import React from "react";

const Header = () => {
  return (
    <div className="imageCenter">
      <img
        className="frontLogo"
        src={require("../assets/images/HeaderLogo.jpg")}
        alt="header logo"
      />
    </div>
  );
};

export default Header;
