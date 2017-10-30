import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { OutletComponent } from './components/outlet/outlet.component';
import { OutletListComponent } from './components/outlet-list/outlet-list.component';
import { OutletBasicInfoComponent } from './components/outlet-basic-info/outlet-basic-info.component';

const outletRoutes: Routes = [
  {path: 'outlets', component: OutletListComponent},
  {path: ':pid/outlets', component: OutletListComponent},
  {path: '', component: OutletListComponent,
    children: [
        {path: '', redirectTo: 'outlets', pathMatch: 'full'},
        {path: 'outlets', component: OutletListComponent},
        {path: 'outlets/:id', component: OutletListComponent}
    ]
  },
//   {path: '', component: OutletComponent,
//       children:[
//           {path:"", redirectTo:"outlet", pathMatch:"full"},
//           {path:"outlet", component: OutletComponent}
//       ]
//     },
    //{path:'add', component: OutletComponent},
    {path:':pid/outlet/add', component: OutletComponent},
    {path:':pid/outlet/:outletId', component: OutletComponent},
    {path: '**', redirectTo: 'outlets', pathMatch: 'full'},
    
];

// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule]
// })
// export class OutletRoutingModule { }

export const outletRouting: ModuleWithProviders = RouterModule.forChild(outletRoutes);

