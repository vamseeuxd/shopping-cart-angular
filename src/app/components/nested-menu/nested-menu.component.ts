import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nested-menu',
  templateUrl: './nested-menu.component.html',
  styleUrls: ['./nested-menu.component.scss'],
})
export class NestedMenuComponent implements OnInit {
  menuData = [
    {
      label: 'Menu 1'},
    {
      label: 'Menu 2',
      subMenu: [
        { label: 'Submenu 1-1' },
        { label: 'Submenu 1-2' },
        { label: 'Submenu 1-3' },
        { label: 'Submenu 1-4' },
      ],
    },
    {
      label: 'Menu 3',
      subMenu: [
        { label: 'Submenu 2-1' },
        { label: 'Submenu 2-2' },
        { label: 'Submenu 2-3' },
        { label: 'Submenu 2-4' },
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
