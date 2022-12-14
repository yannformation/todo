import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable} from 'rxjs';
import { User } from '../class/user.model'

const userList: User[] = [
  new User('Jean', 'Dupont', 'jean.dupont@cacahuete.fr','coque',["généreux ", "gentil, ", "bonne pâte, "])
];

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users!: User[];
  private _users = new BehaviorSubject<User[]>([]);
  readonly users$ = this._users.asObservable();

  constructor() {
    this.users = [];
    this.updateUser(userList);
    this.emiterUsers(this.users);

   }

   public getUsers(): Observable<User[]> {
    return this.users$;
  }

  updateUser(list: User[]): void {
    new Promise<User[]>(() => {
      setTimeout(() => {
        this.users = list;

        this.emiterUsers(this.users);
      }, 1000);
    });
  }

   private emiterUsers(users: User[]): void {
    this._users.next(Object.assign([], users));
  }

//ajouter un utilisateur via le formulaire
  public addUser(user: User): void{
    this.users.push(user);
    this.emiterUsers(this.users);
  }
}
