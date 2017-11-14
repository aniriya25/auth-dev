import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalModule } from './../global/global.module';

import { PackageRoutingModule } from './package-routing.module';
import { CreateOfferComponent } from './components/create-offer/create-offer.component';

@NgModule({
  imports: [
    CommonModule,
    PackageRoutingModule,
    GlobalModule
  ],
  declarations: [CreateOfferComponent]
})
export class PackageModule { }
