import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Task } from '../class/task.model';


// const initialList: Task[] = [
//   new Task('Acheter du pain', false, 'chez le boulanger', new Date()),
//   new Task("acheter de l'eau", true, "chez l'épicier", new Date()),
//   new Task('acheter du beurre', false, 'à la crèmerie', new Date()),
//   new Task('Faire le ménage', true, 'chambre et salon', new Date()),

// ];

@Injectable({
  providedIn: 'root',
})
export class TodolistService {
 public tasks: Task[]=[];
  public _tasks = new BehaviorSubject<Task[]>([]);
  readonly tasks$ = this._tasks.asObservable();


  constructor(private http: HttpClient) {
    this.tasks = [];
    //  this.updateList(initialList);
    this.emiter(this.tasks);
  }

  public getTasks(): Observable<Task[]> {
    return this.tasks$;
  }

 // updateList(list: Task[]): void {
    // new Promise<Task[]>(() => {
    //   setTimeout(() => {
        // this.tasks = list;
        // this.emiter(this.tasks);
    //   }, 1000);
    // });
  //}
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

  private emiter(tasks: Task[]): void {
    this._tasks.next(Object.assign([], tasks));
    this.save();
  }

//ajouter une tâche via le formulaire
  public addTask(task: Task): void{
    this.tasks.push(task);
    this.emiter(this.tasks);
  }


//pour envoyer la liste de tâches vers la base de données FireBase
  public save(): void{
    const url = "https://todolist-ba8aa-default-rtdb.europe-west1.firebasedatabase.app"
    this.http.put(url + "/tasks.json", this.tasks).subscribe();
  }

  public load(): any {
    const url = "https://todolist-ba8aa-default-rtdb.europe-west1.firebasedatabase.app"
    this.http.get(url + "/tasks.json")
    .subscribe(
      response => {

          //  this.tasks as Task[];
          console.log(response);
           this._tasks.next(Object.assign(this.tasks, response))
    })
  }

  }

