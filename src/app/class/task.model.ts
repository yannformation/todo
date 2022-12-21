export class Task {
  private static index : number = 0;
  constructor(
    public id: number,
    public title: string,
    public completed: boolean,
    public description: string,
    public date: Date
  ) {
    this.id = id;
    this.title = title;
    this.completed = completed;
    this.description = description;
    this.date = date;
  }
}
