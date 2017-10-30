import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  user: any = {};
  
  constructor() {
   }

  ngOnInit() {}

  // submit form 
  submitFrm() {
    alert("location");
  }
}
