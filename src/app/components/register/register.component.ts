import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Task } from 'src/app/modules/tasks/models/task.model';
import { TaskService } from 'src/app/modules/tasks/task.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  constructor(
    private readonly service: TaskService,
    private readonly router: Router,
  ) {}

  task: Task = {} as Task;
  @ViewChild("formTask", { static: true }) formTask!: NgForm;

  public registerTask(): void {
    if(this.formTask.form.valid) {
      this.service.register(this.task);
      this.router.navigate(["/tarefas"]);
    }
  }
}
