import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/class/user.model';
import { UserService } from 'src/app/services/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit{
  public user: User | null;
  userForm:  FormGroup;
  firstName: FormControl;
  lastName: FormControl;
  email: FormControl;
  team: FormControl;
  skills: FormControl;

  constructor ( private fb: FormBuilder, private form:UserService, private route:ActivatedRoute, private router: Router){
    this.user=null
    this.firstName = this.fb.control('', [Validators.required, Validators.minLength(3)]);
    this.lastName = this.fb.control('', [Validators.required, Validators.minLength(3)]);
    this.email = this.fb.control('', [Validators.required, Validators.email]);
    this.team = this.fb.control('', [Validators.minLength(3)]);
    this.skills = this.fb.control('', [Validators.minLength(3)]);
    this.userForm = this.fb.group({firstName: this.firstName, lastName:this.lastName, email:this.email, team:this.team, skills:this.skills})

  }

  ngOnInit(): void {

  }


//pour valider le formulaire et ajouter des utilisateurs
onSubmit(userForm: FormGroup){
  let firstName = userForm.value.firstName;
  let lastName = userForm.value.lastName;
  let email = userForm.value.email;
  let team = userForm.value.team;
  let skills = userForm.value.skills;
  let user =new User(firstName, lastName, email, team, skills);
  this.form.addUser(user);
  this.router.navigate(['user-list'])
}


}

