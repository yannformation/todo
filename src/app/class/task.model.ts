export class Task {
  constructor(
    public id: number,
    public title: string,
    public completed: boolean,
    public description: string,
    public date: string
  ) {
    this.id = id;
    this.title = title;
    this.completed = completed;
    this.description = description;
    this.date = date;
  }
}
