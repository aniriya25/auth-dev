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
var profile_service_1 = require("./../../../services/profile/profile.service");
var material_1 = require("@angular/material");
var moment = require("moment");
var PersonalinformationComponent = (function () {
    function PersonalinformationComponent(_profile, snackBar) {
        this._profile = _profile;
        this.snackBar = snackBar;
        this.user = {};
        this.isReadOnly = true;
        this.edited = true;
        this.maxDateVal = new Date().toLocaleDateString();
        this.maxDate = new Date(this.maxDateVal);
    }
    PersonalinformationComponent.prototype.ngOnInit = function () {
        this.getPersonalData();
    };
    // get personal inforamtion data
    PersonalinformationComponent.prototype.getPersonalData = function () {
        var _this = this;
        this._profile.getPersonalInfo()
            .subscribe(function (data) {
            _this.user = data.data;
            // this.user['dob'] = moment(this.user['dob'],"DD/MM/YYYY").format('MM/DD/YYYY');
            console.log(data.data);
        });
    };
    // update personal information
    PersonalinformationComponent.prototype.submitFrm = function (users) {
        var _this = this;
        //console.log(users);
        users['dob'] = moment(users['dob'], "DD/MMM/YYYY").format('DD/MMM/YYYY');
        this._profile.updatePersonalInfo(users)
            .subscribe(function (data) {
            if (data.message) {
                _this.snackBar.open("Updated successfully", "", { duration: 5000 });
                return false;
            }
        }, function (Error) {
            _this.snackBar.open("Somthing went wrong!", "", { duration: 5000 });
        });
    };
    // edit readonly fields
    PersonalinformationComponent.prototype.editFrm = function () {
        this.isReadOnly = !this.isReadOnly;
        this.edited = false;
    };
    return PersonalinformationComponent;
}());
PersonalinformationComponent = __decorate([
    core_1.Component({
        selector: 'app-personalinformation',
        templateUrl: './personalinformation.component.html',
        styleUrls: ['./personalinformation.component.css'],
        providers: [profile_service_1.ProfileService, material_1.MdSnackBar]
    }),
    __metadata("design:paramtypes", [profile_service_1.ProfileService,
        material_1.MdSnackBar])
], PersonalinformationComponent);
exports.PersonalinformationComponent = PersonalinformationComponent;
//# sourceMappingURL=personalinformation.component.js.map