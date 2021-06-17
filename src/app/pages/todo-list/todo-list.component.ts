import { TodoListHeaderComponent } from './todo-list-header/todo-list-header.component';
import { HeaderComponent } from './../../layout/header/header.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  todos = ['1', '2', '3'];

  constructor() {}

  ngOnInit(): void {}

  /*
    onAddItem
      8. this will push received ( newTodo emitted by app-header ) value into todos array
      9. this will clear newTodo with the ref of addHeaderRef
  */
  onAddItem($event: string, addHeaderRef: TodoListHeaderComponent): void {
    const duplicateValue = this.todos.find((todo) => {
      if (todo.toLowerCase() === $event.toLowerCase()) {
        return true;
      } else {
        return false;
      }
    });
    if (duplicateValue) {
      alert('Duplicate values are not allowed, please enter unique value');
    } else {
      this.todos.push($event);
      addHeaderRef.clear();
    }
  }

  deleteItem(todoIndex: number) {
    const confirmed = confirm('Are you sure! Do you want to delete?');
    if (confirmed) {
      this.todos.splice(todoIndex, 1);
    }
  }
}
