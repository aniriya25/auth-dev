import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardMenuComponent } from "./components/dashboard-menu/dashboard-menu.component";

const dashboardRoutes: Routes = [
    {path: '', component:DashboardMenuComponent , 
        children:[
            {path: 'profile' , loadChildren:"./../profile/profile.module#ProfileModule"},
            {path: 'home' , loadChildren:"./../home/home.module#HomeModule"},
            {path: 'outlet' , loadChildren:"./../outlet/outlet.module#OutletModule"},
            {path: 'transactions' , loadChildren:"./../transactions/transactions.module#TransactionsModule"},
            {path: 'providers' , loadChildren:"./../providers/providers.module#ProvidersModule"},
            {path: 'provider' , loadChildren:"./../outlet/outlet.module#OutletModule"},
            {path: 'invoices' , loadChildren:"./../invoices/invoices.module#InvoicesModule"},
            {path: 'package' , loadChildren:"./../package/package.module#PackageModule"}
            
        ]
    },
    {path: '**', redirectTo: 'home', pathMatch: 'full'},
]; 
export const dashboardrouting: ModuleWithProviders = RouterModule.forChild(dashboardRoutes);