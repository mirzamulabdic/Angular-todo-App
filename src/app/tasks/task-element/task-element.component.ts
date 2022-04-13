import { Component, OnInit, Input } from '@angular/core';
import { TaskService } from 'src/app/task.service';
import { Task } from '../../shared/task.model';
@Component({
  selector: 'app-task-element',
  templateUrl: './task-element.component.html',
  styleUrls: ['./task-element.component.css'],
})
export class TaskElementComponent implements OnInit {
  @Input('tskEl') taskElement!: Task;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {}

  onItemClick() {
    this.taskService.removeTask(this.taskElement);
  }
}
