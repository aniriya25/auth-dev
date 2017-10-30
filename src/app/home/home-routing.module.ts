import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from "./dashboard/dashboard.component";

const dashboardRoutes: Routes = [
  {path:'',  component:DashboardComponent}
];


//export const HomeRoutingModule: ModuleWithProviders = RouterModule.forChild(dashboardRoutes);
export const HomeRoutingModule: ModuleWithProviders = RouterModule.forChild(dashboardRoutes);
