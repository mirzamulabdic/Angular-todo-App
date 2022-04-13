import { Component, Input, OnInit } from '@angular/core';
import { TaskService } from 'src/app/task.service';
import { Task } from 'src/app/shared/task.model';

@Component({
  selector: 'app-completed-task-element',
  templateUrl: './completed-task-element.component.html',
  styleUrls: ['./completed-task-element.component.css'],
})
export class CompletedTaskElementComponent implements OnInit {
  @Input('remElements') completedTasks!: Task;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {}
}
