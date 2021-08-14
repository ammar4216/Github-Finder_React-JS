import React, { Component } from "react";
import { Link } from "react-router-dom";
import Spinner from "../Layout/Spinner";
import Repos from "./Repos";
import "./User.css";
class User extends Component {
  componentDidMount() {
    this.props.onGetUser(this.props.match.params.login);
    this.props.onGetUserRepos(this.props.match.params.login);
  }

  render() {
    const {
      login,
      avatar_url,
      html_url,
      name,
      company,
      location,
      hireable,
      email,
      bio,
      public_repos,
      public_gists,
      followers,
      following,
    } = this.props.user;
    const { loading } = this.props;

    if (loading) {
      return <Spinner />;
    } else {
      return (
        <div className="user">
          <div className="container">
            <div className="back-btn">
              <Link to="/">
                <i class="fas fa-long-arrow-alt-left"></i>Back to the User
              </Link>
            </div>
            <div className="profile-detail">
              <div className="profile-left">
                <img src={avatar_url} alt="Profile" />
                <h2>{login}</h2>
                {hireable !== true ? (
                  <p>
                    Hireable: <i class="fas fa-window-close"></i>
                  </p>
                ) : (
                  <p>
                    Hireable: <i class="fas fa-check-square"></i>
                  </p>
                )}
                {location !== null && <p>Location: {location}</p>}
              </div>

              <div className="profile-right">
                {bio !== null && (
                  <div className="bio">
                    <h2>Bio</h2>
                    <p>{bio}</p>
                  </div>
                )}
                {email !== null && <p>{email}</p>}
                <div className="git-button">
                  <a href={html_url}>Github Profile</a>
                </div>
                <br />
                {name !== null && <h4>Username: {name}</h4>}
                {company !== null && <h4>Company: {company}</h4>}
              </div>
            </div>
            <div className="following-buttons">
              <div className="repo">Public Repos: {public_repos}</div>
              <div className="gists">Public Gists: {public_gists}</div>
              <div className="followers">Followers: {followers}</div>
              <div className="following">Following: {following}</div>
            </div>
          </div>

          <br />

          <div className="container">
            <div className="repos">
              <h1>Top Repositories</h1>
              <Repos repos={this.props.repos} />
            </div>
          </div>
        </div>
      );
    }
  }
}

export default User;
