import React from "react";
import Img from '../assets/icons/404.svg'

const Error = () => {
  return (
    <div className="error-container">
      <img src={Img} alt="404" />
      <h3>404 Page Not Found!</h3>
    </div>
  );
};

export default Error;
