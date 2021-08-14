import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Search.css";

class Search extends Component {
  state = {
    text: "",
  };

  textHandler = (e) => {
    this.setState({ text: e.target.value });
  };

  onSubmitTextHandler = (e) => {
    e.preventDefault();
    if (this.state.text === "") {
      this.props.onAlertUser("Please Enter a Username", "light");
    } else {
      this.props.onSearchText(this.state.text);
      this.setState({ text: "" });
    }
  };

  render() {
    return (
      <div className="search_user">
        <form className="form" onSubmit={this.onSubmitTextHandler}>
          <input
            type="text"
            name="text"
            placeholder="search users.."
            value={this.state.text}
            onChange={this.textHandler}
          />
          <input type="submit" value="Search" />
        </form>
        {this.props.showUsers && (
          <button onClick={this.props.onClearUser}>Clear Search</button>
        )}
      </div>
    );
  }
}

Search.propTypes = {
  onSearchText: PropTypes.func.isRequired,
  showUsers: PropTypes.bool.isRequired,
  onClearUser: PropTypes.func.isRequired,
};

export default Search;
