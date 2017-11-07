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
var ProviderService = (function () {
    function ProviderService(_http, authhttp, config) {
        this._http = _http;
        this.authhttp = authhttp;
        this.config = config;
        this.totalProvider = [
            {
                totalProvider: 3,
                newApproval: 4,
                inProgress: 5,
                approved: 6,
                pendingProvider: 10,
                newProvider: 5,
                data: [
                    { id: 1, brand: 'assets/images/dummy_logo.png', company: 'Escort Hospital', date: '12/07/2017', service: 'Pharmacy', firstName: 'Mahtab', lastName: 'Alam', comment: 'lorem ipsum', lattitude: 28.391492, lonitude: 77.306794 },
                    { id: 2, brand: 'max.jpg', company: 'Max Hospital', date: '12/07/2017', service: 'Pharmacy', firstName: 'Mahtab', lastName: 'Alam', comment: 'lorem ipsum', lattitude: 30.192387, lonitude: 74.946980 },
                    { id: 3, brand: 'holy_Family.jpg', company: 'Holy Family Hospital', date: '12/07/2017', service: 'Pharmacy', firstName: 'Mahtab', lastName: 'Alam', comment: 'lorem ipsum', lattitude: 42.727801, lonitude: -71.168323 },
                ]
            }
        ];
        this.newApproval = [
            {
                totalProvider: 3,
                newApproval: 4,
                inProgress: 5,
                approved: 6,
                pendingProvider: 10,
                newProvider: 5,
                data: [
                    { id: 1, brand: 'Bon.jpg', company: 'Bon Secours St. Francis Hospital', date: '12/07/2017', service: 'Pharmacy', firstName: 'Mahtab', lastName: 'Alam', comment: 'lorem ipsum' },
                    { id: 2, brand: 'Cannon.jpg', company: 'Cannon Memorial Hospital', date: '12/07/2017', service: 'Pharmacy', firstName: 'Mahtab', lastName: 'Alam', comment: 'lorem ipsum' },
                    { id: 3, brand: 'HCarolina.jpg', company: 'HCarolina Pines Regional Medical Center', date: '12/07/2017', service: 'Pharmacy', firstName: 'Mahtab', lastName: 'Alam', comment: 'lorem ipsum' },
                    { id: 4, brand: 'Carolinas.jpg', company: 'Carolinas Hospital System', date: '12/07/2017', service: 'Pharmacy', firstName: 'Mahtab', lastName: 'Alam', comment: 'lorem ipsum' },
                ]
            }
        ];
        this.inProgress = [
            {
                totalProvider: 3,
                newApproval: 4,
                inProgress: 5,
                approved: 6,
                pendingProvider: 10,
                newProvider: 5,
                data: [
                    { id: 1, brand: 'Carolinas.jpg', company: 'Carolinas Hospital System - Marion', date: '12/07/2017', service: 'Pharmacy', firstName: 'Mahtab', lastName: 'Alam', comment: 'lorem ipsum' },
                    { id: 2, brand: 'Chester.jpg', company: 'Chester Regional Medical Center', date: '12/07/2017', service: 'Pharmacy', firstName: 'Mahtab', lastName: 'Alam', comment: 'lorem ipsum' },
                    { id: 3, brand: 'Clarendon.jpg', company: 'Clarendon Memorial Hospital', date: '12/07/2017', service: 'Pharmacy', firstName: 'Mahtab', lastName: 'Alam', comment: 'lorem ipsum' },
                    { id: 4, brand: 'Coastal.jpg', company: 'Coastal Carolina Hospital', date: '12/07/2017', service: 'Pharmacy', firstName: 'Mahtab', lastName: 'Alam', comment: 'lorem ipsum' },
                    { id: 5, brand: 'Colleton.jpg', company: 'Colleton Medical Center', date: '12/07/2017', service: 'Pharmacy', firstName: 'Mahtab', lastName: 'Alam', comment: 'lorem ipsum' },
                ]
            }
        ];
        this.approved = [
            {
                totalProvider: 3,
                newApproval: 4,
                inProgress: 5,
                approved: 6,
                pendingProvider: 10,
                newProvider: 5,
                data: [
                    { id: 1, brand: 'Conway.jpg', company: 'Conway Medical Center', date: '12/07/2017', service: 'Pharmacy', firstName: 'Mahtab', lastName: 'Alam', comment: 'lorem ipsum' },
                    { id: 2, brand: 'East.jpg', company: 'East Cooper Medical Center', date: '12/07/2017', service: 'Pharmacy', firstName: 'Mahtab', lastName: 'Alam', comment: 'lorem ipsum' },
                    { id: 3, brand: 'Edgefield.jpg', company: 'Edgefield County Hospital', date: '12/07/2017', service: 'Pharmacy', firstName: 'Mahtab', lastName: 'Alam', comment: 'lorem ipsum' },
                    { id: 4, brand: 'Fairfield.jpg', company: 'Fairfield Memorial Hospital', date: '12/07/2017', service: 'Pharmacy', firstName: 'Mahtab', lastName: 'Alam', comment: 'lorem ipsum' },
                    { id: 5, brand: 'Carolinas.jpg', company: 'Georgetown Memorial Hospital', date: '12/07/2017', service: 'Pharmacy', firstName: 'Mahtab', lastName: 'Alam', comment: 'lorem ipsum' },
                    { id: 6, brand: 'Georgetown.jpg', company: 'Greer Memorial Hospital', date: '12/07/2017', service: 'Pharmacy', firstName: 'Mahtab', lastName: 'Alam', comment: 'lorem ipsum' },
                ]
            }
        ];
    }
    ProviderService.prototype.getAllProvider1 = function () {
        return this.totalProvider;
    };
    // get all provider
    ProviderService.prototype.getAllProvider = function () {
        return this.authhttp.get(this.config.api_base_url + this.config.provider_url)
            .map(function (data) {
            data.json();
            return data.json();
        });
    };
    // get provider by id
    ProviderService.prototype.getProviderById = function (id) {
        return this.authhttp.get(this.config.api_base_url + this.config.provider_url + id)
            .map(function (data) {
            data.json();
            return data.json();
        });
    };
    // create provider basic informtion
    ProviderService.prototype.createProviderBasicInfo = function (basicInfo) {
        var _basicInfo = JSON.stringify(basicInfo);
        return this.authhttp.post(this.config.api_base_url + this.config.provider_url, _basicInfo)
            .map(function (data) {
            data.json();
            return data.json();
        });
    };
    // update provider basic information
    ProviderService.prototype.updateProviderBasicInfo = function (basicInfo, id) {
        var _basicInfo = JSON.stringify(basicInfo);
        return this.authhttp.put(this.config.api_base_url + this.config.provider_url + id, _basicInfo)
            .map(function (data) {
            data.json();
            return data.json();
        });
    };
    // get all provider services - master list
    ProviderService.prototype.getAllProviderServices = function () {
        return this.authhttp.get(this.config.api_base_url + this.config.provider_master_services)
            .map(function (data) {
            data.json();
            return data.json();
        });
    };
    // provider - create signatory
    ProviderService.prototype.createSignatory = function (basicInfo, id) {
        var _signatory = JSON.stringify(basicInfo);
        return this.authhttp.post(this.config.api_base_url + this.config.provider_url + id + '/signatoryPerson', _signatory)
            .map(function (data) {
            data.json();
            return data.json();
        });
    };
    // provider - update Signatory
    ProviderService.prototype.updateSignatory = function (signatory, id) {
        var _signatory = JSON.stringify(signatory);
        return this.authhttp.put(this.config.api_base_url + this.config.provider_url + id + '/signatoryPerson', _signatory)
            .map(function (data) {
            data.json();
            return data.json();
        });
    };
    // provider - create Contact
    ProviderService.prototype.createContact = function (contact, id) {
        var _contact = JSON.stringify(contact);
        return this.authhttp.post(this.config.api_base_url + this.config.provider_url + id + '/contactPerson', _contact)
            .map(function (data) {
            data.json();
            return data.json();
        });
    };
    // provider - update contact
    ProviderService.prototype.updateContact = function (contact, id) {
        var _contact = JSON.stringify(contact);
        return this.authhttp.put(this.config.api_base_url + this.config.provider_url + id + '/contactPerson', _contact)
            .map(function (data) {
            data.json();
            return data.json();
        });
    };
    // provider - create banking
    ProviderService.prototype.createProviderBanking = function (banking, id) {
        var _banking = JSON.stringify(banking);
        return this.authhttp.post(this.config.api_base_url + this.config.provider_url2 + 'banking/' + id, _banking)
            .map(function (data) {
            data.json();
            return data.json();
        });
    };
    // provider - update bannking
    ProviderService.prototype.updateProviderBanking = function (banking, providerId, bankingId) {
        var _banking = JSON.stringify(banking);
        return this.authhttp.put(this.config.api_base_url + this.config.provider_url2 + providerId + '/banking/' + bankingId, _banking)
            .map(function (data) {
            data.json();
            return data.json();
        });
    };
    // provider - create services
    ProviderService.prototype.createServices = function (service, id) {
        var _service = JSON.stringify(service);
        return this.authhttp.post(this.config.api_base_url + this.config.provider_url + '/ServicesCategories', _service)
            .map(function (data) {
            data.json();
            return data.json();
        });
    };
    // provider - update services
    ProviderService.prototype.updateServices = function (service) {
        var _services = JSON.stringify(service);
        return this.authhttp.post(this.config.api_base_url + this.config.provider_url + '/ServicesCategories', _services)
            .map(function (data) {
            data.json();
            return data.json();
        });
    };
    // get all provider type  - master  list
    ProviderService.prototype.getProviderTypeList = function () {
        return this.authhttp.get(this.config.api_base_url + this.config.provider_url + 'types')
            .map(function (data) {
            data.json();
            return data.json();
        });
    };
    // provider - get ifsc details
    ProviderService.prototype.getIfscDetail = function (ifsc) {
        return this.authhttp.get(this.config.api_base_url + this.config.provider_banking_ifsc + ifsc)
            .map(function (data) {
            data.json();
            return data.json();
        });
    };
    // get mous type master
    ProviderService.prototype.getMouTypeMaster = function () {
        return this.authhttp.get(this.config.api_base_url + this.config.mou_type_master)
            .map(function (data) {
            data.json();
            return data.json();
        });
    };
    // get mous annexures master
    ProviderService.prototype.getMouAnnexures = function () {
        return this.authhttp.get(this.config.api_base_url + this.config.mou_annexures)
            .map(function (data) {
            data.json();
            return data.json();
        });
    };
    // provider - create provider mou
    ProviderService.prototype.createProviderMou = function (mou, providerId) {
        //return console.log(mou);
        var _mou = JSON.stringify(mou);
        return this.authhttp.post(this.config.api_base_url + this.config.provider_url + providerId + '/mous', _mou)
            .map(function (data) {
            data.json();
            return data.json();
        });
    };
    // provider - mou annexures
    ProviderService.prototype.getMouVersionList = function (providerId) {
        return this.authhttp.get(this.config.api_base_url + this.config.provider_url + providerId + '/mous')
            .map(function (data) {
            data.json();
            return data.json();
        });
    };
    // provider - mou annexures version by id
    ProviderService.prototype.getMouAnnxureById = function (providerId, mouId) {
        return this.authhttp.get(this.config.api_base_url + this.config.provider_url + providerId + '/mous/' + mouId)
            .map(function (data) {
            data.json();
            return data.json();
        });
    };
    // provider - update provider mou
    ProviderService.prototype.updateProviderMou = function (mou) {
        return console.log(mou);
    };
    ProviderService.prototype.providerType = function (name) {
        switch (name) {
            case 'all':
                return this.totalProvider;
            case 'newApproval':
                return this.newApproval;
            case 'inProgress':
                return this.inProgress;
            case 'approval':
                return this.approved;
        }
    };
    // get provider details
    ProviderService.prototype.getProviderDetails = function (id) {
        var rec = this.totalProvider[0].data;
        for (var i = 0; i < rec.length; i++) {
            if (rec[i].id == id) {
                return rec[i];
            }
        }
    };
    ProviderService.prototype.tesetGetVal = function (isFrmDisable) {
        this.isBasicFieldset = isFrmDisable;
        return this.isBasicFieldset;
    };
    return ProviderService;
}());
ProviderService = __decorate([
    core_1.Injectable(),
    __param(2, core_1.Inject(global_module_1.APP_CONFIG)),
    __metadata("design:paramtypes", [http_1.Http,
        angular2_jwt_1.AuthHttp,
        global_module_1.AppConfig])
], ProviderService);
exports.ProviderService = ProviderService;
//# sourceMappingURL=provider.service.js.map