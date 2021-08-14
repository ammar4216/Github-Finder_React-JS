import React from "react";
import RepoItems from "./RepoItems";

export default function Repos(props) {
  return props.repos.map((repo) => {
    return <RepoItems repos={repo} />;
  });
}
