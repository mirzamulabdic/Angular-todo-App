import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../shared/task.model';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  taskElements: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskElements = this.taskService.getTasks();
    this.taskService.tasksChanged.subscribe((tasks: Task[]) => {
      this.taskElements = tasks;
    });
  }

  onTaskAdded(taskOn: Task) {
    this.taskElements.push(taskOn);
  }

}
