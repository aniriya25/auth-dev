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
  user: any = {};
  amount:number = 0;
  promisedAmount:number = 0;
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
    this.rows = this.data[0];
  }

  ngOnInit() {
    this.getSum(this.user.amount);
  }

  getSum(amount) {
    debugger;
    for (let i = 0; i < this.rows.length; i++) {
      this.amount += this.rows[i]['amount'];
      this.promisedAmount += this.rows[i]['promisedAmount'];
      console.log(this.amount);
     }
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
