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
  services =[];
  isLimits: number = 10;
  records: any;
  user: any = {};
  identity: any = [];
  isReadOnly: boolean = true;
  edited: boolean = true;
  abc: any;

  constructor(
    private _transaction: TransactionService,
    private _profile: ProfileService,
    public snackBar: MdSnackBar,
    private _route: Router,
    private route: ActivatedRoute
  ) {
    
  }

  ngOnInit() {
    this.route.queryParams.subscribe(queryParams => this.abc = queryParams['page']);
     
    this.getTrasnctionData1();  
    this.getTrasnctionData();
    this.getServicesData();
    // this.getIdentityData();
    // this.getPersonalData();
  }
   getServicesData() {
    this._transaction.getServiceList()
      .subscribe(data => {
        debugger;
        this.services = data.data;       
      })
  }

  getTrasnctionData() {
    this._transaction.getTransaction(this.abc)
      .subscribe(data => {
        //debugger;
        this.rows = data.data;
        this.user.cardNumber = data.data[0]["cardNumber"];
        console.log(this.user.cardNumber);
      })
  }
  
getTrasnctionData1() {
    this._transaction.getTransaction(this.user.cardNumber)
      .subscribe(data => {
       // debugger;
        this.rows = data.data;
        //this.user.cardNumber = data.data[0]["cardNumber"];
        //console.log(this.user.cardNumber);
      })
  }


}
