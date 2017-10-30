import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



import { PersonalinformationComponent } from "./components/personalinformation/personalinformation.component";
import { BankingComponent } from "./components/banking/banking.component";
import { BiologicalComponent } from "./components/biological/biological.component";
import { CorporateComponent } from "./components/corporate/corporate.component";
import { IdentityComponent } from "./components/identity/identity.component";
import { SocialComponent } from "./components/social/social.component";
import { CommunicationComponent } from "./components/communication/communication.component";
import { UpdateprofileComponent } from "./components/updateprofile/updateprofile.component";
import { MemberlistComponent } from "./../member/memberlist/memberlist.component";
import { AddmemberComponent } from "./../member/addmember/addmember.component";

const profileRoutes: Routes = [
    {path: '', component:UpdateprofileComponent,
        children:[
            {path:"", redirectTo:"personal", pathMatch:"full"},
            {path:"personal",component:PersonalinformationComponent},
            {path:"banking", component:BankingComponent},
            {path:"biological",component:BiologicalComponent},
            {path:"corporate",component:CorporateComponent},
            {path:"identity",component:IdentityComponent},
            //{path:"social",component:SocialComponent},
            {path:"contact_details",component:CommunicationComponent},
            {path: 'memberlist', component:MemberlistComponent},
            {path: 'addmember', component:AddmemberComponent}
        ]
    },
    {path: '**', redirectTo: 'personal', pathMatch: 'full'},
];
 
export const profileRouting: ModuleWithProviders = RouterModule.forChild(profileRoutes);