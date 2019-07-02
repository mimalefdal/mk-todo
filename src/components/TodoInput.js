import React, { Component } from "react";
import todoStore from "../stores/TodoStore";

class TodoInput extends Component {
  state = { value: "" };
  handleKeyDown = event => {
    if (event.keyCode !== 13) {
      return;
    }
    event.preventDefault();
    todoStore.addTodo(this.state.value);
    this.setState({ value: "" });
  };
  render() {
    return (
      <header className="header">
        <input
          type="text"
          className="new-todo"
          value={this.state.value}
          placeholder="write to be done"
          onChange={event => {
            this.setState({ value: event.target.value });
          }}
          onKeyDown={event => {
            this.handleKeyDown(event);
          }}
        />
      </header>
    );
  }
}

export default TodoInput;
