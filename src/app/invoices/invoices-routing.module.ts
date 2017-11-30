import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvoicesListComponent } from './components/invoices-list/invoices-list.component';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { InvoiceSummaryComponent } from './components/invoice-summary/invoice-summary.component';
import { InvoiceValidateComponent } from './components/invoice-validate/invoice-validate.component';

const routes: Routes = [

  {path:"invoices-list", component:InvoicesListComponent},
  {path:"invoice", component:InvoiceComponent},
  {path:"invoice-summary", component:InvoiceSummaryComponent},
  {path:"invoice-validate", component:InvoiceValidateComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoicesRoutingModule { }
