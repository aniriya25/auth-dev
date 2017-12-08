import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateOfferComponent } from './components/create-offer/create-offer.component';

const routes: Routes = [
  {path:'', component:CreateOfferComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PackageRoutingModule { }
