import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'todo';
  public count : number;

  public name1 : string;
  public name2 : string;
  public name3 : string;

  public complete1 : boolean;
  public complete2 : boolean;
  public complete3 : boolean;

  constructor(){
    this.name1 = "Jean-Jean";
    this.complete1 = false;
    this.name2 = "Jean-Louis";
    this.complete2 = true;
    this.name3 = "Jean-Dujardin";
    this.complete3 = false;
    this.count=2;
  }
  changeCount(status : boolean){

    this.count = status ? this.count +1 : this.count-1;

  }
}
