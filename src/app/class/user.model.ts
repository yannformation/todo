export class User {
  private static index : number = 0;
  public id: number;


  constructor(
    public firstName: string,
    public lastName: string,
    public email: string,
    public team: string,
    public skills:string[]
  ) {
    this.id = User.index++;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.team = team;
    this.skills= skills;
  }
}
