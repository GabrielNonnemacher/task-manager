import { Routes } from "@angular/router";
import { RegisterComponent } from "src/app/component/register/register.component";
import { ListTasksComponent } from "src/app/components/list-tasks/list-tasks.component";

export const TaskRoutes: Routes = [
    {
        path: 'tasks',
        redirectTo: 'tasks/list'
    },
    {
        path: 'tasks/list',
        component: ListTasksComponent
    },
    {
        path: 'tasks/register',
        component: RegisterComponent
    }
];
