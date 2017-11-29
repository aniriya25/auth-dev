import { Component, OnInit, ViewChild, ElementRef,Inject } from '@angular/core';
import * as moment from 'moment';
import { MdDialogRef, MD_DIALOG_DATA, MdSnackBar } from "@angular/material";
import { Router, RouterModule, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-invoice-summary',
  templateUrl: './invoice-summary.component.html',
  styleUrls: ['./invoice-summary.component.scss'],
  providers: [ MdSnackBar]
})
export class InvoiceSummaryComponent implements OnInit {
   @ViewChild('myTable') table: any;
  rows = [];
  temp = [];
  user = [];
  // result = [];
  // strdate:any;
  // endDate:any;
  // id:number;
  // userData:any = {};
  // onExpandClick() {
  //   this.table.rowDetail.expandAllRows();
  // }

  constructor(public dialogRef: MdDialogRef<InvoiceSummaryComponent>, @Inject(MD_DIALOG_DATA) public data:any,
  public snackBar: MdSnackBar, private _route: Router) { 
    debugger;
     //this.temp = this.data;
     this.rows = this.temp;
    // this.user.invoiceNo = this.data[0].Invoice[0]["invoiceNo"];
    // this.user.refTransactionId = this.data[0].Invoice[0]["refTransactionId"];
    // this.user.amount = this.data[0].Invoice[0]["amount"];
    // this.user.userPaidAmount = this.data[0].Invoice[0]["userPaidAmount"];
    // this.user.promisedAmount = this.data[0].Invoice[0]["promisedAmount"];
  }

  ngOnInit() {

  
  }

  //   updateFilter(event) {
  //    this.userData.strdate = "";
  //    this.userData.endDate = "";
  //   const val = event.target.value.toLowerCase();    
  //   const temp = this.temp.filter(function(d) {
  //     return d.transactionId.toLowerCase().indexOf(val) !== -1 || !val || d.patientName.toLowerCase().indexOf(val) !== -1 || !val;      
  //   });
  //   this.rows = temp;
  //   this.table.offset = 0;    
  // }

  // getFilterData(value){
  //    //debugger;
  //    //alert('ok');     
  //    this.strdate = moment(this.userData.strdate).format('DD-MMM-YYYY');
  //    this.endDate = moment(value).format('DD-MMM-YYYY');
  //    this._alltransaction.getDateFilter(0, this.strdate, this.endDate)
  //    .subscribe(data => {
  //      this.rows = data.data; 
  //    });
  // } 


}
