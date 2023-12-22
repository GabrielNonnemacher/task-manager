import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TaskService } from './task.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [TaskService]
})
export class TasksModule {}
