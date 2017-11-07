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
require("rxjs/add/operator/map");
var CommunicationComponent = (function () {
    function CommunicationComponent(_communication, snackBar) {
        this._communication = _communication;
        this.snackBar = snackBar;
        this.user = {};
        this.isReadOnly = true;
        this.edited = true;
    }
    CommunicationComponent.prototype.ngOnInit = function () {
        // get communication 
        this.getCommunicationData();
        // get communication type
        this.getCommunicationType();
    };
    // get communication data
    CommunicationComponent.prototype.getCommunicationData = function () {
        var _this = this;
        this._communication.getCommunication()
            .subscribe(function (data) {
            _this.user = data.data;
            _this.user['refContactTypeId'] = String(_this.user['refContactTypeId']);
            console.log(data.data);
        });
    };
    // get communication type
    CommunicationComponent.prototype.getCommunicationType = function () {
        var _this = this;
        this._communication.getCommunicationType()
            .subscribe(function (data) {
            _this.selectType = data.data;
            //console.log(data.data);
        });
    };
    // submit form
    CommunicationComponent.prototype.submitFrm = function (updateCommunication) {
        var _this = this;
        this._communication.updateCommunication(updateCommunication)
            .subscribe(function (data) {
            if (data.data.message) {
                // console.log(data.data.message);
                _this.snackBar.open(data.data.message, "", { duration: 5000 });
            }
            else {
                _this.snackBar.open("Somthing went wrong!", "", { duration: 5000 });
            }
        });
    };
    // edit fields
    CommunicationComponent.prototype.editFrm = function () {
        this.isReadOnly = !this.isReadOnly;
        this.edited = false;
    };
    return CommunicationComponent;
}());
CommunicationComponent = __decorate([
    core_1.Component({
        selector: 'app-communication',
        templateUrl: './communication.component.html',
        styleUrls: ['./communication.component.css'],
        providers: [profile_service_1.ProfileService]
    }),
    __metadata("design:paramtypes", [profile_service_1.ProfileService,
        material_1.MdSnackBar])
], CommunicationComponent);
exports.CommunicationComponent = CommunicationComponent;
//# sourceMappingURL=communication.component.js.map