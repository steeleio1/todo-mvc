class Task {

  constructor (objective, id, dueDate) {
    this.objective = objective;
    this.complete  = false;
    this.id        = id;
    this.dueDate  = dueDate;
  }

}

export { Task };