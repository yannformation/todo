import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {MatButtonModule} from '@angular/material/button';
import { MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { TaskComponent } from './components/task/task.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import { NavComponent } from './components/nav/nav.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { RouterOutlet } from '@angular/router';
import { TaskDetailsComponent } from './components/task-details/task-details.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    TodolistComponent,
    NavComponent,
    LoginComponent,
    LogoutComponent,
    TaskDetailsComponent,
    NotFoundComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FormsModule,
    MatCardModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
