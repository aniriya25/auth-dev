import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalModule } from './../global/global.module';

import { InvoicesRoutingModule } from './invoices-routing.module';
import { InvoicesListComponent } from './components/invoices-list/invoices-list.component';

@NgModule({
  imports: [
    CommonModule,
    InvoicesRoutingModule,
    GlobalModule
  ],
  declarations: [InvoicesListComponent]
})
export class InvoicesModule { }
