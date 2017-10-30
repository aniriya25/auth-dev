import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalModule } from './../global/global.module';
import { HomeRoutingModule } from './home-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { OffersComponent } from "./offers/offers.component";
import { GenerateTransactionComponent } from './generate-transaction/generate-transaction.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartComponent } from './chart/chart.component';
import { OfferComponent } from './offer/offer.component';

import { ChartsModule } from 'ng2-charts/ng2-charts';


@NgModule({
  imports: [
    CommonModule,
    GlobalModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule
  ],
  declarations: [OffersComponent, GenerateTransactionComponent, DashboardComponent, ChartComponent, OfferComponent]
})
export class HomeModule { }
