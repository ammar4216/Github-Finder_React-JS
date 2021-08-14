import axios from "axios";
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Users from "./Components/Users/Users";
import User from "./Components/Users/User";
import Alert from "./Components/Layout/Alert";
import Navbar from "./Components/Layout/Navbar";
import Search from "./Components/Users/Search";

import About from "./Components/Pages/About";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      users: [],
      user: {},
      repos: [],
      loading: false,
      alert: null,
    };
  }

  // async componentDidMount() {
  //   this.setState({ loading: true });
  //   const url = "https://api.github.com/users";
  //   const res = await axios.get(url);
  //   this.setState({ user: res.data, loading: false });
  // }

  onSearchTextHandler = async (text) => {
    this.setState({ loading: true });
    const url = `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_FINDER_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_FINDER_CLIENT_SECRET}`;
    const res = await axios.get(url);
    this.setState({ users: res.data.items, loading: false });
  };

  onClearUserHandler = () => {
    this.setState({ users: [] });
  };

  alertHandler = (msg, style) => {
    this.setState({
      alert: { msg, style },
    });
    // setTimeout(() => {
    //   this.setState({ alert: null });
    // }, 4000);
  };

  closeHandler = () => {
    this.setState({ alert: null });
  };

  getUser = async (username) => {
    this.setState({ loading: true });
    const url = `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_FINDER_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_FINDER_CLIENT_SECRET}`;
    const res = await axios.get(url);
    this.setState({ user: res.data, loading: false });
  };

  getUserRepos = async (username) => {
    this.setState({ loading: true });
    const url = `https://api.github.com/users/${username}/repos?per_page=2?client_id=${process.env.REACT_APP_GITHUB_FINDER_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_FINDER_CLIENT_SECRET}`;
    const res = await axios.get(url);
    this.setState({ repos: res.data, loading: false });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Alert onAlertUser={this.state.alert} onClose={this.closeHandler} />
          </div>
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <div className="container">
                  <Search
                    onSearchText={this.onSearchTextHandler}
                    onClearUser={this.onClearUserHandler}
                    showUsers={this.state.users.length > 0 ? true : false}
                    onAlertUser={this.alertHandler}
                  />
                  <Users
                    users={this.state.users}
                    loading={this.state.loading}
                  />
                </div>
              )}
            />
            <Route exact path="/about" component={About} />
            <Route
              exact
              path="/user/:login"
              render={(props) => (
                <User
                  {...props}
                  onGetUser={this.getUser}
                  user={this.state.user}
                  onGetUserRepos={this.getUserRepos}
                  repos={this.state.repos}
                  loading={this.state.loading}
                />
              )}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
