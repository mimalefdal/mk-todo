import { observable, action } from "mobx";
import todoStore from "./TodoStore";

class TodoModel {
  store;
  id;
  @observable task;
  @observable completed;

  constructor(store, id, task, completed) {
    this.completed = completed;
    this.id = id;
    this.store = store;
    this.task = task;
  }
  @action
  toggle() {
    this.completed = !this.completed;
    todoStore.handleToggle();
  }
}

export default TodoModel;
