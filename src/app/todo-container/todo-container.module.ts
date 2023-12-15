import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { TodoContainerComponent } from './todo-container.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { ItemTodoComponent } from './item-todo/item-todo.component';



@NgModule({
  declarations: [
    TodoContainerComponent,
    AddTodoComponent,
    ItemTodoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    TodoContainerComponent
  ]
})
export class TodoContainerModule { }
