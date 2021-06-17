import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-list-header',
  templateUrl: './todo-list-header.component.html',
  styleUrls: ['./todo-list-header.component.scss'],
})
export class TodoListHeaderComponent {
  @Output() addItem: EventEmitter<string> = new EventEmitter<string>();
  newTodo = '';

  /*
    addButtonClick
      5. this will emit an output (addItem) with newTodo (which is entered by user)
  */
  addButtonClick(): void {
    this.addItem.emit(this.newTodo);
  }

  clear(): void {
    this.newTodo = '';
  }
}
