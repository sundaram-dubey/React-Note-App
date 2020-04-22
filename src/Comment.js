import React from "react";
import { arrayExpression } from "@babel/types";
import Board from "./Board";

class Comment extends React.Component {
  constructor() {
    super();
    this.state = {
      editing: false
    };
    this.edit = this.edit.bind(this);
    this.save = this.save.bind(this);
    this.remove = this.remove.bind(this);
  }
  edit() {
    this.setState({ editing: true });
  }
  remove() {
    this.props.deletefromboard(this.props.index);
  }
  save() {
    this.props.updatecommenttext(this.refs.newText.value, this.props.index);
    this.setState({ editing: false });
  }
  renderNormal() {
    return (
      <div className="commentcontainer">
        <div className="commenttext">{this.props.children}</div>
        <button className="button-primary" onClick={this.edit}>
          Edit
        </button>

        <button className="button-danger" onClick={this.remove}>
          Remove
        </button>
      </div>
    );
  }

  renderForm() {
    return (
      <div className="commentcontainer">
        <textarea ref="newText" defaultValue={this.props.children} />
        <button className="button-success" onClick={this.save}>
          Save
        </button>
      </div>
    );
  }
  render() {
    if (this.state.editing) {
      return this.renderForm();
    } else {
      return this.renderNormal();
    }
  }
}

export default Comment;
