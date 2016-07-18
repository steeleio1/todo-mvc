class Task {

  constructor (id, objective, dueDate) {
    this.objective = objective;
    this.complete  = false;
    this.id        = id;
    this.dueDate   = dueDate;
  }

  toggleComplete () {
    return this.complete = !this.complete;
  }

}

export { Task };