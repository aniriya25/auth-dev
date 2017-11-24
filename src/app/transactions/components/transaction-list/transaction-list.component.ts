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
  temp = [];
  selected = [];
  isLimits: number = 10;
  records: any;
  allTransction: object = {};
  outletId: number;
  user: any = {};
  InvoiceData:any;
  abc:any;
  allrows = [];
  alldatavalue: any = [];
  result = [];
  
  onExpandClick() {
    this.table.rowDetail.expandAllRows();
  }
  constructor(private _alltransaction: TransactionService, public dialog: MdDialog) { 
    
  }
  ngOnInit() {
  
     this.getTransctionData();
     
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
       this.temp = data.data;
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
        this.allrows = this.alldatavalue
       ], disableClose: true}); 
  }

   updateFilter(event) {
    const val = event.target.value.toLowerCase();
    const temp = this.temp.filter(function(d) {
      return d.transactionId.toLowerCase().indexOf(val) !== -1 || !val || d.patientName.toLowerCase().indexOf(val) !== -1 || !val;      
    });
    this.rows = temp;
    this.table.offset = 0;
  }
  

 dateFilter(event) {
  return function(input, startDatePicker, endDatePicker) {
    var inputDate = event.target.input.toLowerCase();
        this.startDatePicker = event.target.startDatePicker.toLowerCase();
        this.endDatePicker = event.target.endDatePicker.toLowerCase();
        this.result = [];
    for (var i=0, len = input.length; i < len; i++) {
        inputDate = new Date(input[i].transactionDate);            
        if (this.startDatePicker < inputDate && inputDate < this.endDatePicker) {
           this.result.push(input[i]);
        }  
    }       
    return this.result;
  }
}




}