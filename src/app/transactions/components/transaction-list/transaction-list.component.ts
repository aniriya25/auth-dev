import { Component, OnInit, ViewChild } from '@angular/core';
import { TransactionService } from './../../../services/transactions/transaction.service';
@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss'],
   providers: [TransactionService],
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
