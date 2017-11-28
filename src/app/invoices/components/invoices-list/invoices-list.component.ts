import { Component, OnInit, ViewChild} from '@angular/core';
import { MdDialogRef, MD_DIALOG_DATA, MdSnackBar } from "@angular/material";
import { InvoiceService } from './../../../services/invoices/invoice.service';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-invoices-list',
  templateUrl: './invoices-list.component.html',
  styleUrls: ['./invoices-list.component.scss'],
  providers: [MdSnackBar,InvoiceService]
})
export class InvoicesListComponent implements OnInit {
  @ViewChild('myTable') table: any;
   rows = [];
   temp = [];
   isLimits: number = 10;
   records: any;
   invoiceData: any = {};

   
  constructor(private _invoice: InvoiceService,public snackBar: MdSnackBar, private _route: Router) { }

  ngOnInit() {
    // this.rows = [
    //  { "company": "", "service": "", "comment": "" },
    //  ];
    this.getInvoiceData();
  }

  getInvoiceData() {
    debugger;
    this._invoice.getInvoiceDetails()
     .subscribe(data => {         
     // debugger;
       this.invoiceData = data.data;         
     })
 }

}



