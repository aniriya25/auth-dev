"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var auth_routing_1 = require("./auth-routing");
var global_module_1 = require("./../global/global.module");
var common_1 = require("@angular/common");
var login_component_1 = require("./components/login/login.component");
var forgotpassword_component_1 = require("./components/forgotpassword/forgotpassword.component");
var changepassword_component_1 = require("./components/changepassword/changepassword.component");
var AuthModule = (function () {
    function AuthModule() {
    }
    return AuthModule;
}());
AuthModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            auth_routing_1.authrouting,
            global_module_1.GlobalModule
        ],
        declarations: [login_component_1.LoginComponent, forgotpassword_component_1.ForgotpasswordComponent, changepassword_component_1.ChangepasswordComponent]
    })
], AuthModule);
exports.AuthModule = AuthModule;
//# sourceMappingURL=auth.module.js.map