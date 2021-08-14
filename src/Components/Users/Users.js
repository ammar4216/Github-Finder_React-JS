import React, { Component } from "react";
import Spinner from "../Layout/Spinner";
import UserItem from "./UserItem";

class Users extends Component {
  render() {
    if (this.props.loading) {
      return <Spinner />;
    } else {
      return (
        <div style={userStyle}>
          {this.props.users.map((user) => {
            return <UserItem key={user.id} users={user} />;
          })}
        </div>
      );
    }
  }
}

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gridGap: "0.2rem",
};

export default Users;
