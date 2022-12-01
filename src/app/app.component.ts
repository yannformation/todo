import { Component } from '@angular/core';
import { Task } from './class/task.model';
import { TodolistService } from './services/todo-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // public count!: number;
  // public percentage!: number;


  constructor(public todoList: TodolistService) {
    // this.count = this.todoList.tasks?.filter((task) => task.completed).length;
    // this.percentage = (this.count / this.todoList.tasks?.length) * 100;
  };
  public get count(): number {
    return (this.todoList.tasks?.length > 0) ? this.todoList.tasks?.filter(task => !task.completed).length : 0;
  }

  public get percentage(): number {
    return (this.todoList.tasks?.length > 0) ? (100-((this.count/this.todoList.tasks?.length)*100)) : 0;
  }

  // changeCount(status: boolean): void {
  //   this.count = status ? this.count + 1 : this.count - 1;
  //   this.percentage = (this.count / this.todoList.tasks?.length) * 100; //pour mettre àjour le pourcentage à chaque changement de status de "count"
  // }

  trackByFunction(index: number, item: any): string {
    return item.id;
  }

}
