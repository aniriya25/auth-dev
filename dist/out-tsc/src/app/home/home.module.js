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
var home_routing_module_1 = require("./home-routing.module");
var forms_1 = require("@angular/forms");
var offers_component_1 = require("./offers/offers.component");
var generate_transaction_component_1 = require("./generate-transaction/generate-transaction.component");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var chart_component_1 = require("./chart/chart.component");
var offer_component_1 = require("./offer/offer.component");
var ng2_charts_1 = require("ng2-charts/ng2-charts");
var HomeModule = (function () {
    function HomeModule() {
    }
    return HomeModule;
}());
HomeModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            global_module_1.GlobalModule,
            home_routing_module_1.HomeRoutingModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            ng2_charts_1.ChartsModule
        ],
        declarations: [offers_component_1.OffersComponent, generate_transaction_component_1.GenerateTransactionComponent, dashboard_component_1.DashboardComponent, chart_component_1.ChartComponent, offer_component_1.OfferComponent]
    })
], HomeModule);
exports.HomeModule = HomeModule;
//# sourceMappingURL=home.module.js.map