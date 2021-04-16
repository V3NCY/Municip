import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import CommentList from "../components/CommentList";
import { initComments, deleteComment } from "../reducers/comments";

const COMMENTS = "__comment-comments__";

class CommentListContainer extends Component {
  static propTypes = {
    comments: PropTypes.array,
    initComments: PropTypes.func,
    onDeleteComment: PropTypes.func,
  };

  constructor() {
    super();
    this.handleDeleteComment = this.handleDeleteComment.bind(this);
  }

  componentWillMount() {
    this._loadComments();
  }

  _loadComments() {
    let comments = localStorage.getItem(COMMENTS);
    comments = JSON.parse(comments) || [];

    this.props.initComments(comments);
  }

  handleDeleteComment(index) {
    const { comments } = this.props;
    const newComments = [
      ...comments.slice(0, index),
      ...comments.slice(index + 1),
    ];

    if (this.props.onDeleteComment) {
      this.props.onDeleteComment(index);
    }

    localStorage.setItem(COMMENTS, JSON.stringify(newComments));
  }

  render() {
    return (
      <CommentList
        comments={this.props.comments}
        onDeleteComment={this.handleDeleteComment}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    comments: state.comments,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    initComments: (comments) => {
      dispatch(initComments(comments));
    },
    onDeleteComment: (index) => {
      dispatch(deleteComment(index));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentListContainer);
