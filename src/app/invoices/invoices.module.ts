import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalModule } from './../global/global.module';

import { InvoicesRoutingModule } from './invoices-routing.module';
import { InvoicesListComponent } from './components/invoices-list/invoices-list.component';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { InvoiceSummaryComponent } from './components/invoice-summary/invoice-summary.component';
import { InvoiceValidateComponent } from './components/invoice-validate/invoice-validate.component';

@NgModule({
  imports: [
    CommonModule,
    InvoicesRoutingModule,
    GlobalModule
  ],
  declarations: [InvoicesListComponent, InvoiceComponent, InvoiceSummaryComponent, InvoiceValidateComponent]
})
export class InvoicesModule { }
