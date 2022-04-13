import { EventEmitter } from '@angular/core';
import { Task } from './shared/task.model';

export class TaskService {
  tasksChanged = new EventEmitter<Task[]>();
  taskRemoved = new EventEmitter<Task[]>();

  private tasks: Task[] = [];
  private removedTasks: Task[] = [];

  getTasks() {
    return this.tasks.slice();
  }

  getRemovedTasks() {
    return this.removedTasks.slice();
  }

  addTask(task: Task) {
    this.tasks.push(task);
    this.tasksChanged.emit(this.tasks.slice());
  }

  removeTask(taskRem: Task) {
    const index: number = this.tasks.indexOf(taskRem);
    this.removedTasks.push(taskRem);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
    this.tasksChanged.emit(this.tasks.slice());
    this.taskRemoved.emit(this.removedTasks.slice());
  }
}
