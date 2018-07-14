import React, { Component } from "react";
import "./style.css";

class TaskAddBar extends Component {
  constructor() {
    super();
    this.state = {
      listShowButClass: "list-show-but rot90",
      inputVal: ""
    };
  }

  listShowBut = () => {
    this.props.showTodosChange();
    if (this.state.listShowButClass === "list-show-but")
      this.setState({ listShowButClass: "list-show-but rot90" });
    else this.setState({ listShowButClass: "list-show-but" });
  };

  handlePress = e => {
    if (e.key === "Enter") this.addTask();
  };

  addTask = () => {
    this.props.addToTodos(this.state.inputVal);
    this.setState({ inputVal: "" });
  };

  handleInput = e => this.setState({ inputVal: e.target.value });

  render() {
    return (
      <div className="taskAddBarContainer">
        <button
          className={this.state.listShowButClass}
          onClick={this.listShowBut}
        />
        <input
          onKeyPress={this.handlePress}
          className="task-input"
          placeholder="Something ToDo..."
          value={this.state.inputVal}
          onChange={this.handleInput}
        />
        <button className="addButton" onClick={this.addTask}>
          Add
        </button>
      </div>
    );
  }
}

export default TaskAddBar;
