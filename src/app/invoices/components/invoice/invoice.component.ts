import { Component, OnInit, ViewChild, ElementRef, Inject} from '@angular/core';
import { InvoiceService } from './../../../services/invoices/invoice.service';
import { TransactionService } from './../../../services/transactions/transaction.service';
import { InvoiceSummaryComponent } from '../invoice-summary/invoice-summary.component';
import { InvoiceValidateComponent } from '../invoice-validate/invoice-validate.component';
import { ProfileService } from './../../../services/profile/profile.service';
import { MdSnackBar } from '@angular/material';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import {MdDialog} from '@angular/material';
import * as moment from 'moment';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss'],
  providers: [InvoiceService, MdSnackBar, ProfileService]
})
export class InvoiceComponent implements OnInit {
@ViewChild('myTable') table: any;
@ViewChild('expandButton') el: ElementRef;
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
strdate:any;
endDate:any;
userData:any = {};
accountNew:boolean = true;
username:boolean = false; 
filteruser: any = {};

 action =[{value:"1", viewValue:"NEFT"},{value:"2",viewValue:"Cheque"},{value:"3",viewValue:"Other"}];

onExpandClick() {
    this.table.rowDetail.expandAllRows();    
  }

  constructor(
    private _invoice: InvoiceService,
    private _alltransaction: TransactionService,
    public snackBar: MdSnackBar,
    private userProfile: ProfileService,
    private _route: Router, public dialog: MdDialog
    ) { }

   ngOnInit() {    
   this.getInvoiceInproccessData();
   this.getUserProfile();
  }

  getInvoiceInproccessData() { 
    //debugger;   
    this._invoice.getInvoiceDetailsInproccess()
      .subscribe(data => {         
        this.allInvoice = data.data;
        this.rows = this.allInvoice;
        this.temp = data.data; 
        let el = this.el.nativeElement;
        setTimeout(function () {
        el.click();
        }, );
        // console.log(this.rows);
      })
  } 

  getUserProfile() {
    this.userProfile.getPersonalInfo() 
      .subscribe(data => {
        this.profile = data.data;      
        if(this.profile.refProfileLoginId == 13){  
           this.accountNew = false;   
         }
      })
  }

  getFilterData(value){
    //  debugger;
     //alert('ok');     
     this.strdate = moment(this.userData.strdate).format('DD-MMM-YYYY');
     this.endDate = moment(value).format('DD-MMM-YYYY');
     this._invoice.getInvoiceDateFilter(this.strdate, this.endDate)
     .subscribe(data => {
       this.rows = data.data;
        if(this.rows === undefined)
       {
          this.rows = [];
          this.snackBar.open("No data found","",{duration:5000});
       } 
     });
  } 

    openreviewValidate(row) {
    //debugger;
    if(this.allInvoice[row.$$index]["Invoice"] == null){
       this.snackBar.open("Something went wrong, Please try again", null, { duration: 3000 });
    }else{
          const dialogRef = this.dialog.open(InvoiceValidateComponent,{data:[
          this.rows = this.allInvoice[row.$$index]["Invoice"]
       ], disableClose: true,});
      //  this.getInvoiceData();
      this. getInvoiceInproccessData();
      this.dialog.afterAllClosed .subscribe(() => {
       this. getInvoiceInproccessData();
      });
     }
  }

    updateInvoiceFilter(event) {
     this.userData.strdate = "";
     this.userData.endDate = "";
     const val = event.target.value.toLowerCase();    
     const temp = this.temp.filter(function(d) {
      return d.invoiceNo.toLowerCase().indexOf(val) !== -1 || !val   
    });
    this.rows = temp;
    this.table.offset = 0;
  }

    selectedIndexChange(val :number ){  
    if(val === 0){
      this.getInvoiceInproccessData();      
    }   
    else if(val===1)
    {
      this.getInvoiceInproccessData() ;
    }
  }

  // -------------- for Account ----------------
setAcValidAmountData(value,row){
this.rows[row.$$index]["paidAmount"]=value;
}
setAcPayMode(value,row){
this.rows[row.$$index]["acpayModeId"]=value;
}
setAcRefPay(value,row){
this.rows[row.$$index]["acRefPay"]=value;
}
setAcReamrk(value,row){
this.rows[row.$$index]["acRemak"]=value;
}

// setAcStatus(value,row){
// //  debugger;
// this.rows[row.$$index]["acStatus"]=value;
// }
// setButton(value,row){
//   this.rows[row.$$index]["button"]=false;
// }

updateInvoicePaid(value){
    // debugger;
    this.model.paidAmount = this.rows[value.$$index]["paidAmount"];
    this.model.payModeId = this.rows[value.$$index]["acpayModeId"];
    this.model.refPaymentNo = this.rows[value.$$index]["acRefPay"];
    this.model.remarks = this.rows[value.$$index]["acRemak"];
    this.model.invoiceNo = this.rows[value.$$index]["invoiceNo"];  
    this._invoice.postInvoicePaid(this.model)
     .subscribe(
      res => {
        if (res && res.message) {
          // this.approved = false;
         this.username = true;
         this.rows[value.$$index]["isActive"] = true;        
         this.snackBar.open(res.message, null, { duration: 3000 });   
        }
        else if (res && res.error && res.error.message) {
         this.rows[value.$$index]["isActive"] = true;
          this.snackBar.open(res.error.message, null, { duration: 3000 });
        }
        else {
          this.snackBar.open("Something went wrong, Please try again", null, { duration: 3000 });
        }
      },
      err => this.snackBar.open(err, null, { duration: 3000 })
     );
  }

}  