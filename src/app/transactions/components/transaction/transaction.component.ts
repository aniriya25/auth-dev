import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { TransactionService } from './../../../services/transactions/transaction.service';
import { MdSnackBar } from '@angular/material';
import * as moment from 'moment';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss'],
  providers: [TransactionService, MdSnackBar]
})
export class TransactionComponent implements OnInit {
  @ViewChild('myTable') table: any;
  cardNumber: any;
  rows = [];
  temp = [];
  isLimits: number = 10;
  records: any;
  user: any = {};
  identity: any = [];
  isReadOnly: boolean = true;
  edited: boolean = true;
  abc: any;

  // services = [
  //   { value: '0', viewValue: 'OPD' },
  //   { value: '1', viewValue: 'Pharmacy' },
  //   { value: '2', viewValue: 'Diagnostic' }
  // ];
  // speciality = [
  //   { value: '0', viewValue: 'Cardiology' },
  //   { value: '1', viewValue: 'Ent' },
  //   { value: '2', viewValue: 'Gynocologist' },
  //   { value: '3', viewValue: 'Dental' }
  // ];
  constructor(
    private _transaction: TransactionService,
    public snackBar: MdSnackBar,
    private _route: Router,
    private route: ActivatedRoute
  ) {
    
  }

  ngOnInit() {
    this.route.queryParams.subscribe(queryParams => this.abc = queryParams['page']);
     
    this.getTrasnctionData1();  
    this.getTrasnctionData();
    this.getAllServices();
    // this.getIdentityData();
    // this.getPersonalData();

  }

   getAllServices() {
    this._transaction.getAllServices()
      .subscribe(data => {
        // debugger;
        this.user = data.data[0];
        console.log(this.user['name']);
       // this.user.name = data.data[0]["name"];            
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
        //debugger;
        this.rows = data.data;
        //this.user.cardNumber = data.data[0]["cardNumber"];
        //console.log(this.user.cardNumber);
      })
  }

}
