import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransactionComponent } from './components/transaction/transaction.component';
import { TransactionListComponent } from './components/transaction-list/transaction-list.component';
import { RejectComponent } from './components/reject/reject.component';
import { ReviewComponent } from './components/review/review.component';
import { SummaryComponent } from './components/summary/summary.component';

const routes: Routes = [
  {path:'transaction', component:TransactionComponent},
  {path:'', component:TransactionListComponent},
  {path:'reject', component:RejectComponent},
  {path:'review', component:ReviewComponent},    
  {path:'summary', component:SummaryComponent} 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionsRoutingModule { }
