import { Component } from '@angular/core';
import { Task } from './class/task.model';
import { TodoListService } from './services/todo-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public count!: number;
  public tasks!: Task[];
  public percentage!: number;

  constructor(public todo: TodoListService) {
    new Promise(() =>
      setTimeout(() => {

      }, 3000)
    )
    this.count = this.tasks.filter((task) => task.completed).length;

    this.percentage = (this.count / this.tasks.length) * 100;
  };
  changeCount(status: boolean): void {
    this.count = status ? this.count + 1 : this.count - 1;
    this.percentage = (this.count / this.tasks.length) * 100; //pour mettre àjour le pourcentage à chaque changement de status de "count"
  }

  trackByFunction(index: number, item: any): string {
    return item.id;
  }
}
