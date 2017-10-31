import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './../guards/auth.guard';
import { AuthenticationService } from './../services/auth/authentication.service';


const appRoutes: Routes = [
   {path: '', redirectTo: 'user', pathMatch: 'full'},
   {path: 'user', loadChildren: "./auth/auth.module#AuthModule"},
   {path: 'dashboard', loadChildren:"./dashboard/dashboard.module#DashboardModule",
   //canActivate:[AuthGuard]
},
   {path: 'login' , redirectTo:"user" , pathMatch:'full'},
   {path: 'forgotpassword', redirectTo:"user/forgotpassword", pathMatch:'full'}
]
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);