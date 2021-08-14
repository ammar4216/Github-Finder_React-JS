import React from "react";
import "./RepoItems.css";

export default function RepoItems(props) {
  const { html_url, name } = props.repos;
  return (
    <div className="repo_item">
      <a style={repoStyle} href={html_url} target="_blank" rel="noreferrer">
        {name}
      </a>
    </div>
  );
}

const repoStyle = {
  textDecoration: "none",
  backgroundColor: "#333",
  color: "#eee",
  width: "100%",
  padding: "1rem 1.5rem",
  lineHeight: "4",
  display: "block",
  margin: "1rem 0",
  fontSize: "1.2rem",
  fontWeight: "bold",
  borderRadius: "10px",
  textTransform: "upperCase",
  letterSpacing: "3px",
};
