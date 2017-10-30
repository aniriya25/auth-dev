import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalModule } from './../global/global.module';
import { outletRouting } from './outlet-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AgmCoreModule } from '@agm/core';

import { OutletComponent } from './components/outlet/outlet.component';
import { OutletBasicInfoComponent } from './components/outlet-basic-info/outlet-basic-info.component';
import { OutletContactComponent } from './components/outlet-contact/outlet-contact.component';
import { OutletInfraComponent } from './components/outlet-infra/outlet-infra.component';
import { OutletBankingComponent } from './components/outlet-banking/outlet-banking.component';
import { OutletMousComponent } from './components/outlet-mous/outlet-mous.component';
import { OutletServicesComponent } from './components/outlet-services/outlet-services.component';
import { OutletSpecialitiesComponent } from './components/outlet-specialities/outlet-specialities.component';
import { OutletListComponent } from './components/outlet-list/outlet-list.component';
import { OpdComponent } from './components/subservices/opd/opd.component';


@NgModule({
  imports: [
    CommonModule,
    GlobalModule,
    outletRouting,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBz8-Ar_pP7bj6tWubNIAT6F1-DuJAX4Tc',
      libraries: ["places"],
      language: 'uk',
      region: 'IN'
    })
  ],
  declarations: [OutletComponent, OutletBasicInfoComponent, OutletContactComponent, OutletInfraComponent, OutletBankingComponent, OutletMousComponent, OutletServicesComponent, OutletSpecialitiesComponent, OutletListComponent, OpdComponent]
})
export class OutletModule { }

