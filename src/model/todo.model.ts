export class TodoModel {
  constructor(id?: string, name?: string, description?: string) {
    this.id = id;
    this.name = name;
    this.description = description;
  }

  id: string;
  name: string;
  description: string;
}
