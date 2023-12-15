import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html'
})
export class AddTodoComponent {
  addForm: FormGroup = new FormGroup({
    description: new FormControl('', Validators.required),
  });

  @Output() added = new EventEmitter<string | null>() ;

  add(): void {
    this.added.emit(this.addForm.get('description')?.value);
    this.reset();
  }

  reset(): void {
    this.addForm.reset({ description: '' });
  }
}
