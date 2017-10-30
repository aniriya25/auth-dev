import { Component, OnInit } from '@angular/core';
import { CountryService } from './../../../services/country.service';
import { ProfileService } from './../../../services/profile/profile.service';
import { MdSnackBar } from '@angular/material';
import * as moment from 'moment';

@Component({
  selector: 'app-corporate',
  templateUrl: './corporate.component.html',
  styleUrls: ['./corporate.component.css'],
  providers: [CountryService, ProfileService, MdSnackBar]
})
export class CorporateComponent implements OnInit {
  user : Object = {}
  selectedCountry:Object = {};
  countries: any;
  states: Object;
   isReadOnly:boolean = true;
   edited:boolean = true;
   maxDate;
   departments:any;
   designations:any;
   branches:any;
  
  constructor(
    private countryInfo: CountryService, 
    private _profile: ProfileService,
    public snackBar: MdSnackBar
  ) {}

  ngOnInit() {
    this.maxDate = new Date();
    // get country fx
    // this.getCountry();

    // get corporate fx
     this.getCorporateData();

    // get Branch
     this.getBrach()

    // get Departments 
     this.getDepartments(); 

    // get Designations
     this.getDesignations() 
  }

  // gt corporate data
  getCorporateData() {
    this._profile.getCorporate()
    .subscribe(data => {
     this.user = data.data;
     this.user['refDesigId'] = String(this.user['refDesigId']);
     this.user['refDeptId'] = String(this.user['refDeptId']);
     this.user['refCorpBranchId'] = String(this.user['refCorpBranchId']);
     //console.log(data.data);
    // this.selStatesById(this.user['countryid']);
    });
  }


// get Branch list

    getBrach() {
    this._profile.getBrach()
      .subscribe(data => {
        this.branches = data.data;
       // console.log(this.department);
      });
  }

  // get Departments list

    getDepartments() {
    this._profile.getDepartments()
      .subscribe(data => {
        this.departments = data.data;
       // console.log(this.department);
      });
  }

  // get Designation list
    getDesignations() {
    this._profile.getDesignation()
      .subscribe(data => {
        this.designations = data.data;        
      // console.log(this.designation);
      });
  }

    // get country list
  //   getCountry() {
  //   this.countryInfo.getCountries()
  //     .subscribe(data => {
  //       this.countries = data.data;        
  //     });
  // }


  // // get state data behalf of country
  //   getStates(countryid) {
  //   this.countryInfo.getStates(countryid)
  //     .subscribe(data => {
  //       this.states = data.data;
  //     });
  // }

  //  // get state data behalf of country
  //   getCity(stateid) {
  //   this.countryInfo.getStates(stateid)
  //     .subscribe(data => {
  //       this.states = data.data;
  //     });
  // }

  // selStatesById(id) {
  //   this.countryInfo.getStates(id)
  //     .subscribe(data => {
  //       this.states = data.data;
  //       console.log(this.states);
  //     });
  // }

  
  // submit form
  submitFrm(corportateObj: any) {
    let _doj = new Date(corportateObj['doj']).toLocaleDateString();
    corportateObj['doj'] = _doj;
    corportateObj['doj'] = moment(corportateObj['doj'],"DD/MMM/YYYY").format('DD/MMM/YYYY');
    // var getJOD = new Date(users.joiningDate);
   // users.joiningDate = getJOD.toLocaleDateString();
    // users['getJOD'] = moment(users['getJOD'],"DD/MMM/YYYY").format('DD/MMM/YYYY');
     this._profile.updateCorporate(corportateObj)
      .subscribe(data => {
        if(data.message) {
          this.snackBar.open("Updated successfully","",{duration:5000});
          return false;
        }
      }, Error => {
        this.snackBar.open("Somthing went wrong!","",{duration:5000});
      });
  }
  editFrm() {
     this.isReadOnly = !this.isReadOnly;
     this.edited = false; 
   }
   
}

