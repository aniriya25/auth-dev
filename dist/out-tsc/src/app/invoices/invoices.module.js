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
var invoices_routing_module_1 = require("./invoices-routing.module");
var invoices_list_component_1 = require("./components/invoices-list/invoices-list.component");
var invoice_component_1 = require("./components/invoice/invoice.component");
var InvoicesModule = (function () {
    function InvoicesModule() {
    }
    return InvoicesModule;
}());
InvoicesModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            invoices_routing_module_1.InvoicesRoutingModule,
            global_module_1.GlobalModule
        ],
        declarations: [invoices_list_component_1.InvoicesListComponent, invoice_component_1.InvoiceComponent]
    })
], InvoicesModule);
exports.InvoicesModule = InvoicesModule;
//# sourceMappingURL=invoices.module.js.map