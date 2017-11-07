"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
//import { AddKycComponent } from "./components/add-kyc/add-kyc.component";
//import { AddOutletComponent } from "./components/add-outlet/add-outlet.component";
//import { CompanyPersonalInformationComponent } from "./components/company-personal-information/company-personal-information.component";
//import { LeadlistComponent } from "./components/lead/leadlist/leadlist.component";
var addlead_component_1 = require("./components/lead/addlead/addlead.component");
//import { OutletDignosticsComponent } from "./components/outlet-dignostics/outlet-dignostics.component";
//import { ProviderInfoComponent } from "./components/provider-info/provider-info.component";
var providers_list_component_1 = require("./components/providers-list/providers-list.component");
var providerdetails_component_1 = require("./components/providerdetails/providerdetails.component");
var addeditprovider_component_1 = require("./components/addeditprovider/addeditprovider.component");
var providersRoutes = [
    { path: '', component: providers_list_component_1.ProvidersListComponent,
        children: [
            { path: "", redirectTo: "providerlist", pathMatch: "full" },
            { path: "providerlist", component: providers_list_component_1.ProvidersListComponent }
        ]
    },
    //{path:"addkyc", component: AddKycComponent},
    //{path:"addoutlet", component: AddOutletComponent},
    //{path:"companyinfo", component: CompanyPersonalInformationComponent},
    //{path:"companyinfo/:id", component: CompanyPersonalInformationComponent},
    //{path:"leadlist", component: LeadlistComponent},
    { path: "addlead", component: addlead_component_1.AddleadComponent },
    { path: '', component: providerdetails_component_1.ProviderdetailsComponent,
        children: [
            { path: '', redirectTo: "addproviderprofile", pathMatch: "full" },
            { path: "provider", component: addeditprovider_component_1.AddeditproviderComponent },
            { path: "provider/:id", component: addeditprovider_component_1.AddeditproviderComponent }
        ]
    },
    //{path:"outletdiagnostic", component: OutletDignosticsComponent},
    //{path:"kycandmou", component: ProviderInfoComponent},
    //{path:"addedit", component: ProviderasideComponent},
    //{path:"addprovider", component: ProviderasideComponent,
    //children: [
    //  {path:"", redirectTo:"companyinfo", pathMatch:"full"},
    //{path:"companyinfo", component: CompanyPersonalInformationComponent},
    //{path:"companyinfo/:id", component: CompanyPersonalInformationComponent},
    //{path:"kycandmou", component: ProviderInfoComponent},
    //{path:"addoutlet", component: AddOutletComponent},
    //]
    //},
    { path: '**', redirectTo: 'addlead', pathMatch: 'full' },
];
exports.providersRouting = router_1.RouterModule.forChild(providersRoutes);
//# sourceMappingURL=providers-routing.module.js.map