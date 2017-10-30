import { Component, OnInit } from '@angular/core';
import { ProfileService } from './../../../services/profile/profile.service';
import 'rxjs/add/operator/map';
import { MdSnackBar } from '@angular/material';

@Component({
  selector: 'app-biological',
  templateUrl: './biological.component.html',
  styleUrls: ['./biological.component.css'],
  providers: [ProfileService, MdSnackBar]
})
export class BiologicalComponent implements OnInit {
  user:any = {};
  edited:boolean = true;
  isReadOnly:boolean = true;
  max = 300;
  maxvalue =200;
  min = 0;
  step = 1;
  thumbLabel = true;
  valueLabel = true;
  bloods:any;

  constructor(
    private _profile: ProfileService,
    public snackBar: MdSnackBar
  ) {  }

  ngOnInit() {
    //this.user = {'height' : 10, 'weight': ''}

    // get biological fx
    this.getBiologicalData();

    // get blood group
    this.getBloodgroupList()
  }

  // get biological data
    getBiologicalData() {
      this._profile.getBiological()
      .subscribe(data => {
        this.user = data.data; 
        this.user['refBloodGroupId'] = String(this.user['refBloodGroupId']);       
        //console.log(data.data);
      });
    }

  // height fx
  heightfX(eve: any) {
    //console.log(event.value);
    this.user.height = eve.value;
  }

  weightFx(eve) {
    //console.log(eve.value);
    this.user.weight = eve.value;
  }

  // submit form
  submitFrm(biological: any) {
    console.log(biological);
    this._profile.updateBiological(biological)
      .subscribe(data => {
         if(data.message) {          
            this.snackBar.open("Updated successfully","",{duration:5000});
            return false;
          }
         }, Error => {
        this.snackBar.open("Somthing went wrong!","",{duration:5000});
      });
  }

  // get blood group
  getBloodgroupList() {
    this._profile.getBloodGroup()
      .subscribe(data => {
        this.bloods = data.data;
        console.log(this.bloods);
      })
  }

  editFrm() {
     this.isReadOnly = !this.isReadOnly;
    this.edited = false; 
   }
}
