import React, { Component } from "react";
import "./style.css";

class FilterTasks extends Component {
  handleClick = e => {
    let returnProp = "All";
    if (e.target.textContent === "Active") returnProp = false;
    if (e.target.textContent === "Done") returnProp = true;
    this.props.filterByDoneChange(returnProp);
  };

  render() {
    return (
      <div className="filterTasksContainer">
        {["All", "Active", "Done"].map((v, i) => (
          <button
            key={i}
            className={`show${v}But basicFilterButStyles`}
            onClick={this.handleClick}
          >
            {v}
          </button>
        ))}
      </div>
    );
  }
}

export default FilterTasks;
