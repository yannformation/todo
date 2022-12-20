import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/class/user.model';
import { UserService } from 'src/app/services/user.service';
import { FormGroup, FormControl, FormArray, Validators, AbstractControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit{
  public user: User | null;
  public passwordForm: FormGroup;
  public userForm:  FormGroup;
  public firstName: FormControl;
  public lastName: FormControl;
  public age: FormControl;
  public email: FormControl;
  public userNameControl: FormControl;
  // public userName: FormControl;
  public passwordCtrl: FormControl;
  public confirmCtrl: FormControl;
  public team: FormControl;
  public skills!: FormArray;
  public passwordStrength = 0;

  static passwordMatch(group: FormGroup) {
    const password = group.get('passwordCtrl')?.value;
    const confirm = group.get('confirmCtrl')?.value;
    return password === confirm ? null : { matchingError: true };

  }
  constructor ( private fb: FormBuilder, public form:UserService, public userService:UserService, private router: Router){
    this.user = null;
    this.firstName = this.fb.control('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]);
    this.lastName = this.fb.control('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]);
    this.age = this.fb.control('', [
      Validators.required,
      Validators.min(65),
      Validators.max(99),
    ]);
    this.email = this.fb.control('', [Validators.required, Validators.email]);
    this.userNameControl = this.fb.control('', [
      Validators.required,
      Validators.minLength(3),
    ]);

    this.confirmCtrl = this.fb.control('', [Validators.required]);
    this.passwordCtrl = this.fb.control('', [Validators.required]);
    this.passwordForm = fb.group({
      passwordCtrl: this.passwordCtrl,
      confirmCtrl: this.confirmCtrl

    },{
      validators: UserFormComponent.passwordMatch

    });

    this.passwordCtrl.valueChanges
    .pipe(debounceTime(400))
    .pipe(distinctUntilChanged())
    .subscribe(newValue => this.passwordStrength = newValue.length);

    this.userNameControl = this.fb.control('', [Validators.required, control =>
     this.isUserNameAvailable(control)])

    this.team = this.fb.control('', [Validators.minLength(3)]);
    this.skills = this.fb.array([this.fb.control('', [Validators.required])]);

    this.userForm = this.fb.group({
      firstName: this.firstName,
      lastName: this.lastName,
      age: this.age,
      email: this.email,
      userNameControl: this.userNameControl,
      team: this.team,
      skills: this.skills,
      passwordForm: this.passwordForm
    });
  }
  public isUserNameAvailable(control: AbstractControl){
    const username = control.value;
    return this.userService.isUserNameAvailable(username) ? null : { alreadyUsed: true}
  }


  ngOnInit(): void {}

  getSkills(): any {
    return this.userForm.get("skills");
  }

  addSkill(): void {
    let skill = this.fb.control('', [Validators.required])
    this.getSkills().push(skill);
  }

  printLog(): void {
    console.log(this.userForm)
  }


  //pour valider le formulaire et ajouter des utilisateurs
  onSubmit(userForm: FormGroup){
    let skills = this.getSkills().controls.map((skill: AbstractControl) => skill.value);
    let user =new User(this.firstName.value, this.lastName.value, this.age.value, this.email.value, this.userNameControl.value, this.passwordCtrl.value, this.team.value, skills);
    this.form.addUser(user);
    this.router.navigate(['user-list'])
    console.log(this.passwordCtrl.value)
  }

  public removeSkill(i: number): void {
    this.getSkills().removeAt(i)
  }

  trackByFunction(index: number, item: any): string {
    return item.id;
  }



}



