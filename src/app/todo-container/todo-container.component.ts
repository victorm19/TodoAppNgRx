import { Component } from '@angular/core';

import { Todo, createTodo, initTodos } from './models';

@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrl: './todo-container.component.css'
})
export class TodoContainerComponent {
  todos: Todo[] = [];

  get hasCompletedTodos(): boolean {
    return this.todos.some((todo) => todo.completed);
  }

  constructor() {}

  ngOnInit(): void {
    this.todos = initTodos;
  }

  addTodo(description: string | any): void {
    const newTodo = createTodo(description);
    this.todos = [...this.todos, newTodo];
  }

  removeTodo(todoToRemove: Todo): void {
    this.todos = this.todos.filter((todo) => todo.id !== todoToRemove.id);
  }

  markAsCompleted(todoToMark: Todo): void {
    this.todos = this.todos.map((todo) =>
      todo.id === todoToMark.id ? { ...todo, completed: true } : todo
    );
  }

  markAsPending(todoToMark: Todo): void {
    this.todos = this.todos.map((todo) =>
      todo.id === todoToMark.id ? { ...todo, completed: false } : todo
    );
  }

  clearCompleted(): void {
    this.todos = this.todos.filter((todo) => todo.completed === false);
  }
}
