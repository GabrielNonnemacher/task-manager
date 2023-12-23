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
    this.tasks = [{name:"wewew", status: false}, {name:"wewew", status: true}] //this.listTasks();
  }

  private listTasks(): Task[] {
    return this.service.listAll();
  }
}
