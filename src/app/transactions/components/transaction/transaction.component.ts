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
@Component({
  selector: 'app-transaction',
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
  alldatavalue: object;
  model: any = {};
  IdValue: any;
  payableTotalAmount:any = {};
  button:any = true;
  amoutP:any = false;
  
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
     const dialogRef = this.dialog.open(ReviewComponent,{data:{
       
       refCardId: this.user.refCardId,
       serviceId: this.user.serviceId,
       subServiceId: this.user.subServiceId,
       refDependentId: this.user.refDependentId,
       idProofTypeId: this.user.idProofTypeId,
       docter: this.user.docter,
       payTransectionNo: this.user.payTransectionNo,
       refPayModeId: this.user.refPayModeId,
       refcouponId:this.user.refcouponId,

       cardNumber: this.user.cardNumber,
       serviceName: this.user.serviceName,
       subServiceName: this.user.subServiceName, 
       totalAmount: this.user.totalAmount,
       discountAmount: this.user.discountAmount,
       payableAmount: this.user.payableAmount, 
       UserName: this.user.name,
       cardOnName: this.user.cardOnName,       
  }});
  }
   myControl: FormControl = new FormControl();
   paymentMode = [
    { refPayModeId: 1, name: "Cash" },   
    { refPayModeId: 2, name: "Credit Card"},
    { refPayModeId: 3, name: "Debt Card"},
    { refPayModeId: 4, name: "Paytm Wallet"},
    { refPayModeId: 5, name: "Others"}
  ]
  ngOnInit() {
    //debugger;
    this.getIdentityData();
    this.route.queryParams.subscribe(queryParams => this.abc = queryParams['page']);  
    if(this.abc != "" && this.abc != undefined)
    {
       this.user.cardNumber = this.abc;
       this.getTrasnctionData1();
     }  
    this.kycshow = false;
    this.IdValue = false;
    this.getPayableAmountData();
  }
getIdentityData() {
    this._transaction.getIdentity()
      .subscribe(data => {         
        this.Identities = data.data; 
        //console.log(this.Identities);   
      })
  }

getPayableAmountData() {
      this._transaction.getpayableAmount({totalAmount: this.user.totalAmount})
      .subscribe(data => {
       // debugger;       
        this.payableTotalAmount = data.data;
        this.user.discountAmount = data.data["discountAmount"];
        this.user.payableAmount = data.data["payableAmount"];
        if(this.payableTotalAmount.payableAmount === 0){          
          this.amoutP = true;
        }else{
           this.amoutP = false;
        }
        console.log(this.payableTotalAmount);
      })
  }

  getTrasnctionData1() {
    //debugger;
    if(this.user.cardNumber.length == 6)
    {
      this._transaction.getCouponTransaction(this.user.cardNumber)
      .subscribe(data => {
       //debugger;
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
       this.user.cardOnName =  this.alldatavalue["Members"].filter(function (a) { return a.relationshipId === 1;})[0]["name"];
      })  
    }
    else if(this.user.cardNumber.length == 16){
      this._transaction.getTransaction(this.user.cardNumber)
      .subscribe(data => {
       debugger;
       this.alldatavalue = data.data;
       this.user.refCardId = data.data["refCardId"];
       this.user.refcouponId = data.data["refcouponId"];
       this.rows = data.data["Members"];
       this.services = data.data["Services"];
       this.user.cardOnName =  this.alldatavalue["Members"].filter(function (a) { return a.relationshipId === 1;})[0]["name"];    
      })
    }else{
      this.snackBar.open("Please enter the valid Card No / Cupon No.","",{duration:5000});
    }   
  }
  kycShow(value) {
    //debugger;
    this.kycshow = true;
    this.user.idProofTypeId = value.idProofTypeId;
    this.user.idProofNumber = value.idProofNumber;
    this.user.idProoImg = value.idProoImg;
    this.user.name = value.name;
    this.user.
    this.user.relation = value.relation;
    this.user.refDependentId = value.refDependentId;   
    if(this.user.idProoImg === ""){
    this.IdValue = true;
    }
  }
  showpay(){
    this.payshow = true;
    this.button = false;
  }
  getSubService(value){
   this.speciality = this.alldatavalue["SubServices"].filter(function (a) { return a.serviceId === value; });

   this.user.serviceName=  this.alldatavalue["Services"].filter(function (a) { return a.serviceId === value; })[0]["serviceName"]; 
   
  }  
   // edit readonly fields
   editFrm() {
     this.isReadOnly = !this.isReadOnly;
     this.edited = false;  
  }

    getSubServiceName(value){
      this.user.subServiceName=  this.alldatavalue["SubServices"].filter(function (a) { return a.subServiceId === value; })[0]["subServiceName"];
    }    
  
}