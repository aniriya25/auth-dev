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
  temp = [];
  isLimits: number = 3;
 
  constructor(public dialogRef: MdDialogRef<SummaryComponent>,@Inject(MD_DIALOG_DATA) public data:any = [],
  private _transaction: TransactionService, public snackBar: MdSnackBar, private _route: Router,
  private _profile: ProfileService) {
    debugger;
    this.rows = this.data[0];   
   }

  ngOnInit() {

  }
a
 
}
