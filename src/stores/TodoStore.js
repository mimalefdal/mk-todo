import { observable, action } from "mobx";
import TodoModel from "./TodoModel";
class TodoStore {
  @observable todos = [];
  @observable filteredTodos = [];
  lastId = 0;
  lastfilter = "all";

  @action
  addTodo(task) {
    this.todos.push(new TodoModel(this, this.lastId++, task, false));
    this.filteredTodos = this.todos;
    if (this.lastfilter === "done") this.filterTodos("all");
  }

  @action
  removeTodo(givenId) {
    this.todos = this.todos.filter(todo => todo.id !== givenId);
    this.filterTodos(this.lastfilter);
  }

  @action
  clearCompleted() {
    this.todos = this.todos.filter(todo => todo.completed !== true);
    this.filterTodos("all");
  }

  @action
  filterTodos(targetState) {
    this.lastfilter = targetState;
    // console.log(targetState);
    switch (targetState) {
      case "all":
        this.filteredTodos = this.todos;
        break;
      case "active":
        this.filteredTodos = this.todos.filter(todo => todo.completed !== true);
        break;
      case "done":
        this.filteredTodos = this.todos.filter(
          todo => todo.completed !== false
        );
        break;
    }
  }

  @action
  handleToggle() {
    this.filterTodos(this.lastfilter);
  }
}

const todoStore = new TodoStore();
export default todoStore;
