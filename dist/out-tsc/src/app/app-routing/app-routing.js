"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var appRoutes = [
    { path: '', redirectTo: 'user', pathMatch: 'full' },
    { path: 'user', loadChildren: "./auth/auth.module#AuthModule" },
    { path: 'dashboard', loadChildren: "./dashboard/dashboard.module#DashboardModule",
    },
    { path: 'login', redirectTo: "user", pathMatch: 'full' },
    { path: 'forgotpassword', redirectTo: "user/forgotpassword", pathMatch: 'full' }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app-routing.js.map