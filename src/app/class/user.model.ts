export class User {
  private static index : number = 0;
  public id: number;


  constructor(
    public firstName: string,
    public lastName: string,
    public age: number,
    public email: string,
    public userName:string,
    public password:string,
   //public passwordCtrl: string,
    // public confirmCtrl: string,
    public team: string,
    public skills:string[]
  ) {
    this.id = User.index++;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.email = email;
    this.userName = userName;
    this.password = password;
    // this.passwordCtrl = passwordCtrl;
    // this.confirmCtrl = confirmCtrl;
    this.team = team;
    this.skills= skills;
  }
}
