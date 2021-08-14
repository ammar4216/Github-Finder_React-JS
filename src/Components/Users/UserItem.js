import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./UserItem.css";
class UserItem extends Component {
  render() {
    const { avatar_url, login } = this.props.users;
    return (
      <div className="user_item">
        <img src={avatar_url} alt="Profile" />
        <h2>{login}</h2>
        <Link to={`/user/${login}`}>Profile</Link>
      </div>
    );
  }
}

export default UserItem;
