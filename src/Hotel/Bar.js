import React, { Component } from "react";
import { search } from "../redux/actions";
import "../Hotel/scss/bar.scss";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      key: this.props.search_key,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.dispatch(search(this.state.key));
  }

  render() {
    return (
      <form className="search-bar my-3" onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="key"
          className="search-bar__input"
          autoComplete="off"
          placeholder="Въвдете хотел или къща за гости..."
          onChange={this.handleChange}
          value={this.state.key}
        />
        <button type="submit" className="search-bar__btn">
          Търси
        </button>
      </form>
    );
  }
}

export default SearchBar;
