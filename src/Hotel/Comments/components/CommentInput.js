import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button } from "reactstrap";

class CommentInput extends Component {
  static propTypes = {
    username: PropTypes.string.isRequired,
    onAddComment: PropTypes.func.isRequired,
    onUsernameBlur: PropTypes.func,
    textareaRef: PropTypes.object,
  };

  constructor(props) {
    super(props);
    this.state = {
      username: props.username,
      comment: "",
    };

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handleUsernameBlur = this.handleUsernameBlur.bind(this);
    this.handleCommentChange = this.handleCommentChange.bind(this);
    this.handleComment = this.handleComment.bind(this);
  }

  componentDidMount() {
    if (this.state.username) this.props.textareaRef.current.focus(); // React.js 16.3+ support ref forwarding
  }

  handleUsernameChange(evt) {
    this.setState({
      username: evt.target.value,
    });
  }

  handleUsernameBlur(evt) {
    if (this.props.onUsernameBlur) {
      this.props.onUsernameBlur(evt.target.value);
    }
  }

  handleCommentChange(evt) {
    this.setState({
      comment: evt.target.value,
    });
  }

  handleComment() {
    const { username, comment } = this.state;
    if (this.props.onAddComment) {
      this.props.onAddComment({
        username,
        comment,
        createTime: +new Date(),
      });
    }

    this.setState({ comment: "" });
  }

  render() {
    const { username, comment } = this.state;

    return (
      <div className="comment-input-wrap">
        <div className="username">
          <label>Име или прякор：</label>
          <input
            type="text"
            className="form-control"
            value={username}
            onChange={this.handleUsernameChange}
            onBlur={this.handleUsernameBlur}
          />
        </div>
        <div className="form-group">
          <label>Вашият коментар：</label>
          <textarea
            className="form-control"
            ref={this.props.textareaRef}
            value={comment}
            onChange={this.handleCommentChange}
          />
        </div>
        <div className="release clearfix">
          <Button
            color="primary"
            className="fr border"
            onClick={this.handleComment}
          >
            Изпрати
          </Button>
        </div>
      </div>
    );
  }
}

export default CommentInput;
