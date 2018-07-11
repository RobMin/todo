import React, { Component } from 'react';
import './style.css';

import Switch from '@material-ui/core/Switch';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

import ContentEditable from 'react-contenteditable'

class TodoCard extends Component {
  render() {
    return(
        <div className="taskCard">
          <Switch
            checked={this.props.task.done}
            color="default"
            onChange={()=>{this.props.statChange(this.props.task.id)}}
          />
          <ContentEditable
            spellCheck="false"
            onChange={(e) => {this.props.taskContentModify(this.props.task.id, e)}}
            className={"taskContent" + (this.props.task.done? " crossline":"")}
            html={this.props.task.content}
          />
          <IconButton aria-label="Delete" onClick={()=>{this.props.deleteTodo(this.props.task.id)}}>
            <DeleteIcon />
          </IconButton>
        </div>
    );
  }
}

export default TodoCard;
