import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
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
  private tasks!: Task[];
  private _tasks = new BehaviorSubject<Task[]>([]);
  readonly tasks$ = this._tasks.asObservable();

  constructor() {
    this.tasks = [];
    this.updateList(initialList);
    this.emiter(this.tasks);
  }

  public getTasks(): Observable<Task[]> {
    return this.tasks$;
  }

  updateList(list: Task[]): void {
    new Promise<Task[]>(() => {
      setTimeout(() => {
        this.tasks = list;

        this.emiter(this.tasks);
      }, 1000);
    });
  }
  toggleComplete(index: number): void {
    this.tasks[index].completed = !this.tasks[index].completed;
  }
  public getTaskById(id: number): Task | null {
    // for (const task of this.tasks) {
    //   if (task.id == id)
    //     return task;
    // }
    // return null;
    return this.tasks.filter((task) => task.id == id)[0];
  }

  // public getList(list: Task[]): any{
  //   return this.updateList

  // }
  private emiter(tasks: Task[]): void {
    this._tasks.next(Object.assign([], tasks));
  }
//ajouter une tâche via le formulaire
  public addTask(task: Task): void{
    this.tasks.push(task);
    this.emiter(this.tasks);
  }
//obtenir l'id de la dernière tâche créée
  // public getLastId(id: number): Task | number  {
  //  return this.tasks[id] =Task.length-1;
  //     }
  }

