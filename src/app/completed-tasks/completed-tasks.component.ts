import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../shared/task.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-completed-tasks',
  templateUrl: './completed-tasks.component.html',
  styleUrls: ['./completed-tasks.component.css'],
})
export class CompletedTasksComponent implements OnInit {
  removedTasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.removedTasks = this.taskService.getRemovedTasks();

    this.taskService.taskRemoved.subscribe((remTasks: Task[]) => {
      this.removedTasks = remTasks;
    });
  }
}
