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
var forgotpassword_service_1 = require("./../../../services/login/forgotpassword/forgotpassword.service");
var material_1 = require("@angular/material");
require("rxjs/add/operator/map");
var ForgotpasswordComponent = (function () {
    function ForgotpasswordComponent(forgotpasswd, snackBar) {
        this.forgotpasswd = forgotpasswd;
        this.snackBar = snackBar;
        this.forgotform = {};
        this.emailNotExist = '';
        this.submitProgress = false;
    }
    ForgotpasswordComponent.prototype.ngOnInit = function () {
    };
    //forgotpassword
    ForgotpasswordComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitProgress = true;
        this.forgotpasswd.forgotPassword(this.forgotform.email)
            .subscribe(function (data) {
            console.log(data);
            if (data.data) {
                _this.snackBar.open(data.data.message, "", { duration: 5000 });
                _this.submitProgress = false;
            }
            else {
                _this.snackBar.open("Somthing went wrong!", "", { duration: 5000 });
                _this.submitProgress = false;
            }
        });
    };
    return ForgotpasswordComponent;
}());
ForgotpasswordComponent = __decorate([
    core_1.Component({
        selector: 'app-forgotpassword',
        templateUrl: './forgotpassword.component.html',
        styleUrls: ['./forgotpassword.component.css'],
        providers: [forgotpassword_service_1.ForgotpasswordService, material_1.MdSnackBar]
    }),
    __metadata("design:paramtypes", [forgotpassword_service_1.ForgotpasswordService, material_1.MdSnackBar])
], ForgotpasswordComponent);
exports.ForgotpasswordComponent = ForgotpasswordComponent;
//# sourceMappingURL=forgotpassword.component.js.map