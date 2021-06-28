import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-satyam',
  templateUrl: './satyam.component.html',
  styleUrls: ['./satyam.component.scss'],
})
export class SatyamComponent implements OnInit {
  studentData: any[] = [];
  selectedStudent: any = {};

  constructor(public http: HttpClient) {
    this.getAllStudents();
  }

  getAllStudents() {
    const subcribe: Subscription = this.http
      .get<any[]>('https://60d68c2b307c300017a5f40e.mockapi.io/students')
      .subscribe((data: any[]) => {
        this.studentData = data;
        subcribe.unsubscribe();
      });
  }

  getStudentById(id: string, staticModal: any) {
    const subcribe: Subscription = this.http
      .get<any>('https://60d68c2b307c300017a5f40e.mockapi.io/students/' + id)
      .subscribe((data) => {
        this.selectedStudent = data;
        staticModal.show();
        subcribe.unsubscribe();
      });
  }

  addStudent(satyamForm: NgForm) {
    const subcribe: Subscription = this.http
      .post<any>(
        'https://60d68c2b307c300017a5f40e.mockapi.io/students/',
        satyamForm.value
      )
      .subscribe((data) => {
        console.log(data);
        satyamForm.resetForm({});
        this.getAllStudents();
        subcribe.unsubscribe();
      });
  }

  ngOnInit(): void {}

  subMitForm(form: NgForm) {
    console.log(form.controls.firstName);
  }
}
