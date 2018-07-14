import React, { Component } from "react";
import "./style.css";

import Switch from "@material-ui/core/Switch";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

class TodoCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskContent: this.props.task.content
    };
  }

  blurHandler = e =>
    this.props.taskContentModify(this.props.task.id, this.state.taskContent);

  statChangeCall = () => this.props.statChange(this.props.task.id);

  deleteTodoCall = () => this.props.deleteTodo(this.props.task.id);

  taskContentChange = e => this.setState({ taskContent: e.target.value });

  render() {
    return (
      <div className="taskCard">
        <Switch
          checked={this.props.task.done}
          color="default"
          onChange={this.statChangeCall}
        />

        <input
          onChange={this.taskContentChange}
          onBlur={this.blurHandler}
          value={this.state.taskContent}
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
