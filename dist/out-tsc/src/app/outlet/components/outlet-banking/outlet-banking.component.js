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
var OutletBankingComponent = (function () {
    function OutletBankingComponent() {
        this.outletBankingFx = new core_1.EventEmitter();
        this.ifscFx = new core_1.EventEmitter();
        this.outletBankingInput = {};
        this.accountTypes = [];
        this.branches = [];
    }
    OutletBankingComponent.prototype.ngOnInit = function () {
        this.accountTypes = [
            { name: 'Saving' },
            { name: 'Current' }
        ];
    };
    OutletBankingComponent.prototype.submitFrm = function (bankObj) {
        bankObj['_type'] = 'submitFrm';
        this.outletBankingFx.emit(bankObj);
    };
    OutletBankingComponent.prototype.edtFrm = function () {
        this.outletBankingFx.emit({ _type: 'editFrm' });
    };
    OutletBankingComponent.prototype.getIfscDetails = function (ifscCode) {
        this.ifscFx.emit(ifscCode);
    };
    OutletBankingComponent.prototype.imageUploaded = function (eve) {
        var checktarget = eve.src;
        var checkUrl = checktarget.substring(checktarget.indexOf(",") + 1);
        this.outletBankingInput['chequeUrl'] = checkUrl;
    };
    return OutletBankingComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], OutletBankingComponent.prototype, "outletBankingFx", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], OutletBankingComponent.prototype, "ifscFx", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], OutletBankingComponent.prototype, "isOutletBankingOverlay", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], OutletBankingComponent.prototype, "isOutletBankingFieldset", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], OutletBankingComponent.prototype, "isOutletBankingBtn", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], OutletBankingComponent.prototype, "bankingSubmitBtn", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], OutletBankingComponent.prototype, "outletBankingInput", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], OutletBankingComponent.prototype, "branches", void 0);
OutletBankingComponent = __decorate([
    core_1.Component({
        selector: 'app-outlet-banking',
        templateUrl: './outlet-banking.component.html',
        styleUrls: ['./outlet-banking.component.css']
    }),
    __metadata("design:paramtypes", [])
], OutletBankingComponent);
exports.OutletBankingComponent = OutletBankingComponent;
//# sourceMappingURL=outlet-banking.component.js.map