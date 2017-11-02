import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent implements OnInit {

   @ViewChild('myTable') table: any;
   @ViewChild('expand') exp: ElementRef;
   expand
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

