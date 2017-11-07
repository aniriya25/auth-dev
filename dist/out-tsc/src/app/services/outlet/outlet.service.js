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
var OutletService = (function () {
    function OutletService(_http, authhttp, config) {
        this._http = _http;
        this.authhttp = authhttp;
        this.config = config;
    }
    // get all outlets
    OutletService.prototype.getOutlets = function (providerId) {
        return this.authhttp.get(this.config.api_base_url + this.config.provider_url + providerId + '/outlets')
            .map(function (data) {
            data.json();
            return data.json();
        });
    };
    // get outlet detaits
    OutletService.prototype.getOutletDetails = function (providerId, outletId) {
        return this.authhttp.get(this.config.api_base_url + this.config.provider_url + providerId + '/outlets/' + outletId)
            .map(function (data) {
            data.json();
            return data.json();
        });
    };
    // create outlet basic information
    OutletService.prototype.createBasicInfo = function (basicObj, _pId) {
        var _basicObj = JSON.stringify(basicObj);
        return this.authhttp.post(this.config.api_base_url + this.config.provider_url + _pId + '/outlets/', _basicObj)
            .map(function (data) {
            data.json();
            return data.json();
        });
    };
    // update outlet basic information 
    OutletService.prototype.udpateBasicInfo = function (basicObj, _pId, _oId) {
        var _basicObj = JSON.stringify(basicObj);
        return this.authhttp.put(this.config.api_base_url + this.config.provider_url + _pId + '/outlets/' + _oId, _basicObj)
            .map(function (data) {
            data.json();
            return data.json();
        });
    };
    // create outlet contact
    OutletService.prototype.createContact = function (contactObj, _oId) {
        var _contactObj = JSON.stringify(contactObj);
        return this.authhttp.post(this.config.api_base_url + this.config.outletContact + _oId, _contactObj)
            .map(function (data) {
            data.json();
            return data.json();
        });
    };
    // updte outlet infra
    OutletService.prototype.updateContact = function (contactObj, contactId) {
        var _contactObj = JSON.stringify(contactObj);
        return this.authhttp.put(this.config.api_base_url + this.config.outletContact + contactId, _contactObj)
            .map(function (data) {
            data.json();
            return data.json();
        });
    };
    // update outlet infra
    OutletService.prototype.updateInfra = function (infraObj, _pId, _oId) {
        var _infraObj = JSON.stringify(infraObj);
        return this.authhttp.put(this.config.api_base_url + this.config.provider_url + _pId + '/outlets/' + _oId + '/infra', _infraObj)
            .map(function (data) {
            data.json();
            return data.json();
        });
    };
    // create outlet banking
    OutletService.prototype.createBanking = function (bankingObj, _oId) {
        var _bankingObj = JSON.stringify(bankingObj);
        return this.authhttp.post(this.config.api_base_url + this.config.outlet + 'banking/' + _oId, _bankingObj)
            .map(function (data) {
            data.json();
            return data.json();
        });
    };
    // update outlet banking
    OutletService.prototype.updateBanking = function (bankingObj, _oId, bankingId) {
        var _bankingObj = JSON.stringify(bankingObj);
        return this.authhttp.put(this.config.api_base_url + this.config.outlet + _oId + '/banking/' + bankingId, _bankingObj)
            .map(function (data) {
            data.json();
            return data.json();
        });
    };
    // create outlet mou
    OutletService.prototype.createMou = function () {
        return console.log("create outlet mou");
    };
    // update outlet mou
    OutletService.prototype.updateMou = function () {
        return console.log("update outlet mou");
    };
    // get mou version by id
    OutletService.prototype.getMouVersion = function () {
        return [
            { id: 1, name: '1.1' },
            { id: 2, name: '1.2' },
            { id: 3, name: '1.3' }
        ];
    };
    OutletService.prototype.getMouAnxrById = function (id) {
        return console.log("Anrx Id ---------- : " + id);
    };
    //get outlet types - master
    OutletService.prototype.getOutletTypes = function () {
        return this.authhttp.get(this.config.api_base_url + this.config.provider_url + 'types')
            .map(function (data) {
            data.json();
            return data.json();
        });
    };
    // get outlet bank detail based on ifsc
    OutletService.prototype.getIfscDetail = function (ifscCode) {
        return this.authhttp.get(this.config.api_base_url + this.config.provider_banking_ifsc + ifscCode)
            .map(function (data) {
            data.json();
            return data.json();
        });
    };
    // get outlet - mout types
    OutletService.prototype.getMoutTypes = function () {
        return this.authhttp.get(this.config.api_base_url + this.config.mou_type_master)
            .map(function (data) {
            data.json();
            return data.json();
        });
    };
    // get outlet annexures
    OutletService.prototype.getAnnexures = function () {
        return this.authhttp.get(this.config.api_base_url + this.config.mou_annexures)
            .map(function (data) {
            data.json();
            return data.json();
        });
    };
    return OutletService;
}());
OutletService = __decorate([
    core_1.Injectable(),
    __param(2, core_1.Inject(global_module_1.APP_CONFIG)),
    __metadata("design:paramtypes", [http_1.Http,
        angular2_jwt_1.AuthHttp,
        global_module_1.AppConfig])
], OutletService);
exports.OutletService = OutletService;
//# sourceMappingURL=outlet.service.js.map