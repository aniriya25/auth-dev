import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalModule } from "./../global/global.module";
import { dashboardrouting } from './dashboard-routing';

import { DashboardMenuComponent } from './components/dashboard-menu/dashboard-menu.component';

@NgModule({
  imports: [
    dashboardrouting,
    CommonModule,
    GlobalModule
  ],
  declarations: [DashboardMenuComponent],
  bootstrap:[DashboardMenuComponent]
})
export class DashboardModule { }
