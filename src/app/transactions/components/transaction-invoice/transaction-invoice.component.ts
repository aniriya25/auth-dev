import {  Component, OnInit, ViewChild, Input} from '@angular/core';
import { TransactionService } from './../../../services/transactions/transaction.service';
import { MdSnackBar } from '@angular/material';

@Component({
  selector: 'app-transaction-invoice',
  templateUrl: './transaction-invoice.component.html',
  styleUrls: ['./transaction-invoice.component.scss']
})
export class TransactionInvoiceComponent implements OnInit {

@ViewChild('myTable') table: any;
// rows = [];
// temp = [];
// isLimits: number = 10;
// records: any;
model: any = {};
invoiceData: any = {};
  constructor(
    private _transaction: TransactionService,   
    public snackBar: MdSnackBar
    ) { }

   ngOnInit() { 
     this.model =  this._transaction.invoiceData.data;
    //  debugger;
    //  this.rows = this._transaction.invoiceData;
 }

}  