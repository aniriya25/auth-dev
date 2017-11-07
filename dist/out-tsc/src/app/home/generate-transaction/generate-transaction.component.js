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
var forms_1 = require("@angular/forms");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var GenerateTransactionComponent = (function () {
    function GenerateTransactionComponent(fb, _route) {
        this.fb = fb;
        this._route = _route;
        this.user = [];
    }
    GenerateTransactionComponent.prototype.ngOnInit = function () {
        // this.form = this.fb.group({
        //   codeType:[null, Validators.required],
        //   cardNumber:[null, Validators.required]
        // })
    };
    GenerateTransactionComponent.prototype.onSubmit = function () {
        //console.log(this.form);
        console.log(this.form.value);
    };
    Object.defineProperty(GenerateTransactionComponent.prototype, "codeType", {
        get: function () {
            return this.form.get("codeType");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GenerateTransactionComponent.prototype, "cardNumber", {
        get: function () {
            return this.form.get("crdNo");
        },
        enumerable: true,
        configurable: true
    });
    GenerateTransactionComponent.prototype.getTransaction = function () {
        this._route.navigate(['dashboard/transactions/transaction'], { queryParams: { page: this.user.cardNo } });
    };
    return GenerateTransactionComponent;
}());
GenerateTransactionComponent = __decorate([
    core_1.Component({
        selector: 'app-generate-transaction',
        templateUrl: './generate-transaction.component.html',
        styleUrls: ['./generate-transaction.component.css']
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder,
        router_1.Router])
], GenerateTransactionComponent);
exports.GenerateTransactionComponent = GenerateTransactionComponent;
//# sourceMappingURL=generate-transaction.component.js.map