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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var global_module_1 = require("./../../../global/global.module");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var angular2_jwt_1 = require("angular2-jwt");
var MemberlistService = (function () {
    function MemberlistService(_http, authhttp, config) {
        this._http = _http;
        this.authhttp = authhttp;
        this.config = config;
    }
    // all member list 
    MemberlistService.prototype.getMemberList = function (id) {
        return this.authhttp.get(this.config.api_base_url + this.config.profile_member_list + "/" + id)
            .map(function (data) {
            data.json();
            return data.json();
        });
    };
    // delte member
    MemberlistService.prototype.delMember = function (deleteMember) {
        console.log(deleteMember);
    };
    // get role master list
    MemberlistService.prototype.getAllRole = function () {
        return this.authhttp.get(this.config.api_base_url + this.config.profile_roles_url)
            .map(function (data) {
            data.json();
            return data.json();
        });
    };
    // get manager by role id
    MemberlistService.prototype.getManagers = function (id) {
        return this.authhttp.get(this.config.api_base_url + this.config.profile_managers_url + id)
            .map(function (data) {
            data.json();
            return data.json();
        });
    };
    // get all branches
    MemberlistService.prototype.getAllBranches = function () {
        return this.authhttp.get(this.config.api_base_url + this.config.profile_branches_url)
            .map(function (data) {
            data.json();
            return data.json();
        });
    };
    // get all departments
    MemberlistService.prototype.getAllDepartments = function () {
        return this.authhttp.get(this.config.api_base_url + this.config.profile_department_url)
            .map(function (data) {
            data.json();
            return data.json();
        });
    };
    // get all designation
    MemberlistService.prototype.getAllDesignation = function () {
        return this.authhttp.get(this.config.api_base_url + this.config.profile_designation_url)
            .map(function (data) {
            data.json();
            return data.json();
        });
    };
    return MemberlistService;
}());
MemberlistService = __decorate([
    core_1.Injectable(),
    __param(2, core_1.Inject(global_module_1.APP_CONFIG)),
    __metadata("design:paramtypes", [http_1.Http,
        angular2_jwt_1.AuthHttp,
        global_module_1.AppConfig])
], MemberlistService);
exports.MemberlistService = MemberlistService;
//# sourceMappingURL=memberlist.service.js.map