import { Component } from '@angular/core';
import { TodolistService } from 'src/app/services/todo-list.service';


@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent {
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
