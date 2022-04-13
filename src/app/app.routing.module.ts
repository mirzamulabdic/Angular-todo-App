import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { CompletedTasksComponent } from './completed-tasks/completed-tasks.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TasksComponent } from './tasks/tasks.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'tasks', component: TasksComponent },
  {path: 'completed-tasks', component: CompletedTasksComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
