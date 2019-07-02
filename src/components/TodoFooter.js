import React, { Component } from "react";
import todoStore from "../stores/TodoStore";
import { observer } from "mobx-react";

@observer
class TodoFooter extends Component {
  handleFilter = filter => {
    this.setState({ activeFilter: filter });
    todoStore.filterTodos(filter);
  };

  render() {
    return (
      <div className="footer">
        <div className="todo-count">
          {todoStore.todos.filter(todo => todo.completed !== true).length}/
          {todoStore.todos.length} Items Left
        </div>
        <ul className="filters">
          <li>
            <a
              className={todoStore.lastfilter === "all" ? "selected" : ""}
              onClick={() => this.handleFilter("all")}
            >
              All
            </a>
          </li>
          <li>
            <a
              className={todoStore.lastfilter === "active" ? "selected" : ""}
              onClick={() => this.handleFilter("active")}
            >
              Active
            </a>
          </li>
          <li>
            <a
              className={todoStore.lastfilter === "done" ? "selected" : ""}
              onClick={() => this.handleFilter("done")}
            >
              Done
            </a>
          </li>
        </ul>
        <div
          className="clear-completed"
          onClick={() => todoStore.clearCompleted()}
        >
          Clear Completed
        </div>
      </div>
    );
  }
}

export default TodoFooter;
