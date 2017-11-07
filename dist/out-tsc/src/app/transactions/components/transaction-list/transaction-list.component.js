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
var transaction_service_1 = require("./../../../services/transactions/transaction.service");
var TransactionListComponent = (function () {
    function TransactionListComponent(_alltransaction) {
        this._alltransaction = _alltransaction;
        this.rows = [];
        this.temp = [];
        this.isLimits = 10;
        this.allTransction = {};
        this.user = {};
    }
    TransactionListComponent.prototype.onExpandClick = function () {
        this.table.rowDetail.expandAllRows();
    };
    TransactionListComponent.prototype.ngOnInit = function () {
        // this.rows = [
        //  { "company": "98.4 Pharmacy G2 Block Market, Sarita Vihar", "service": "Pharmacy", "firstName": "Dr Anupam anupam.bakshi@gmail.com +91-9810012345", "comment": "Good" },
        //  ];
        this.getTransctionData();
    };
    TransactionListComponent.prototype.getTransctionData = function () {
        var _this = this;
        this._alltransaction.getAllTransactionList()
            .subscribe(function (data) {
            debugger;
            _this.rows = data.data;
            var el = _this.el.nativeElement;
            setTimeout(function () {
                el.click();
            });
        });
    };
    return TransactionListComponent;
}());
__decorate([
    core_1.ViewChild('myTable'),
    __metadata("design:type", Object)
], TransactionListComponent.prototype, "table", void 0);
__decorate([
    core_1.ViewChild('expandButton'),
    __metadata("design:type", core_1.ElementRef)
], TransactionListComponent.prototype, "el", void 0);
TransactionListComponent = __decorate([
    core_1.Component({
        selector: 'app-transaction-list',
        templateUrl: './transaction-list.component.html',
        styleUrls: ['./transaction-list.component.scss'],
        providers: [transaction_service_1.TransactionService],
    }),
    __metadata("design:paramtypes", [transaction_service_1.TransactionService])
], TransactionListComponent);
exports.TransactionListComponent = TransactionListComponent;
//# sourceMappingURL=transaction-list.component.js.map