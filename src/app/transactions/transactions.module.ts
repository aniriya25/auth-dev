import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalModule } from './../global/global.module';
import { TransactionsRoutingModule } from './transactions-routing.module';
import { TransactionComponent } from './components/transaction/transaction.component';
@NgModule({
  imports: [
    CommonModule,
    TransactionsRoutingModule,
    GlobalModule
  ],
  declarations: [TransactionComponent]
})
export class TransactionsModule { }
