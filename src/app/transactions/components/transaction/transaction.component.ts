import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { TransactionService } from './../../../services/transactions/transaction.service';
import { ProfileService } from './../../../services/profile/profile.service';
import { MdSnackBar } from '@angular/material';
import * as moment from 'moment';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {MdDialog} from '@angular/material';
import { RejectComponent } from '../reject/reject.component';
import { ReviewComponent } from '../review/review.component';
import swal from 'sweetalert2';
@Component({
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss'],
  providers: [TransactionService, ProfileService, MdSnackBar]
})
export class TransactionComponent implements OnInit {
  @ViewChild('myTable') table: any;
  cardNumber: any;
  rows = [];
  temp = [];
  Identities = [];
  services: object;
  speciality: object;
  isLimits: number = 10;
  records: any;
  user: any = {};
  identity: any = [];
  isReadOnly: boolean = true;
  edited: boolean = true;
  abc: any;
  kycshow: boolean = false;
  payshow: boolean =false;
  demo: boolean =false;
  alldatavalue: object;
  model: any = {};
  verified: any= true;
  constructor(
    private _transaction: TransactionService,
    private _profile: ProfileService,
    public snackBar: MdSnackBar,
    private _route: Router,
    private route: ActivatedRoute,
    public dialog: MdDialog
  ) { }
 
  openDialog() {
    const dialogRef = this.dialog.open(RejectComponent);
    
  }
  openreview() {
    const dialogRef = this.dialog.open(ReviewComponent);
  }
  
   myControl: FormControl = new FormControl();
   paymentMode = [
    { refPayModeId: 1, name: "Cash" },
    { refPayModeId: 2, name: "Debt Card"},
    { refPayModeId: 3, name: "Credit Card"},
    { refPayModeId: 4, name: "Paytm Wallet"},
    { refPayModeId: 5, name: "Others"}
  ]

  ngOnInit() {
    debugger;
    this.getIdentityData();
    this.route.queryParams.subscribe(queryParams => this.abc = queryParams['page']);  
    if(this.abc != "" && this.abc != undefined)
    {
       this.user.cardNumber = this.abc;
       this.getTrasnctionData1();
     }  
    this.kycshow = false;    
  }

getIdentityData() {
    this._transaction.getIdentity()
      .subscribe(data => {
       // debugger;       
        this.Identities = data.data;       
      })
  }

  getTrasnctionData1() {
    //debugger
    if(this.user.cardNumber.length <= 7)
    {
      this._transaction.getCouponTransaction(this.user.cardNumber)
      .subscribe(data => {
       debugger;
       this.alldatavalue = data.data;
       this.user.refCardId = data.data["refCardId"];
       this.user.refcouponId =data.data["refcouponId"];
       this.rows = data.data["Members"];
       this.services = data.data["Services"];
       this.user.serviceId = this.services[0]["serviceId"];
       this.speciality= data.data["SubServices"];
       this.user.subServiceId = this.speciality[0]["subServiceId"];
       this.user.totalAmount = data.data["totalAmount"];
       this.user.discountAmount = data.data["discountAmount"];
       this.user.payableAmount = data.data["payableAmount"];
      })  
    }
    else{
      this._transaction.getTransaction(this.user.cardNumber)
      .subscribe(data => {
       debugger;
       this.alldatavalue= data.data;
       this.user.refCardId =data.data["refCardId"];
       this.user.refcouponId =data.data["refcouponId"];
       this.rows = data.data["Members"];
       this.services = data.data["Services"];    
    
      })
    }         
  }

  kycShow(value) {
    //debugger;
    this.kycshow = true;
    this.user.idProofTypeId = value.idProofTypeId;
    this.user.idProofNumber = value.idProofNumber;
    this.user.idProoImg = value.idProoImg;
    this.user.name = value.name;
    this.user.relation = value.relation;
    this.user.refDependentId = value.refDependentId;
  }
  pay(){
    this.payshow = true;
    this.verified = false;
    
  }
  alertpop(){
    this.demo = true;
  }
  getSubService(value){
    //alert(value);
    //debugger
    this.speciality = this.alldatavalue["SubServices"].filter(function (a) { return a.serviceId === value; });
  }

 
 submitFrm() {
    //console.log(users);
    //this.user['dob'] = moment(this.user['dob'],"DD/MMM/YYYY").format('DD/MMM/YYYY');
    //debugger;
    this.model.refCardId =  this.user.refCardId;
    this.model.serviceId = this.user.serviceId;
    this.model.subServiceId = this.user.subServiceId;
    this.model.refDependentId = this.user.refDependentId;
    this.model.idProofTypeId = this.user.idProofTypeId;
    this.model.docter = this.user.docter;
    this.model.payTransectionNo = this.user.payTransectionNo;
    this.model.totalAmount = this.user.totalAmount;
    this.model.discountAmount = this.user.discountAmount;
    this.model.payableAmount = this.user.payableAmount;
    this.model.refPayModeId = this.user.refPayModeId;
    this.model.refcouponId = this.user.refcouponId;


    this._transaction.updateTransaction(this.model)
      .subscribe(data => {    
         if(data.message) {
          this.snackBar.open("Updated successfully","",{duration:5000});
          return false;
        }
      }, Error => {
        this.snackBar.open("Somthing went wrong!","",{duration:5000});
      });     
  }
  
   // edit readonly fields
   editFrm() {
     this.isReadOnly = !this.isReadOnly;
     this.edited = false; 
   }

}


