import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalModule } from './../global/global.module';
import { TransactionsRoutingModule } from './transactions-routing.module';
import { TransactionComponent } from './components/transaction/transaction.component';
import { TransactionListComponent } from './components/transaction-list/transaction-list.component';
import { RejectComponent } from './components/reject/reject.component';
@NgModule({
  imports: [
    CommonModule,
    TransactionsRoutingModule,
    GlobalModule
  ],
  declarations: [TransactionComponent, TransactionListComponent, RejectComponent]
})
export class TransactionsModule { }
