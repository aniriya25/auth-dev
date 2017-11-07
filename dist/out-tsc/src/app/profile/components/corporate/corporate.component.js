"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var country_service_1 = require("./../../../services/country.service");
var profile_service_1 = require("./../../../services/profile/profile.service");
var material_1 = require("@angular/material");
var moment = require("moment");
var CorporateComponent = (function () {
    function CorporateComponent(countryInfo, _profile, snackBar) {
        this.countryInfo = countryInfo;
        this._profile = _profile;
        this.snackBar = snackBar;
        this.user = {};
        this.selectedCountry = {};
        this.isReadOnly = true;
        this.edited = true;
    }
    CorporateComponent.prototype.ngOnInit = function () {
        this.maxDate = new Date();
        // get country fx
        // this.getCountry();
        // get corporate fx
        this.getCorporateData();
        // get Branch
        this.getBrach();
        // get Departments 
        this.getDepartments();
        // get Designations
        this.getDesignations();
    };
    // gt corporate data
    CorporateComponent.prototype.getCorporateData = function () {
        var _this = this;
        this._profile.getCorporate()
            .subscribe(function (data) {
            _this.user = data.data;
            _this.user['refDesigId'] = String(_this.user['refDesigId']);
            _this.user['refDeptId'] = String(_this.user['refDeptId']);
            _this.user['refCorpBranchId'] = String(_this.user['refCorpBranchId']);
            //console.log(data.data);
            // this.selStatesById(this.user['countryid']);
        });
    };
    // get Branch list
    CorporateComponent.prototype.getBrach = function () {
        var _this = this;
        this._profile.getBrach()
            .subscribe(function (data) {
            _this.branches = data.data;
            // console.log(this.department);
        });
    };
    // get Departments list
    CorporateComponent.prototype.getDepartments = function () {
        var _this = this;
        this._profile.getDepartments()
            .subscribe(function (data) {
            _this.departments = data.data;
            // console.log(this.department);
        });
    };
    // get Designation list
    CorporateComponent.prototype.getDesignations = function () {
        var _this = this;
        this._profile.getDesignation()
            .subscribe(function (data) {
            _this.designations = data.data;
            // console.log(this.designation);
        });
    };
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
    CorporateComponent.prototype.submitFrm = function (corportateObj) {
        var _this = this;
        var _doj = new Date(corportateObj['doj']).toLocaleDateString();
        corportateObj['doj'] = _doj;
        corportateObj['doj'] = moment(corportateObj['doj'], "DD/MMM/YYYY").format('DD/MMM/YYYY');
        // var getJOD = new Date(users.joiningDate);
        // users.joiningDate = getJOD.toLocaleDateString();
        // users['getJOD'] = moment(users['getJOD'],"DD/MMM/YYYY").format('DD/MMM/YYYY');
        this._profile.updateCorporate(corportateObj)
            .subscribe(function (data) {
            if (data.message) {
                _this.snackBar.open("Updated successfully", "", { duration: 5000 });
                return false;
            }
        }, function (Error) {
            _this.snackBar.open("Somthing went wrong!", "", { duration: 5000 });
        });
    };
    CorporateComponent.prototype.editFrm = function () {
        this.isReadOnly = !this.isReadOnly;
        this.edited = false;
    };
    return CorporateComponent;
}());
CorporateComponent = __decorate([
    core_1.Component({
        selector: 'app-corporate',
        templateUrl: './corporate.component.html',
        styleUrls: ['./corporate.component.css'],
        providers: [country_service_1.CountryService, profile_service_1.ProfileService, material_1.MdSnackBar]
    }),
    __metadata("design:paramtypes", [country_service_1.CountryService,
        profile_service_1.ProfileService,
        material_1.MdSnackBar])
], CorporateComponent);
exports.CorporateComponent = CorporateComponent;
//# sourceMappingURL=corporate.component.js.map