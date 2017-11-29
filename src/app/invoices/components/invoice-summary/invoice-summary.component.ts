import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
import * as moment from 'moment';
import { MdSnackBar } from '@angular/material';
import {MdDialog} from '@angular/material';

@Component({
  selector: 'app-invoice-summary',
  templateUrl: './invoice-summary.component.html',
  styleUrls: ['./invoice-summary.component.scss']
})
export class InvoiceSummaryComponent implements OnInit {
   @ViewChild('myTable') table: any;
  rows = [];
  temp = [];
  // result = [];
  // strdate:any;
  // endDate:any;
  // id:number;
  // userData:any = {};
  // onExpandClick() {
  //   this.table.rowDetail.expandAllRows();
  // }

  constructor() { }

  ngOnInit() {

       this.rows = [
     { "company": "", "service": "", "comment": "" },
     ];
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
