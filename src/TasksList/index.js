import React, { Component } from 'react';
import TodoCard from '../TodoCard';

class TasksList extends Component {
  render() {
    return(
      <div style={{height: this.props.showTodos? "auto":"0", overflow: "hidden"}}>
          {this.props.filteredTodos.map((v,i) =>
            <TodoCard
              key={i}
              task={this.props.filteredTodos[i]}
              statChange={this.props.statChange}
              deleteTodo={this.props.deleteTodo}
              taskContentModify={this.props.taskContentModify}
            />
          )}
      </div>
    );
  }
}

export default TasksList;
