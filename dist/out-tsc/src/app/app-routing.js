"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var auth_guard_1 = require("./guards/auth.guard");
var appRoutes = [
    { path: '', redirectTo: 'user', pathMatch: 'full' },
    { path: 'user', loadChildren: "./auth/auth.module#AuthModule" },
    { path: 'dashboard', canActivate: [auth_guard_1.AuthGuard], loadChildren: "./dashboard/dashboard.module#DashboardModule" },
    { path: 'login', redirectTo: "user", pathMatch: 'full' },
    { path: 'forgotpassword', redirectTo: "user/forgotpassword", pathMatch: 'full' },
    { path: 'changepassword', redirectTo: "user/changepassword", pathMatch: 'full' },
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app-routing.js.map