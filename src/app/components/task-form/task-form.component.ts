import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TodolistService } from 'src/app/services/todo-list.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from 'src/app/class/task.model';


@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent {
  public task: Task | null;

  constructor(private todo: TodolistService,private route:ActivatedRoute, private router: Router){
    this.task=null
  }

  ngOnInit(): void {
    const routeId: string | null=this.route.snapshot.paramMap.get("id");
    let id: number = (routeId==null) ? -1 : +routeId;
    this.task = this.todo.getTaskById(id);
  }

//pour valider le formulaire et ajouter des tâches
  onSubmit(taskForm: NgForm){
    let title = taskForm.value.title;
    let description = taskForm.value.description;
    let completed = taskForm.value.completed;
    let date = new Date();
    let task =new Task(title, completed, description, date);
    this.todo.addTask(task);
    this.router.navigate(['todolist'])
  }

  //beaucoup mieux que ci-dessus
  // onSubmit(userform: NgForm): void {
  //   this.todo.addTask(
  //     new Task(userform.value.title, (userform.value.completed == 0) ? false : true, userform.value.description, new Date())
  //   );
  //   this.router.navigate(['todolist']);
  // }




}

