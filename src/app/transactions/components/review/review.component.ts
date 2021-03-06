import { Component, OnInit,Inject } from '@angular/core';
import { MdDialogRef, MD_DIALOG_DATA, MdSnackBar } from "@angular/material";
import { TransactionService } from './../../../services/transactions/transaction.service';
import { InvoiceComponent } from './../../../invoices/components/invoice/invoice.component';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { ProfileService } from './../../../services/profile/profile.service';

// import {Invoice}  from './../../../model/invoce';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss'],
  providers: [ MdSnackBar, ProfileService]
})
export class ReviewComponent implements OnInit {
  user: any = {};
  model: any = {}; 
  payableTotalAmount:any = {};
  invoiceData:any = [];
  proData: any = {};

  constructor(public dialogRef: MdDialogRef<ReviewComponent>,@Inject(MD_DIALOG_DATA) public data: any,
  private _transaction: TransactionService, public snackBar: MdSnackBar, private _route: Router,
  private _profile: ProfileService
  ) {

   //alert(this.data.cardOnName);
      //debugger;
      this.user.refCardId = this.data.refCardId;
      this.user.consultationType = this.data.consultationType;
      this.user.serviceId = this.data.serviceId;
      this.user.subServiceId = this.data.subServiceId;
      this.user.refDependentId = this.data.refDependentId;
      this.user.idProofTypeId = this.data.idProofTypeId;
      this.user.doctor = this.data.doctor;
      this.user.payTransectionNo = this.data.payTransectionNo;
      this.user.refPayModeId = this.data.refPayModeId;
      this.user.refcouponId = this.data.refcouponId;

      this.user.cardNumber = this.data.cardNumber;
      this.user.serviceName = this.data.serviceName;
      this.user.subServiceName = this.data.subServiceName;
      this.user.totalAmount = this.data.totalAmount;
      this.payableTotalAmount.discountAmount = this.data.discountAmount;
      this.payableTotalAmount.payableAmount = this.data.payableAmount;
      this.user.name = this.data.UserName;
      this.user.cardOnName = this.data.cardOnName;
      this.user.proName = this.data.proName;
   }

  ngOnInit() {
  }

   submitFrm() {
    //console.log(users);
    //this.user['dob'] = moment(this.user['dob'],"DD/MMM/YYYY").format('DD/MMM/YYYY');
    //debugger;
    this.model.refCardId =  this.user.refCardId;
    this.model.serviceId = this.user.serviceId;
    this.model.consultationType = this.user.consultationType;
    this.model.subServiceId = this.user.subServiceId;
    this.model.refDependentId = this.user.refDependentId;
    this.model.idProofTypeId = this.user.idProofTypeId;
    this.model.doctor = this.user.doctor;
    this.model.payTransectionNo = this.user.payTransectionNo;
    this.model.totalAmount = this.user.totalAmount;
    this.model.discountAmount = this.payableTotalAmount.discountAmount;
    this.model.payableAmount = this.payableTotalAmount.payableAmount;
    this.model.refPayModeId = this.user.refPayModeId;
    this.model.refcouponId = this.user.refcouponId;
    this._transaction.updateTransaction(this.model)
      .subscribe(data => {    
         //debugger;
         if(data) {        
         this.snackBar.open("Updated successfully","",{duration:5000});
         setTimeout((_route: Router) => {
           this.dialogRef.close();             
           this._route.navigate(['dashboard/transactions/transactionInvoice']);
          }, 5100);
          this.invoiceData = data.data;
          return false;
        }
      }, Error => {
        this.snackBar.open("Somthing went wrong!","",{duration:5000});
      });     
  }
}
