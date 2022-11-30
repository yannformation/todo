import { Injectable } from '@angular/core';
import { Task } from '../class/task.model';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  public tasks: Task[];

  constructor() {
    this.tasks = [
      new Task(1, 'Acheter du pain', false, 'chez le boulanger', Date()),
      new Task(2, "acheter de l'eau", true, "chez l'épicier", Date()),
      new Task(3, 'acheter du beurre', false, 'à la crèmerie', Date()),
      new Task(4, 'Faire le ménage', true, 'chambre et salon', Date()),
    ];

   }
}
