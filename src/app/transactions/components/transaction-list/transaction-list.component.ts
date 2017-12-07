import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TransactionService } from './../../../services/transactions/transaction.service';
import { InvoiceService } from './../../../services/invoices/invoice.service';
import {MdDialog} from '@angular/material';
import { SummaryComponent } from '../summary/summary.component';  
import * as moment from 'moment';
import { MdSnackBar } from '@angular/material';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss'],
  providers: [TransactionService, MdSnackBar, InvoiceService]
})
export class TransactionListComponent implements OnInit {
 @ViewChild('myTable') table: any;
 @ViewChild('expandButton') el: ElementRef;
  rows = [];
  temp = [];
  selected = [];
  isLimits: number = 10;
  records: any;
  allTransction: object = {};
  outletId: number;
  user: any = {};
  filteruser: any = {};
  InvoiceData:any;
  abc:any;
  allrows = [];
  alldatavalue: any = [];
  result = [];
  strdate:any;
  endDate:any;
  id:number;
  userData:any = {};
  
  onExpandClick() {
    this.table.rowDetail.expandAllRows();
  }
  constructor(private _alltransaction: TransactionService, private _invoice: InvoiceService, public dialog: MdDialog, public snackBar: MdSnackBar) { }
  
  ngOnInit() {  
     this.getTransctionData();    
  }
  
 getTransctionInvoiceData(id) {
     // alert(value);
     // debugger;
      this.user.transactionId = id;
      this._alltransaction.getTransactionInvoce(this.user.transactionId)
      .subscribe(data => {   
       this.user.path = data.data["path"];
       window.open(this.user.path).print();         
      })     
  }

  getPaidInvoiceData() {
      debugger;
      this._invoice.getPaidInvoiceOutlet()
      .subscribe(data => {   
       this.rows = data.data;        
      }) 
  } 

getFilterData(value){
     //debugger;
     //alert('ok');     
     this.strdate = moment(this.userData.strdate).format('DD-MMM-YYYY');
     this.endDate = moment(value).format('DD-MMM-YYYY');
     this._alltransaction.getDateFilter(0, this.strdate, this.endDate)
     .subscribe(data => {
       this.rows = data.data; 
     });
  }
   
// getPrint()
//   {
//       var printPage = window.open(this.user.path, '_blank');
//   }

  getTransctionData() {
      this._alltransaction.getAllTransactionList()
      .subscribe(data => {   
       //debugger;
       this.rows = data.data;  
       this.temp = data.data;
      //  console.log("------------- All Transaction Data -------");
      //  console.log(this.temp);
       let el = this.el.nativeElement;
       setTimeout(function () {
       el.click();
       }, );    
      }) 
  }

  onSelect({ selected }) {
    //console.log('Select Event', this.selected);
    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
    this.alldatavalue = this.selected;
  }

  onActivate(event) {
    console.log('Activate Event', event);
  }
  
  openreview() {
       //debugger;
       if(this.selected.length == 0)
       {
          this.snackBar.open("Please select any Transaction before Generate Invoice","",{duration:5000});
       }else{       
        const dialogRef = this.dialog.open(SummaryComponent,{data:[
        this.allrows = this.alldatavalue
       ], disableClose: true}); 
       }
  }

   updateFilter(event) {
     this.userData.strdate = "";
     this.userData.endDate = "";
     const val = event.target.value.toLowerCase();    
     const temp = this.temp.filter(function(d) {
      return d.transactionId.toLowerCase().indexOf(val) !== -1 || !val 
      || d.patientName.toLowerCase().indexOf(val) !== -1 || !val 
      || d.outletName.toLowerCase().indexOf(val) !== -1 || !val 
      || d.service.toLowerCase().indexOf(val) !== -1 || !val 
      || d.cardNumber.toLowerCase().indexOf(val) !== -1 || !val
      || d.contactNo.toLowerCase().indexOf(val) !== -1 || !val
      || d.gender.toLowerCase().indexOf(val) !== -1 || !val
      || d.idProofType.toLowerCase().indexOf(val) !== -1 || !val;  
    });
    this.rows = temp;
    this.table.offset = 0;
  }

  selectedIndexChange(val :number ){  
    if(val === 0){
      this.getTransctionData();      
    }   
    else if(val===1)
    {
      this.getPaidInvoiceData() ;
    }
  }


}