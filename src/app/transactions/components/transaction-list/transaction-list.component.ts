import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TransactionService } from './../../../services/transactions/transaction.service';
import {MdDialog} from '@angular/material';
import { SummaryComponent } from '../summary/summary.component';  


@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss'],
   providers: [TransactionService]
})
export class TransactionListComponent implements OnInit {
 @ViewChild('myTable') table: any;
 @ViewChild('expandButton') el: ElementRef;
  rows = [];
  selected = [];
  isLimits: number = 10;
  records: any;
  allTransction: object = {};
  outletId: number;
  user: any = {};
  InvoiceData:any;
  abc:any;
  
  onExpandClick() {
    this.table.rowDetail.expandAllRows();
  }
  constructor(private _alltransaction: TransactionService,  public dialog: MdDialog) { }
  ngOnInit() {
  
     this.getTransctionData();
  }
  
openDialog() {
    const dialogRef = this.dialog.open(SummaryComponent);
  }

   getTransctionInvoiceData(id) {
     // alert(value);
      debugger;
      this.user.transactionId = id;
      this._alltransaction.getTransactionInvoce(this.user.transactionId)
      .subscribe(data => {   
       this.user.path = data.data["path"];
      //  window.open(this.user.path).print();
      this.getPrint();       
      })     
  }
 getPrint()
  {
      var printPage = window.open(this.user.path, '_blank');
  }

  getTransctionData() {
      this._alltransaction.getAllTransactionList()
      .subscribe(data => {   
       //debugger         
       this.rows = data.data;  
       let el = this.el.nativeElement;
       setTimeout(function () {
         el.click();
       }, );    
      })     
  }

  onSelect({ selected }) {
    console.log('Select Event', selected, this.selected);
    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
  }

  onActivate(event) {
    console.log('Activate Event', event);
  }
  
  //  onSelect({ selected }) {
  //   debugger;
  //   this.selected.splice(0, this.selected.length);
  //   this.selected.push(selected);
  // }

  // selectCheck(row, column, value) {
  //   return row.id;
  // }

}