import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { TransactionService } from './../../../services/transactions/transaction.service';
import { ProfileService } from './../../../services/profile/profile.service';
import { MdSnackBar } from '@angular/material';
import * as moment from 'moment';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';

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
  constructor(
    private _transaction: TransactionService,
    private _profile: ProfileService,
    public snackBar: MdSnackBar,
    private _route: Router,
    private route: ActivatedRoute,

  ) { }

  ngOnInit() {
    //debugger;
    this.route.queryParams.subscribe(queryParams => this.abc = queryParams['page']);
    if (this.user.cardNumber != "" && this.user.cardNumber != undefined) {
      this.getTrasnctionData1();
    }
    else if (this.abc != "" && this.abc != undefined) {
      this.getTrasnctionData();
    }
  
    this.getIdentityData();
      this.kycshow = false;
  }

getIdentityData() {
    this._transaction.getIdentity()
      .subscribe(data => {       
        this.Identities = data.data;       
      })
  }

  getTrasnctionData() {
    this._transaction.getTransaction(this.abc)
      .subscribe(data => {
       this.alldatavalue= data.data;
       this.rows = data.data["Members"];
       this.services = data.data["Services"];
       debugger
        this.user.cardNumber = data.data["cardNumber"];
      })
  }

  getTrasnctionData1() {
    this._transaction.getTransaction(this.user.cardNumber)
      .subscribe(data => {
       //debugger;
       this.alldatavalue= data.data;
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
  }

  getSubService(value){
    //alert(value);
    //debugger
    this.speciality = this.alldatavalue["SubServices"].filter(function (a) { return a.serviceId === value; });
  }


}
