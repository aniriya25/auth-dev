"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var global_module_1 = require("./../global/global.module");
var profile_routing_1 = require("./profile-routing");
var forms_1 = require("@angular/forms");
var personalinformation_component_1 = require("./components/personalinformation/personalinformation.component");
var banking_component_1 = require("./components/banking/banking.component");
var biological_component_1 = require("./components/biological/biological.component");
var corporate_component_1 = require("./components/corporate/corporate.component");
var identity_component_1 = require("./components/identity/identity.component");
var social_component_1 = require("./components/social/social.component");
var communication_component_1 = require("./components/communication/communication.component");
var updateprofile_component_1 = require("./components/updateprofile/updateprofile.component");
var memberlist_component_1 = require("./../member/memberlist/memberlist.component");
var addmember_component_1 = require("./../member/addmember/addmember.component");
var ProfileModule = (function () {
    function ProfileModule() {
    }
    return ProfileModule;
}());
ProfileModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            global_module_1.GlobalModule,
            profile_routing_1.profileRouting,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule
        ],
        declarations: [
            personalinformation_component_1.PersonalinformationComponent,
            banking_component_1.BankingComponent,
            biological_component_1.BiologicalComponent,
            corporate_component_1.CorporateComponent,
            identity_component_1.IdentityComponent,
            social_component_1.SocialComponent,
            communication_component_1.CommunicationComponent,
            updateprofile_component_1.UpdateprofileComponent,
            memberlist_component_1.MemberlistComponent,
            addmember_component_1.AddmemberComponent
        ]
    })
], ProfileModule);
exports.ProfileModule = ProfileModule;
//# sourceMappingURL=profile.module.js.map