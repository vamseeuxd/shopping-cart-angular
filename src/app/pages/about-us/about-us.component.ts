import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  presonName = 'Satyam';
  constructor(
    public route:ActivatedRoute
  ) {
    this.route.params.subscribe(params=>{
      this.presonName = params.personName;
    })
  }

  ngOnInit(): void {
  }

}
