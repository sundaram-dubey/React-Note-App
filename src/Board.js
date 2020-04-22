import React from "react";
import Comment from "./Comment";
class Board extends React.Component {
  constructor() {
    super();
    this.state = {
      comments: [
        "i like bacon",
        "want to get ice cream",
        "that data is enough",
        "good stuff !",
        "agree tars 90 %",
        "hope is a good thing"
      ]
    };

    this.removeComment = this.removeComment.bind(this);
    this.eachComment = this.eachComment.bind(this);
    this.updateComment = this.updateComment.bind(this);
    this.add = this.add.bind(this);
  }
  add(text) {
    var arr = this.state.comments;
    arr.push(text);
    this.setState({ comments: arr });
  }

  removeComment(i) {
    var arr = this.state.comments;
    arr.splice(i, 1);
    this.setState({ comments: arr });
  }
  updateComment(newtext, i) {
    var arr = this.state.comments;
    arr[i] = newtext;
    this.setState({ comments: arr });
  }

  eachComment(text, i) {
    return (
      <Comment
        key={i}
        index={i}
        updatecommenttext={this.updateComment}
        deletefromboard={this.removeComment}
      >
        {text}
      </Comment>
    );
  }

  render() {
    return (
      <div>
        <button
          className="button-info"
          onClick={this.add.bind(null, "Edit me to add yours !!hoss")}
        >
          Add New Note +
        </button>
        <div>{this.state.comments.map(this.eachComment)}</div>;
      </div>
    );
  }
}
export default Board;
