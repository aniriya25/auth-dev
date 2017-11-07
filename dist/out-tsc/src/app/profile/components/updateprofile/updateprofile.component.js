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
var memberlist_service_1 = require("./../../../services/members/memberlist/memberlist.service");
var profile_service_1 = require("./../../../services/profile/profile.service");
var UpdateprofileComponent = (function () {
    function UpdateprofileComponent(_member, _userProfile) {
        this._member = _member;
        this._userProfile = _userProfile;
        this._profileToggle = true;
        this._profileClick = true;
        this.userProfile = {};
        // this._member.getMemberList('me').subscribe(data => {
        //   this.totalMember = data.data.length;
        // });
    }
    UpdateprofileComponent.prototype.ngOnInit = function () {
        //this.getUserProfile();
    };
    UpdateprofileComponent.prototype.getUserProfile = function () {
        this._userProfile.getPersonalInfo()
            .subscribe(function (data) {
            //this.userProfile = data.data[0];
        });
    };
    UpdateprofileComponent.prototype.hideShow = function () {
        this._profileToggle = !this._profileToggle;
        this._profileClick = this._profileClick;
    };
    return UpdateprofileComponent;
}());
UpdateprofileComponent = __decorate([
    core_1.Component({
        selector: 'app-updateprofile',
        templateUrl: './updateprofile.component.html',
        styleUrls: ['./updateprofile.component.css'],
        providers: [memberlist_service_1.MemberlistService, profile_service_1.ProfileService]
    }),
    __metadata("design:paramtypes", [memberlist_service_1.MemberlistService,
        profile_service_1.ProfileService])
], UpdateprofileComponent);
exports.UpdateprofileComponent = UpdateprofileComponent;
//# sourceMappingURL=updateprofile.component.js.map