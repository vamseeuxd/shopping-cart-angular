import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() appTitle = '';
  activeMenu = 'demo';
  menuItems = [
    { label: 'DEMO', id: 'demo' },
    { label: 'SHOPNew', id: 'shopnew' },
    { label: 'PRODUCT', id: 'product' },
    { label: 'SALESale', id: 'salesale' },
    { label: 'PORTFOLIO', id: 'portfolio' },
    { label: 'LOOKBOOK', id: 'lookbook' },
    { label: 'BLOG', id: 'blog' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
