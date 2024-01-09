import React from "react";

const Header = () => {
  const changeThemeHandler = () => {
    document.body.classList.contains("dark")
      ? document.body.classList.remove("dark")
      : document.body.classList.add("dark");
  };
  return (
    <header>
      <h1 className="logo-text">Where in the world?</h1>
      <button
        type="button"
        className="theme-button"
        onClick={changeThemeHandler}
      >
        Dark Mode
      </button>
    </header>
  );
};

export default Header;
