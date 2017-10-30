import { Component, OnInit } from '@angular/core';
import { ProfileService } from './../../../services/profile/profile.service';
import 'rxjs/add/operator/map';
import { MdSnackBar } from '@angular/material';
import * as moment from 'moment';

@Component({
  selector: 'app-identity',
  templateUrl: './identity.component.html',
  styleUrls: ['./identity.component.css'],
  providers: [ProfileService, MdSnackBar]
})
export class IdentityComponent implements OnInit {
 user : any = [];
 identity: any = [];
 isReadOnly:boolean = true;
 edited:boolean = true;

  constructor(
    private _profile: ProfileService,
    public snackBar: MdSnackBar
  ) {}

  ngOnInit() {
    //console.log(moment().format('DDMMYYYY'));
    // get identity data
    this.getIdentityData();  
  }

  // get identity data 
  getIdentityData() {
    this._profile.getIdentity()
    .subscribe(data => {
      this.user = data.data;  
      this.user.forEach((element:any) => {
        //debugger;
        //console.log(element.idNo);
        switch(element.refIdentityTypeId) {
          case 1:
            this.user.addharNo = element.idNo;
            //console.log(this.user.addharNo);
            break;
          case 2: 
            this.user.passportNumber = element.idNo;
            this.user.passportExpDate = moment(element.expiryDate,"DD/MMM/YYYY").format('DD/MMM/YYYY');
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
            this.user.DrivingExpDate = moment(element.expiryDate,"DD/MMM/YYYY").format('DD/MMM/YYYY');
            break;         
        }
      });

    });
  }
  
  // submit form
  submitFrm(users: any) {
    users.forEach(element => {
      //debugger;
      switch(element.refIdentityTypeId) {
        case 1:
          element.idNo = users.addharNo;
          element.imageUrl = users.adharPix;
          this.identity.push({idNo: element.idNo, imageUrl: element.imageUrl});          
          break; 
        case 2: 
          element.idNo = users.passportNumber;
          element.imageUrl = users.passportPix;
          element.expiryDate = moment(users.passportExpDate,"DD/MMM/YYYY").format('DD/MMM/YYYY');
          this.identity.push({idNo: element.idNo, expiryDate: element.expiryDate, imageUrl: element.imageUrl});
          break;
        case 5:
          element.idNo = users.dlNumber;
          element.imageUrl = users.drivingPix;
          element.expiryDate = moment(users.DrivingExpDate,"DD/MMM/YYYY").format('DD/MMM/YYYY');
          this.identity.push({idNo: element.idNo, expiryDate: element.expiryDate, imageUrl: element.imageUrl});
          break;
         case 3:
          element.idNo = users.panNumber;
          element.imageUrl = users.pancardPix;
          this.identity.push({idNo: element.idNo, imageUrl: element.imageUrl});
          break;
      }
    });

    this._profile.updateIdentity(this.identity)
     .subscribe(data => {    
         if(data.message) {
          this.snackBar.open("Updated successfully","",{duration:5000});
          return false;
        }
      }, Error => {
        this.snackBar.open("Somthing went wrong!","",{duration:5000});
      });

    this.identity = [];
  }
   
   editFrm() {
     this.isReadOnly = !this.isReadOnly;
     this.edited = false; 
   }

   getFileFx(eve, id) {
     //console.log(eve.target.value);
    // console.log(id);
     switch(id) {
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

}