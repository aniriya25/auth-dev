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
var outlet_routing_module_1 = require("./outlet-routing.module");
var forms_1 = require("@angular/forms");
var core_2 = require("@agm/core");
var outlet_component_1 = require("./components/outlet/outlet.component");
var outlet_basic_info_component_1 = require("./components/outlet-basic-info/outlet-basic-info.component");
var outlet_contact_component_1 = require("./components/outlet-contact/outlet-contact.component");
var outlet_infra_component_1 = require("./components/outlet-infra/outlet-infra.component");
var outlet_banking_component_1 = require("./components/outlet-banking/outlet-banking.component");
var outlet_mous_component_1 = require("./components/outlet-mous/outlet-mous.component");
var outlet_services_component_1 = require("./components/outlet-services/outlet-services.component");
var outlet_specialities_component_1 = require("./components/outlet-specialities/outlet-specialities.component");
var outlet_list_component_1 = require("./components/outlet-list/outlet-list.component");
var opd_component_1 = require("./components/subservices/opd/opd.component");
var OutletModule = (function () {
    function OutletModule() {
    }
    return OutletModule;
}());
OutletModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            global_module_1.GlobalModule,
            outlet_routing_module_1.outletRouting,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            core_2.AgmCoreModule.forRoot({
                apiKey: 'AIzaSyBz8-Ar_pP7bj6tWubNIAT6F1-DuJAX4Tc',
                libraries: ["places"],
                language: 'uk',
                region: 'IN'
            })
        ],
        declarations: [outlet_component_1.OutletComponent, outlet_basic_info_component_1.OutletBasicInfoComponent, outlet_contact_component_1.OutletContactComponent, outlet_infra_component_1.OutletInfraComponent, outlet_banking_component_1.OutletBankingComponent, outlet_mous_component_1.OutletMousComponent, outlet_services_component_1.OutletServicesComponent, outlet_specialities_component_1.OutletSpecialitiesComponent, outlet_list_component_1.OutletListComponent, opd_component_1.OpdComponent]
    })
], OutletModule);
exports.OutletModule = OutletModule;
//# sourceMappingURL=outlet.module.js.map