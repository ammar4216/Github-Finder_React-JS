import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="about">
      <header>
        <div className="container" style={{ textAlign: "center" }}>
          <h1>About this Github Finder App</h1>
        </div>
      </header>
      <br />
      <section>
        <div className="container">
          <p>
            This is a simple Application that i have created in React JS for
            practice purpose. The purpose for building this App to ease the
            process of finding Github users by their usernames. In this, you can
            search any user in Github, see his/her repositries and many more
            things.
          </p>
          <br />
          <p>
            In this project, i have covered many topics related to React JS such
            as:
            <ul>
              <li>React Hooks</li>
              <li>React Router</li>
              <li>Type Scrpting</li>
              <li>Asynchronous Programming</li>
              <li>Fetch Data through API</li>
            </ul>
          </p>
        </div>
      </section>
    </div>
  );
}
