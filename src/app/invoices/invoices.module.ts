import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalModule } from './../global/global.module';

import { InvoicesRoutingModule } from './invoices-routing.module';
import { InvoicesListComponent } from './components/invoices-list/invoices-list.component';
import { InvoiceComponent } from './components/invoice/invoice.component';

@NgModule({
  imports: [
    CommonModule,
    InvoicesRoutingModule,
    GlobalModule
  ],
  declarations: [InvoicesListComponent, InvoiceComponent]
})
export class InvoicesModule { }
