import { Component, OnInit, ViewChild} from '@angular/core';
import { InvoiceService } from './../../../services/invoices/invoice.service';
import { InvoiceSummaryComponent } from '../invoice-summary/invoice-summary.component';
import { MdSnackBar } from '@angular/material';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import {MdDialog} from '@angular/material';

@Component({
  selector: 'app-invoices-list',
  templateUrl: './invoices-list.component.html',
  styleUrls: ['./invoices-list.component.scss'],
  providers: [InvoiceService, MdSnackBar]
})
export class InvoicesListComponent implements OnInit {
  @ViewChild('myTable') table: any;
   rows = [];
   temp = [];
   isLimits: number = 10;
   records: any;
   allInvoice =[];
   allrows = [];
   alldatavalue: any = [];
  constructor(  private _invoice: InvoiceService,
    public snackBar: MdSnackBar,
    private _route: Router, public dialog: MdDialog) { }

  ngOnInit() {
 
    this.getInvoiceData();
  }

  getInvoiceData() {    
    this._invoice.getInvoiceDetails()
      .subscribe(data => {         
        this.allInvoice = data.data; 
        this.rows = this.allInvoice;
      //  console.log(this.rows);   
      })
  }

  // getInvoiceData() { 
  //   debugger;   
  //   this._invoice.getInvoiceDetailsInproccess()
  //     .subscribe(data => {         
  //       this.allInvoice = data.data; 
  //       this.rows = this.allInvoice;
  //     //  console.log(this.rows);   
  //     })
  // }
  

  
  openreview(row) {
    debugger;
     const dialogRef = this.dialog.open(InvoiceSummaryComponent,{data:[
          this.rows = this.allInvoice[row.$$index]["Invoice"]
       ], disableClose: true});
       this.getInvoiceData();
}

}
