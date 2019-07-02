import React, { Component } from "react";
import todoStore from "../stores/TodoStore";
import { observer } from "mobx-react";

@observer
export default class TodoItem extends Component {
  onToggle = () => {
    this.props.todo.toggle();
  };
  render() {
    const { todo } = this.props;
    return (
      <li className={todo.completed ? "completed" : " "}>
        <div className="view">
          <input
            type="checkbox"
            className="toggle"
            value="on"
            checked={todo.completed}
            onChange={this.onToggle}
          />
          <label>{todo.task}</label>
          <button
            className="destroy"
            onClick={() => todoStore.removeTodo(todo.id)}
          />
        </div>
      </li>
    );
  }
}
