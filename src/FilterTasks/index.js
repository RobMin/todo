import React, { Component } from "react";
import "./style.css";

class FilterTasks extends Component {
  render() {
    return (
      <div className="filterTasksContainer">
        <button
          className="showAllBut basicFilterButStyles"
          onClick={() => {
            this.props.filterByDoneChange("All");
          }}
        >
          All
        </button>

        <button
          className="showActiveBut basicFilterButStyles"
          onClick={() => {
            this.props.filterByDoneChange(false);
          }}
        >
          Active
        </button>

        <button
          className="showDoneBut basicFilterButStyles"
          onClick={() => {
            this.props.filterByDoneChange(true);
          }}
        >
          Done
        </button>
      </div>
    );
  }
}

export default FilterTasks;
