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
  service = [];
  cardData = [];
  temp = [];
  isLimits: number = 10;
  records: any;
  user: any = {};
  identity: any = [];
  isReadOnly: boolean = true;
  edited: boolean = true;
  abc: any;
  selctedServices: any;

  // services = [
  //   { value: '0', viewValue: 'OPD' },
  //   { value: '1', viewValue: 'Pharmacy' },
  //   { value: '2', viewValue: 'Diagnostic' }
  // ];
  speciality = [
    { value: '0', viewValue: 'Cardiology' },
    { value: '1', viewValue: 'Ent' },
    { value: '2', viewValue: 'Gynocologist' },
    { value: '3', viewValue: 'Dental' }
  ];
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
    this.getServiceData();
    this.getTrasnctionData1();  
    this.getTrasnctionData();
    
    // this.getIdentityData();
    // this.getPersonalData();

  }

  getServiceData() {
    this._transaction.getServiceList()
      .subscribe(data => {
        debugger;
        this.service = data.data;
        //this.user.cardNumber = data.data[0]["cardNumber"];
       // console.log(this.user.cardNumber);
      })
  }

  getTrasnctionData() {
    this._transaction.getTransaction(this.abc)
      .subscribe(data => {
        //debugger;
        this.rows = data.data;
        this.user.cardNumber = this.rows[0]["cardNumber"];
        console.log(this.user.cardNumber);
      })
  }
  
getTrasnctionData1() {
    this._transaction.getTransaction(this.user.cardNumber)
      .subscribe(data => {
        //debugger;
        this.cardData = data.data;
        //this.user.cardNumber = data.data[0]["cardNumber"];
        //console.log(this.user.cardNumber);
      })
  }

  getIdentityData() {
    this._profile.getIdentity()
      .subscribe(data => {
        this.user = data.data;
        //console.log(this.user);
        this.user.forEach((element: any) => {
          //debugger;
          //console.log(element.idNo);
          switch (element.refIdentityTypeId) {
            case 1:
              this.user.addharNo = element.idNo;
              //console.log(this.user.addharNo);
              break;
            case 2:
              this.user.passportNumber = element.idNo;
              this.user.passportExpDate = moment(element.expiryDate, "DD/MMM/YYYY").format('DD/MMM/YYYY');
              break;
            case 3:
              this.user.panNumber = element.idNo;
              this.user.pancardPix = element.imageUrl;
              break;
            case 4:
              this.user.voterIdNumber = element.idNo;
              break;
            case 5:
              this.user.dlNumber = element.idNo;
              this.user.DrivingExpDate = moment(element.expiryDate, "DD/MMM/YYYY").format('DD/MMM/YYYY');
              break;
          }
        });

      });
  }

  submitFrm(users: any) {
    users.forEach(element => {
      //debugger;
      switch (element.refIdentityTypeId) {
        case 1:
          element.idNo = users.addharNo;
          element.imageUrl = users.adharPix;
          this.identity.push({ idNo: element.idNo, imageUrl: element.imageUrl });
          break;
        case 2:
          element.idNo = users.passportNumber;
          element.imageUrl = users.passportPix;
          element.expiryDate = moment(users.passportExpDate, "DD/MMM/YYYY").format('DD/MMM/YYYY');
          this.identity.push({ idNo: element.idNo, expiryDate: element.expiryDate, imageUrl: element.imageUrl });
          break;
        case 5:
          element.idNo = users.dlNumber;
          element.imageUrl = users.drivingPix;
          element.expiryDate = moment(users.DrivingExpDate, "DD/MMM/YYYY").format('DD/MMM/YYYY');
          this.identity.push({ idNo: element.idNo, expiryDate: element.expiryDate, imageUrl: element.imageUrl });
          break;
        case 3:
          element.idNo = users.panNumber;
          element.imageUrl = users.pancardPix;
          this.identity.push({ idNo: element.idNo, imageUrl: element.imageUrl });
          break;
      }
    });

    this._profile.updateIdentity(this.identity)
      .subscribe(data => {
        if (data.message) {
          this.snackBar.open("Updated successfully", "", { duration: 5000 });
          return false;
        }
      }, Error => {
        this.snackBar.open("Somthing went wrong!", "", { duration: 5000 });
      });

    this.identity = [];

    users['dob'] = moment(users['dob'], "DD/MMM/YYYY").format('DD/MMM/YYYY');
    this._profile.updatePersonalInfo(users)
      .subscribe(data => {
        if (data.message) {
          this.snackBar.open("Updated successfully", "", { duration: 5000 });
          return false;
        }
      }, Error => {
        this.snackBar.open("Somthing went wrong!", "", { duration: 5000 });
      });
  }

  editFrm() {
    this.isReadOnly = !this.isReadOnly;
    this.edited = false;
  }

  getFileFx(eve, id) {
    //console.log(eve.target.value);
    // console.log(id);
    switch (id) {
      case 1:
        this.user['adharPix'] = eve.target.value;
        break;
      case 2:
        this.user['passportPix'] = eve.target.value;
        break;
      case 5:
        this.user['drivingPix'] = eve.target.value;
        break;
      case 3:
        this.user['pancardPix'] = eve.target.value;
        break;
    }
  }



  getPersonalData() {
    this._profile.getPersonalInfo()
      .subscribe(data => {
        this.user = data.data;
        // this.user['dob'] = moment(this.user['dob'],"DD/MM/YYYY").format('MM/DD/YYYY');
        console.log(data.data);
      });
  }




}
