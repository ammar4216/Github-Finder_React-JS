import React from "react";
import "./Alert.css";

function Alert(props) {
  return (
    props.onAlertUser !== null && (
      <div className="alert" onClick={props.onClose}>
        <i className="fas fa-info-circle"></i>
        <p>{props.onAlertUser.msg}</p>
        <i className="far fa-window-close" onClick={props.onClose}></i>
      </div>
    )
  );
}

export default Alert;
