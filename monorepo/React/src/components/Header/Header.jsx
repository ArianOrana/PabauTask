import React from "react";
import "./style.scss";

const Header = ({ title, currentStep, currentPage }) => {
  return (
    <div className="header">
      <h1>{title}</h1>
      <p>
        Step {currentStep}
        {currentPage}
      </p>
    </div>
  );
};

export default Header;
