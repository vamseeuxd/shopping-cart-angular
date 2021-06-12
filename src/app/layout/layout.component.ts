import { HeaderComponent } from './header/header.component';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  @Input() appTitle = '';

  @Input() leftFooterMain = '';

  newTodoItemName = 'test';

  todos = ['1', '2', '3'];

  constructor() {}

  ngOnInit(): void {}

  /*
    onAddItem
      8. this will push received ( newTodo emitted by app-header ) value into todos array
      9. this will clear newTodo with the ref of addHeaderRef
  */
  onAddItem($event: string, addHeaderRef: HeaderComponent): void {
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
