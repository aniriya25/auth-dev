"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var dashboardRoutes = [
    { path: '', component: dashboard_component_1.DashboardComponent }
];
//export const HomeRoutingModule: ModuleWithProviders = RouterModule.forChild(dashboardRoutes);
exports.HomeRoutingModule = router_1.RouterModule.forChild(dashboardRoutes);
//# sourceMappingURL=home-routing.module.js.map