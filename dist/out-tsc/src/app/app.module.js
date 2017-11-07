"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var animations_1 = require("@angular/platform-browser/animations");
var core_1 = require("@angular/core");
var global_module_1 = require("./global/global.module");
var app_routing_1 = require("./app-routing");
var auth_guard_1 = require("./guards/auth.guard");
var authentication_service_1 = require("./services/auth/authentication.service");
var material_1 = require("@angular/material");
// import { fakeBackendProvider } from './_helpers/fake-backend';
// import { MockBackend, MockConnection } from '@angular/http/testing';
// import { BaseRequestOptions } from '@angular/http';
var app_component_1 = require("./app.component");
// import { LoginComponent } from './login/login.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
// import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
// import { UpdateprofileComponent } from './updateprofile/updateprofile.component';
// import { AddmemberComponent } from './member/addmember/addmember.component';
// import { MemberlistComponent } from './member/memberlist/memberlist.component';
// import { SidebarmenuComponent } from './sidebarmenu/sidebarmenu.component';
// import { AddmemberbulkComponent } from './member/addmemberbulk/addmemberbulk.component';
// import { BulkuploadComponent } from './bulkupload/bulkupload.component';
// import {FileUploadModule} from "ng2-file-upload";
// import { AddleadComponent } from './lead/addlead/addlead.component';
// import { LeadlistComponent } from './lead/leadlist/leadlist.component';
// import { ChangepasswordComponent } from './changepassword/changepassword.component';
// import { PersonalinformationComponent } from './profile/personalinformation/personalinformation.component';
// import { CorporateComponent } from './profile/corporate/corporate.component';
// import { BiologicalComponent } from './profile/biological/biological.component';
// import { IdentityComponent } from './profile/identity/identity.component';
// import { BankingComponent } from './profile/banking/banking.component';
// import { SocialComponent } from './profile/social/social.component';
// import { CommunicationComponent } from './profile/communication/communication.component';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent
            // LoginComponent,
            // DashboardComponent,
            // ForgotpasswordComponent,
            // UpdateprofileComponent,
            // AddmemberComponent,
            // MemberlistComponent,
            // SidebarmenuComponent,
            // AddmemberbulkComponent,
            // BulkuploadComponent,
            // AddleadComponent,
            // LeadlistComponent,
            // ChangepasswordComponent,
            // PersonalinformationComponent,
            // CorporateComponent,
            // BiologicalComponent,
            // IdentityComponent,
            // BankingComponent,
            // SocialComponent,
            // CommunicationComponent
        ],
        imports: [
            //FileUploadModule,
            app_routing_1.routing,
            global_module_1.GlobalModule,
            animations_1.BrowserAnimationsModule,
            platform_browser_1.BrowserModule,
            material_1.MaterialModule,
        ],
        providers: [auth_guard_1.AuthGuard, authentication_service_1.AuthenticationService,
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map