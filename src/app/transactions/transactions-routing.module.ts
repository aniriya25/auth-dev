import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransactionComponent } from './components/transaction/transaction.component';
import { TransactionListComponent } from './components/transaction-list/transaction-list.component';
import { RejectComponent } from './components/reject/reject.component';

const routes: Routes = [
  {path:'transaction', component:TransactionComponent},
  {path:'transaction-list', component:TransactionListComponent},
  {path:'reject', component:RejectComponent}    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionsRoutingModule { }
