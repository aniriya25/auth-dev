"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var global_module_1 = require("./../global/global.module");
var transactions_routing_module_1 = require("./transactions-routing.module");
var transaction_component_1 = require("./components/transaction/transaction.component");
var transaction_list_component_1 = require("./components/transaction-list/transaction-list.component");
var reject_component_1 = require("./components/reject/reject.component");
var TransactionsModule = (function () {
    function TransactionsModule() {
    }
    return TransactionsModule;
}());
TransactionsModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            transactions_routing_module_1.TransactionsRoutingModule,
            global_module_1.GlobalModule
        ],
        declarations: [transaction_component_1.TransactionComponent, transaction_list_component_1.TransactionListComponent, reject_component_1.RejectComponent]
    })
], TransactionsModule);
exports.TransactionsModule = TransactionsModule;
//# sourceMappingURL=transactions.module.js.map