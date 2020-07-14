import React from "react";

const Button = (props) => {
  const styles = {
    Button: {
      backgroundColor: "transparent",
      border: "none",
      color: "white",
      outline: "none",
      cursor: "pointer",
      font: "inherit",
      padding: "10px",
      margin: "10px",
      fontWeight: "bold",
    },

    Success: {
      color: "#5c9210",
    },

    Danger: {
      color: "#944317",
    },
  };
  return (
    <button className={[styles.Button, styles[props.btnType]].join(" ")} onClick={props.clicked}>
      {props.children}
    </button>
  );
};

export default Button;
