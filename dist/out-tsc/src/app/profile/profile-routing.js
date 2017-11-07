"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var personalinformation_component_1 = require("./components/personalinformation/personalinformation.component");
var banking_component_1 = require("./components/banking/banking.component");
var biological_component_1 = require("./components/biological/biological.component");
var corporate_component_1 = require("./components/corporate/corporate.component");
var identity_component_1 = require("./components/identity/identity.component");
var communication_component_1 = require("./components/communication/communication.component");
var updateprofile_component_1 = require("./components/updateprofile/updateprofile.component");
var memberlist_component_1 = require("./../member/memberlist/memberlist.component");
var addmember_component_1 = require("./../member/addmember/addmember.component");
var profileRoutes = [
    { path: '', component: updateprofile_component_1.UpdateprofileComponent,
        children: [
            { path: "", redirectTo: "personal", pathMatch: "full" },
            { path: "personal", component: personalinformation_component_1.PersonalinformationComponent },
            { path: "banking", component: banking_component_1.BankingComponent },
            { path: "biological", component: biological_component_1.BiologicalComponent },
            { path: "corporate", component: corporate_component_1.CorporateComponent },
            { path: "identity", component: identity_component_1.IdentityComponent },
            //{path:"social",component:SocialComponent},
            { path: "contact_details", component: communication_component_1.CommunicationComponent },
            { path: 'memberlist', component: memberlist_component_1.MemberlistComponent },
            { path: 'addmember', component: addmember_component_1.AddmemberComponent }
        ]
    },
    { path: '**', redirectTo: 'personal', pathMatch: 'full' },
];
exports.profileRouting = router_1.RouterModule.forChild(profileRoutes);
//# sourceMappingURL=profile-routing.js.map