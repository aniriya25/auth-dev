
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import { AddKycComponent } from "./components/add-kyc/add-kyc.component";
//import { AddOutletComponent } from "./components/add-outlet/add-outlet.component";
//import { CompanyPersonalInformationComponent } from "./components/company-personal-information/company-personal-information.component";
//import { LeadlistComponent } from "./components/lead/leadlist/leadlist.component";
import { AddleadComponent } from "./components/lead/addlead/addlead.component";
//import { OutletDignosticsComponent } from "./components/outlet-dignostics/outlet-dignostics.component";
//import { ProviderInfoComponent } from "./components/provider-info/provider-info.component";
import { ProvidersListComponent } from "./components/providers-list/providers-list.component";
import { ProviderasideComponent } from './components/provideraside/provideraside.component';
import { ProviderdetailsComponent } from './components/providerdetails/providerdetails.component';
import { AddeditproviderComponent } from './components/addeditprovider/addeditprovider.component';

const providersRoutes: Routes = [
    {path: '', component: ProvidersListComponent,
        children:[
            {path:"", redirectTo:"providerlist", pathMatch:"full"},
            {path:"providerlist", component: ProvidersListComponent}
        ]
    },
    //{path:"addkyc", component: AddKycComponent},
    //{path:"addoutlet", component: AddOutletComponent},
    //{path:"companyinfo", component: CompanyPersonalInformationComponent},
    //{path:"companyinfo/:id", component: CompanyPersonalInformationComponent},
    //{path:"leadlist", component: LeadlistComponent},
    {path:"addlead", component: AddleadComponent},
    {path:'', component: ProviderdetailsComponent,
        children: [
            {path:'', redirectTo:"addproviderprofile", pathMatch:"full"},
            {path:"provider", component: AddeditproviderComponent},
            {path:"provider/:id", component: AddeditproviderComponent}
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
    {path: '**', redirectTo: 'addlead', pathMatch: 'full'},
];

export const providersRouting: ModuleWithProviders = RouterModule.forChild(providersRoutes);



