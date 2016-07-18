// External Libraries
import $ from 'jquery';
import _ from 'lodash';

// Internal Classes
import { AppController } from './controllers/app-controller';
import { List } from './models/list';
import { Task } from './models/task';

// Grab our Elements
const addTaskForm   = $('.add-task');
const listContainer = $('.task-list');

let list = new List('Grocery List', 'All the things I want to eat');
let app  = new AppController(addTaskForm, listContainer, list);

console.log(app);