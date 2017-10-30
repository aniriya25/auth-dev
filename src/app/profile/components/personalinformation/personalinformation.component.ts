import { Component, OnInit } from '@angular/core';
import { ProfileService } from './../../../services/profile/profile.service';
import { MdSnackBar } from '@angular/material';
import * as moment from 'moment';

@Component({
  selector: 'app-personalinformation',
  templateUrl: './personalinformation.component.html',
  styleUrls: ['./personalinformation.component.css'],
  providers: [ProfileService, MdSnackBar]
})
export class PersonalinformationComponent implements OnInit {
   user : Object = {};
   isReadOnly:boolean = true;
   edited:boolean = true;


   maxDateVal:any = new Date().toLocaleDateString();
   maxDate = new Date(this.maxDateVal);

   
  constructor(
    private _profile: ProfileService,
    public snackBar: MdSnackBar
  ) {}

  ngOnInit() {   
    this.getPersonalData();
  }
  
  // get personal inforamtion data
    getPersonalData() {
      this._profile.getPersonalInfo()
      .subscribe(data => {
        this.user = data.data;
        // this.user['dob'] = moment(this.user['dob'],"DD/MM/YYYY").format('MM/DD/YYYY');
        console.log(data.data);
      });
    }
    
  // update personal information
  submitFrm(users: any) {
    //console.log(users);
    users['dob'] = moment(users['dob'],"DD/MMM/YYYY").format('DD/MMM/YYYY');
    this._profile.updatePersonalInfo(users)
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




