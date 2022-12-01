import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from 'src/app/class/task.model';
import { TodolistService } from 'src/app/services/todo-list.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent {
  //attribution propriétés à app-task
  @Input() public task!: Task;
  @Output() public message: EventEmitter<boolean> = new EventEmitter<boolean>();

  //attributions de valeurs aux propriétés
  constructor(public todo : TodolistService) {}
  getComplete(): string {
    return this.task.completed ? 'terminé' : 'en cours';
  }

  getBadgeVariant(): string {
    return this.task.completed
      ? 'd-inline float-right badge badge-success'
      : 'd-inline float-right badge badge-warning';
  }
  getItemVariant(): string {
    return this.task.completed
      ? 'ist-group-item list-group-item-success'
      : 'list-group-item list-group-item-warning';
  }

  getButtonText(): string {
    return !this.task.completed ? 'TERMINER' : 'ANNULER';
  }
//appelé à partir de todolistService
  toggleComplete(): void{
   this.todo.toggleComplete(this.task.id);//paramètre de toogleComplete récupéré dans task.model.
  }
  send(): void {
    this.toggleComplete();
    this.message.emit(this.task.completed);
  }
}
