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
var BankingComponent = (function () {
    function BankingComponent(_profile, snackBar) {
        this._profile = _profile;
        this.snackBar = snackBar;
        this.user = {};
        this.isReadOnly = true;
        this.edited = true;
    }
    BankingComponent.prototype.ngOnInit = function () {
        this.accountTypes = [
            { type: 'Saving', value: 'Saving Account' },
            { type: 'Current', value: 'Current Account' }
        ];
        //this.user = {"accountType" : "Current", id: 1}
        // get banking fx
        this.getBankingData();
        // get account type
        // this.getAccount();
    };
    // get banking data
    BankingComponent.prototype.getBankingData = function () {
        var _this = this;
        this._profile.getBanking()
            .subscribe(function (data) {
            //console.log(data.data[0]);
            _this.user = data.data[0];
            _this.user['type'] = _this.user['type'];
            // console.log(data.data[0]);
            //this.user['id'] = ''+this.user['type']+'';
            //console.log(this.user['ACCOUNTTYPEID']);
        });
    };
    // get account list
    BankingComponent.prototype.getAccount = function () {
        var _this = this;
        this._profile.getAccountType()
            .subscribe(function (data) {
            //this.accountTypes = ''+this.user['type']+'';
            _this.user = data.data;
            console.log(data.data);
        });
    };
    //submit form
    BankingComponent.prototype.submitFrm = function (users) {
        var _this = this;
        users.type = users['id'];
        this._profile.updateBanking(users)
            .subscribe(function (data) {
            console.log(data.data);
            if (data.message) {
                _this.snackBar.open("Updated successfully", "", { duration: 5000 });
                return false;
            }
        }, function (Error) {
            _this.snackBar.open("Somthing went wrong!", "", { duration: 5000 });
        });
    };
    BankingComponent.prototype.editFrm = function () {
        this.isReadOnly = !this.isReadOnly;
        this.edited = false;
    };
    return BankingComponent;
}());
BankingComponent = __decorate([
    core_1.Component({
        selector: 'app-banking',
        templateUrl: './banking.component.html',
        styleUrls: ['./banking.component.css'],
        providers: [profile_service_1.ProfileService, material_1.MdSnackBar]
    }),
    __metadata("design:paramtypes", [profile_service_1.ProfileService,
        material_1.MdSnackBar])
], BankingComponent);
exports.BankingComponent = BankingComponent;
//# sourceMappingURL=banking.component.js.map