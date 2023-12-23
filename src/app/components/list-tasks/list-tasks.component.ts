import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/modules/tasks/models/task.model';
import { TaskService } from 'src/app/modules/tasks/task.service';

@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.scss']
})
export class ListTasksComponent implements OnInit {
  constructor(private readonly service: TaskService) {}

  tasks: Task[] = [] as Task[];

  ngOnInit(): void {
    this.tasks = [{ id: 2, name: "wewew", status: false }, { id: 3, name: "wewew", status: true }] //this.listTasks();
  }

  private listTasks(): Task[] {
    return this.service.listAll();
  }

  public onChangeStatus(id: number): void {
    this.service.updateStatus(id);
  }
}
