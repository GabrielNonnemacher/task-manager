import { Injectable } from '@angular/core';
import { Task, TaskDTO } from './models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor() {}

  listAll(): Task[] {
    const tasks = localStorage['tasks']
    return tasks ? JSON.parse(tasks) : [];
  }

  register(task: Task): void {
    const tasks: Task[] = this.listAll();
    const lastId: number | undefined = tasks[tasks.length - 1].id;
    task.id = lastId !== undefined ? lastId + 1 : 0;
    tasks.push(TaskDTO.mapperDto(task))
  }

  get(id: number): Task | undefined {
    const tasks: Task[] = this.listAll();
    return tasks.find((task: Task) => task.id === id);
  }

  update(task: Task): void {
    const tasks: Task[] = this.listAll();
    tasks.forEach((element: Task) => {
      if (element.id === task.id) {
        element = TaskDTO.mapperDto(task);
      }
    });
    this.save(tasks)
  }

  updateStatus(id: number): void {
    const task: Task | undefined = this.get(id);

    if (task) {
      task.concluida = !task.concluida;
      this.update(task);
    }
  }

  delete(id: number): void {
    const tasks: Task[] = this.listAll();
    const tasksUpdate: Task[] = tasks.filter((task: Task) => task.id !== id);
    this.save(tasksUpdate);
  }

  save(tasks: Task[]): void {
    localStorage['tasks'] = JSON.stringify(tasks)
  }
}