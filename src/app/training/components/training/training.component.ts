import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss']
})
export class TrainingComponent implements OnInit {
rows =[
  {value:"1", viewValue:"NEFT"}
];
temp =[];
feedback:boolean = true;

  constructor() { }

  ngOnInit() {
    // if(row.status = "Done")
    // this.feedback = true;
  }

}
