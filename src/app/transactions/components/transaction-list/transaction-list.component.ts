import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent implements OnInit {

   @ViewChild('myTable') table: any;
  rows = [];
  temp = [];
  isLimits: number = 10;
  records: any;
  constructor() { }
  ngOnInit() {
    this.rows = [
     { "company": "98.4 Pharmacy G2 Block Market, Sarita Vihar", "service": "Pharmacy", "firstName": "Dr Anupam anupam.bakshi@gmail.com +91-9810012345", "comment": "Good" },
     ];
  }

}
