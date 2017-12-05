import { Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
import * as moment from 'moment';
import { MdDialogRef, MD_DIALOG_DATA, MdSnackBar } from "@angular/material";
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { InvoiceService } from './../../../services/invoices/invoice.service';
import { ProfileService } from './../../../services/profile/profile.service';

@Component({
  selector: 'app-invoice-validate',
  templateUrl: './invoice-validate.component.html',
  styleUrls: ['./invoice-validate.component.scss'],
  providers: [MdSnackBar, InvoiceService, ProfileService]
})
export class InvoiceValidateComponent implements OnInit {
  @ViewChild('myTable') table: any;
  @ViewChild('expandButton') el: ElementRef;
  rows = [];
  temp = [];
  user: any = {};
  status = [];
  model: any = {};
  profile:any = {}; 
  approved:boolean = true;
  username:boolean = false;  
  PayMode:boolean = false;
  account:boolean = false;
  accountNew:boolean = false;
  button:any = false;
  validateAmount:any = false;
  remarks:any;
  validText:any;
  remarkText:any;
  validate:boolean = true;
  afterValidate:boolean = false;
  // validateBy:boolean = false;
  isActive:boolean = false;


 action =[{value:"1", viewValue:"NEFT"},{value:"2",viewValue:"Cheque"},{value:"3",viewValue:"Other"}];

  onExpandClick() {
    this.table.rowDetail.expandAllRows();
  }
  constructor(public dialogRef: MdDialogRef<InvoiceValidateComponent>, @Inject(MD_DIALOG_DATA) public data: any,
    public snackBar: MdSnackBar, private _route: Router, private _invoice: InvoiceService, private userProfile: ProfileService) {
  }

  ngOnInit() {
    this.getInvoiceData();
    this.getStatusData();
    this.getUserProfile();
  }

   getUserProfile() {
    this.userProfile.getPersonalInfo() 
      .subscribe(data => {
        this.profile = data.data;             
         if(this.profile.refProfileLoginId == 554){        
          this.PayMode = true;
          this.account = true;
           this.accountNew = false;  
           this.validate = false;
             
         }
        
      })
  }

  getInvoiceData() {
    //debugger;
    this.rows = this.data[0];
    let el = this.el.nativeElement;
    setTimeout(function () {
      el.click();
    }, );
  }

  getStatusData() {
    this._invoice.getStatus()
      .subscribe(data => {
        // debugger;
        this.status = data.data;  
        this.status=this.status.filter((item)=>{
          return item.id>2;
        })       
      });    
  }
  
// ------------- for Validator -------------
setValidAmountData(value,row){
this.rows[row.$$index]["validAmount"]=value;

}
setReamrk(value,row){
this.rows[row.$$index]["remak"]=value;
}

setStatus(value,row){
//  debugger;
this.rows[row.$$index]["status"]=value;
}

updateTrans(value,status) {
    // debugger;
   // this.rows[value.$$index]["status"]=5;
    this.model.validAmount = this.rows[value.$$index]["validAmount"];
    this.model.remarks = this.rows[value.$$index]["remak"];
  //  this.model.validateBy = this.rows[0].validateBy;      
    if(status === "approved")
    {
      this.model.refStatusId = 5;// this.rows[value.$$index]["status"];
    }
    if(status === "reject")
    {
      this.model.refStatusId = 4;
    } 
    //debugger;
     this._invoice.updateValidateAmount(this.model,this.rows[value.$$index]["refTransactionId"])
     .subscribe(
      res => {
          if (res && res.message) {
          this.username = true;     
          this.rows[value.$$index]["isActive"] = true;
          this.rows[value.$$index]["validateAmount"] = this.model.validAmount;
          this.rows[value.$$index]["remarks"] = this.model.remarks;
          debugger;          
          this.rows[value.$$index]["validateBy"] =  this.profile.firstName+ " "+this.profile.lastName  ;  
          this.snackBar.open(res.message, null, { duration: 3000 });   
        }
        else if (res && res.error && res.error.message) {
          this.rows[value.$$index]["isActive"] = true;
          // this.getInvoiceData();
          // this.validateBy = true;
       
          this.snackBar.open(res.error.message, null, { duration: 3000 });
        }
        else {
          this.snackBar.open("Something went wrong, Please try again", null, { duration: 3000 });
        }
      },
      err => this.snackBar.open(err, null, { duration: 3000 })

     );
  }


  // // -------------- for Account ----------------
// setAcValidAmountData(value,row){
// this.rows[row.$$index]["acValidAmount"]=value;
// }
// setAcReamrk(value,row){
// this.rows[row.$$index]["acRemak"]=value;
// }

// setAcStatus(value,row){
// //  debugger;
// this.rows[row.$$index]["acStatus"]=value;
// }

// setAcRefPay(value,row){
// // debugger;
// this.rows[row.$$index]["acRefPay"]=value;
// }

// setAcPayMode(value,row){
// this.rows[row.$$index]["acpayModeId"]=value;
// }

// setButton(value,row){
//   this.rows[row.$$index]["button"]=false;
// }

  //   updateAccountTrans(value) {     
  //   debugger;
  //   this.model.paidAmount = this.rows[value.$$index]["acValidAmount"];
  //   this.model.remarks = this.rows[value.$$index]["acRemak"];
  //   this.model.refPaymentNo = this.rows[value.$$index]["acRefPay"];
  //   this.model.refStatusId = this.rows[value.$$index]["acStatus"];
  //   this.model.payModeId = this.rows[value.$$index]["acpayModeId"];
  //   // debugger;
  //    this._invoice.updateAccountAmount(this.model,this.rows[value.$$index]["refTransactionId"])
  //    .subscribe(
  //     res => {
  //       if (res && res.message) {
  //         // this.approved = false;
  //        this.username = true;
  //        this.rows[value.$$index]["isActive"] = true;
        
  //        this.snackBar.open(res.message, null, { duration: 3000 });   
  //       }
  //       else if (res && res.error && res.error.message) {

  //        this.rows[value.$$index]["isActive"] = true;

  //         this.snackBar.open(res.error.message, null, { duration: 3000 });
  //       }
  //       else {
  //         this.snackBar.open("Something went wrong, Please try again", null, { duration: 3000 });
  //       }
  //     },
  //     err => this.snackBar.open(err, null, { duration: 3000 })

  //    );
  // }
  
}