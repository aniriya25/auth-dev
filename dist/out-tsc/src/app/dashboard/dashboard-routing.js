"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var dashboard_menu_component_1 = require("./components/dashboard-menu/dashboard-menu.component");
var dashboardRoutes = [
    { path: '', component: dashboard_menu_component_1.DashboardMenuComponent,
        children: [
            { path: 'profile', loadChildren: "./../profile/profile.module#ProfileModule" },
            { path: 'home', loadChildren: "./../home/home.module#HomeModule" },
            { path: 'outlet', loadChildren: "./../outlet/outlet.module#OutletModule" },
            { path: 'transactions', loadChildren: "./../transactions/transactions.module#TransactionsModule" },
            { path: 'providers', loadChildren: "./../providers/providers.module#ProvidersModule" },
            { path: 'provider', loadChildren: "./../outlet/outlet.module#OutletModule" },
            { path: 'invoices', loadChildren: "./../invoices/invoices.module#InvoicesModule" }
        ]
    },
    { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
exports.dashboardrouting = router_1.RouterModule.forChild(dashboardRoutes);
//# sourceMappingURL=dashboard-routing.js.map