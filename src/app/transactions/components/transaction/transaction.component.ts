import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { TransactionService } from './../../../services/transactions/transaction.service';
import { ProfileService } from './../../../services/profile/profile.service';
import { MdSnackBar } from '@angular/material';
import * as moment from 'moment';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import {FormControl} from '@angular/forms';

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
  alldatavalue: object;
  model: any = {};
  
  constructor(
    private _transaction: TransactionService,
    private _profile: ProfileService,
    public snackBar: MdSnackBar,
    private _route: Router,
    private route: ActivatedRoute,

  ) { }

   myControl: FormControl = new FormControl();
   paymentMode = [
    { refPayModeId: 1, name: "Cash" },
    { refPayModeId: 2, name: "Debt Card"},
    { refPayModeId: 3, name: "Credit Card"},
    { refPayModeId: 4, name: "Paytm Wallet"},
    { refPayModeId: 5, name: "Others"}
  ]

  ngOnInit() {
    //debugger;
    this.getIdentityData();
    this.route.queryParams.subscribe(queryParams => this.abc = queryParams['page']);
    if (this.user.cardNumber != "" && this.user.cardNumber != undefined) {
      this.getTrasnctionData1();
    }
    else if (this.abc != "" && this.abc != undefined) {
      this.getTrasnctionData();      
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

  getTrasnctionData() {
    this._transaction.getTransaction(this.abc)
      .subscribe(data => {
       this.alldatavalue= data.data;
       this.rows = data.data["Members"];
       this.services = data.data["Services"];
       //debugger
       this.user.cardNumber = data.data["cardNumber"];
      })
  }

  getTrasnctionData1() {
    this._transaction.getTransaction(this.user.cardNumber)
      .subscribe(data => {
       debugger;
       this.alldatavalue= data.data;
       this.user.refCardId =data.data["refCardId"];
       this.rows = data.data["Members"];
       this.services = data.data["Services"];
      })
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
