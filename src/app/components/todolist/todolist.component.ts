import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Task } from 'src/app/class/task.model';
import { TodolistService } from 'src/app/services/todo-list.service';


@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit, OnDestroy{
  public tasks: Task[] = [];
  private tasks$! : Observable<Task[]>;
  public subscribe!: Subscription;

  constructor(public todoList: TodolistService) {
    // this.count = this.todoList.tasks?.filter((task) => task.completed).length;
    // this.percentage = (this.count / this.todoList.tasks?.length) * 100;
  };

  ngOnInit(): void{
    this.tasks$ = this.todoList.getTasks();
    this.getTasks();
  }

  ngOnDestroy(): void{
    this.subscribe?.unsubscribe
  }
  public get count(): number {
    return (this.tasks.length > 0) ? this.tasks?.filter(task => !task.completed).length : 0;
  }

  public get percentage(): number {
    return (this.tasks?.length > 0) ? (100-((this.count/this.tasks?.length)*100)) : 0;
  }

  // changeCount(status: boolean): void {
  //   this.count = status ? this.count + 1 : this.count - 1;
  //   this.percentage = (this.count / this.todoList.tasks?.length) * 100; //pour mettre àjour le pourcentage à chaque changement de status de "count"
  // }

  trackByFunction(index: number, item: any): string {
    return item.id;
  }
  getTasks(): void{
    this.subscribe = this.tasks$.subscribe(tasks => {
      this.tasks = tasks;
    })

  }


}
