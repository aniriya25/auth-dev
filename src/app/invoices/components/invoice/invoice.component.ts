import { Component, OnInit, ViewChild} from '@angular/core';
import { InvoiceService } from './../../../services/invoices/invoice.service';
import { InvoiceSummaryComponent } from '../invoice-summary/invoice-summary.component';
import { InvoiceValidateComponent } from '../invoice-validate/invoice-validate.component';
import { ProfileService } from './../../../services/profile/profile.service';
import { MdSnackBar } from '@angular/material';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import {MdDialog} from '@angular/material';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss'],
  providers: [InvoiceService, MdSnackBar, ProfileService]
})
export class InvoiceComponent implements OnInit {
@ViewChild('myTable') table: any;
rows = [];
temp = [];
isLimits: number = 10;
records: any;
allInvoice =[];
allrows = [];
alldatavalue: any = [];
profile:any = {}; 
model: any = {};
invoiceData: any = {};

  constructor(
   private _invoice: InvoiceService,
    public snackBar: MdSnackBar,
    private userProfile: ProfileService,
    private _route: Router, public dialog: MdDialog
    ) { }

   ngOnInit() {    
   this.getInvoiceInproccessData();
 }

  getInvoiceInproccessData() { 
    //debugger;   
    this._invoice.getInvoiceDetailsInproccess()
      .subscribe(data => {         
        this.allInvoice = data.data; 
        this.rows = this.allInvoice;
        console.log(this.rows);   
      })
  } 
    openreviewValidate(row) {
    //debugger;
     const dialogRef = this.dialog.open(InvoiceValidateComponent,{data:[
          this.rows = this.allInvoice[row.$$index]["Invoice"]
       ], disableClose: true});
      //  this.getInvoiceData();
       this. getInvoiceInproccessData();
}

}  