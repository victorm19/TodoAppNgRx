import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Todo } from '../models';

@Component({
  selector: 'app-item-todo',
  templateUrl: './item-todo.component.html',
  styleUrl: './item-todo.component.css'
})
export class ItemTodoComponent {
  @Input() todo!: Todo;

  @Output() removed = new EventEmitter<void>();
  @Output() completed = new EventEmitter<void>();
  @Output() reopened = new EventEmitter<void>();

  get isCompleted() {
    return this.todo.completed;
  }

  ngOnInit(): void {
    if (!this.todo) {
      throw Error('TodoComponent:ngOnInit - A Todo object must be supplied');
    }
  }

  remove(): void {
    this.removed.emit();
  }

  complete(): void {
    this.completed.emit();
  }

  reopen(): void {
    this.reopened.emit();
  }
}
