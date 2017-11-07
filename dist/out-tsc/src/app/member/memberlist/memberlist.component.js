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
var memberlist_service_1 = require("./../../services/members/memberlist/memberlist.service");
var profile_service_1 = require("./../../services/profile/profile.service");
var material_1 = require("@angular/material");
var MemberlistComponent = (function () {
    function MemberlistComponent(_profile_memberlist, _profile, dialog) {
        this._profile_memberlist = _profile_memberlist;
        this._profile = _profile;
        this.dialog = dialog;
        this.members = [];
        this.temp = [];
        this.currentUser = [];
        this.breadCrum = '';
        this.myObj = [];
        this.position = 'above';
        //checkbox
        this.selected = [];
        // delete records
        this.delLevel = [];
    }
    // search member
    MemberlistComponent.prototype.updateFilter = function (event) {
        var val = event.target.value.toLowerCase();
        // filter our data
        var temp = this.temp.filter(function (d) {
            return (d.name.toLowerCase().indexOf(val) !== -1 || !val) || (d.manager.toLowerCase().indexOf(val) !== -1 || !val);
        });
        //update data
        this.members = temp;
        console.log(temp);
    };
    MemberlistComponent.prototype.ngOnInit = function () {
        // get all member list
        this.memberList();
        // get logined user data
        this.loginedUser();
    };
    // get level to create breadcrumb
    MemberlistComponent.prototype.getLevel = function (user) {
        var _this = this;
        if (user.column.name == 'chkbox') {
            return false;
        }
        this._profile_memberlist.getMemberList(user.row.id)
            .subscribe(function (data) {
            if (data.error) {
                _this.members = [];
                _this.temp = [];
                return false;
            }
            else if (data.data) {
                _this.members = data.data;
                _this.temp = _this.members;
                return false;
            }
        });
        this.myObj.push({ "name": user.row.name });
    };
    // remove level from breadcrumb
    MemberlistComponent.prototype.removeObj = function (rmObj, last) {
        var _this = this;
        if (this.myObj.length == 1 || last == true) {
            return false;
        }
        //console.log(rmObj.id);
        if (rmObj.name == this.myObj[0].name) {
            this._profile_memberlist.getMemberList('' + rmObj.id + '')
                .subscribe(function (data) {
                _this.members = data.data;
            });
            this.myObj.splice(1);
            return false;
        }
        var _index = this.myObj.indexOf(rmObj);
        this.myObj.splice(_index);
    };
    // fetch all memberlist Data
    MemberlistComponent.prototype.memberList = function () {
        var _this = this;
        this._profile_memberlist.getMemberList('me')
            .subscribe(function (data) {
            _this.members = data.data;
            _this.temp = _this.members;
        });
    };
    // get logined user 
    MemberlistComponent.prototype.loginedUser = function () {
        var _this = this;
        this._profile.getPersonalInfo()
            .subscribe(function (data) {
            _this.currentUser = data.data;
            _this.myObj.push({ name: _this.currentUser[0].firstName + " " + _this.currentUser[0].lastName, id: 'me' });
        });
    };
    MemberlistComponent.prototype.onSelect = function (_a) {
        var selected = _a.selected;
        console.log(this.selected);
        this.selected.splice(0, this.selected.length);
        (_b = this.selected).push.apply(_b, selected);
        var _b;
    };
    MemberlistComponent.prototype.deleteAll = function () {
        this.dialog.open(DialogOverviewExampleDialog);
        // console.log(this.selected.length);
        // if(this.selected.length > 0) {
        //   for(var i = 0; i < this.selected.length; i++) {
        //     this._profile_memberlist.delMember({userId: this.selected[i].id});
        //   }
        // } else {
        //   console.log("sorry");
        // }
    };
    return MemberlistComponent;
}());
__decorate([
    core_1.ViewChild('myTable'),
    __metadata("design:type", Object)
], MemberlistComponent.prototype, "table", void 0);
MemberlistComponent = __decorate([
    core_1.Component({
        selector: 'app-memberlist',
        templateUrl: './memberlist.component.html',
        styleUrls: ['./memberlist.component.css'],
        providers: [memberlist_service_1.MemberlistService, profile_service_1.ProfileService]
    }),
    __metadata("design:paramtypes", [memberlist_service_1.MemberlistService,
        profile_service_1.ProfileService,
        material_1.MdDialog])
], MemberlistComponent);
exports.MemberlistComponent = MemberlistComponent;
var DialogOverviewExampleDialog = (function () {
    function DialogOverviewExampleDialog() {
    }
    return DialogOverviewExampleDialog;
}());
DialogOverviewExampleDialog = __decorate([
    core_1.Component({
        selector: 'dialog-overview-example-dialog',
        template: '<p>sdfjlksdf</p>',
    })
], DialogOverviewExampleDialog);
exports.DialogOverviewExampleDialog = DialogOverviewExampleDialog;
//# sourceMappingURL=memberlist.component.js.map