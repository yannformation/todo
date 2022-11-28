import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, Output } from '@angular/core';



@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent {
  //attribution propriétés à app-task
  @Input() public name: string|undefined;
  @Input() public complete: boolean|undefined;

  @Output() change :  EventEmitter<boolean> = new EventEmitter<boolean>();

  //attributions de valeur s aux propriétés
  constructor() {
    // this.name = '';
    // this.complete = true;
  }

  public send(){
    this.toggleComplete();
    this.change.emit(this.complete);
  }

  //méthode "getComplete()"
  public getComplete(): string {
    return this.complete ? 'terminé' : 'en cours';
  }

  public getBadgeVariant(): string {
    return this.complete
      ? 'd-inline float-right badge badge-success'
      : 'd-inline float-right badge badge-warning';
  }

  public getItemVariant(): string {
    return this.complete
      ? 'list-group-item list-group-item-success'
      : 'list-group-item list-group-item-warning';
  }
  public toggleComplete(): void{
    this.change.emit(this.complete);
    this.complete = !this.complete;
    //revient à faire
    // if(this.complete==true){
    //   this.complete=false;
    // }else{
    //   if (this.complete==false){
    //     this.complete=true;
    //   }
    // }

  }

  public getButtonText(): string{
    return this.complete ? "Annuler" : "Terminer"
  }

  

}
