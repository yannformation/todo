import { Component } from '@angular/core';
import { Task } from './class/task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public count!: number;
  public tasks!: Task[];
  public percentage!: number;

  constructor() {
    new Promise(() =>
      setTimeout(() => {
        this.tasks = [
          new Task(1, 'Acheter du pain', false, 'chez le boulanger', Date()),
          new Task(2, "acheter de l'eau", true, "chez l'épicier", Date()),
          new Task(3, 'acheter du beurre', false, 'à la crèmerie', Date()),
          new Task(4, 'Faire le ménage', true, 'chambre et salon', Date()),
        ];
        this.count = this.tasks.filter((task) => task.completed).length;

        this.percentage = (this.count / this.tasks.length) * 100;
      }, 300)
    )
  };
  changeCount(status: boolean): void {
    this.count = status ? this.count + 1 : this.count - 1;
    this.percentage = (this.count / this.tasks.length) * 100; //pour mettre àjour le pourcentage à chaque changement de status de "count"
  }

  trackByFunction(index: number, item: any): string {
    return item.id;
  }
}
