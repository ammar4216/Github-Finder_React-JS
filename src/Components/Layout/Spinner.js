import React from "react";
import spinner from "./spinner.gif";

function Spinner() {
  return (
    <div>
      <img
        src={spinner}
        alt="Loading..."
        style={{ display: "block", width: "150px", margin: "15% auto" }}
      />
    </div>
  );
}

export default Spinner;
