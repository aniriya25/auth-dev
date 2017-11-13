import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalModule } from './../global/global.module';
import { TransactionsRoutingModule } from './transactions-routing.module';
import { TransactionComponent } from './components/transaction/transaction.component';
import { TransactionListComponent } from './components/transaction-list/transaction-list.component';
import { RejectComponent } from './components/reject/reject.component';
import { ReviewComponent } from './components/review/review.component';
import { SummaryComponent } from './components/summary/summary.component';
// const swal = require('sweetalert2')

@NgModule({
  imports: [
    CommonModule,
    TransactionsRoutingModule,
    GlobalModule
  ],
  declarations: [TransactionComponent, TransactionListComponent, RejectComponent, ReviewComponent, SummaryComponent]
})
export class TransactionsModule { }
