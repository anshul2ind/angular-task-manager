import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LettersWithSpacesOnlyDirective } from './core/directives/letters-with-spaces-only.directive';
import { ListTasksComponent } from './list-tasks/list-tasks.component';
import { AddTaskFormComponent } from './list-tasks/add-task-form/add-task-form.component';
import { TitleComponent } from './title/title.component';
import { TasksService } from './core/Services/tasks.service';
import { CommonService } from './core/Services/common.service';
import { TasksReadOnlyComponent } from './tasks-read-only/tasks-read-only.component';
import { Route } from '@angular/compiler/src/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: TasksReadOnlyComponent},
  {path: 'edit', component: ListTasksComponent},
  {path: 'read', component: TasksReadOnlyComponent},
];

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(routes) ],
  declarations: [ AppComponent, LettersWithSpacesOnlyDirective, ListTasksComponent, AddTaskFormComponent, TitleComponent, TasksReadOnlyComponent ],
  bootstrap:    [ AppComponent ],
  providers: [CommonService]
})
export class AppModule { }
