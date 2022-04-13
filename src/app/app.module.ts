import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddTaskComponent } from './tasks/add-task/add-task.component';
import { TaskElementComponent } from './tasks/task-element/task-element.component';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CompletedTasksComponent } from './completed-tasks/completed-tasks.component';
import { TasksComponent } from './tasks/tasks.component';
import { CompletedTaskElementComponent } from './completed-tasks/completed-task-element/completed-task-element.component';
import { TaskService } from './task.service';
import { RegistrationService } from './registration.service';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app.routing.module';

@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    TaskElementComponent,
    HeaderComponent,
    RegisterComponent,
    LoginComponent,
    CompletedTasksComponent,
    TasksComponent,
    CompletedTaskElementComponent,
    HomeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [TaskService, RegistrationService],
  bootstrap: [AppComponent],
})
export class AppModule {}
