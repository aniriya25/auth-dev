import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TransactionService } from './../../../services/transactions/transaction.service';
import {MdDialog} from '@angular/material';
import { SummaryComponent } from '../summary/summary.component';                              

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss'],
   providers: [TransactionService],
})
export class TransactionListComponent implements OnInit {
 @ViewChild('myTable') table: any;
 @ViewChild('expandButton') el: ElementRef;
   rows = [];
  temp = [];
  isLimits: number = 10;
  records: any;
  allTransction: object = {};
  outletId: number;
  user: any = {};
  onExpandClick() {
    this.table.rowDetail.expandAllRows();
  }
  constructor(
    private _alltransaction: TransactionService,
    public dialog: MdDialog
  ) { }
  ngOnInit() {
  
     this.getTransctionData();
  }
  
  openDialog() {
    const dialogRef = this.dialog.open(SummaryComponent);
  }
  getTransctionData() {
      this._alltransaction.getAllTransactionList()
      .subscribe(data => {   
        debugger         
       this.rows = data.data;  
       let el = this.el.nativeElement;
       setTimeout(function () {
         el.click();
       }, );    
      })
     
  }


}