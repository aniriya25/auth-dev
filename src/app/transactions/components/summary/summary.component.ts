import { Component, OnInit,Inject } from '@angular/core';
import { MdDialogRef, MD_DIALOG_DATA, MdSnackBar } from "@angular/material";
import { TransactionService } from './../../../services/transactions/transaction.service';
import { InvoiceComponent } from './../../../invoices/components/invoice/invoice.component';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { ProfileService } from './../../../services/profile/profile.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
  providers: [ MdSnackBar, ProfileService]
})

export class SummaryComponent implements OnInit {

  // @ViewChild('myTable') table: any;
  rows = [];
  InvoiceViewData:any;
  user: any = {};
  allrows = [];
  //temp = [];
  //isLimits: number = 3;
 
  constructor(public dialogRef: MdDialogRef<SummaryComponent>,@Inject(MD_DIALOG_DATA) public data:any = [],
  private _transaction: TransactionService, public snackBar: MdSnackBar, private _route: Router,
  private _profile: ProfileService) {
    //debugger;
    this.allrows = this.rows;
    this.rows = this.data[0];     

   }
   
   getSum(totalAmount) : number {
    let sum = 0;
    for(let i = 0; i < this.rows.length; i++) {
      sum += this.rows[i]['totalAmount'];
    }
    return sum;
  }

  ngOnInit() {
    this.getInvoiceViewData();
  }

 getInvoiceViewData() {
    debugger;
    this._transaction.getViewInvoicedata()
      .subscribe(data => {         
        this.InvoiceViewData = data.data;
        this.user.companyName = data.data['companyName']; 
        this.user.companyAddress = data.data['companyAddress'];
        this.user.companyPhoneNo = data.data['companyPhoneNo'];
        this.user.companyLogo = data.data['companyLogo'];
        this.user.outletName = data.data['outletName'];
        this.user.outletAddress = data.data['outletAddress'];
        this.user.outletPhoneNo = data.data['outletPhoneNo'];
        this.user.outletLogo = data.data['outletLogo'];
        this.user.outletGstNo = data.data['outletGstNo'];
        this.user.hsnCode = data.data['hsnCode'];
        this.user.hsnName = data.data['hsnName'];

        console.log(this.InvoiceViewData);   
      })
  }


}
