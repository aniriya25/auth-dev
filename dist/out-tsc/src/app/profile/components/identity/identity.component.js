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
require("rxjs/add/operator/map");
var material_1 = require("@angular/material");
var moment = require("moment");
var IdentityComponent = (function () {
    function IdentityComponent(_profile, snackBar) {
        this._profile = _profile;
        this.snackBar = snackBar;
        this.user = [];
        this.identity = [];
        this.isReadOnly = true;
        this.edited = true;
    }
    IdentityComponent.prototype.ngOnInit = function () {
        //console.log(moment().format('DDMMYYYY'));
        // get identity data
        this.getIdentityData();
    };
    // get identity data 
    IdentityComponent.prototype.getIdentityData = function () {
        var _this = this;
        this._profile.getIdentity()
            .subscribe(function (data) {
            _this.user = data.data;
            _this.user.forEach(function (element) {
                //debugger;
                //console.log(element.idNo);
                switch (element.refIdentityTypeId) {
                    case 1:
                        _this.user.addharNo = element.idNo;
                        //console.log(this.user.addharNo);
                        break;
                    case 2:
                        _this.user.passportNumber = element.idNo;
                        _this.user.passportExpDate = moment(element.expiryDate, "DD/MMM/YYYY").format('DD/MMM/YYYY');
                        break;
                    case 3:
                        _this.user.panNumber = element.idNo;
                        _this.user.pancardPix = element.imageUrl;
                        break;
                    case 4:
                        _this.user.voterIdNumber = element.idNo;
                        break;
                    case 5:
                        _this.user.dlNumber = element.idNo;
                        _this.user.DrivingExpDate = moment(element.expiryDate, "DD/MMM/YYYY").format('DD/MMM/YYYY');
                        break;
                }
            });
        });
    };
    // submit form
    IdentityComponent.prototype.submitFrm = function (users) {
        var _this = this;
        users.forEach(function (element) {
            //debugger;
            switch (element.refIdentityTypeId) {
                case 1:
                    element.idNo = users.addharNo;
                    element.imageUrl = users.adharPix;
                    _this.identity.push({ idNo: element.idNo, imageUrl: element.imageUrl });
                    break;
                case 2:
                    element.idNo = users.passportNumber;
                    element.imageUrl = users.passportPix;
                    element.expiryDate = moment(users.passportExpDate, "DD/MMM/YYYY").format('DD/MMM/YYYY');
                    _this.identity.push({ idNo: element.idNo, expiryDate: element.expiryDate, imageUrl: element.imageUrl });
                    break;
                case 5:
                    element.idNo = users.dlNumber;
                    element.imageUrl = users.drivingPix;
                    element.expiryDate = moment(users.DrivingExpDate, "DD/MMM/YYYY").format('DD/MMM/YYYY');
                    _this.identity.push({ idNo: element.idNo, expiryDate: element.expiryDate, imageUrl: element.imageUrl });
                    break;
                case 3:
                    element.idNo = users.panNumber;
                    element.imageUrl = users.pancardPix;
                    _this.identity.push({ idNo: element.idNo, imageUrl: element.imageUrl });
                    break;
            }
        });
        this._profile.updateIdentity(this.identity)
            .subscribe(function (data) {
            if (data.message) {
                _this.snackBar.open("Updated successfully", "", { duration: 5000 });
                return false;
            }
        }, function (Error) {
            _this.snackBar.open("Somthing went wrong!", "", { duration: 5000 });
        });
        this.identity = [];
    };
    IdentityComponent.prototype.editFrm = function () {
        this.isReadOnly = !this.isReadOnly;
        this.edited = false;
    };
    IdentityComponent.prototype.getFileFx = function (eve, id) {
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
    };
    return IdentityComponent;
}());
IdentityComponent = __decorate([
    core_1.Component({
        selector: 'app-identity',
        templateUrl: './identity.component.html',
        styleUrls: ['./identity.component.css'],
        providers: [profile_service_1.ProfileService, material_1.MdSnackBar]
    }),
    __metadata("design:paramtypes", [profile_service_1.ProfileService,
        material_1.MdSnackBar])
], IdentityComponent);
exports.IdentityComponent = IdentityComponent;
//# sourceMappingURL=identity.component.js.map