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
var BiologicalComponent = (function () {
    function BiologicalComponent(_profile, snackBar) {
        this._profile = _profile;
        this.snackBar = snackBar;
        this.user = {};
        this.edited = true;
        this.isReadOnly = true;
        this.max = 300;
        this.maxvalue = 200;
        this.min = 0;
        this.step = 1;
        this.thumbLabel = true;
        this.valueLabel = true;
    }
    BiologicalComponent.prototype.ngOnInit = function () {
        //this.user = {'height' : 10, 'weight': ''}
        // get biological fx
        this.getBiologicalData();
        // get blood group
        this.getBloodgroupList();
    };
    // get biological data
    BiologicalComponent.prototype.getBiologicalData = function () {
        var _this = this;
        this._profile.getBiological()
            .subscribe(function (data) {
            _this.user = data.data;
            _this.user['refBloodGroupId'] = String(_this.user['refBloodGroupId']);
            //console.log(data.data);
        });
    };
    // height fx
    BiologicalComponent.prototype.heightfX = function (eve) {
        //console.log(event.value);
        this.user.height = eve.value;
    };
    BiologicalComponent.prototype.weightFx = function (eve) {
        //console.log(eve.value);
        this.user.weight = eve.value;
    };
    // submit form
    BiologicalComponent.prototype.submitFrm = function (biological) {
        var _this = this;
        console.log(biological);
        this._profile.updateBiological(biological)
            .subscribe(function (data) {
            if (data.message) {
                _this.snackBar.open("Updated successfully", "", { duration: 5000 });
                return false;
            }
        }, function (Error) {
            _this.snackBar.open("Somthing went wrong!", "", { duration: 5000 });
        });
    };
    // get blood group
    BiologicalComponent.prototype.getBloodgroupList = function () {
        var _this = this;
        this._profile.getBloodGroup()
            .subscribe(function (data) {
            _this.bloods = data.data;
            console.log(_this.bloods);
        });
    };
    BiologicalComponent.prototype.editFrm = function () {
        this.isReadOnly = !this.isReadOnly;
        this.edited = false;
    };
    return BiologicalComponent;
}());
BiologicalComponent = __decorate([
    core_1.Component({
        selector: 'app-biological',
        templateUrl: './biological.component.html',
        styleUrls: ['./biological.component.css'],
        providers: [profile_service_1.ProfileService, material_1.MdSnackBar]
    }),
    __metadata("design:paramtypes", [profile_service_1.ProfileService,
        material_1.MdSnackBar])
], BiologicalComponent);
exports.BiologicalComponent = BiologicalComponent;
//# sourceMappingURL=biological.component.js.map