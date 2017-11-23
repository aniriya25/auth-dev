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
  alldatavalue: any = [];
  
  onExpandClick() {
    this.table.rowDetail.expandAllRows();
  }
  constructor(private _alltransaction: TransactionService, public dialog: MdDialog) { 
    
  }
  ngOnInit() {
  
     this.getTransctionData();
     this.getSelected(this.user);
  }
  
 getTransctionInvoiceData(id) {
     // alert(value);
     // debugger;
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
       //debugger;
       this.rows = data.data;  
       let el = this.el.nativeElement;
       setTimeout(function () {
         el.click();
       }, );    
      })     
  }

  onSelect({ selected }) {
    console.log('Select Event', this.selected);
    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
    this.alldatavalue = this.selected;
  }

  onActivate(event) {
    console.log('Activate Event', event);
  }
  
  openreview() {
       //debugger;       
        const dialogRef = this.dialog.open(SummaryComponent,{data:[
        this.rows = this.alldatavalue
       ], disableClose: true});
     
     this.getSelected(this.selected);
          
  }
  getSelected(transactionId) : number {
    let selected = 0;
    for(let i = 0; i < this.alldatavalue.length; i++) {
      selected = this.alldatavalue[i]['transactionId'];
      this.alldatavalue.push = this.user;
      console.log("selected");
    }
    return selected;
  }

}