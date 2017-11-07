"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var login_component_1 = require("./components/login/login.component");
var forgotpassword_component_1 = require("./components/forgotpassword/forgotpassword.component");
var changepassword_component_1 = require("./components/changepassword/changepassword.component");
var authRoutes = [
    { path: "login", component: login_component_1.LoginComponent },
    { path: "forgotpassword", component: forgotpassword_component_1.ForgotpasswordComponent },
    { path: "changepassword/:token", component: changepassword_component_1.ChangepasswordComponent },
    { path: '**', redirectTo: 'login', pathMatch: 'full' },
];
exports.authrouting = router_1.RouterModule.forChild(authRoutes);
//# sourceMappingURL=auth-routing.js.map