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
var BankingComponent = (function () {
    //myFile: string;
    function BankingComponent() {
        this.bankingFx = new core_1.EventEmitter();
        this.ifscDetails = new core_1.EventEmitter();
        this.branches = [];
        this.accountTypes = [
            { value: 'Current', name: 'Current Account' },
            { value: 'Saving', name: 'Saving Account' }
        ];
    }
    BankingComponent.prototype.ngOnInit = function () {
        //this.myFile = 'assets/images/H3U_Logo_201x132.png';
    };
    BankingComponent.prototype.getUserAcc = function (ifscCode) {
        this.ifscDetails.emit(ifscCode);
    };
    BankingComponent.prototype.submitProviderBanking = function (banking) {
        // alert(banking['chequeUrl']);
        if (banking['chequeUrl'] == '' || banking['chequeUrl'] == undefined) {
            alert("select check url");
            return false;
        }
        banking['_type'] = false;
        this.bankingFx.emit(banking);
    };
    BankingComponent.prototype.edtFrm = function (banking) {
        banking['_type'] = true;
        this.bankingFx.emit(banking);
    };
    BankingComponent.prototype.imageUploaded = function (eve) {
        var checktarget = eve.src;
        var checkUrl = checktarget.substring(checktarget.indexOf(",") + 1);
        this.bankingUser['chequeUrl'] = checkUrl;
        this.cancelChequeImg = eve.src;
        console.log(eve.src);
    };
    BankingComponent.prototype.removeImg = function () {
        this.cancelChequeImg = '';
        this.bankingUser['chequeUrl'] = this.cancelChequeImg;
    };
    return BankingComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], BankingComponent.prototype, "bankingFx", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], BankingComponent.prototype, "ifscDetails", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], BankingComponent.prototype, "bankingUser", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], BankingComponent.prototype, "branches", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], BankingComponent.prototype, "isBankingActiveForm", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], BankingComponent.prototype, "isBankFormOverlay", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], BankingComponent.prototype, "isBankingBtn", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], BankingComponent.prototype, "isBankingFieldset", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], BankingComponent.prototype, "bankingBtn", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], BankingComponent.prototype, "bankingProgress", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], BankingComponent.prototype, "cancelChequeImg", void 0);
BankingComponent = __decorate([
    core_1.Component({
        selector: 'app-banking',
        templateUrl: './banking.component.html',
        styleUrls: ['./banking.component.css']
    }),
    __metadata("design:paramtypes", [])
], BankingComponent);
exports.BankingComponent = BankingComponent;
//# sourceMappingURL=banking.component.js.map