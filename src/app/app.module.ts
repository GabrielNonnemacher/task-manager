import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddButtonComponent } from './components/add-button/add-button.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { DeleteButtonComponent } from './components/delete-button/delete-button.component';
import { EditButtonComponent } from './components/edit-button/edit-button.component';
import { HeaderComponent } from './components/header/header.component';
import { ListTasksComponent } from './components/list-tasks/list-tasks.component';
import { RegisterComponent } from './components/register/register.component';
import { TasksModule } from './modules/tasks/tasks.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListTasksComponent,
    AddButtonComponent,
    DeleteButtonComponent,
    EditButtonComponent,
    CheckboxComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TasksModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
