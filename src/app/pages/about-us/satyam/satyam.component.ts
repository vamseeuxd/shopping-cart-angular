import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-satyam',
  templateUrl: './satyam.component.html',
  styleUrls: ['./satyam.component.scss'],
})
export class SatyamComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  subMitForm(form: NgForm) {
    console.log(form.controls.firstName);
  }
}
