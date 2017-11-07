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
var global_module_1 = require("./../../global/global.module");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var angular2_jwt_1 = require("angular2-jwt");
var ProfileService = (function () {
    function ProfileService(_http, authhttp, config) {
        this._http = _http;
        this.authhttp = authhttp;
        this.config = config;
    }
    // get personal information data
    ProfileService.prototype.getPersonalInfo = function () {
        return this.authhttp.get(this.config.api_base_url + this.config.profile_personal_info_url)
            .map(function (data) {
            data.json();
            return data.json();
        });
    };
    // update personal information data
    ProfileService.prototype.updatePersonalInfo = function (updatePersonalInfo) {
        var _updateInfo = JSON.stringify(updatePersonalInfo);
        return this.authhttp.put(this.config.api_base_url + this.config.profile_personal_update_url, _updateInfo)
            .map(function (data) {
            data.json();
            return data.json();
        });
    };
    // get communication data
    ProfileService.prototype.getCommunication = function () {
        return this.authhttp.get(this.config.api_base_url + this.config.profile_communication_url)
            .map(function (data) {
            data.json();
            return data.json();
        });
    };
    // updated communication data
    ProfileService.prototype.updateCommunication = function (updateCommunication) {
        var _updateComm = '{"data": [' + JSON.stringify(updateCommunication) + ']}';
        return this.authhttp.put(this.config.api_base_url + this.config.profile_communication_url, _updateComm)
            .map(function (data) {
            data.json();
            return data.json();
        });
    };
    // get corporate data
    ProfileService.prototype.getCorporate = function () {
        return this.authhttp.get(this.config.api_base_url + this.config.profile_corporate_url)
            .map(function (data) {
            data.json();
            return data.json();
        });
    };
    // update corporate data
    ProfileService.prototype.updateCorporate = function (updateCorporate) {
        var _updateCorporate = JSON.stringify(updateCorporate);
        return this.authhttp.put(this.config.api_base_url + this.config.profile_corporate_update_url, _updateCorporate)
            .map(function (data) {
            data.json();
            return data.json();
        });
    };
    // get biological data 
    ProfileService.prototype.getBiological = function () {
        return this.authhttp.get(this.config.api_base_url + this.config.profile_biological_url)
            .map(function (data) {
            data.json();
            return data.json();
        });
    };
    // update biological data
    ProfileService.prototype.updateBiological = function (updateBiological) {
        var _updateBiological = JSON.stringify(updateBiological);
        return this.authhttp.put(this.config.api_base_url + this.config.profile_biological_update_url, _updateBiological)
            .map(function (data) {
            data.json();
            return data.json();
        });
    };
    // get identity data
    ProfileService.prototype.getIdentity = function () {
        return this.authhttp.get(this.config.api_base_url + this.config.profile_identity_url)
            .map(function (data) {
            data.json();
            return data.json();
        });
    };
    // udpate identity data
    ProfileService.prototype.updateIdentity = function (identity) {
        var _updateIdentity = JSON.stringify(identity);
        return this.authhttp.put(this.config.api_base_url + this.config.profile_identity_update_url, _updateIdentity)
            .map(function (data) {
            data.json();
            return data.json();
        });
    };
    // get banking data
    ProfileService.prototype.getBanking = function () {
        return this.authhttp.get(this.config.api_base_url + this.config.profile_banking_url)
            .map(function (data) {
            data.json();
            return data.json();
        });
    };
    // update banking
    ProfileService.prototype.updateBanking = function (banking) {
        var _updateBanking = JSON.stringify(banking);
        return this.authhttp.put(this.config.api_base_url + this.config.profile_banking_update_url, _updateBanking)
            .map(function (data) {
            data.json();
            return data.json();
        });
    };
    // get blood group list from master
    ProfileService.prototype.getBloodGroup = function () {
        return this.authhttp.get(this.config.api_base_url + this.config.profile_bloodgroup_url)
            .map(function (data) {
            data.json();
            return data.json();
        });
    };
    // get Brach list from master
    ProfileService.prototype.getBrach = function () {
        return this.authhttp.get(this.config.api_base_url + this.config.profile_branch_url)
            .map(function (data) {
            data.json();
            return data.json();
        });
    };
    // get Departments list from master
    ProfileService.prototype.getDepartments = function () {
        return this.authhttp.get(this.config.api_base_url + this.config.profile_department_url)
            .map(function (data) {
            data.json();
            return data.json();
        });
    };
    // get Designation list from master
    ProfileService.prototype.getDesignation = function () {
        return this.authhttp.get(this.config.api_base_url + this.config.profile_designation_url)
            .map(function (data) {
            data.json();
            return data.json();
        });
    };
    // get Branches list from master
    ProfileService.prototype.getBranches = function () {
        return this.authhttp.get(this.config.api_base_url + this.config.profile_branches_url)
            .map(function (data) {
            data.json();
            return data.json();
        });
    };
    // get communication type from master
    ProfileService.prototype.getCommunicationType = function () {
        return this.authhttp.get(this.config.api_base_url + this.config.profile_communication_type_url)
            .map(function (data) {
            data.json();
            return data.json();
        });
    };
    // Banking - account type master list
    ProfileService.prototype.getAccountType = function () {
        return this.authhttp.get(this.config.api_base_url + this.config.profile_banking_account)
            .map(function (data) {
            data.json();
            return data.json();
        });
    };
    return ProfileService;
}());
ProfileService = __decorate([
    core_1.Injectable(),
    __param(2, core_1.Inject(global_module_1.APP_CONFIG)),
    __metadata("design:paramtypes", [http_1.Http,
        angular2_jwt_1.AuthHttp,
        global_module_1.AppConfig])
], ProfileService);
exports.ProfileService = ProfileService;
//# sourceMappingURL=profile.service.js.map