import _ from 'lodash';
import $ from 'jquery';
import { Task } from '../models/task';

class AppController {

  constructor (form, container, list) {
    this.form      = form;
    this.container = container;
    this.list      = list;
  }

  init () {
    this.taskClick();
    this.formSubmit();
  }

  addTask (objective, due) {
    let id   = _.random(100, 999);
    let task = new Task(id, objective, due);
    let taskHTML = this.taskTemplate(task);
    
    this.list.tasks.push(task);
    
    this.container.append(taskHTML);

  }

  taskClick () {
    this.container.on('click', 'li', (event) => {
      event.preventDefault();
      
      let id = $(event.target).data('taskid');
      let task = _.find(this.list.tasks, { id: id });

      task.toggleComplete();

      $(event.target).toggleClass('complete');

      console.log(task);

    });
  }

  formSubmit () {
    this.form.on('submit', (event) => {
      event.preventDefault();
      
      let objective = this.form.find('.task-objective').val();
      let due       = this.form.find('.task-due').val();

      this.addTask(objective, due);

    });
  }

  taskTemplate (task) {
    return `
      <li data-taskid="${task.id}">
        ${task.objective} - <span class="tiny">${task.dueDate}</span>
      </li>
    `;  
  }

}

export { AppController };