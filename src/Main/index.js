import React, { Component } from "react";
import "./style.css";

import TaskAddBar from "../TaskAddBar";
import TasksList from "../TasksList";
import FilterTasks from "../FilterTasks";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      todos: [{ content: "Task Sample", done: false, id: 1 }],
      filteredTodos: [{ content: "Task Sample", done: false, id: 1 }],
      showTodos: true,
      filterByDone: "All"
    };
  }

  idGen = () => {
    let uniqueId = 1;
    this.state.todos.forEach(v => {
      if (v.id >= uniqueId) uniqueId = v.id + 1;
    });
    return uniqueId;
  };

  addToTodos = content => {
    content = content.trim();
    if (!content) return;
    this.state.todos.unshift({
      content: content,
      done: false,
      id: this.idGen()
    });
    this.filterTodos(this.state.filterByDone);
  };

  statChange = id => {
    const newTodos = this.state.todos.map((v, i) => {
      if (v.id === id) v.done = !v.done;
      return v;
    });
    this.filterTodos(this.state.filterByDone, newTodos);
  };

  deleteTodo = id => {
    const newTodos = this.state.todos.filter(v => v.id !== id);
    this.filterTodos(this.state.filterByDone, newTodos);
  };

  filterTodos = (by, todos = this.state.todos) => {
    let filteredTodos = todos;
    if (by !== "All") {
      filteredTodos = todos.filter(v => v.done === by);
    }
    this.setState({ todos, filteredTodos, filterByDone: by });
  };

  showTodosChange = () => this.setState({ showTodos: !this.state.showTodos });

  taskContentModify = (id, content) => {
    content = content.trim();
    if (!content) {
      this.deleteTodo(id);
      return;
    }
    const { todos } = this.state;
    todos.forEach((v, i) => {
      if (v.id === id) todos[i].content = content;
    });
    this.setState({ todos });
  };

  render() {
    return (
      <div className="card">
        <h1 className="title">ToDos</h1>
        <TaskAddBar
          showTodosChange={this.showTodosChange}
          addToTodos={this.addToTodos}
        />
        <TasksList
          deleteTodo={this.deleteTodo}
          showTodos={this.state.showTodos}
          statChange={this.statChange}
          filteredTodos={this.state.filteredTodos}
          taskContentModify={this.taskContentModify}
        />
        <FilterTasks filterByDoneChange={this.filterTodos} />
      </div>
    );
  }
}

export default Main;
