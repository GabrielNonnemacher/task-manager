import { Routes } from "@angular/router";
import { ListTasksComponent } from "src/app/components/list-tasks/list-tasks.component";

export const TaskRoutes: Routes = [
    {
        path: 'tasks',
        redirectTo: 'tasks/list'
    },
    {
        path: 'tasks/list',
        component: ListTasksComponent
    }
];
