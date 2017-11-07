"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var flex_layout_1 = require("@angular/flex-layout");
var ng2_slimscroll_1 = require("ng2-slimscroll");
var ngx_drop_1 = require("ngx-file-drop/lib/ngx-drop");
require("hammerjs");
var material_1 = require("@angular/material");
var ngx_datatable_1 = require("@swimlane/ngx-datatable");
var authhttp_module_1 = require("./authhttp/authhttp.module");
exports.APP_CONFIG = new core_1.InjectionToken('app.config');
var AppConfig = (function () {
    function AppConfig() {
    }
    return AppConfig;
}());
exports.AppConfig = AppConfig;
exports.APP_DI_CONFIG = {
    api_base_url: 'http://192.168.9.50/v2/apis/auth/',
    //api_base_url: 'https://www.h3u.com/v2/apis/auth/',
    //api_base_url: 'https://www.h3u.com/v2/apis/nerve/',
    // api_base_url: 'http://192.168.9.50/v2/apis/nerve/',
    //api_base_url: 'http://182.71.190.154/nerveapi/',
    login_url: "auth/login",
    nerve_token_key: "h3u_nerve_usertoken",
    profile_personal_info_url: "users/me/profile/personal",
    profile_communication_url: "users/me/profile/communication",
    profile_corporate_url: "users/me/profile/corporate",
    profile_biological_url: "users/me/profile/biological",
    profile_identity_url: "users/me/profile/identity",
    country_url: "masters/countries",
    profile_banking_url: "users/me/profile/banking",
    profile_bloodgroup_url: "masters/bloodgroups",
    profile_communication_type_url: "masters/ContactTypes",
    profile_member_list: 'members',
    profile_banking_account: 'masters/accounts',
    forgot_password_url: 'auth/password/reset',
    changepassword_url: 'auth/password/change',
    profile_roles_url: 'masters/Role',
    profile_managers_url: 'masters/Manager/',
    profile_branches_url: 'masters/Branches',
    profile_department_url: 'masters/Departments',
    profile_designation_url: 'masters/Designations',
    provider_url: 'Providers/',
    provider_url2: 'Provider/',
    provider_master_services: 'masters/servicecategories',
    provider_udpate_services: 'Providers/ProviderServicesCategories',
    provider_banking_ifsc: 'masters/banks/ifsc/',
    mou_type_master: 'masters/mouTypes',
    mou_annexures: 'masters/mouAnnexures',
    // profiles
    profile_personal_update_url: 'users/profile/personal',
    profile_corporate_update_url: 'users/me/profile/corporate',
    profile_biological_update_url: "users/profile/biological",
    profile_banking_update_url: "users/profile/banking",
    profile_branch_url: "masters/branches",
    profile_identity_update_url: "users/profile/identity",
    //outlets
    outletContact: 'ProviderOutletContacts/',
    outlet: 'Outlet/',
    //transaction
    transaction_url: 'products/',
    transaction_cupon_url: 'requests/',
    cardDetails_update_url: 'transactions',
    transactionList_url: 'me/transactions',
    // master
    services_url: "masters/servicecategories",
    Identity_url: "masters/IdentityTypes"
    //Mast
    // services_url:"masters/servicecategories"
};
var GlobalModule = (function () {
    function GlobalModule() {
    }
    return GlobalModule;
}());
GlobalModule = __decorate([
    core_1.NgModule({
        imports: [
            flex_layout_1.FlexLayoutModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            router_1.RouterModule,
            [material_1.MaterialModule, material_1.MdNativeDateModule],
            ngx_datatable_1.NgxDatatableModule,
            authhttp_module_1.AuthhttpModule,
            ng2_slimscroll_1.SlimScrollModule,
            forms_1.ReactiveFormsModule,
            ngx_drop_1.FileDropModule,
        ],
        declarations: [],
        exports: [
            flex_layout_1.FlexLayoutModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            router_1.RouterModule,
            material_1.MaterialModule,
            material_1.MdNativeDateModule,
            ngx_datatable_1.NgxDatatableModule,
            authhttp_module_1.AuthhttpModule,
            ng2_slimscroll_1.SlimScrollModule,
            forms_1.ReactiveFormsModule,
            ngx_drop_1.FileDropModule
        ],
        providers: [{ provide: exports.APP_CONFIG,
                useValue: exports.APP_DI_CONFIG
            }]
    })
], GlobalModule);
exports.GlobalModule = GlobalModule;
//# sourceMappingURL=global.module.js.map