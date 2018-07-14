import React, { Component } from "react";
import "./style.css";

import Switch from "@material-ui/core/Switch";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

import ContentEditable from "react-contenteditable";

class TodoCard extends Component {
  constructor() {
    super();
    this.taskRef = React.createRef();
  }

  blurHandler = () =>
    this.props.taskContentModify(
      this.props.task.id,
      this.taskRef.current.lastHtml
    );

  statChangeCall = () => this.props.statChange(this.props.task.id);

  deleteTodoCall = () => this.props.deleteTodo(this.props.task.id);

  render() {
    return (
      <div className="taskCard">
        <Switch
          checked={this.props.task.done}
          color="default"
          onChange={this.statChangeCall}
        />

        <ContentEditable
          ref={this.taskRef}
          onBlur={this.blurHandler}
          html={this.props.task.content}
          spellCheck="false"
          className={`taskContent ${this.props.task.done ? "crossline" : ""}`}
        />

        <IconButton aria-label="Delete" onClick={this.deleteTodoCall}>
          <DeleteIcon />
        </IconButton>
      </div>
    );
  }
}

export default TodoCard;
