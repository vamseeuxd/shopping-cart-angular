import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  @Input() appTitle = '';
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
