import { Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  @ViewChild('myTable') table: any;
  rows = [];
  temp = [];
  isLimits: number = 10;
  records: any;
  constructor() { }

  ngOnInit() {
    this.rows = [
      { "company": "", "service": "", "comment": "" },
      ];
  }

}
