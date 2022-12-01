import { Injectable } from '@angular/core';
import { Task } from '../class/task.model';

const initialList: Task[] = [
  new Task('Acheter du pain', false, 'chez le boulanger', Date()),
  new Task("acheter de l'eau", true, "chez l'épicier", Date()),
  new Task('acheter du beurre', false, 'à la crèmerie', Date()),
  new Task('Faire le ménage', true, 'chambre et salon', Date()),
];

@Injectable({
  providedIn: 'root',
})
export class TodolistService {
  public tasks!: Task[];

  constructor() {
   this.updateList(initialList);
  }

  updateList(list: Task[]): void {
    new Promise<Task[]>(() => {
      setTimeout(() => {

        this.tasks = list;
      }, 1000);
    });
  }
  toggleComplete(index: number): void {
    this.tasks[index].completed = !this.tasks[index].completed;
  }
}
