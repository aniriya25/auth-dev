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
var TransactionService = (function () {
    function TransactionService(_http, authhttp, config) {
        this._http = _http;
        this.authhttp = authhttp;
        this.config = config;
    }
    TransactionService.prototype.getTransaction = function (cardNumber) {
        return this.authhttp.get(this.config.api_base_url + this.config.transaction_url + cardNumber)
            .map(function (data) {
            data.json();
            return data.json();
        });
    };
    TransactionService.prototype.getCouponTransaction = function (couponNumber) {
        return this.authhttp.get(this.config.api_base_url + this.config.transaction_cupon_url + couponNumber)
            .map(function (data) {
            data.json();
            return data.json();
        });
    };
    TransactionService.prototype.updateTransaction = function (value) {
        return this.authhttp.post(this.config.api_base_url + this.config.cardDetails_update_url, value)
            .map(function (data) {
            data.json();
            return data.json();
        });
    };
    TransactionService.prototype.getTransactionList = function (id) {
        return this.authhttp.get(this.config.api_base_url + this.config.transaction_url + id)
            .map(function (data) {
            data.json();
            return data.json();
        });
    };
    TransactionService.prototype.getIdentity = function () {
        return this.authhttp.get(this.config.api_base_url + this.config.Identity_url)
            .map(function (data) {
            data.json();
            return data.json();
        });
    };
    TransactionService.prototype.getAllTransactionList = function () {
        return this.authhttp.get(this.config.api_base_url + this.config.transactionList_url)
            .map(function (data) {
            data.json();
            return data.json();
        });
    };
    return TransactionService;
}());
TransactionService = __decorate([
    core_1.Injectable(),
    __param(2, core_1.Inject(global_module_1.APP_CONFIG)),
    __metadata("design:paramtypes", [http_1.Http,
        angular2_jwt_1.AuthHttp,
        global_module_1.AppConfig])
], TransactionService);
exports.TransactionService = TransactionService;
//# sourceMappingURL=transaction.service.js.map