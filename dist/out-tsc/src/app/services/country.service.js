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
var global_module_1 = require("./../global/global.module");
require("rxjs/add/operator/map");
var angular2_jwt_1 = require("angular2-jwt");
var CountryService = (function () {
    function CountryService(authhttp, config) {
        this.authhttp = authhttp;
        this.config = config;
    }
    CountryService.prototype.getCountries = function () {
        return this.authhttp.get(this.config.api_base_url + this.config.country_url)
            .map(function (data) {
            data.json();
            return data.json();
        });
    };
    CountryService.prototype.getStates = function (countryId) {
        // console.log(this.config.api_base_url+this.config.country_url+"/"+countryId+"states");
        return this.authhttp.get(this.config.api_base_url + this.config.country_url + "/" + countryId + "/states")
            .map(function (data) {
            data.json();
            return data.json();
        });
        // return [
        //   {id: 1, countryid: 1, name: 'Arizona'},
        //   {id: 2, countryid: 1, name: 'LasVegas'},
        //   {id: 3, countryid: 2, name: 'Goa'},
        //   {id: 4, countryid: 3, name: 'Tasmania'}
        // ]
    };
    CountryService.prototype.getCities = function () {
        return [
            { id: 1, stateid: 1, name: 'Mesa' },
            { id: 2, stateid: 1, name: 'Sedona' },
            { id: 3, stateid: 2, name: 'Reno' },
            { id: 4, stateid: 3, name: 'Mormugao' },
            { id: 5, stateid: 4, name: 'New Norfolk' }
        ];
    };
    return CountryService;
}());
CountryService = __decorate([
    core_1.Injectable(),
    __param(1, core_1.Inject(global_module_1.APP_CONFIG)),
    __metadata("design:paramtypes", [angular2_jwt_1.AuthHttp,
        global_module_1.AppConfig])
], CountryService);
exports.CountryService = CountryService;
//# sourceMappingURL=country.service.js.map