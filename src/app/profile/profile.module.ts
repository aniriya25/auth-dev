import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalModule } from './../global/global.module';
import { profileRouting } from './profile-routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
 

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

@NgModule({
  imports: [
    CommonModule,
    GlobalModule,
    profileRouting,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    PersonalinformationComponent,
    BankingComponent,
    BiologicalComponent,
    CorporateComponent,
    IdentityComponent,
    SocialComponent,
    CommunicationComponent,
    UpdateprofileComponent,
    MemberlistComponent,
    AddmemberComponent
  ]
})
export class ProfileModule { }
