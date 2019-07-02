import React, { Component } from "react";
import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoItems from "./components/TodoItems";
import TodoFooter from "./components/TodoFooter";

class App extends Component {
  render() {
    return (
      <div id="todoapp" className="todoapp">
        <header>
          <h2 style={{ fontSize: "12px", float: "right" }}>by M.A.Delvarani</h2>
          <h1>toDo</h1>
        </header>
        <TodoInput />
        <TodoFooter />
        <TodoItems />
      </div>
    );
  }
}

export default App;
