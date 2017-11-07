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
var providers_routing_module_1 = require("./providers-routing.module");
var angular2_image_upload_1 = require("angular2-image-upload");
//import { AddKycComponent } from "./components/add-kyc/add-kyc.component";
//import { AddOutletComponent } from "./components/add-outlet/add-outlet.component";
//import { CompanyPersonalInformationComponent } from "./components/company-personal-information/company-personal-information.component";
//import { LeadlistComponent } from "./components/lead/leadlist/leadlist.component";
var addlead_component_1 = require("./components/lead/addlead/addlead.component");
//import { OutletDignosticsComponent } from "./components/outlet-dignostics/outlet-dignostics.component";
//import { ProviderInfoComponent } from "./components/provider-info/provider-info.component";
var providers_list_component_1 = require("./components/providers-list/providers-list.component");
var core_2 = require("@agm/core");
var provideraside_component_1 = require("./components/provideraside/provideraside.component");
var providerdetails_component_1 = require("./components/providerdetails/providerdetails.component");
var addeditprovider_component_1 = require("./components/addeditprovider/addeditprovider.component");
var providerbasicinfo_component_1 = require("./components/providerbasicinfo/providerbasicinfo.component");
var providercontact_component_1 = require("./components/providercontact/providercontact.component");
var providerservices_component_1 = require("./components/providerservices/providerservices.component");
var location_component_1 = require("./components/location/location.component");
var mous_component_1 = require("./components/mous/mous.component");
var banking_component_1 = require("./components/banking/banking.component");
var ProvidersModule = (function () {
    function ProvidersModule() {
    }
    return ProvidersModule;
}());
ProvidersModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            global_module_1.GlobalModule,
            providers_routing_module_1.providersRouting,
            angular2_image_upload_1.ImageUploadModule.forRoot(),
            core_2.AgmCoreModule.forRoot({
                apiKey: 'AIzaSyBz8-Ar_pP7bj6tWubNIAT6F1-DuJAX4Tc',
                libraries: ["places"],
                language: 'uk',
                region: 'IN'
            })
        ],
        declarations: [
            //AddKycComponent,
            //AddOutletComponent,
            //CompanyPersonalInformationComponent,
            //LeadlistComponent,
            addlead_component_1.AddleadComponent,
            //OutletDignosticsComponent,
            //ProviderInfoComponent,
            providers_list_component_1.ProvidersListComponent,
            provideraside_component_1.ProviderasideComponent,
            providerdetails_component_1.ProviderdetailsComponent,
            addeditprovider_component_1.AddeditproviderComponent,
            providerbasicinfo_component_1.ProviderbasicinfoComponent,
            providercontact_component_1.ProvidercontactComponent,
            providerservices_component_1.ProviderservicesComponent,
            location_component_1.LocationComponent,
            mous_component_1.MousComponent,
            banking_component_1.BankingComponent
        ]
    })
], ProvidersModule);
exports.ProvidersModule = ProvidersModule;
//# sourceMappingURL=providers.module.js.map