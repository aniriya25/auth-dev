import { Component, OnInit, ViewChild, Input } from '@angular/core';
// import { TransactionService } from './../../../services/transactions/transaction.service';
// import { MdSnackBar } from '@angular/material';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {
// show:boolean = false;
@ViewChild('myTable') table: any;
rows = [];
temp = [];
isLimits: number = 10;
records: any;
model: any = {};
  constructor(
    // private _transaction: TransactionService,   
    // public snackBar: MdSnackBar
    ) { 
      // this.model=  localStorage.getItem("xyz");
    }
   ngOnInit() {
    // debugger;  
    // this.model =  this._transaction.invoiceData;
   //console.log(this.model);

   this.rows = [
      { "company": "", "service": "", "comment": "" },
      ];
  }

}