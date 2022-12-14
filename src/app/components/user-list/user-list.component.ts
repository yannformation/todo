import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { User } from 'src/app/class/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, OnDestroy{
  public users: User[] = [];
  private users$! : Observable<User[]>;
  public subscribe!: Subscription;

  constructor(public userList: UserService) {

  };

  ngOnInit(): void{
    this.users$ = this.userList.getUsers();
    this.getUsers();
  }

  ngOnDestroy(): void{
    this.subscribe?.unsubscribe
  }




  trackByFunction(index: number, item: any): string {
    return item.id;
  }
  getUsers(): void{
    this.subscribe = this.users$.subscribe(users => {
      this.users = users;
    })

  }


 }
