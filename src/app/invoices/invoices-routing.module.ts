import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvoicesListComponent } from './components/invoices-list/invoices-list.component';
import { InvoiceComponent } from './components/invoice/invoice.component';
const routes: Routes = [

  {path:"invoices-list", component:InvoicesListComponent},
  {path:"invoice", component:InvoiceComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoicesRoutingModule { }
