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
var AddmemberComponent = (function () {
    // constructor
    function AddmemberComponent(_memberService) {
        this._memberService = _memberService;
        this.user = {};
        this.isReadOnly = true;
        this.edited = true;
    }
    // init function
    AddmemberComponent.prototype.ngOnInit = function () {
        this.getRoles();
        this.getBranches();
        this.getDepartments();
        this.getAllDesignation();
    };
    // get role
    AddmemberComponent.prototype.getRoles = function () {
        var _this = this;
        this._memberService.getAllRole()
            .subscribe(function (data) {
            _this.allRoles = data.data;
        });
    };
    //get role id
    AddmemberComponent.prototype.getRoleId = function (roleId) {
        var _this = this;
        this._memberService.getManagers(roleId)
            .subscribe(function (data) {
            _this.managers = data.data;
        });
    };
    // get all branches
    AddmemberComponent.prototype.getBranches = function () {
        var _this = this;
        this._memberService.getAllBranches()
            .subscribe(function (data) {
            _this.branches = data.data;
            console.log(data.data);
        });
    };
    // get all departments
    AddmemberComponent.prototype.getDepartments = function () {
        var _this = this;
        this._memberService.getAllDepartments()
            .subscribe(function (data) {
            _this.departments = data.data;
        });
    };
    // get all designation
    AddmemberComponent.prototype.getAllDesignation = function () {
        var _this = this;
        this._memberService.getAllDesignation()
            .subscribe(function (data) {
            _this.designations = data.data;
        });
    };
    // submit
    AddmemberComponent.prototype.submitFrm = function (users) {
        console.log(users);
    };
    AddmemberComponent.prototype.editFrm = function () {
        this.isReadOnly = !this.isReadOnly;
        this.edited = false;
    };
    return AddmemberComponent;
}());
AddmemberComponent = __decorate([
    core_1.Component({
        selector: 'app-addmember',
        templateUrl: './addmember.component.html',
        styleUrls: ['./addmember.component.css'],
        providers: [memberlist_service_1.MemberlistService]
    }),
    __metadata("design:paramtypes", [memberlist_service_1.MemberlistService])
], AddmemberComponent);
exports.AddmemberComponent = AddmemberComponent;
//# sourceMappingURL=addmember.component.js.map