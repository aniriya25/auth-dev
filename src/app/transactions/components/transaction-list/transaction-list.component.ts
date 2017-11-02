import { Component, OnInit, ViewChild} from '@angular/core';


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
  onExpandClick() {
    this.table.rowDetail.expandAllRows();
  }
  constructor() { }
  ngOnInit() {
    this.rows = [
     ];
  }

}

