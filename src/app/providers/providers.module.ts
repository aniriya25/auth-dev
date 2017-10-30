import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalModule } from './../global/global.module';
import { providersRouting } from './providers-routing.module';
import { ImageUploadModule } from "angular2-image-upload";

//import { AddKycComponent } from "./components/add-kyc/add-kyc.component";
//import { AddOutletComponent } from "./components/add-outlet/add-outlet.component";
//import { CompanyPersonalInformationComponent } from "./components/company-personal-information/company-personal-information.component";
//import { LeadlistComponent } from "./components/lead/leadlist/leadlist.component";
import { AddleadComponent } from "./components/lead/addlead/addlead.component";
//import { OutletDignosticsComponent } from "./components/outlet-dignostics/outlet-dignostics.component";
//import { ProviderInfoComponent } from "./components/provider-info/provider-info.component";
import { ProvidersListComponent } from "./components/providers-list/providers-list.component";

import { AgmCoreModule } from '@agm/core';
import { ProviderasideComponent } from './components/provideraside/provideraside.component';
import { ProviderdetailsComponent } from './components/providerdetails/providerdetails.component';
import { AddeditproviderComponent } from './components/addeditprovider/addeditprovider.component';
import { ProviderbasicinfoComponent } from './components/providerbasicinfo/providerbasicinfo.component';
import { ProvidercontactComponent } from './components/providercontact/providercontact.component';
import { ProviderservicesComponent } from './components/providerservices/providerservices.component';
import { LocationComponent } from './components/location/location.component';
import { MousComponent } from './components/mous/mous.component';
import { BankingComponent } from './components/banking/banking.component';


@NgModule({
  imports: [
    CommonModule,
    GlobalModule,
    providersRouting,
     ImageUploadModule.forRoot(),
    AgmCoreModule.forRoot({
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
    AddleadComponent,
    //OutletDignosticsComponent,
    //ProviderInfoComponent,
    ProvidersListComponent,
    ProviderasideComponent,
    ProviderdetailsComponent,
    AddeditproviderComponent,
    ProviderbasicinfoComponent,
    ProvidercontactComponent,
    ProviderservicesComponent,
    LocationComponent,
    MousComponent,
    BankingComponent
  ]
})
export class ProvidersModule { }

