import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { TaskDetailsComponent } from './components/task-details/task-details.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path:'',
    canActivate: [AuthGuard],
    children: [

      {path: '', component: TodolistComponent, pathMatch: 'full'},
      {path: 'taskForm', component: TaskFormComponent},
      {path: 'todolist', component: TodolistComponent, pathMatch: 'full'},
      {path: 'todolist/:id', component: TaskDetailsComponent},
    ]
  },
  {path: 'login', component: LoginComponent},
  {path: '404', component: NotFoundComponent},
  {path: '**', redirectTo: '404'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes/*,{enableTracing: true}*/)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
