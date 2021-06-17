import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() appTitle = '';
  menuItems = [
    { item: 'Todo List', link: 'page-1' },
    { item: 'About Us', link: 'about-us' },
    { item: 'Contact Us', link: 'contact-us' },
  ];
}
