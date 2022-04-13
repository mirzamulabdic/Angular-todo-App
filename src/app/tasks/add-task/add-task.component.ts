import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Task } from 'src/app/shared/task.model';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  constructor(private taskService: TaskService) {}

  isEmpty = false;

  @ViewChild('taskInput') taskInput!: ElementRef;

  ngOnInit(): void {}

  onAddTask() {
    if (this.taskInput.nativeElement.value === '') {
      this.isEmpty = true;
    } else {
      this.isEmpty = false;
      const input = this.taskInput.nativeElement.value;
      const taskEl = new Task(input);
      this.taskService.addTask(taskEl);
    }
  }
}
