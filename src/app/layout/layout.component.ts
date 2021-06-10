import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  @Input() appTitle = '';

  @Input() leftFooterMain = '';

  constructor() {
  }

  ngOnInit(): void {
  }

}
