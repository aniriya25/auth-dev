"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var outlet_component_1 = require("./components/outlet/outlet.component");
var outlet_list_component_1 = require("./components/outlet-list/outlet-list.component");
var outletRoutes = [
    { path: 'outlets', component: outlet_list_component_1.OutletListComponent },
    { path: ':pid/outlets', component: outlet_list_component_1.OutletListComponent },
    { path: '', component: outlet_list_component_1.OutletListComponent,
        children: [
            { path: '', redirectTo: 'outlets', pathMatch: 'full' },
            { path: 'outlets', component: outlet_list_component_1.OutletListComponent },
            { path: 'outlets/:id', component: outlet_list_component_1.OutletListComponent }
        ]
    },
    //   {path: '', component: OutletComponent,
    //       children:[
    //           {path:"", redirectTo:"outlet", pathMatch:"full"},
    //           {path:"outlet", component: OutletComponent}
    //       ]
    //     },
    //{path:'add', component: OutletComponent},
    { path: ':pid/outlet/add', component: outlet_component_1.OutletComponent },
    { path: ':pid/outlet/:outletId', component: outlet_component_1.OutletComponent },
    { path: '**', redirectTo: 'outlets', pathMatch: 'full' },
];
// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule]
// })
// export class OutletRoutingModule { }
exports.outletRouting = router_1.RouterModule.forChild(outletRoutes);
//# sourceMappingURL=outlet-routing.module.js.map